import { Category } from 'shared/types/dto/category.dto';
import { Game } from 'shared/types/dto/game.dto';
import { StoreType } from 'store/root-store';

export const selectorGetGames = (store: StoreType): Game[] => {
	return store.gameRedux.games;
};

export const selectorGetFilteredGames = (store: StoreType): Game[] => {
	return store.gameRedux.filteredGames;
};

export const selectorCategories = (store: StoreType): Category[] => {
	return store.gameRedux.categories;
};

export const selectorCurrentCategory = (store: StoreType): number => {
	return store.gameRedux.currentCategory;
};
