import {colors, typefaces} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 27,
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 5,
    backgroundColor: colors.Gray,
    borderWidth: 1,
    borderColor: colors.TranslucentGray,
  },
  title: {
    ...typefaces.proximaBold,
    color: colors.DarkGray,
    textTransform: 'uppercase',
  },
});

export default styles;
