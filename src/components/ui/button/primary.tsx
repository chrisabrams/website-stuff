import Button from './index'
import styled from 'styled-components'

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.cyan};
  color: #fff;
`

export default PrimaryButton
