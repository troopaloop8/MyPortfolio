import React from "react";
import { Link } from "gatsby";
import Menu from "../components/menu";
// import SEO from "../components/seo";
import "../sass/mystyles.css";
import "./main.css";

const BlogPage = ({ data }) => (
  <div>
    <Menu />
    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Latest Posts:</h1>
          {data.allMarkdownRemark.edges.map(post => (
            <div className="card notification is-light">
              <div key={post.node.id}>
                <h3 className="subtitle has-text-black">
                  {post.node.frontmatter.title}
                </h3>
                <small>
                  Posted by {post.node.frontmatter.author} on{" "}
                  {post.node.frontmatter.date}
                </small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}> Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;

export default BlogPage;
