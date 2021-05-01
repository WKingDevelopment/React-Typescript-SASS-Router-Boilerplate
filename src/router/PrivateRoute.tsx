import React, { useEffect, useState } from 'react';
import { Route, RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { AppBar, IAppBarProps } from '../components/shared components/AppBar';

const PrivateRoute = ({ component: Component, ...rest }: IAppBarProps) => {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)

    useEffect(() => {
        setAuthenticated(rest.authenticated)
    },[rest.authenticated])

    if (!Component) return null;
    if (authenticated) {
        return (
            <Route
                {...rest}
                render={(props) => (
                    <div>
                        <AppBar activePage={rest.activePage} authenticated={rest.authenticated} />
                        <Component {...props} />
                    </div>
                )
                }
            />
        );
    } else {
        return <Redirect to={{
                pathname:'/',
                state:{ priorPath:rest.path}
                }}
            />
    }
}

export interface IAuthenticatedProps extends RouteProps {
    authenticated:boolean
}

export { PrivateRoute }