import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
    query sidebarPostQuery {
        site {
            siteMetadata {
                siteUrl
            }
        }
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD-MM-YY")
                    }
                    slug
                }
            }
        }
      }
    `)
    return (
        <>
            <h3>Recent Posts</h3>
            {data.allMdx.edges.map(post => {
                const postUrl = `/blog/${post.node.slug}`
                return (
                    <div>
                        <h5><Link to={postUrl}>{post.node.frontmatter.title} ({post.node.frontmatter.date})</Link></h5>
                    </div>
                )
            })}
        </>
    )
}
