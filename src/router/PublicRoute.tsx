import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { AppBar, IAppBarProps } from '../components/shared components/AppBar';

const PublicRoute = ({ component: Component, ...rest }: IAppBarProps) => {

    if (!Component) return null;

    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <div>
                        <AppBar authenticated={true} activePage={rest.activePage}/>
                        <Component {...props}/>
                    </div>
                )
            }
            }
        />
    );
}


export { PublicRoute }