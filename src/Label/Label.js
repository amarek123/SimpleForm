import styled, {css} from 'styled-components'

const Label = styled.label`
     margin: 15px 0 25px 0;
     ${({validate}) => (
         !validate && css`
            border: solid 1px #f00;
            background-color: #fdd;
         `
     )}
`
export default Label