import styled, {css} from 'styled-components'

const Input = styled.input`
    border: solid 2px royalblue;
    padding: 10px 5px;
    margin: 10px 0;
    ${ ({validate}) => (
        !validate && css`
            border: solid 2px #f00f00;
            background-color: #fdd;
    `
    )}
`
export default Input