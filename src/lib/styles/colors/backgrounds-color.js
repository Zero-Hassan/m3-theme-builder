import { css } from "styled-components";

const bgColor=(theme,key)=>theme.colors&& theme.colors[key]?`background-color:${theme.colors[key]};`:'';

export const Primary=css`${({theme})=> bgColor(theme,'primaryBg')}`;
export const primaryContainer=css`${({theme})=> bgColor(theme,'primaryContainerBg')}`;
export const Secondary=css`${({theme})=> bgColor(theme,'secondaryBg')}`;
export const SecondaryContainer=css`${({theme})=> bgColor(theme,'secondaryContainerBg')}`;
export const Tertiary=css`${({theme})=> bgColor(theme,'tertiaryBg')}`;
export const TertiaryContainer=css`${({theme})=> bgColor(theme,'tertiaryContainerBg')}`;
export const Error=css`${({theme})=> bgColor(theme,'errorBg')}`;
export const ErrorContainer=css`${({theme})=> bgColor(theme,'errorContainerBg')}`;
export const Surface=css`${({theme})=> bgColor(theme,'surfaceBg')}`;
export const SurfaceDim=css`${({theme})=> bgColor(theme,'surfaceDimBg')}`;
export const SurfaceBright=css`${({theme})=> bgColor(theme,'surfaceBrightBg')}`;
export const SurfaceContainer=css`${({theme})=> bgColor(theme,'surfaceContainerBg')}`;
export const SurfaceContainerLowest=css`${({theme})=> bgColor(theme,'surfaceContainerLowestBg')}`;
export const SurfaceContainerLow=css`${({theme})=> bgColor(theme,'surfaceContainerLowBg')}`;
export const SurfaceContainerHighest=css`${({theme})=> bgColor(theme,'surfaceContainerHighestBg')}`;
export const SurfaceContaineHighr=css`${({theme})=> bgColor(theme,'surfaceContainerHighBg')}`;
