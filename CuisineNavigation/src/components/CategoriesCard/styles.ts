import {colors} from '@/theme';
import {Platform, StyleSheet} from 'react-native';
import {LinearGradientProps} from 'react-native-linear-gradient';

export const HORIZONTAL_GRADIENT: Pick<LinearGradientProps, 'start' | 'end'> = {
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
};

export const GRADIENT_WIDTH_1 = 18;
export const GRADIENT_COLORS_1: LinearGradientProps['colors'] = [
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 0)',
];

export const GRADIENT_WIDTH_2 = 20;
export const GRADIENT_COLORS_2: LinearGradientProps['colors'] = [
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 0.9)',
  'rgba(255, 255, 255, 0)',
];
export const GRADIENT_LOCATIONS_2: LinearGradientProps['locations'] = [
  0, 0.19, 1,
];

const styles = StyleSheet.create({
  containerShadow: {
    backgroundColor: colors.White,
    borderRadius: 9,
    elevation: 9,
    shadowColor: Platform.select({
      ios: colors.ShadowGray,
      android: colors.DeepGray,
    }),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  container: {
    paddingTop: 16,
    borderRadius: 9,
    overflow: 'hidden',
  },
  barContainer: {
    paddingLeft: 16,
    paddingRight: 24,
  },
  pillsContentContainer: {
    columnGap: 8,
    paddingTop: 11,
    paddingLeft: 16,
    paddingRight: 24,
  },
  categoriesContentContainer: {
    columnGap: 11,
    paddingLeft: 16,
    paddingRight: 24,
  },
  categoriesColumnContainer: {
    rowGap: 10,
    paddingTop: 15,
  },
  handleContainer: {
    height: 20,
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 6,
  },
  handle: {
    width: 50,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#bbbbbb',
  },
  hiddenHandle: {
    opacity: 0,
  },
  linearGradientOverlay: {
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  leftOverlay: {
    left: 0,
    transform: [{rotateZ: '00deg'}],
  },
  rightOverlay: {
    right: 0,
    transform: [{rotateZ: '180deg'}],
  },
});

export default styles;
