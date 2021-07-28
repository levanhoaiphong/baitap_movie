import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const createRoute = (condition) => {
	return class extends React.Component {
		render() {
			const { path, Component, redirecPath } = this.props;
			return <Route path={path} render={(routeProps) => {
				if (condition()) {
					return <Component {...routeProps} />
				}
				return <Redirect to={redirecPath} />
			}} />
		}
	}
}

export const AudthRoute = createRoute(() => !localStorage.getItem("t"))
export const PrivateRoute = createRoute(() => localStorage.getItem("t"))