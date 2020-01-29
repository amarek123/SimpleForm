import styled, {css} from 'styled-components'

const Select = styled.select`
    padding: 8px 2px;
    margin: 10px 0;
    border: solid 2px royalblue;
    ${({validate}) => (
        !validate && css`
            border: solid 2px #f00f00;
            background-color: #fdd; 
        `
    )}
`

export default Select