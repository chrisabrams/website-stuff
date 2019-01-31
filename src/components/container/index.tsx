import media from 'src/theme/breakpoint'
import styled from 'styled-components'

interface IContainer {
  alignItems?: string
}

export default styled('div')<IContainer>`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 100%;
  flex-wrap: wrap;
  padding: 30px;
  position: relative;
  margin: 0 auto;
  max-width: 100%;

  ${ (props: IContainer) => props.alignItems && `
    align-items: ${props.alignItems};
  `}

  ${media.minWidth('m')`
    flex: 0 1 768px;
  `}

  ${media.minWidth('l')`
    flex: 0 1 992px;
  `}

  ${media.minWidth('xl')`
    flex: 0 1 1200px;
  `}
`
