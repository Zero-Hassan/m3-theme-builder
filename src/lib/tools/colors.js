
const hslValues = (hsl) => {
    hsl=hsl.replace("deg","");
    let sep = hsl.indexOf(",") > -1 ? "," : " ";
    hsl = hsl.substr(hsl.startsWith("hsla")?5:4).split(")")[0].split(sep);
  console.log(hsl);
    let h = hsl[0],
        s = hsl[1].substr(0, hsl[1].length - 1),
        l = hsl[2].substr(0, hsl[2].length - 1),
        a = hsl[3] || 1;
        console.log(h,s,l,a);
    return { h, s, l, a };
};
const hslString = (h, s, l, a) => a || a === 0 ? `hsla(${h},${s}%,${l}%,${a})` : `hsl(${h},${s}%,${l}%)`;
const hslObject = (h, s, l, a) => ({
    string: hslString(h, s, l, a),
    values: { h, s, l, a }
});

const rgbValues = (rgb) => {
    let r = 0, g = 0, b = 0;
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(rgb.startsWith("rgba")?5:4).split(")")[0].split(sep);
    const length = rgb.length;
    const percent = rgb.includes("%");
    if (percent) {
        r = rgb[0].replace("%", "") / 100;
        g = rgb[1].replace("%", "") / 100;
        b = rgb[2].replace("%", "") / 100;
    } else {
        r = parseInt(rgb[0]);
        g = parseInt(rgb[1]);
        b = parseInt(rgb[2]);
    }
    let a = length > 3 ? length === 4 ? rgb[3] : rgb[4] : null;
    if (a && percent) a = a.replace("%", "") / 100;
    return { r, g, b, a }
};
const hexValues = (hex) => {
    hex = hex.replace("#", "");
    const length = hex.length;
    const value = length > 4 ? hex.match(/.{1,2}/g) : hex.match(/.{1,2}/g);
    let r, g, b, a = null;
    const int = (from, position) => parseInt(from[position], 16);
    r = int(value, 0);
    g = int(value, 1);
    b = int(value, 2);
    a = length % 4 === 0 ? (int(value, 3) / 255).toFixed(3) : null;
    return { r, g, b, a }
};

const HSLFromRGBValues = (r, g, b,a) => {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
      // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);   
  return { h, s, l, a }; 
}

const rgbToHsl = (rgb) => {
    const { r, g, b, a } = rgbValues(rgb);
    console.log(r,g,b,a);
    const { h, s, l } = HSLFromRGBValues(r, g, b)
    console.log(h,s,l);
    return hslObject(h, s, l, a);
};
const hexToRgb = (hex) => {
    const { r, g, b, a } = hexValues(hex);
    return {
        string: a ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`,
        values: { r, g, b, a }
    }
};
const hexToHsl = (hex) => {
    const { r, g, b, a } = hexValues(hex);
    console.log(r,g,b,a);
    const { h, s, l } = HSLFromRGBValues(r, g, b);
    console.log(h,s,l);
    return hslObject(h, s, l, a)
};


const HSLCACHE={};

export const getAllHsls = (color) => {

    let { h, s, l, a } = color.startsWith("rgb") ? rgbToHsl(color).values : color.startsWith("#") ? hexToHsl(color).values : color.startsWith("hsl") ? hslValues(color) : {};
    if (!h && h!==0) throw new Error("The color value is not recognized!");
    const hsls = [];
  
    for (let index = 0; index <= 100; index++) {
        hsls.push({
            string: hslString(h, s,index,a),
            values: { h, s, l: index, a },
        });

    }
    return hsls
};


export const getColorWithLight=(color,light)=>{
    if(!HSLCACHE[color]) HSLCACHE[color]=getAllHsls(color);
    return HSLCACHE[color][light];
}