import {StyleSheet} from 'react-native';

export const typefaces = {
  proximaBold: {
    fontFamily: 'Proxima Nova A',
    fontWeight: '700',
    fontSize: 11.5,
    lineHeight: 15,
    letterSpacing: 0.5,
  },
  proximaBoldBigger: {
    fontFamily: 'Proxima Nova A',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 0,
  },
  proximaSemibold: {
    fontFamily: 'Proxima Nova A',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: 0,
  },
} satisfies StyleSheet.NamedStyles<any>;
