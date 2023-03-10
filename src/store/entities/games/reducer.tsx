import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getGames } from './actions';
import { IGameReducer } from './interfaces';
import { filteredByCategory, filteredBySearch, getCategoriesOperations, getGamesOperations } from './operations';

const initialValue: IGameReducer = {
	games: [],
	categories: [],
	currentCategory: 0,
	filteredGames: [],
};

export const GameStore = createSlice({
	name: 'game',
	initialState: initialValue,
	reducers: {
		filterByCategory: filteredByCategory,
		filterBySearch: filteredBySearch,
	},
	extraReducers: builder => {
		builder
			.addCase(getGames.fulfilled, getGamesOperations)
			.addCase(getCategories.fulfilled, getCategoriesOperations);
	},
});

export const { filterByCategory, filterBySearch } = GameStore.actions;
export default GameStore.reducer;
