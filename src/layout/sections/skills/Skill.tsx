import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string

}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
    text-align: center;
   `

const SkillTitle = styled.h3`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff;
   
`


const SkillText = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #fff;
`

