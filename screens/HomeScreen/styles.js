import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: COLORS.white,
  },
  arrowContainer: {
    justifyContent: 'center',
    marginLeft: SIZES.padding * 0.5,
  },
  headerBackArrow: {
    width: SIZES.padding * 2,
  },
  headerContainerImage: {
    width: 20,
    height: 20,
  },
  appleTextContainer: {
    justifyContent: 'center',
  },
  appleTextStyle: {
    fontSize: SIZES.h3,
  },
  dotIconContainer: {
    justifyContent: 'center',
    marginRight: SIZES.padding * 0.5,
  },
  appleContainer: {
    marginTop: SIZES.padding * 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appleImage: {
    width: 50,
    height: 50,
  },
  followingContainer: {
    marginRight: 20,
  },
  postText: {
    fontSize: SIZES.body3,
  },
  textContainer: {
    marginTop: 20,
    // flex: 0.3,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  followContainer: {
    width: 100,

    justifyContent: 'center',
  },
  followTouchable: {
    borderColor: 'blue',
    borderWidth: 1,
    width: 100,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4fc3f7',
  },
  messageTouchable: {
    borderColor: 'blue',
    borderWidth: 1,
    width: 100,
    padding: 10,
    borderRadius: 5,
  },
  downArrowContainer: {
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  arrowDownStyle: {
    width: 20,
    height: 20,
  },
  aplleText: {
    fontSize: 16,
    marginLeft: 10,
  },
  appleText: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default styles;
