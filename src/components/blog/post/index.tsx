import Container from 'src/components/container'
import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'

const Post = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;

  > div {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }

  h1 {
    display: flex;
    font-size: 36px;
    max-width: 100%;
  }
`

export default function BlogPost () {

  const path = window.location.pathname.split('/blog')[1]
  const Content = lazy(() => import('../../../posts' + path + '.mdx'))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Post>
          <Content />
        </Post>
      </Container>
    </Suspense>
  )
}
