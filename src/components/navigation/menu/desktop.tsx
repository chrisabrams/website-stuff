import media from 'src/theme/breakpoint'
import styled from 'styled-components'

export const LI = styled.li`
  box-sizing: border-box;
`

export const A = styled.a`
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  text-decoration: none;
`

export const UL = styled.ul`
  box-sizing: border-box;
  display: none;
  flex: 0 1 100%;
  justify-content: space-between;

  ${media.minWidth('m')`
    display: flex;
    flex: 0 1 600px;
  `}

  ${media.minWidth('l')`
    flex: 0 1 800px;

    ${A} {
      padding: 0 15px;
    }

    ${LI}:last-child ${A} {
      padding-right: 0;
    }
  `}

  ${media.minWidth('xxl')`
    padding-right: 130px;
  `}
`
