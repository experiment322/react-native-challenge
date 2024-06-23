import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {Category} from '@/data/categories';
import styles from './styles';

export interface CategoryItemProps {
  item: Category;
  onPress?: (item: Category) => void;
}

const DEFAULT_IMAGE = require('@/assets/images/browse-cuisines.png');

function CategoryItem({item, onPress}: CategoryItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress?.(item);
      }}>
      <Image
        style={styles.image}
        fadeDuration={0}
        source={item.imagePath ? {uri: item.imagePath} : DEFAULT_IMAGE}
      />
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryItem);
