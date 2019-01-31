import BlogIndex from 'src/components/blog/index'
import BlogPost from 'src/components/blog/post'
import Layout from 'src/layouts/default'
import React from 'react'

export default function BlogRouting () {

  const split = window.location.pathname.split('/blog/')
  if(split[1] && split[1].length > 1) {
    return <Layout><BlogPost /></Layout>
  }

  return <Layout><BlogIndex /></Layout>

}
