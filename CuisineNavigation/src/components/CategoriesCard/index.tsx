import CategoryPickerBar, {
  CategoryPickerBarProps,
} from '@/components/CategoryPickerBar';
import Pill from '@/components/Pill';
import {Category} from '@/data/categories';
import {chunk} from 'lodash';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  FlatList,
  FlatListProps,
  ScrollView,
  ScrollViewProps,
  View,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  clamp,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import CategoryItem from '../CategoryItem';
import {renderLinearGradientSet} from './linearGradientHelpers';
import styles, {
  GRADIENT_COLORS_1,
  GRADIENT_COLORS_2,
  GRADIENT_LOCATIONS_2,
  GRADIENT_WIDTH_1,
  GRADIENT_WIDTH_2,
} from './styles';

export interface CategoriesCardProps
  extends Pick<CategoryPickerBarProps, 'onBackPressed' | 'onClosePressed'> {
  currentCategories: Category[];
  currentParentCategory: Category | null | undefined;
  onCategoryPressed?: (category: Category) => void;
}

const CONTENT_RESIZE_DURATION = 300;
const DECELERATION_RATE = 0.985;
const SETTLING_SPEED = 0.25;

const BUTTONS = ['Anytime', 'Any Price', 'Any Rating', 'All Chains'];

function CategoriesCard({
  currentCategories,
  currentParentCategory,
  onCategoryPressed,
  onBackPressed,
  onClosePressed,
}: CategoriesCardProps) {
  type ChunkItem = (typeof chunkedData)[number];
  const listRef = useRef<FlatList<ChunkItem>>(null);
  const chunkedData = useMemo(
    () => chunk(currentCategories, currentCategories.length > 2 ? 2 : 1),
    [currentCategories],
  );
  const contentHeight = useSharedValue<number>(NaN);
  const currentHeight = useSharedValue<number>(NaN);
  const translation = useSharedValue<number>(0);

  useEffect(() => {
    listRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
    currentHeight.value = withTiming(contentHeight.value, {
      duration: CONTENT_RESIZE_DURATION,
    });
    translation.value = withTiming(0, {
      duration: CONTENT_RESIZE_DURATION,
    });
  }, [chunkedData, contentHeight, currentHeight, translation]);

  useAnimatedReaction(
    () => {
      return contentHeight.value;
    },
    newContentHeight => {
      currentHeight.value = newContentHeight;
    },
  );

  const handleContentSizeChange: NonNullable<
    ScrollViewProps['onContentSizeChange']
  > = (newWidth, newHeight) => {
    if (!Number.isNaN(contentHeight.value)) {
      contentHeight.value = withTiming(newHeight, {
        duration: CONTENT_RESIZE_DURATION,
      });
      translation.value = withTiming(0, {
        duration: CONTENT_RESIZE_DURATION,
      });
    } else {
      contentHeight.value = newHeight;
      translation.value = 0;
    }
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      currentHeight.value += translation.value;
      translation.value = 0;
    })
    .onChange(({translationY}) => {
      translation.value = translationY;
    })
    .onFinalize(({velocityY}) => {
      translation.value = withDecay(
        {
          deceleration: DECELERATION_RATE,
          velocity: velocityY,
          clamp: [
            -currentHeight.value,
            contentHeight.value - currentHeight.value,
          ],
        },
        finished => {
          if (finished) {
            const settlingTranslation =
              currentHeight.value + translation.value < contentHeight.value / 2
                ? -currentHeight.value
                : contentHeight.value - currentHeight.value;
            const settlingDuration =
              Math.abs(settlingTranslation - translation.value) /
              SETTLING_SPEED;
            translation.value = withTiming(settlingTranslation, {
              duration: settlingDuration,
            });
          }
        },
      );
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      overflow: 'hidden',
      height: !Number.isNaN(contentHeight.value)
        ? clamp(currentHeight.value + translation.value, 0, contentHeight.value)
        : undefined,
    };
  });

  const keyExtractor = useCallback<
    NonNullable<FlatListProps<ChunkItem>['keyExtractor']>
  >(column => {
    return column.map(({id}) => id).join();
  }, []);

  const renderItem = useCallback<
    NonNullable<FlatListProps<ChunkItem>['renderItem']>
  >(
    ({item}) =>
      item.length ? (
        <View style={styles.categoriesColumnContainer}>
          {!!item[0] && (
            <CategoryItem item={item[0]} onPress={onCategoryPressed} />
          )}
          {!!item[1] && (
            <CategoryItem item={item[1]} onPress={onCategoryPressed} />
          )}
        </View>
      ) : null,
    [onCategoryPressed],
  );

  return (
    <View style={styles.containerShadow}>
      <View style={styles.container}>
        <View style={styles.barContainer}>
          <CategoryPickerBar
            category={currentParentCategory}
            onBackPressed={onBackPressed}
            onClosePressed={onClosePressed}
          />
        </View>

        <View>
          <ScrollView
            horizontal={true}
            bounces={false}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.pillsContentContainer}>
            {BUTTONS.map(button => (
              <Pill key={button} title={button} />
            ))}
          </ScrollView>
          {renderLinearGradientSet(GRADIENT_WIDTH_1, GRADIENT_COLORS_1)}
        </View>

        <Animated.View style={animatedStyle}>
          <ScrollView
            scrollEnabled={false}
            bounces={false}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onContentSizeChange={handleContentSizeChange}>
            <View>
              <FlatList
                ref={listRef}
                horizontal={true}
                bounces={false}
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContentContainer}
                data={chunkedData}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
              />
              {renderLinearGradientSet(
                GRADIENT_WIDTH_2,
                GRADIENT_COLORS_2,
                GRADIENT_LOCATIONS_2,
              )}
            </View>
          </ScrollView>
        </Animated.View>

        <GestureDetector gesture={pan}>
          <View style={styles.handleContainer}>
            <View
              style={[
                styles.handle,
                !chunkedData.length && styles.hiddenHandle,
              ]}
            />
          </View>
        </GestureDetector>
      </View>
    </View>
  );
}

export default CategoriesCard;
