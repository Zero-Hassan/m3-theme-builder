import{css as r}from"styled-components";const e=(r,e,t,o)=>o||0===o?`hsla(${r},${e}%,${t}%,${o})`:`hsl(${r},${e}%,${t}%)`,t=(r,t,o,n)=>({string:e(r,t,o,n),values:{h:r,s:t,l:o,a:n}}),o=(r,e,t,o)=>{r/=255,e/=255,t/=255;let n=Math.min(r,e,t),a=Math.max(r,e,t),i=a-n,s=0,l=0,g=0;return s=0==i?0:a==r?(e-t)/i%6:a==e?(t-r)/i+2:(r-e)/i+4,s=Math.round(60*s),s<0&&(s+=360),g=(a+n)/2,l=0==i?0:i/(1-Math.abs(2*g-1)),l=+(100*l).toFixed(1),g=+(100*g).toFixed(1),{h:s,s:l,l:g,a:o}},n=r=>{let{h:n,s:a,a:i}=r.startsWith("rgb")?(r=>{const{r:e,g:n,b:a,a:i}=(r=>{let e=0,t=0,o=0,n=r.indexOf(",")>-1?",":" ";const a=(r=r.substr(r.startsWith("rgba")?5:4).split(")")[0].split(n)).length,i=r.includes("%");i?(e=r[0].replace("%","")/100,t=r[1].replace("%","")/100,o=r[2].replace("%","")/100):(e=parseInt(r[0]),t=parseInt(r[1]),o=parseInt(r[2]));let s=a>3?4===a?r[3]:r[4]:null;return s&&i&&(s=s.replace("%","")/100),{r:e,g:t,b:o,a:s}})(r);console.log(e,n,a,i);const{h:s,s:l,l:g}=o(e,n,a);return console.log(s,l,g),t(s,l,g,i)})(r).values:r.startsWith("#")?(r=>{const{r:e,g:n,b:a,a:i}=(r=>{const e=(r=r.replace("#","")).length,t=r.match(/.{1,2}/g);let o,n,a,i=null;const s=(r,e)=>parseInt(r[e],16);return o=s(t,0),n=s(t,1),a=s(t,2),i=e%4==0?(s(t,3)/255).toFixed(3):null,{r:o,g:n,b:a,a:i}})(r);console.log(e,n,a,i);const{h:s,s:l,l:g}=o(e,n,a);return console.log(s,l,g),t(s,l,g,i)})(r).values:r.startsWith("hsl")?(r=>{let e=(r=r.replace("deg","")).indexOf(",")>-1?",":" ";r=r.substr(r.startsWith("hsla")?5:4).split(")")[0].split(e),console.log(r);let t=r[0],o=r[1].substr(0,r[1].length-1),n=r[2].substr(0,r[2].length-1),a=r[3]||1;return console.log(t,o,n,a),{h:t,s:o,l:n,a}})(r):{};if(!n&&0!==n)throw new Error("The color value is not recognized!");const s=[];for(let r=0;r<=100;r++)s.push({string:e(n,a,r,i),values:{h:n,s:a,l:r,a:i}});return s},a=(r,e)=>{const t=n(r);return{base:{dark:t[80],light:t[40]},on:{dark:t[20],light:t[100]},container:{base:{dark:t[30],light:t[90]},on:{light:t[10],dark:t[90]}}}},i=({theme:r="light",primary:e,secondary:t,tertiary:o,error:i,surface:s,surfaceVariant:l})=>{const g=e&&a(e),c=t&&a(t),h=o&&a(o),u=i&&a(i),C=s&&((r,e)=>{const t=n(r),o=n(e||r);return{base:{dark:t[6],light:t[98]},dim:{dark:t[6],light:t[87]},bright:{dark:t[24],light:t[98]},on:{base:{dark:t[90],light:t[10]},variant:{dark:o[80],light:o[30]}},outline:{base:{dark:t[60],light:t[50]},variant:{dark:o[30],light:o[80]}},container:{base:{dark:t[12],light:t[94]},lowest:{dark:t[4],light:t[100]},low:{dark:t[10],light:t[96]},high:{dark:t[17],light:t[92]},highest:{dark:t[22],light:t[90]}}}})(s,l);return{primaryBg:g&&g.base[r].string,primaryColor:g&&g.on[r].string,primaryContainerBg:g&&g.container.base[r].string,primaryContainerColor:g&&g.container.on[r].string,secoondaryBg:c&&c.base[r].string,secoondaryColor:c&&c.on[r].string,secoondaryContainerBg:c&&c.container.base[r].string,secoondaryContainerColor:c&&c.container.on[r].string,tertiaryBg:h&&h.base[r].string,tertiaryColor:h&&h.on[r].string,tertiaryContainerBg:h&&h.container.base[r].string,tertiaryContainerColor:h&&h.container.on[r].string,ErrorBg:u&&u.base[r].string,ErrorColor:u&&u.on[r].string,ErrorContainerBg:u&&u.container.base[r].string,ErrorContainerColor:u&&u.container.on[r].string,surfaceBg:C&&C.base[r].string,surfaceDimBg:C&&C.dim[r].string,surfaceBrighBg:C&&C.bright[r].string,surfaceColor:C&&C.on.base[r].string,surfaceColorVariant:C&&C.on.variant[r].string,surfaceBorderColor:C&&C.outline.base[r].string,surfaceBorderColorVariant:C&&C.outline.variant[r].string,surfaceContainerBg:C&&C.container.base[r].string,surfaceContainerLowestBg:C&&C.container.lowest[r].string,surfaceContainerLowBg:C&&C.container.low[r].string,surfaceContainerHighBg:C&&C.container.high[r].string,surfaceContainerHighestBg:C&&C.container.highest[r].string}};var s={__proto__:null,Colors:{__proto__:null,default:i},Theme:{__proto__:null,ThemeBuilder:function({colors:r={}}){return{colors:i(r)}}}};let l,g,c,h,u,C,m,d,f,B,y,$,p,_,b,S,k=r=>r;const w=(r,e)=>r.colors&&r.colors[e]?`background-color:${r.colors[e]};`:"";var v={__proto__:null,Primary:r(l||(l=k`${0}`),({theme:r})=>w(r,"primaryBg")),primaryContainer:r(g||(g=k`${0}`),({theme:r})=>w(r,"primaryContainerBg")),Secondary:r(c||(c=k`${0}`),({theme:r})=>w(r,"secondaryBg")),SecondaryContainer:r(h||(h=k`${0}`),({theme:r})=>w(r,"secondaryContainerBg")),Tertiary:r(u||(u=k`${0}`),({theme:r})=>w(r,"tertiaryBg")),TertiaryContainer:r(C||(C=k`${0}`),({theme:r})=>w(r,"tertiaryContainerBg")),Error:r(m||(m=k`${0}`),({theme:r})=>w(r,"errorBg")),ErrorContainer:r(d||(d=k`${0}`),({theme:r})=>w(r,"errorContainerBg")),Surface:r(f||(f=k`${0}`),({theme:r})=>w(r,"surfaceBg")),SurfaceDim:r(B||(B=k`${0}`),({theme:r})=>w(r,"surfaceDimBg")),SurfaceBright:r(y||(y=k`${0}`),({theme:r})=>w(r,"surfaceBrightBg")),SurfaceContainer:r($||($=k`${0}`),({theme:r})=>w(r,"surfaceContainerBg")),SurfaceContainerLowest:r(p||(p=k`${0}`),({theme:r})=>w(r,"surfaceContainerLowestBg")),SurfaceContainerLow:r(_||(_=k`${0}`),({theme:r})=>w(r,"surfaceContainerLowBg")),SurfaceContainerHighest:r(b||(b=k`${0}`),({theme:r})=>w(r,"surfaceContainerHighestBg")),SurfaceContaineHighr:r(S||(S=k`${0}`),({theme:r})=>w(r,"surfaceContainerHighBg"))};let E,x,T=r=>r;const V=(r,e)=>r.colors&&r.colors[e]?`border-color:${r.colors[e]};`:"",H=r(E||(E=T`${0}`),({theme:r})=>V(r,"surfaceBorderColor")),L=r(x||(x=T`${0}`),({theme:r})=>V(r,"surfaceBorderColorVariant"));let W,F,I,M,D,P,O,z,j,q,A=r=>r;const G=(r,e)=>(console.log(r,e),r.colors&&r.colors[e]?`color:${r.colors[e]};`:"");var J={__proto__:null,Colors:{__proto__:null,Bg:v,Border:{__proto__:null,Surface:H,SurfaceVariant:L},Font:{__proto__:null,Primary:r(W||(W=A`${0}`),({theme:r})=>G(r,"primaryColor")),PrimaryContainer:r(F||(F=A`${0}`),({theme:r})=>G(r,"primaryContainerColor")),Secondary:r(I||(I=A`${0}`),({theme:r})=>G(r,"secondaryColor")),SecondaryContainer:r(M||(M=A`${0}`),({theme:r})=>G(r,"secondaryContainerColor")),Tertiary:r(D||(D=A`${0}`),({theme:r})=>G(r,"tertiaryColor")),TertiaryContainer:r(P||(P=A`${0}`),({theme:r})=>G(r,"tertiaryContainerColor")),Error:r(O||(O=A`${0}`),({theme:r})=>G(r,"errorColor")),ErrorContainer:r(z||(z=A`${0}`),({theme:r})=>G(r,"errorContainerColor")),Surface:r(j||(j=A`${0}`),({theme:r})=>G(r,"surfaceColor")),SurfaceVariant:r(q||(q=A`${0}`),({theme:r})=>G(r,"surfaceColorVariant"))},Shadow:{__proto__:null}}};export{s as Builders,J as Styles};
//# sourceMappingURL=m3.modern.mjs.map
