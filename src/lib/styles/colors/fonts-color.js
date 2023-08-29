import { css } from "styled-components";

const color=(theme,key)=>theme.colors&& theme.colors[key]?`color:${theme.colors[key]};`:'';

export const PrimaryColor=css`${({theme})=> color(theme,'primaryColor')}`;
export const PrimaryContainerColor=css`${({theme})=> color(theme,'primaryContainerBg')}`;
export const SecondaryColor=css`${({theme})=> color(theme,'secondaryColor')}`;
export const SecondaryContainerColor=css`${({theme})=> color(theme,'secondaryContainerBg')}`;
export const TertiaryColor=css`${({theme})=> color(theme,'tertiaryColor')}`;
export const TertiaryContainerColor=css`${({theme})=> color(theme,'tertiaryContainerBg')}`;
export const ErrorColor=css`${({theme})=> color(theme,'errorColor')}`;
export const ErrorContainerColor=css`${({theme})=> color(theme,'errorContainerBg')}`;
export const SurfaceColor=css`${({theme})=> color(theme,'surfaceColor')}`;
export const SurfaceColorVariant=css`${({theme})=> color(theme,'surfaceColorVariant')}`;