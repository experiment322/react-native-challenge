import {colors, typefaces} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  errorButton: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 27,
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 5,
    backgroundColor: colors.DeepGray,
    borderWidth: 1,
    borderColor: colors.TranslucentGray,
  },
  errorButtonTitle: {
    ...typefaces.proximaBold,
    color: colors.MustardYellow,
    textTransform: 'uppercase',
  },
});

export default styles;
