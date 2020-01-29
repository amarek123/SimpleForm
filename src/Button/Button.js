import styled from 'styled-components'

const Button = styled.button`
    border: 1px solid #000;
    background-color: #9f2323;
    color: #fff;
    text-transform: uppercase;
    padding: 15px 50px;
    transition: linear .3s;
    &:hover{
        background-color: royalblue;
        cursor: pointer;
    }
`

export default Button