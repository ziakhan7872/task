import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.5,
  },
  FlatListContainer: {
    margin: 10,
    padding: 3,
    marginVertical: 5,
    borderRadius: 8,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 15,
  },
  iConContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iConContainerStyle: {
    width: 40,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  imageContainerView: {
    marginLeft: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageContainerStyle: {
    width: 100,
  },
});
export default styles;
