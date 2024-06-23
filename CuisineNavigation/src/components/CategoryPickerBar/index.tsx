import ArrowLeft from '@/assets/svgs/arrow-left.svg';
import CrossMark from '@/assets/svgs/cross-mark.svg';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import {Category} from '@/data/categories';
import {colors} from '@/theme';
import styles from './styles';

export interface CategoryPickerBarProps {
  category: Category | null | undefined;
  onBackPressed?: TouchableOpacityProps['onPress'];
  onClosePressed?: TouchableOpacityProps['onPress'];
}

const DEFAULT_IMAGE = require('@/assets/images/browse-cuisines.png');

function CategoryPickerBar({
  category,
  onBackPressed,
  onClosePressed,
}: CategoryPickerBarProps) {
  const {name, imagePath} = category ?? {};
  return (
    <TouchableOpacity
      style={[styles.container, category && styles.activeContainer]}
      disabled={!category}
      onPress={onBackPressed}>
      <Image
        style={styles.image}
        fadeDuration={0}
        source={imagePath ? {uri: imagePath} : DEFAULT_IMAGE}
      />
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {name || 'Cuisines'}
      </Text>
      <View
        style={[
          styles.buttonsContainer,
          !category && styles.inactiveButtonsContainer,
        ]}>
        <View style={styles.button}>
          <ArrowLeft height={14} color={colors.DeepGray} />
        </View>
        <View style={styles.buttonsDivider} />
        <TouchableOpacity
          style={styles.button}
          disabled={!category}
          onPress={onClosePressed}>
          <CrossMark height={14} color={colors.DeepGray} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryPickerBar;
