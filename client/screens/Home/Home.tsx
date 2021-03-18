import moment from 'moment';
import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './Home.style';

interface userPlantProps {
  userPlants: Array<{
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
}>
}

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



export default function Home({ userPlants }: userPlantProps) {
  const checkSchedule = (plants: Array<userPlantProperties>) => {
    const filtered = plants.filter((plant: userPlantProperties) => {
      const nextWater = moment(plant.next_water).add(1, 'days').toISOString();
      const today = moment().toISOString();
      return moment(nextWater).isSameOrBefore(today);
    });
    return filtered.length;
  };

  const renderNotice = () => {
    if (!userPlants?.length) {
      return <Text style={styles.notice}>you don't have any plants</Text>;
    } else if (checkSchedule(userPlants)) {
      return <Text style={styles.notice}>your plants need some love</Text>;
    } else {
      return <Text style={styles.notice}>all your plants are happy</Text>;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header}>TODAY</Text>
          {renderNotice()}
        </View>
        <View style={styles.image_container}>
          <Image
            source={require('../../assets/images/Home.jpeg')}
            style={styles.image}
          />
        </View>
        <View style={styles.topTip}>
          <View style={styles.topTip_container}>
            <Text style={styles.topTip_header}>PLANTIFACT</Text>
          </View>
          <Text style={styles.topTip_text}>
            most plants prefer for their soil to dry out before rewatering
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
