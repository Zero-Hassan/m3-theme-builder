import BuildThemeColors from "./colorsBuilder"
import BuildThemeFonts from "./fontsBuilder"


export  function ThemeBuilder({colors={},fonts={}}){
return {
    colors:BuildThemeColors(colors),
    fonts:BuildThemeFonts(fonts)
}
}
