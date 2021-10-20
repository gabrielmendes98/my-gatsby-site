import React from 'react';
import { Container, Heading, NavLinkItem, NavLinks, Link } from './style';

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <title>{pageTitle}</title>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <Link to='/'>Home</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to='/about'>About</Link>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};
export default Layout;
