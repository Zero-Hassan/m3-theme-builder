import { css } from "styled-components";

const borderColor=(theme,key)=>theme.colors&& theme.colors[key]?`border-color:${theme.colors[key]};`:'';

export const Surface=css`${({theme})=> borderColor(theme,'surfaceBorderColor')}`;
export const SurfaceVariant=css`${({theme})=> borderColor(theme,'surfaceBorderColorVariant')}`;




