import styled from 'styled-components'

interface IWrapper {
  color?: string
  height?: number
  image?: string
}

function color(props) {

  switch(props.color) {
    
    case 'black':
      return '#000'

    case 'grey':
      return props.theme.lightgrey

    case 'white':
    default:
      return '#fff'

  }

}

export default styled('div')<IWrapper>`
  background-color: ${props => color(props)};
  display: flex;
  flex: 0 1 100%;
  flex-wrap: wrap;
  position: relative;

  ${ (props: IWrapper) => props.height && `
    height: ${props.height}px;
  `}

  ${ (props: IWrapper) => props.image && `
    background-image: url(${props.image});
    background-repeat: no-repeat;
  `}
`
