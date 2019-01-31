import { Link } from 'gatsby'
import { ifProp } from 'styled-tools'
import media from 'src/theme/breakpoint'
const IconMenu = require('src/static/icons8-menu.svg') as string
import React , { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Button = styled.button`
  background: #fff;
  border: none;
  margin: 0;
  outline: none;
  padding: 0;

  svg {
    background: #fff;
    height: 32px;
    width: 32px;
  }
`

interface IPropsHamburger {
  onClick: any // TODO
}

interface IPropsMobileMenu {
  isVisible: boolean
}

function Hamburger (props: IPropsHamburger) {

  return <Button onClick={props.onClick}><IconMenu /></Button>

}

const MobileMenuWrapper = styled.div`
  display: flex;
  flex: 0 1 100%;
  justify-content: space-between;
  margin: 0 30px;

  ${media.minWidth('m')`
    display: none;
  `}
`

const MobileMenu = styled('div')<IPropsMobileMenu>`
  background-color: #000;
  height: calc(100vh - 80px);
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 80px;
  transform: ${ifProp('isVisible', 'translate3d(0, 0, 0)', 'translate3d(0, 100vh, 0)')};
  transition: transform .3s cubic-bezier(.5, .5, .5, 1);
  width: 100vw;
  will-change: transform;
  z-index: 1000;
`

const X = styled.a`
  box-sizing: border-box;
  color: #fff;
  padding: 15px;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

const Initials = styled.span`
  box-sizing: border-box;
  color: #000;
  display: flex;
  font-size: 30px;
  font-weight: 200;

  a {
    color: #000;
    display: inline-block;
    height: 100%;
    text-decoration: none;
    width: 100%;

    &:active, &:focus, &:hover {
      animation: ${rotate} .8s linear;
    }
  }
`

export default class MobileMenuComponent extends Component {

  state = {
    visible: false
  }

  onClick = (e) => {

    this.toggle()

  }

  toggle = () => {

    this.setState({
      visible: !this.state.visible
    })

  }

  render() {

    return (
      <MobileMenuWrapper>
        <Hamburger onClick={this.onClick} />
        <MobileMenu isVisible={this.state.visible}>
          {this.props.children}
          <X onClick={this.onClick}>X</X>
        </MobileMenu>
        <Initials><Link to='/'>CA</Link></Initials>
      </MobileMenuWrapper>
    )

  }

}
