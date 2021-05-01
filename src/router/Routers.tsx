import React, { useEffect, useState } from 'react';
import { Router, Switch } from 'react-router-dom';
import { RouteInfo } from '../client models/RouteInfo';
import { AboutPage } from '../components/pages/AboutPage';
import { ExamplePrivatePage } from '../components/pages/ExamplePrivatePage';
import { HomePage } from '../components/pages/HomePage';
import history from '../history/history';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Routers = () => {
    const authenticated:boolean = true;
    return (
        <Router history={history}>
            <Switch>
                {/**To be replaced with active authentication**/}
                {getRoutes(authenticated)}
            </Switch>
        </Router>
    )
};

const getRoutes = (authenticated: boolean) => {
    return routesInfo.map((rt:RouteInfo,i) => {
        if (rt.restricted) {
            return <PrivateRoute activePage={rt.label} key={i} authenticated={authenticated} exact path={rt.path} component={rt.component} />
        } else if (!rt.restricted && rt.label) {
            return <PublicRoute activePage={rt.label} key={i} authenticated={authenticated} exact path={rt.path} component={rt.component}/>
        } else {
            return <PublicRoute activePage={rt.label} key={i} authenticated={authenticated} component={rt.component}/>
        }
    });
}

// Use this to add new routes, this populates the appbar in this order
const routesInfo: RouteInfo[] = [
    // Private Route Example Below
    new RouteInfo('Example Private Page', '/ExamplePrivate', true, ExamplePrivatePage),
    new RouteInfo('About', '/About', false, AboutPage),
    
    // This one has to be last
    new RouteInfo(undefined, undefined, false, HomePage)
]

export { Routers, routesInfo };