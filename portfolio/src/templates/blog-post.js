import React from 'react';
import { Link } from 'gatsby';
import Menu from "../components/menu";
import "../sass/mystyles.css";
// import '../pages/main.css';


export default function Template({data}) {
    const post = data.markdownRemark;

    return (
        <div>
            <Menu/>
            <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
        <div className="card notification is-light">
        
            <h1 className='title has-text-black'>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>


            <div dangerouslySetInnerHTML={{ __html: post.html}} />
            <Link to="/blog"> Go Back </Link>

</div>
</div>
</div>

            </section>
            
            

        </div>
    )
};

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }

`;