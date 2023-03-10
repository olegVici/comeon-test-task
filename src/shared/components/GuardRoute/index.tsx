import React from 'react';
import { Redirect, Route } from 'react-router';

// Constance
import { ROUTERS } from 'core/constants/routes';

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
	const routeComponent = (props: any) =>
		isAuthenticated ? React.createElement(component, props) : <Redirect to={{ pathname: ROUTERS.SIGN_IN }} />;
	return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
