import { FC, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/hooks';
import { Loader } from 'semantic-ui-react';

// Constance
import { ROUTERS } from 'core/constants/routes';

// Selectors
import { selectorGetUser } from 'store/entities/user/selector';

// Actions
import { updateUser } from 'store/entities/user/reducer';

// Components
import PrivateRoute from 'shared/components/GuardRoute';

// Styles
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loading components
const SignInComponent = lazy(() => import('pages/Auth/SignIn'));
const HomeComponent = lazy(() => import('pages/Home'));
const GameComponent = lazy(() => import('pages/Game'));
const NotFoundComponent = lazy(() => import('pages/NotFound'));

const App: FC = () => {
	const dispatch = useAppDispatch();
	const user = useSelector(selectorGetUser);
	const [cookies] = useCookies(['user']);

	const isAuth = (): boolean => {
		return !!user || cookies?.user;
	};

	useEffect(() => {
		if (cookies?.user) {
			dispatch(updateUser(cookies?.user));
		}
	}, []);

	return (
		<div className="app gradient-background">
			<ToastContainer />

			<Suspense fallback={<Loader type="Audio" color="#FFF" height={300} width={300} timeout={3000} />}>
				<Router>
					<Switch>
						<Route exact path={ROUTERS.SIGN_IN} component={SignInComponent} />
						<PrivateRoute exact path={ROUTERS.HOME} isAuthenticated={isAuth()} component={HomeComponent} />
						<PrivateRoute exact path={ROUTERS.GAME} isAuthenticated={isAuth()} component={GameComponent} />
						<Route path={ROUTERS.NOT_FOUND} component={NotFoundComponent} />
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
};

export default App;
