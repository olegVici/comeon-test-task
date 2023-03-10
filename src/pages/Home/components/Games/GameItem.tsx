import { FC } from 'react';
import { useHistory } from 'react-router';

// Types
import { Game } from 'shared/types/dto/game.dto';

// Components
import { Button } from 'semantic-ui-react';
import { formattedString } from 'core/utils/clear-string';

interface GameItemProps {
	game: Game;
}

const GameItem: FC<GameItemProps> = ({ game }: any) => {
	const history = useHistory();

	const handleConnectToGame = (): void => {
		history.push(`/game/${formattedString(game.code)}`);
	};

	return (
		<div className="game-item">
			<img src={game.icon} alt="game" />

			<div className="game-item__info">
				<div className="game-item__title">{game.name}</div>
				<div className="game-item__description">{game.description}</div>
				<div className="game-item__action">
					<Button
						secondary
						content="Play"
						icon="right arrow"
						labelPosition="right"
						onClick={handleConnectToGame}
					/>
				</div>
			</div>
		</div>
	);
};

export default GameItem;
