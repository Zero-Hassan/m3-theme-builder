import { BACKGROUND_COLORS, BORDER_COLOR, COLORS_SYSTEM, FONT_COLOR } from "./constants"


const COLORS_VALUES = {
    PRIMARY: [BACKGROUND_COLORS.PRIMARY, FONT_COLOR.PRIMARY, BORDER_COLOR.SURFACE],
    PRIMARY_CONTAINER: [BACKGROUND_COLORS.PRIMARY_CONTAINER, FONT_COLOR.PRIMARY_CONTAINER, BORDER_COLOR.SURFACE],
    SECONADRY: [BACKGROUND_COLORS.SECONDARY, FONT_COLOR.SECONDARY, BORDER_COLOR.SURFACE],
    SECONDARY_CONTAINER: [BACKGROUND_COLORS.SECONDARY_CONTAINER, FONT_COLOR.SECONDARY_CONTAINER, BORDER_COLOR.SURFACE],
    TERTAIRY: [BACKGROUND_COLORS.TERTAIRY, FONT_COLOR.TERTAIRY, BORDER_COLOR.SURFACE],
    TERTAIRY_CONTAINER: [BACKGROUND_COLORS.TERTAIRY_CONTAINER, FONT_COLOR.TERTAIRY_CONTAINER, BORDER_COLOR.SURFACE],
    ERROR: [BACKGROUND_COLORS.ERROR, FONT_COLOR.ERROR, BORDER_COLOR.SURFACE],
    ERROR_CONTAINER: [BACKGROUND_COLORS.ERROR_CONTAINER, FONT_COLOR.ERROR_CONTAINER, BORDER_COLOR.SURFACE],
    SURFACE: [BACKGROUND_COLORS.SURFACE, FONT_COLOR.SURFACE, BORDER_COLOR.SURFACE],
    SURFACE_DIM: [BACKGROUND_COLORS.SURFACE_DIM, FONT_COLOR.SURFACE_DIM, BORDER_COLOR.SURFACE],
    SURFACE_BRIGHT: [BACKGROUND_COLORS.SURFACE_BRIGHT, FONT_COLOR.SURFACE_BRIGHT, BORDER_COLOR.SURFACE],
    SURFACE_CONTAINER: [BACKGROUND_COLORS.SECONDARY_CONTAINER, FONT_COLOR.SECONDARY_CONTAINER, BORDER_COLOR.SURFACE],
    SURFACE_CONTAINER_LOWEST: [BACKGROUND_COLORS.SURFACE_CONTAINER_LOWEST, FONT_COLOR.SURFACE_CONTAINER_LOWEST, BORDER_COLOR.SURFACE],
    SURFACE_CONTAINER_LOW: [BACKGROUND_COLORS.SURFACE_CONTAINER_LOW, FONT_COLOR.SURFACE_CONTAINER_LOW, BORDER_COLOR.SURFACE],
    SURFACE_CONTAINER_HIGHEST: [BACKGROUND_COLORS.SURFACE_CONTAINER_HIGHEST, FONT_COLOR.SURFACE_CONTAINER_HIGHEST, BORDER_COLOR.SURFACE],
    SURFACE_CONTAINER_HIGHER: [BACKGROUND_COLORS.SURFACE_CONTAINER_HIGHER, FONT_COLOR.SURFACE_CONTAINER_HIGHER, BORDER_COLOR.SURFACE],
}

export const colorsCss = (key) => ({ theme, $colorSystem, $hover }) => {
    if (!$colorSystem && !key) return '';
    const bgKey = COLORS_VALUES[$colorSystem || key][0];
    const fontKey = COLORS_VALUES[$colorSystem || key][1];
    const borderKey = COLORS_VALUES[$colorSystem || key][2];
    return `
    ${theme.colors && theme.colors[bgKey] ? `background-color:${theme.colors[bgKey]};` : ''}
    ${theme.colors && theme.colors[fontKey] ? `color:${theme.colors[fontKey]};` : ''}
    ${theme.colors && theme.colors[borderKey] ? `border-color:${theme.colors[borderKey]};` : ''}
    ${$hover && (
        `
        transition: color, background-color 0.3s linear;
        cursor:pointer;
        &:hover{
        ${theme.colors && theme.colors[fontKey] ? `background-color:${theme.colors[fontKey]};` : ''}
        ${theme.colors && theme.colors[bgKey] ? `color:${theme.colors[bgKey]};` : ''}
    }
    `)}
    `
}
