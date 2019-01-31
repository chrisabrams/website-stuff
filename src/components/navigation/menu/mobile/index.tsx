import media from 'src/theme/breakpoint'
import styled from 'styled-components'

export const LI = styled.li`
  display: flex;
  flex: 0 1 100%;

  a {
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex: 0 1 100%;
    padding: 15px;
    text-decoration: none;
  }
`

export const UL = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.minWidth('s')`
    padding: 0 30px;
  `}

  ${media.minWidth('m')`
    flex: 0 1 600px;
  `}

  ${media.minWidth('l')`
    flex: 0 1 800px;

    a {
      padding: 0 15px;
    }

    ${LI}:last-child a {
      padding-right: 0;
    }
  `}

  ${media.minWidth('xxl')`
    padding-right: 130px;
  `}
`
