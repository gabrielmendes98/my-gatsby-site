import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Container,
  Heading,
  NavLinkItem,
  NavLinks,
  Link,
  Header,
} from './style';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Header>{data.site.siteMetadata.title}</Header>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <Link to='/'>Home</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to='/about'>About</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to='/blog'>Blog</Link>
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
