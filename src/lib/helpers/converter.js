const px_pt_ratio=1.333333;//1px-->0.75pt;
export const px_pt=(value_in_px)=>value_in_px/px_pt_ratio;
export const pt_px=(value_in_pt)=>value_in_pt*px_pt_ratio;
export const px_rem=(value_in_px,root_element_size)=>value_in_px/root_element_size;
export const rem_px=(value_in_rem,root_element_size)=>value_in_rem*root_element_size;
export const pt_rem=(value_in_pt,root_element_size)=>px_rem(pt_px(value_in_pt),root_element_size);
export const rem_pt=(value_in_rem,root_element_size)=>px_pt(rem_px(value_in_rem,root_element_size));
export const pd_px=(value_in_pd,device_pixel_ratio)=>value_in_pd*(device_pixel_ratio/160);
export const pd_rem=(value_in_pd,root_element_size,device_pixel_ratio)=>value_in_pd!==0?px_rem(pd_px(value_in_pd,device_pixel_ratio),root_element_size):0;
