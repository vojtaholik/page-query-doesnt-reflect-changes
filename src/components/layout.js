import { MDXProvider } from '@mdx-js/react'
import mdxComponents from './mdx'
import React from 'react'
import SEO from './seo'
import 'focus-visible'

export default function Layout(props) {
  return (
    <>
      <SEO
        {...props}
        card={props.socialImage}
        description={props.excerpt}
        title={props.title}
        type={props.type}
        url={props.url}
      />
      <div className="container md:pb-16 pb-8">
        <MDXProvider components={mdxComponents}>
          <main>{props.children}</main>
        </MDXProvider>
      </div>
    </>
  )
}
