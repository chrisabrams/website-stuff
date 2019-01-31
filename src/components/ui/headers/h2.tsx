import media from 'src/theme/breakpoint'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: Roboto;
  font-weight: 300;
  font-size: 24px;

  ${media.minWidth('xl')`

  `}
`

export default H2
