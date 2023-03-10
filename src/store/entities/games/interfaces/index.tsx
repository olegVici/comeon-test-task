import { Category } from 'shared/types/dto/category.dto';
import { Game } from 'shared/types/dto/game.dto';

export interface IGameReducer {
	games: Game[];
	categories: Category[];
	currentCategory: number;
	filteredGames: Game[];
}
