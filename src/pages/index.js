import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Link from '../components/link'
import Markdown from '../utils/card-markdown'

export default function Index({ data: { allBlogPost } }) {
  return (
    <Layout>
      <div className="w-full pt-24">
        <ul>
          {allBlogPost.nodes.map((post) => (
            <li key={post.id}>
              <Link
                className="text-base hover:text-indigo-700 transition-colors duration-75"
                to={post.slug}
              >
                <h4 className="text-2xl font-semibold mb-3 leading-tight">
                  {post.title}
                </h4>
                <Markdown source={post.excerpt} />
                <div className="mb-10">Read more →</div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/posts"
          className="my-5 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 hover:text-indigo-600 transform hover:scale-110 transition-all duration-100 ease-in-out"
        >
          View all posts
        </Link>
      </div>
    </Layout>
  )
}

export const indexQuery = graphql`
  {
    allBlogPost(
      sort: { fields: date, order: DESC }
      filter: { published: { eq: true } }
      limit: 8
    ) {
      nodes {
        id
        title
        excerpt
        slug
        category
      }
    }
    categories: allBlogPost {
      group(field: category) {
        fieldValue
      }
    }
  }
`
