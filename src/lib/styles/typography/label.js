import fontStyle from "./_font-Style";
import { css } from "styled-components";

export const Large=css`${({theme:{fonts}={}})=>fontStyle(fonts,'LABEL','LARGE')}`;
export const Medium=css`${({theme:{fonts}={}})=>fontStyle(fonts,'LABEL','MEDIUM')}`;
export const Small=css`${({theme:{fonts}={}})=>fontStyle(fonts,'LABEL','SMALL')}`;