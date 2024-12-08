import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>DEMO</Link>
            <Link href={"#"}>CODE</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background: #1f1f20;
    max-width: 540px;
    width: 100%;
    padding-top: 40px;
    `

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
`

const Title = styled.h3`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    color: #fff;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #fff;
`