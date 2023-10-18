import styled from "styled-components"
import { colorsCss } from "../../styles/colors/colors-values"
import { COLORS_SYSTEM } from "../../styles/colors/constants"
import { borderRadiusCss } from "../../styles/shapes/rounded"

const box =(systemColor)=>({$shape,$elevation,$border,$systemColor})=>{

    return `
    ${$shape?borderRadiusCss()({$shape}):''}
    `
}


export const Surface = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE)};
`

export const SurfaceDim = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE_DIM)};
`

export const SurfaceBright = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE_BRIGHT)};
`
export const SurfaceContainer = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE_CONTAINER)};
`

export const SurfaceContainerLowest = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE_CONTAINER_LOWEST)};
`
export const SurfaceContainerLow = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE_CONTAINER_LOW)};
`
export const SurfaceContainerHighest = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE_CONTAINER_HIGHEST)};
`

export const SurfaceContainerHigher = styled.div`
${colorsCss(COLORS_SYSTEM.SURFACE_CONTAINER_HIGHER)};
`

 export const PrimaryBox=styled.div`
 ${box(COLORS_SYSTEM.PRIMARY)}
 ${colorsCss(COLORS_SYSTEM.PRIMARY)};
 `

 export const PrimaryConatinerBox=styled.div`
 ${box(COLORS_SYSTEM.PRIMARY_CONTAINER)}
 ${colorsCss(COLORS_SYSTEM.PRIMARY_CONTAINER)};
 `
 export const SecondaryBox=styled.div`
 ${box(COLORS_SYSTEM.SECONADRY)}
 ${colorsCss(COLORS_SYSTEM.SECONADRY)};
 `
 export const SecondaryContainerBox=styled.div`
 ${box(COLORS_SYSTEM.SECONDARY_CONTAINER)}
 ${colorsCss(COLORS_SYSTEM.SECONDARY_CONTAINER)};
 `
 export const TertairyBox=styled.div`
 ${box(COLORS_SYSTEM.TERTAIRY)}
 ${colorsCss(COLORS_SYSTEM.TERTAIRY)};
 `

 export const TertairyContainerBox=styled.div`
 ${box(COLORS_SYSTEM.TERTAIRY_CONTAINER)}
 ${colorsCss(COLORS_SYSTEM.TERTAIRY_CONTAINER)};
 `
 export const ErrorBox=styled.div`
 ${box(COLORS_SYSTEM.ERROR)}
 ${colorsCss(COLORS_SYSTEM.ERROR)};
 `

 export const ErrorContainerBox=styled.div`
 ${box(COLORS_SYSTEM.ERROR_CONTAINER)}
 ${colorsCss(COLORS_SYSTEM.ERROR_CONTAINER)};
 `