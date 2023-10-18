import { pd_rem } from "../helpers/converter";
//`top-left top-right bottom-right bottom-left

const parseValues=(...args)=>args.map(a=>`${pd_rem(a,document.documentElement.computedStyleMap().get('font-size')||16,window.devicePixelRatio)}rem`).join(" ")
export const SHAPE_TOKENS={
    EXTRA_SMALL_ROUNDING:parseValues([4]),
    SMALL_ROUNDING:parseValues([8]),
    MEDUIM_ROUNDING:parseValues([12]),
    LARGE_ROUNDING:parseValues([16]),
    EXTRA_LARGE_ROUNDING:parseValues([28]),
    FULL_ROUNDED:'50%',
    
    EXTRA_SMALL_START_ROUNDING:parseValues([4,0,0,4]),
    SMALL_START_ROUNDING:parseValues([8,0,0,8]),
    MEDUIM_START_ROUNDING:parseValues([12,0,0,12]),
    LARGE_START_ROUNDING:parseValues([16,0,0,16]),
    EXTRA_LARGE_START_ROUNDING:parseValues([28,0,0,28]),
    
    EXTRA_SMALL_END_ROUNDING:parseValues([0,4,4,0]),
    SMALL_END_ROUNDING:parseValues([0,8,8,0]),
    MEDUIM_END_ROUNDING:parseValues([0,12,12,0]),
    LARGE_END_ROUNDING:parseValues([0,16,16,0]),
    EXTRA_LARGE_END_ROUNDING:parseValues([0,28,28,0]),
    
    EXTRA_SMALL_TOP_ROUNDING:parseValues([4,4,0,0]),
    SMALL_TOP_ROUNDING:parseValues([8,8,0,0]),
    MEDUIM_TOP_ROUNDING:parseValues([12,12,0,0]),
    LARGE_TOP_ROUNDING:parseValues([16,16,0,0]),
    EXTRA_LARGE_TOP_ROUNDING:parseValues([28,28,0,0]),
    
    EXTRA_SMALL_BOTTOM_ROUNDING:parseValues([0,0,4,4]),
    SMALL_BOTTOM_ROUNDING:parseValues([0,0,8,8]),
    MEDUIM_BOTTOM_ROUNDING:parseValues([0,0,12,12]),
    LARGE_BOTTOM_ROUNDING:parseValues([0,0,16,16]),
    EXTRA_LARGE_BOTTOM_ROUNDING:parseValues([0,0,28,28])
    };
export const BuildShapes=()=>SHAPE_TOKENS;
