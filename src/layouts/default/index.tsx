import breakpoint from 'src/theme/breakpoint'
import Navigation from 'src/components/navigation'
import navigationMenu from 'src/components/navigation/menu'
import React, { Component } from 'react'
import styled from 'styled-components'

const DefaultLayout = styled.div`
  display: flex;
  flex: 0 1 100%;
  flex-wrap: wrap;
`

export default class DefaultLayoutWrapper extends Component {

  render() {
    
    return (
      <DefaultLayout>
        <Navigation>
          {navigationMenu()}
        </Navigation>

        {this.props.children}
      </DefaultLayout>
    )

  }

}
