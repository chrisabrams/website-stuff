import * as desktop from './desktop'
import { Link } from 'gatsby'
import links, { TLinks } from '../links'
import * as mobile from './mobile'
import MobileMenuWrapper from './mobile/wrapper'
import React from 'react'
import styled from 'styled-components'

const menuTypes = {
  desktop,
  mobile
}

function renderMenu (type: string) {

  const { LI, UL } = menuTypes[type]
  const Links = []

  for(let i = 0, l = links.length; i < l; i++) {
    const { href, label } = links[i]

    Links.push(
      <LI key={i}>
        <Link to={href}>{label}</Link>
      </LI>
    )
  }

  return (
    <UL>
      {Links}
    </UL>
   )

}

export default function SwitchMenu () {

  return (
    <React.Fragment>
      {renderMenu('desktop')}
      <MobileMenuWrapper>{renderMenu('mobile')}</MobileMenuWrapper>
    </React.Fragment>
  )

}
