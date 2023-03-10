import { FC } from 'react';
import { User } from 'shared/types/dto/user.dto';

// Styles
import './player.scss';

interface PlayerProps {
	player: User;
}

const Player: FC<PlayerProps> = ({ player }) => {
	return (
		player && (
			<div className="player">
				<div className="player-avatar">
					<img src={player.avatar} alt="avatar" />
				</div>

				<div className="player-text">
					<div className="player-text__item">{player.name}</div>
					<div className="player-text__item">{player.event}</div>
				</div>
			</div>
		)
	);
};

export default Player;
