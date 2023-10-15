const px_pt_ratio=6/8;//6pt-->8px;
export const px_pt=(value_in_px)=>value_in_px/px_pt_ratio;
export const pt_px=(value_in_pt)=>value_in_pt*px_pt_ratio;
export const px_rem=(value_in_px,root_element_size=16)=>value_in_px/root_element_size;
export const rem_px=(value_in_rem,root_element_size=16)=>value_in_rem*root_element_size;
export const pt_rem=(value_in_pt,root_element_size=16)=>px_rem(pt_px(value_in_pt),root_element_size);
export const rem_pt=(value_in_rem,root_element_size=16)=>px_pt(rem_px(value_in_rem,root_element_size));
