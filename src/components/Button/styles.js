import styled from "styled-components";

export const Button = styled.button`
    background: ${ props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    width: 342px;
    height: 74px;
    border: ${ props => props.isBack ? '1px solid #ffffff' : 'none'};
    cursor: pointer;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }

    img {
        transform: ${ props => props.isBack && 'rotateY(180deg)'} ;
    }
`