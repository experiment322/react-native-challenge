import {colors, typefaces} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 8,
    width: 128,
    height: 40,
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    ...typefaces.proximaSemibold,
    flex: 1,
    color: colors.DeepGray,
    textTransform: 'capitalize',
  },
});

export default styles;
