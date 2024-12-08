import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <FlexWrapper direction={"column"}>
                <SectionTitle>I Am Available For Freelance</SectionTitle>
                <Button>Hire me</Button>
            </FlexWrapper>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    background: #252527;
    min-width: 30vh;
`

