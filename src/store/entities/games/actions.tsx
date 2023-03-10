import axios from 'core/api/axios.instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Constance
import { API } from 'core/api/server.api';

// Types
import { CATEGORIES_GET, GAME_GET } from 'store/actions-types';
import { Category } from 'shared/types/dto/category.dto';
import { Game } from 'shared/types/dto/game.dto';

type ResponseGetGamesType = { data: Game[] };
type ResponseGetCategoriesType = { data: Category[] };

export const getGames = createAsyncThunk(GAME_GET, async (): Promise<Game[] | boolean> => {
	try {
		const { data }: ResponseGetGamesType = await axios.get(API.GAMES);

		return data;
	} catch (error) {
		toast('Something went wrong with games');
		return false;
	}
});

export const getCategories = createAsyncThunk(CATEGORIES_GET, async (): Promise<Category[] | boolean> => {
	try {
		const { data }: ResponseGetCategoriesType = await axios.get(API.CATEGORIES);

		return data;
	} catch (error) {
		toast('Something went wrong with categories');
		return false;
	}
});
