import { css } from "styled-components";

const borderColor=(theme,key)=>theme.colors&& theme.colors[key]?`border-color:${theme.colors[key]};`:'';

export const SurfaceBorderColor=css`${({theme})=> borderColor(theme,'surfaceBorderColor')}`;
export const SurfaceBorderColorVariant=css`${({theme})=> borderColor(theme,'surfaceBorderColorVariant')}`;




