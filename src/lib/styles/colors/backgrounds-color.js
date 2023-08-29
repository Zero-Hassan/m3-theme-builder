import { css } from "styled-components";

const bgColor=(theme,key)=>theme.colors&& theme.colors[key]?`background-color:${theme.colors[key]};`:'';

export const PrimaryBg=css`${({theme})=> bgColor(theme,'primaryBg')}`;
export const primaryContainerBg=css`${({theme})=> bgColor(theme,'primaryContainerBg')}`;
export const SecondaryBg=css`${({theme})=> bgColor(theme,'secondaryBg')}`;
export const SecondaryContainerBg=css`${({theme})=> bgColor(theme,'secondaryContainerBg')}`;
export const TertiaryBg=css`${({theme})=> bgColor(theme,'tertiaryBg')}`;
export const TertiaryContainerBg=css`${({theme})=> bgColor(theme,'tertiaryContainerBg')}`;
export const ErrorBg=css`${({theme})=> bgColor(theme,'errorBg')}`;
export const ErrorContainerBg=css`${({theme})=> bgColor(theme,'errorContainerBg')}`;
export const SurfaceBg=css`${({theme})=> bgColor(theme,'surfaceBg')}`;
export const SurfaceDimBg=css`${({theme})=> bgColor(theme,'surfaceDimBg')}`;
export const SurfaceBrightBg=css`${({theme})=> bgColor(theme,'surfaceBrightBg')}`;
export const SurfaceContainerBg=css`${({theme})=> bgColor(theme,'surfaceContainerBg')}`;
export const SurfaceContainerLowestBg=css`${({theme})=> bgColor(theme,'surfaceContainerLowestBg')}`;
export const SurfaceContainerLowBg=css`${({theme})=> bgColor(theme,'surfaceContainerLowBg')}`;
export const SurfaceContainerHighestBg=css`${({theme})=> bgColor(theme,'surfaceContainerHighestBg')}`;
export const SurfaceContaineHighrBg=css`${({theme})=> bgColor(theme,'surfaceContainerHighBg')}`;
