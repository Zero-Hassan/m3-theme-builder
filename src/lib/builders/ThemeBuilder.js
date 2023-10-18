import BuildThemeColors from "./colorsBuilder"
import BuildThemeFonts from "./fontsBuilder"
import { BuildShapes } from "./shapeBuilder"


export  function ThemeBuilder({colors={},fonts={}}){
return {
    colors:BuildThemeColors(colors),
    fonts:BuildThemeFonts(fonts),
    shapes:BuildShapes()
}
}
