import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Constance
import { ROUTERS } from 'core/constants/routes';

// Styles
import './game.scss';
import { Button } from 'semantic-ui-react';

const windowLocal: (Window & typeof globalThis) | any = window;

const Game: FC = () => {
	const { name }: { name: string } = useParams();

	useEffect(() => {
		if (name && windowLocal.comeon) {
			windowLocal.comeon?.game.launch(name);
		} else {
			toast.error('Sorry the game did not load.');
		}
	}, [name, windowLocal?.comeon]);

	return (
		<>
			<Link to={ROUTERS.HOME}>
				<Button
					inverted
					className="back-to-home"
					color="black"
					content="Back"
					icon="left arrow"
					labelPosition="left"
				/>
			</Link>

			<div className="game-place">
				<div id="game-launch" />
			</div>
		</>
	);
};

export default Game;
