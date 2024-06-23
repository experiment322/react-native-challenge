import CategoriesCard, {CategoriesCardProps} from '@/components/CategoriesCard';
import {
  allCategoriesAtom,
  categoriesFilterStackAtom,
  getCurrentCategories,
  getCurrentFilter,
  getCurrentParentCategory,
} from '@/data/categories';
import {useAtom} from 'jotai';
import React, {Suspense, useCallback, useMemo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface CategoriesProps {}

function UnsuspendedCategories({}: CategoriesProps) {
  const [{items, error}, refreshAllCategories] = useAtom(allCategoriesAtom);
  const [categoriesFilterStack, setCategoriesFilterStack] = useAtom(
    categoriesFilterStackAtom,
  );
  const currentCategoriesFilter = getCurrentFilter(categoriesFilterStack);
  const currentParentCategory = getCurrentParentCategory(
    items,
    currentCategoriesFilter,
  );
  const currentCategories = useMemo(
    () => getCurrentCategories(items, currentCategoriesFilter),
    [items, currentCategoriesFilter],
  );

  const handleCategoryPressed = useCallback<
    NonNullable<CategoriesCardProps['onCategoryPressed']>
  >(
    ({id, level}) => {
      setCategoriesFilterStack(stack =>
        stack.concat({
          level: level + 1,
          parentId: id,
        }),
      );
    },
    [setCategoriesFilterStack],
  );

  const handleBackPressed = useCallback(() => {
    setCategoriesFilterStack(stack => stack.slice(0, -1));
  }, [setCategoriesFilterStack]);

  const handleClosePressed = useCallback(() => {
    setCategoriesFilterStack([]);
  }, [setCategoriesFilterStack]);

  return (
    <>
      <CategoriesCard
        currentCategories={currentCategories}
        currentParentCategory={currentParentCategory}
        onCategoryPressed={handleCategoryPressed}
        onBackPressed={handleBackPressed}
        onClosePressed={handleClosePressed}
      />
      {Boolean(error) && (
        <TouchableOpacity
          style={styles.errorButton}
          onPress={() => refreshAllCategories()}>
          <Text style={styles.errorButtonTitle}>{'ERROR! PRESS TO RETRY'}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

function Categories({...props}: CategoriesProps) {
  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <UnsuspendedCategories {...props} />
    </Suspense>
  );
}

export default Categories;
