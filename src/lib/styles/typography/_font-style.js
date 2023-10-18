import { pt_rem, px_rem } from "../../helpers/converter";

const parseValue=(value,root_element_size)=>{
 
    const unit=value.trimEnd().substr(-2);
  const valueInt= Number(value.replace(unit,''));
 
 root_element_size = root_element_size || window.getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('font-size').replace("px","") || 16;

  if(typeof valueInt== NaN) throw new Error("The value unit must be px,pt or rem");
  switch (unit) {
    case "px":
        return px_rem(valueInt,root_element_size);
        case "pt":
        return pt_rem(valueInt,root_element_size);
        case "rem":
        return valueInt;
    default:
        throw new Error("The value unit must be px,pt or rem");
  }

}
export default function fontStyle(themeFonts,displayType,displaySize){
    const {size,weight,spacing,height}=themeFonts[displayType][displaySize];
    const {family,rootElementSize}=themeFonts;
    return `font-size:${parseValue(size,rootElementSize)}rem;
            font-family:${family || "'Roboto', sans-serif"};
            font-weight:${weight};
            letter-spacing:${parseValue(spacing,rootElementSize)}rem;
            line-height:${parseValue(height,rootElementSize)}rem;
    `;
}