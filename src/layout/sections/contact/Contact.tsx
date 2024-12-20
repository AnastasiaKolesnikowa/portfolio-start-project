import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 70vh;
   `

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
`

const Field = styled.input`
    border: 1px solid #4a4a4a;
`

