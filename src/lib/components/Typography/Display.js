import styled from "styled-components";
import { Large, Medium,Small } from "../../styles/typography/display";
import { colorsCss } from "../../styles/colors/colors-values";

export const LargeDisplay=styled.h1`
    ${Large};
    ${colorsCss()};
`
export const MediumDisplay=styled.h2`
    ${Medium};
    ${colorsCss()};
`
export const SmallDisplay=styled.h3`
    ${Small};
    ${colorsCss()};
`