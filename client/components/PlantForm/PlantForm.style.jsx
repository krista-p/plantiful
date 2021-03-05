import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label_date: {
    marginTop: 30,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  input_name: {
    fontSize: 16,
  },
  input_date: {
    marginBottom: 30,
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 15,
    paddingBottom: 15,
    fontSize: 16,
  },
  suggestion: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  dateContainer: {
    borderRadius: 100,
  },
  placeholder_date: {
    color: 'green',
    fontSize: 16,
  },
  overlay: {
    width: '100%',
  },
  overlay_header: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  overlay_cancel: {
    paddingHorizontal: 15,
    color: 'red',
  },
  overlay_done: {
    paddingHorizontal: 15,
    color: 'green',
  },
  dateTimePicker: {
    backgroundColor: 'white',
  },
  button: {
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
