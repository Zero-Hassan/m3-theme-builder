
import { getAllHsls } from "../tools/colors"
const LEVELS = {
    KEY_COLOR: {
        base: {
            light: 40,
            dark: 80
        },
        on: {
            light: 100,
            dark: 20
        },
        container: {

            base: {
                light: 90,
                dark: 30
            },
            on: {
                light: 10,
                dark: 90
            }
        },
    },
    SURFACE: {
        base: {
            dark: 6,
            light: 98
        },
        dim: {
            dark: 6,
            light: 87
        },
        bright: {
            dark: 24,
            light: 98
        },

        on: {
            base: {
                dark: 90,
                light: 10
            },
            variant: {
                dark: 80,
                light: 30
            }
        },
        outline: {
            base: {
                dark: 60,
                light: 50
            },

            variant: {
                dark: 30,
                light: 80
            }
        },
        container: {
            base: {
                dark: 12,
                light: 94
            },
            lowest: {
                dark: 4,
                light: 100
            },
            low: {
                dark: 10,
                light: 96
            },
            high: {
                dark: 17,
                light: 92
            },
            highest: {
                dark: 22,
                light: 90
            }
        }
    }
}
const keyColor = (color, level) => {
    const lights = getAllHsls(color);
    return {
        base: {
            dark: lights[LEVELS.KEY_COLOR.base.dark],
            light: lights[LEVELS.KEY_COLOR.base.light],
        },
        on: {
            dark: lights[LEVELS.KEY_COLOR.on.dark],
            light: lights[LEVELS.KEY_COLOR.on.light],
        },
        container: {
            base: {
                dark: lights[LEVELS.KEY_COLOR.container.base.dark],
                light: lights[LEVELS.KEY_COLOR.container.base.light],
            },
            on: {
                light: lights[LEVELS.KEY_COLOR.container.on.light],
                dark: lights[LEVELS.KEY_COLOR.container.on.dark],
            }
        }
    }
}
const NeutralColor = (color,variant) => {
    const lights = getAllHsls(color);
    const variantLights = getAllHsls(variant||color);
    return {
        base: {
            dark: lights[LEVELS.SURFACE.base.dark],
            light: lights[LEVELS.SURFACE.base.light],
        },
        dim: {
            dark: lights[LEVELS.SURFACE.dim.dark],
            light: lights[LEVELS.SURFACE.dim.light],
        },
        bright: {
            dark: lights[LEVELS.SURFACE.bright.dark],
            light: lights[LEVELS.SURFACE.bright.light],
        },
        on: {
            base: {
                dark: lights[LEVELS.SURFACE.on.base.dark],
                light: lights[LEVELS.SURFACE.on.base.light],
            },
            variant: {
                dark: variantLights[LEVELS.SURFACE.on.variant.dark],
                light: variantLights[LEVELS.SURFACE.on.variant.light],
            },
        },
        outline: {
            base: {
                dark: lights[LEVELS.SURFACE.outline.base.dark],
                light: lights[LEVELS.SURFACE.outline.base.light],
            },
            variant: {
                dark: variantLights[LEVELS.SURFACE.outline.variant.dark],
                light: variantLights[LEVELS.SURFACE.outline.variant.light],
            },
        },
        container: {
            base: {
                dark: lights[LEVELS.SURFACE.container.base.dark],
                light: lights[LEVELS.SURFACE.container.base.light],
            },
            lowest: {
                dark: lights[LEVELS.SURFACE.container.lowest.dark],
                light: lights[LEVELS.SURFACE.container.lowest.light],
            },
            low: {
                dark: lights[LEVELS.SURFACE.container.low.dark],
                light: lights[LEVELS.SURFACE.container.low.light],
            },
            high: {
                dark: lights[LEVELS.SURFACE.container.high.dark],
                light: lights[LEVELS.SURFACE.container.high.light],
            },
            highest: {
                dark: lights[LEVELS.SURFACE.container.highest.dark],
                light: lights[LEVELS.SURFACE.container.highest.light],
            },
        }
    }
}

const BuildThemeColors = ({theme='light', primary, secondary, tertiary, error, surface,surfaceVariant }) => {

    const PRIMARY=primary&&keyColor(primary);
    const SECONDARY=secondary&&keyColor(secondary);
    const TERTIARY=tertiary&&keyColor(tertiary);
    const ERROR=error&&keyColor(error);
    const SURFACE=surface&&NeutralColor(surface,surfaceVariant);
    
    return {
        primaryBg:PRIMARY&&PRIMARY.base[theme].string,
        primaryColor:PRIMARY&&PRIMARY.on[theme].string,
        primaryContainerBg:PRIMARY&&PRIMARY.container.base[theme].string,
        primaryContainerColor:PRIMARY&&PRIMARY.container.on[theme].string,
        secoondaryBg:SECONDARY&&SECONDARY.base[theme].string,
        secoondaryColor:SECONDARY&&SECONDARY.on[theme].string,
        secoondaryContainerBg:SECONDARY&&SECONDARY.container.base[theme].string,
        secoondaryContainerColor:SECONDARY&&SECONDARY.container.on[theme].string,
        tertiaryBg:TERTIARY&&TERTIARY.base[theme].string,
        tertiaryColor:TERTIARY&&TERTIARY.on[theme].string,
        tertiaryContainerBg:TERTIARY&&TERTIARY.container.base[theme].string,
        tertiaryContainerColor:TERTIARY&&TERTIARY.container.on[theme].string,
        ErrorBg:ERROR&&ERROR.base[theme].string,
        ErrorColor:ERROR&&ERROR.on[theme].string,
        ErrorContainerBg:ERROR&&ERROR.container.base[theme].string,
        ErrorContainerColor:ERROR&&ERROR.container.on[theme].string,

        surfaceBg:SURFACE&&SURFACE.base[theme].string,
        surfaceDimBg:SURFACE&&SURFACE.dim[theme].string,
        surfaceBrighBg:SURFACE&&SURFACE.bright[theme].string,

        surfaceColor:SURFACE&&SURFACE.on.base[theme].string,
        surfaceColorVariant:SURFACE&&SURFACE.on.variant[theme].string,

        surfaceBorderColor:SURFACE&&SURFACE.outline.base[theme].string,
        surfaceBorderColorVariant:SURFACE&&SURFACE.outline.variant[theme].string,

        surfaceContainerBg:SURFACE&&SURFACE.container.base[theme].string,
        surfaceContainerLowestBg:SURFACE&&SURFACE.container.lowest[theme].string,
        surfaceContainerLowBg:SURFACE&&SURFACE.container.low[theme].string,
        surfaceContainerHighBg:SURFACE&&SURFACE.container.high[theme].string,
        surfaceContainerHighestBg:SURFACE&&SURFACE.container.highest[theme].string,
        
    }
}
export default BuildThemeColors;
