import {colors, typefaces} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.SlightlyDifferentGray,
    height: 33,
    borderRadius: 17,
  },
  activeContainer: {
    backgroundColor: colors.DimmerMustardYellow,
  },
  image: {
    width: 33,
    height: 33,
  },
  title: {
    ...typefaces.proximaBoldBigger,
    flex: 1,
    color: colors.DeepGray,
    textTransform: 'capitalize',
    paddingTop: 6.5,
    paddingBottom: 8.5,
    paddingHorizontal: 7,
  },
  buttonsContainer: {
    height: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveButtonsContainer: {
    opacity: 0,
  },
  buttonsDivider: {
    width: 1,
    height: 19,
    borderRadius: 1,
    backgroundColor: colors.MustardYellow,
  },
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 12.5,
  },
});

export default styles;
