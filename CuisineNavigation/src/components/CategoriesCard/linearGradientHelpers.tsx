import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {Tail} from 'ts-essentials';
import styles, {HORIZONTAL_GRADIENT} from './styles';

const renderLinearGradient = (
  anchor: 'left' | 'right',
  width: number,
  colors: LinearGradientProps['colors'],
  locations?: LinearGradientProps['locations'],
) => {
  return (
    <LinearGradient
      {...HORIZONTAL_GRADIENT}
      colors={colors}
      locations={locations}
      style={[
        styles.linearGradientOverlay,
        anchor === 'left' ? styles.leftOverlay : styles.rightOverlay,
        {width},
      ]}
    />
  );
};

export const renderLinearGradientSet = (
  ...args: Tail<Parameters<typeof renderLinearGradient>>
) => {
  return (
    <>
      {renderLinearGradient('left', ...args)}
      {renderLinearGradient('right', ...args)}
    </>
  );
};
