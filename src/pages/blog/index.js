import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((post) => (
        <article key={post.id}>
          <h2>
            <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </h2>
          <p>Posted: {post.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
