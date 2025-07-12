import styled from "styled-components"

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    text-transform: uppercase;
    min-width: 220px;
    font-size: 16px;
    border: none;
    transition: all ease 0.4s;

    &:hover{
        background-color: white;
        cursor: pointer;
        border: 1px solid black;
        color: black;
        transform: scale(1.02);
        transition: all ease 0.3s;
    }
`
export const OutlineBtn = styled(Button)`
    background: white;
    border: 1px solid black;
    color: black;

    &:hover{
        background: black;
        color: white;
    }
`