import BuildThemeColors from "./colorsBuilder"


export default function ThemeBuilder({colors={}}){
return {
    colors:BuildThemeColors(colors)
}
}
