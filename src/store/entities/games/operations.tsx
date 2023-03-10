import { IGameReducer } from './interfaces';

// TODO: Delete any
export const getGamesOperations = (state: IGameReducer, { payload }: any): IGameReducer => {
	return { ...state, games: payload, filteredGames: payload };
};

export const getCategoriesOperations = (state: IGameReducer, { payload }: any): IGameReducer => {
	return { ...state, categories: payload };
};

export const filteredBySearch = (state: IGameReducer, { payload }: any): IGameReducer => {
	if (payload === '') {
		return { ...state, filteredGames: state.games };
	}

	const filteredGamesByCategory = state.games.filter(game => game.categoryIds.includes(state.currentCategory));
	const filteredGames = filteredGamesByCategory.filter(game =>
		game.name.toLowerCase().includes(payload.toLowerCase())
	);

	return { ...state, filteredGames };
};

export const filteredByCategory = (state: IGameReducer, { payload }: any): IGameReducer => {
	const filteredGamesByCategory = state.games.filter(game => game.categoryIds.includes(payload));

	return { ...state, filteredGames: filteredGamesByCategory, currentCategory: payload };
};
