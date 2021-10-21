import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allFile.nodes.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;