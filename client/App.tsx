import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Quattrocento_700Bold } from '@expo-google-fonts/quattrocento';
import { FanwoodText_400Regular } from '@expo-google-fonts/fanwood-text';
import { Subscription } from '@unimodules/core';
import * as ApiService from './services/ApiService';
import Home from './screens/Home/Home';
import AddPlant from './screens/AddPlant/AddPlant';
import GreenhouseStackNavigation from './screens/GreenhouseStackNavigation/GreenhouseStackNavigation';

interface ITabBarProps {
  focused: boolean,
  color: string,
  size: number
}

export default function App() {
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const Tab = createBottomTabNavigator();
  interface userPlantProperties {
    name: string,
      common_name: string,
      scientific_name: string,
      origin: string,
      water_days: number,
      next_water: Date,
      light: string,
      humidity: string,
      temperature: {
        max: number,
        min: number
      }
      feed: string,
      repot: string,
      pets: string,
      difficulty: number,
      common_problems: Array<{
        symptom: string,
        cause: string
      }>
  }

  const [userPlants, setUserPlants] = useState<userPlantProperties[]>([]);
  const [needsWatering, setNeedsWatering] = useState(0);
  const [notify, setNotify] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState<boolean>(false);
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  const checkSchedule = (plants: userPlantProperties[]) => {
    const filtered = plants.filter((plant: userPlantProperties) => {
      const nextWater = moment(plant.next_water).add(1, 'days').toISOString();
      const today = moment().toISOString();
      return moment(nextWater).isSameOrBefore(today);
    });
    return filtered.length;
  };


  useEffect(() => {
    ApiService.getUserPlants().then((userPlants: userPlantProperties[]) => setUserPlants(userPlants));
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification: any) => {
        setNotification(notification);
      },
    );

    // // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(
    //   (response) => {
    //     // console.log(response);
    //   },
    // );

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current,
        );
      }

      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  useEffect(() => {
    const newNeedsWatering = checkSchedule(userPlants);
    if (newNeedsWatering > needsWatering) {
      setNeedsWatering(newNeedsWatering);
      setNotify(true);
    } else {
      setNeedsWatering(newNeedsWatering);
      setNotify(false);
    }
  }, [userPlants]);

  useEffect(() => {
    if (notify) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Time to water your plants',
          body: 'Plants need love too',
        },
        trigger: null,
      });
      setNotify(false);
    }
  }, [notify]);

  const [fontsLoaded] = useFonts({
    FanwoodText_400Regular,
    Quattrocento_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: ITabBarProps) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Add Plant') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'GreenhouseStackNavigation') {
              iconName = focused ? 'ios-leaf' : 'ios-leaf-outline';
            }

          return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#295240',
          inactiveTintColor: '#295240',
          showLabel: false,
          style: {
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          children={(navigation) => (
            <Home
              {...navigation}
              userPlants={userPlants}
              checkSchedule={checkSchedule}
            />
          )}
        />
        <Tab.Screen
          name="Add Plant"
          children={(navigation) => (
            <AddPlant
              {...navigation}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          )}
        />
        <Tab.Screen
          name="GreenhouseStackNavigation"
          children={(navigation) => (
            <GreenhouseStackNavigation
              {...navigation}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          )}
        />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
