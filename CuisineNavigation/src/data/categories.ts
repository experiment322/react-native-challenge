import {atom} from 'jotai';
import {atomWithRefresh} from 'jotai/utils';

export interface Category {
  id: number;
  imagePath: string;
  level: number;
  name: string;
  parentId: number | null;
  position: number;
}

export interface CategoryFilter extends Pick<Category, 'level' | 'parentId'> {}

export const allCategoriesAtom = atomWithRefresh(
  async (): Promise<{items: Category[]; error?: unknown}> => {
    try {
      return await fetch('http://localhost:3000')
        .then(response => response.json())
        .then(async (items: Category[]) => {
          return {
            items,
          };
        });
    } catch (error) {
      return {
        error,
        items: [],
      };
    }
  },
);

export const categoriesFilterStackAtom = atom<CategoryFilter[]>([]);

export const DEFAULT_CATEGORIES_FILTER: CategoryFilter = {
  level: 1,
  parentId: null,
};

export const getCurrentFilter = (filterStack: CategoryFilter[]) => {
  return filterStack[filterStack.length - 1] ?? DEFAULT_CATEGORIES_FILTER;
};

export const getCurrentParentCategory = (
  items: Category[],
  {parentId}: CategoryFilter,
) => {
  if (parentId === null) {
    return undefined;
  }
  return items.find(({id}) => id === parentId);
};

export const getCurrentCategories = (
  allCategories: Category[],
  filter: CategoryFilter,
) => {
  return allCategories
    .filter(
      ({level, parentId}) =>
        level === filter.level && parentId === filter.parentId,
    )
    .sort((a, b) => a.position - b.position);
};
