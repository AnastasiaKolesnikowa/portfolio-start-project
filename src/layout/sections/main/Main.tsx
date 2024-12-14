import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <TextBlock>
                    <MainSpan>Hi There</MainSpan>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </TextBlock>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
`
const TextBlock = styled.div`

`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
`

const MainTitle = styled.h2`
    font-weight: 400;
    font-size: 27px;
`

const MainSpan = styled.h2`
    font-weight: 400;
    font-size: 14px;
`
