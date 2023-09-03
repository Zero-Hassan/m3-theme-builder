import BuildThemeColors from "./colorsBuilder"


export  function ThemeBuilder({colors={}}){
return {
    colors:BuildThemeColors(colors)
}
}
