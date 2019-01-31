import Container from 'src/components/container'
import { Link } from 'gatsby'
import sortPosts from './sort-posts'
import React from 'react'
import styled from 'styled-components'

export default function BlogIndex () {

  return (
    <Container>
      {ListPosts()}
    </Container>
  )

}

const PostWrapper = styled.div`
  display: flex;
  flex: 0 1 100%;
  flex-wrap: wrap;
  margin: 15px 0;

  a {
    color: #000;
    text-decoration: none;
  }
`

const PostTitle = styled.h2`
  display: flex;
  flex: 0 1 100%;
  margin: 0;
`

const PostDate = styled.div`
  color: #888;
  display: flex;
  flex: 0 1 100%;
  font-size: 12px;
`

interface IPost {
  date: string
  path: string
  title: string
}

function Post (props: IPost) {

  const href = `/blog${props.path}`

  return (
    <PostWrapper>
      <Link to={href}><PostTitle>{props.title}</PostTitle></Link>
      <PostDate>{props.date}</PostDate>
    </PostWrapper>
  )

}

function ListPosts () {
  const Posts = []

  const posts = sortPosts()

  for(let i = 0, l = posts.length; i < l; i++) {
    const post = posts[i]

    Posts.push(<Post key={i} {...post} />)
  }

  return Posts

}
