import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

// Selectors
import { selectorGetFilteredGames } from 'store/entities/games/selector';

// Components
import Title from 'shared/components/Title';
import GameItem from './GameItem';

// Styles
import './games.scss';

const Games: FC = memo(() => {
	const games = useSelector(selectorGetFilteredGames);

	return (
		<div>
			<Title title="Games" />
			{!!games?.length && (
				<div className="games">
					{games.map(game => (
						<GameItem game={game} key={game.name} />
					))}
				</div>
			)}
		</div>
	);
});

export default Games;
