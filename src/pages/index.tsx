import BlogIndex from 'src/components/blog/index'
import BlogLatestText from 'src/components/pages/home/blog-latest'
import Container from 'src/components/container'
import Intro, { SubText } from 'src/components/pages/home/intro'
import Layout from 'src/layouts/default'
import React from 'react'
import styled from 'styled-components'
import Wrapper from 'src/components/wrapper'

export default function PageIndex () {

  return (
    <Layout>
      <Container>
        <Intro>Technologist, father &amp; wine enthusiast.</Intro>
        <SubText>Not necessarily in that order.*</SubText>
      </Container>

      <BlogLatestText>Latest thoughts</BlogLatestText>

      <BlogIndex />
    </Layout>
  )

}
