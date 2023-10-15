import { css } from "styled-components";



const color=(theme,key)=>{return theme.colors&& theme.colors[key]?`color:${theme.colors[key]};`:'';}
export const Primary=css`${({theme})=> color(theme,'primaryColor')}`;
export const PrimaryContainer=css`${({theme})=> color(theme,'primaryContainerColor')}`;
export const Secondary=css`${({theme})=> color(theme,'secondaryColor')}`;
export const SecondaryContainer=css`${({theme})=> color(theme,'secondaryContainerColor')}`;
export const Tertiary=css`${({theme})=> color(theme,'tertiaryColor')}`;
export const TertiaryContainer=css`${({theme})=> color(theme,'tertiaryContainerColor')}`;
export const Error=css`${({theme})=> color(theme,'errorColor')}`;
export const ErrorContainer=css`${({theme})=> color(theme,'errorContainerColor')}`;
export const Surface=css`${({theme})=> color(theme,'surfaceColor')}`;
export const SurfaceVariant=css`${({theme})=> color(theme,'surfaceColorVariant')}`;
export const color_mixin=(key)=>css`${({theme})=> color(theme,key)}`;