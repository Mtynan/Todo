import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container
} from 'reactstrap';

const AppNavbar = () => (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Online List App</NavbarBrand>    
          </Container>
        </Navbar>
      </div>
);

export default AppNavbar;