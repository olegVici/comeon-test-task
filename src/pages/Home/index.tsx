import { FC, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/hooks';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { debounce } from 'lodash-es';

// Selectors
import { selectorGetUser } from 'store/entities/user/selector';

// Actions
import { getCategories, getGames } from 'store/entities/games/actions';
import { filterBySearch } from 'store/entities/games/reducer';
import { logout } from 'store/entities/user/actions';

// Constance
import { ROUTERS } from 'core/constants/routes';

// Components
import { Button, Input } from 'semantic-ui-react';
import Player from './components/Player';
import Games from './components/Games';
import Categories from './components/Categories';

// Styles
import './home.scss';

const Home: FC = () => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const user = useSelector(selectorGetUser);
	const [, , removeCookie] = useCookies(['user']);

	const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(filterBySearch(event.target.value));
	};

	const debouncedChangeHandler = useMemo(() => debounce(handleChangeSearch, 500), [history, user]);

	const handleLogout = async (): Promise<void> => {
		await dispatch(logout({ username: user.username })).unwrap();
		removeCookie('user');

		toast.info('Good bye.');
		history.push(ROUTERS.SIGN_IN);
	};

	useEffect(() => {
		dispatch(getGames());
		dispatch(getCategories());
	}, []);

	return (
		<div className="home">
			<div className="home__header">
				<div className="home__header-player">
					<Player player={user} />
					<Button onClick={handleLogout}>Logout</Button>
				</div>

				<div className="title">ComeOn Games</div>

				<Input placeholder="Search" icon="search" onChange={debouncedChangeHandler} />
			</div>

			<div className="home__content">
				<div className="home__content__body">
					<Games />
					<Categories />
				</div>
			</div>
		</div>
	);
};

export default Home;
