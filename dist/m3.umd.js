!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("styled-components")):"function"==typeof define&&define.amd?define(["exports","styled-components"],n):n((r||self).m3ThemeBuilder={},r.styledComponents)}(this,function(r,n){var e,t,o,a,i,s,c,u,l,g,f,h,d,C,m,y,p=function(r,n,e,t){return t||0===t?"hsla("+r+","+n+"%,"+e+"%,"+t+")":"hsl("+r+","+n+"%,"+e+"%)"},B=function(r,n,e,t){return{string:p(r,n,e,t),values:{h:r,s:n,l:e,a:t}}},b=function(r,n,e,t){r/=255,n/=255,e/=255;var o=Math.min(r,n,e),a=Math.max(r,n,e),i=a-o,s=0,c=0;return s=0==i?0:a==r?(n-e)/i%6:a==n?(e-r)/i+2:(r-n)/i+4,(s=Math.round(60*s))<0&&(s+=360),c=(a+o)/2,{h:s,s:+(100*(0==i?0:i/(1-Math.abs(2*c-1)))).toFixed(1),l:c=+(100*c).toFixed(1),a:t}},_=function(r){var n=r.startsWith("rgb")?function(r){var n=function(r){var n=0,e=0,t=0,o=r.indexOf(",")>-1?",":" ",a=(r=r.substr(r.startsWith("rgba")?5:4).split(")")[0].split(o)).length,i=r.includes("%");i?(n=r[0].replace("%","")/100,e=r[1].replace("%","")/100,t=r[2].replace("%","")/100):(n=parseInt(r[0]),e=parseInt(r[1]),t=parseInt(r[2]));var s=a>3?4===a?r[3]:r[4]:null;return s&&i&&(s=s.replace("%","")/100),{r:n,g:e,b:t,a:s}}(r),e=n.r,t=n.g,o=n.b,a=n.a;console.log(e,t,o,a);var i=b(e,t,o),s=i.h,c=i.s,u=i.l;return console.log(s,c,u),B(s,c,u,a)}(r).values:r.startsWith("#")?function(r){var n=function(r){var n=(r=r.replace("#","")).length,e=r.match(/.{1,2}/g),t=function(r,n){return parseInt(r[n],16)};return{r:t(e,0),g:t(e,1),b:t(e,2),a:n%4==0?(t(e,3)/255).toFixed(3):null}}(r),e=n.r,t=n.g,o=n.b,a=n.a;console.log(e,t,o,a);var i=b(e,t,o),s=i.h,c=i.s,u=i.l;return console.log(s,c,u),B(s,c,u,a)}(r).values:r.startsWith("hsl")?function(r){var n=(r=r.replace("deg","")).indexOf(",")>-1?",":" ";r=r.substr(r.startsWith("hsla")?5:4).split(")")[0].split(n),console.log(r);var e=r[0],t=r[1].substr(0,r[1].length-1),o=r[2].substr(0,r[2].length-1),a=r[3]||1;return console.log(e,t,o,a),{h:e,s:t,l:o,a:a}}(r):{},e=n.h,t=n.s,o=n.a;if(!e&&0!==e)throw new Error("The color value is not recognized!");for(var a=[],i=0;i<=100;i++)a.push({string:p(e,t,i,o),values:{h:e,s:t,l:i,a:o}});return a},v=function(r,n){var e=_(r);return{base:{dark:e[80],light:e[40]},on:{dark:e[20],light:e[100]},container:{base:{dark:e[30],light:e[90]},on:{light:e[10],dark:e[90]}}}},S=function(r){var n=r.theme,e=void 0===n?"light":n,t=r.primary,o=r.secondary,a=r.tertiary,i=r.error,s=r.surface,c=r.surfaceVariant,u=t&&v(t),l=o&&v(o),g=a&&v(a),f=i&&v(i),h=s&&function(r,n){var e=_(r),t=_(n||r);return{base:{dark:e[6],light:e[98]},dim:{dark:e[6],light:e[87]},bright:{dark:e[24],light:e[98]},on:{base:{dark:e[90],light:e[10]},variant:{dark:t[80],light:t[30]}},outline:{base:{dark:e[60],light:e[50]},variant:{dark:t[30],light:t[80]}},container:{base:{dark:e[12],light:e[94]},lowest:{dark:e[4],light:e[100]},low:{dark:e[10],light:e[96]},high:{dark:e[17],light:e[92]},highest:{dark:e[22],light:e[90]}}}}(s,c);return{primaryBg:u&&u.base[e].string,primaryColor:u&&u.on[e].string,primaryContainerBg:u&&u.container.base[e].string,primaryContainerColor:u&&u.container.on[e].string,secoondaryBg:l&&l.base[e].string,secoondaryColor:l&&l.on[e].string,secoondaryContainerBg:l&&l.container.base[e].string,secoondaryContainerColor:l&&l.container.on[e].string,tertiaryBg:g&&g.base[e].string,tertiaryColor:g&&g.on[e].string,tertiaryContainerBg:g&&g.container.base[e].string,tertiaryContainerColor:g&&g.container.on[e].string,ErrorBg:f&&f.base[e].string,ErrorColor:f&&f.on[e].string,ErrorContainerBg:f&&f.container.base[e].string,ErrorContainerColor:f&&f.container.on[e].string,surfaceBg:h&&h.base[e].string,surfaceDimBg:h&&h.dim[e].string,surfaceBrighBg:h&&h.bright[e].string,surfaceColor:h&&h.on.base[e].string,surfaceColorVariant:h&&h.on.variant[e].string,surfaceBorderColor:h&&h.outline.base[e].string,surfaceBorderColorVariant:h&&h.outline.variant[e].string,surfaceContainerBg:h&&h.container.base[e].string,surfaceContainerLowestBg:h&&h.container.lowest[e].string,surfaceContainerLowBg:h&&h.container.low[e].string,surfaceContainerHighBg:h&&h.container.high[e].string,surfaceContainerHighestBg:h&&h.container.highest[e].string}},k={__proto__:null,Colors:{__proto__:null,default:S},Theme:{__proto__:null,ThemeBuilder:function(r){var n=r.colors;return{colors:S(void 0===n?{}:n)}}}};function w(r,n){return n||(n=r.slice(0)),r.raw=n,r}var T,x,E,V,H,L,W,F,I,M,D,P,O=function(r,n){return r.colors&&r.colors[n]?"background-color:"+r.colors[n]+";":""},j={__proto__:null,Primary:n.css(e||(e=w(["",""])),function(r){return O(r.theme,"primaryBg")}),primaryContainer:n.css(t||(t=w(["",""])),function(r){return O(r.theme,"primaryContainerBg")}),Secondary:n.css(o||(o=w(["",""])),function(r){return O(r.theme,"secondaryBg")}),SecondaryContainer:n.css(a||(a=w(["",""])),function(r){return O(r.theme,"secondaryContainerBg")}),Tertiary:n.css(i||(i=w(["",""])),function(r){return O(r.theme,"tertiaryBg")}),TertiaryContainer:n.css(s||(s=w(["",""])),function(r){return O(r.theme,"tertiaryContainerBg")}),Error:n.css(c||(c=w(["",""])),function(r){return O(r.theme,"errorBg")}),ErrorContainer:n.css(u||(u=w(["",""])),function(r){return O(r.theme,"errorContainerBg")}),Surface:n.css(l||(l=w(["",""])),function(r){return O(r.theme,"surfaceBg")}),SurfaceDim:n.css(g||(g=w(["",""])),function(r){return O(r.theme,"surfaceDimBg")}),SurfaceBright:n.css(f||(f=w(["",""])),function(r){return O(r.theme,"surfaceBrightBg")}),SurfaceContainer:n.css(h||(h=w(["",""])),function(r){return O(r.theme,"surfaceContainerBg")}),SurfaceContainerLowest:n.css(d||(d=w(["",""])),function(r){return O(r.theme,"surfaceContainerLowestBg")}),SurfaceContainerLow:n.css(C||(C=w(["",""])),function(r){return O(r.theme,"surfaceContainerLowBg")}),SurfaceContainerHighest:n.css(m||(m=w(["",""])),function(r){return O(r.theme,"surfaceContainerHighestBg")}),SurfaceContaineHighr:n.css(y||(y=w(["",""])),function(r){return O(r.theme,"surfaceContainerHighBg")})},q=function(r,n){return r.colors&&r.colors[n]?"border-color:"+r.colors[n]+";":""},z=n.css(T||(T=w(["",""])),function(r){return q(r.theme,"surfaceBorderColor")}),A=n.css(x||(x=w(["",""])),function(r){return q(r.theme,"surfaceBorderColorVariant")}),G=function(r,n){return console.log(r,n),r.colors&&r.colors[n]?"color:"+r.colors[n]+";":""},J={__proto__:null,Colors:{__proto__:null,Bg:j,Border:{__proto__:null,Surface:z,SurfaceVariant:A},Font:{__proto__:null,Primary:n.css(E||(E=w(["",""])),function(r){return G(r.theme,"primaryColor")}),PrimaryContainer:n.css(V||(V=w(["",""])),function(r){return G(r.theme,"primaryContainerColor")}),Secondary:n.css(H||(H=w(["",""])),function(r){return G(r.theme,"secondaryColor")}),SecondaryContainer:n.css(L||(L=w(["",""])),function(r){return G(r.theme,"secondaryContainerColor")}),Tertiary:n.css(W||(W=w(["",""])),function(r){return G(r.theme,"tertiaryColor")}),TertiaryContainer:n.css(F||(F=w(["",""])),function(r){return G(r.theme,"tertiaryContainerColor")}),Error:n.css(I||(I=w(["",""])),function(r){return G(r.theme,"errorColor")}),ErrorContainer:n.css(M||(M=w(["",""])),function(r){return G(r.theme,"errorContainerColor")}),Surface:n.css(D||(D=w(["",""])),function(r){return G(r.theme,"surfaceColor")}),SurfaceVariant:n.css(P||(P=w(["",""])),function(r){return G(r.theme,"surfaceColorVariant")})},Shadow:{__proto__:null}}};r.Builders=k,r.Styles=J});
//# sourceMappingURL=m3.umd.js.map
