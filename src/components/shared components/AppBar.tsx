import React, { useEffect, useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAuthenticatedProps } from '../../router/PrivateRoute';
import { routesInfo } from '../../router/Routers';

const marginRight = {marginRight:'2rem'}

const AppBar = (props:IAppBarProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(props.authenticated);
  let mapKey:number = 0;

  useEffect(() => {
    setAuthenticated(props.authenticated)
  },[props.authenticated])

    return (
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="/">App Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               {routesInfo.map((rt) => {
                 if(rt.path && rt.label && ((authenticated && rt.restricted) || !rt.restricted)) {
                   mapKey += 1;
                  return <Nav.Link key={mapKey} as={Link} to={rt.path} className={props.activePage === rt.label? "mr-sm-2 bold" : "mr-sm-2"}>{rt.label}</Nav.Link>
                 }
               })}
            </Nav>
            {!authenticated ? 
              <Button style={marginRight} onClick={() => {}}>Sign In</Button> 
                : 
              <Button style={marginRight} onClick={() => {}}>Sign Out</Button>
            }
          </Navbar.Collapse>
        </Navbar>
      );
}

export interface IAppBarProps extends IAuthenticatedProps {
  activePage:string|undefined
}

export { AppBar }
