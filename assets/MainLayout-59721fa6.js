import{b as m,w as le,r as s,t as ue,v as de,x as pe,y as fe,z as me,A as ge,f as j,B as he,C as ye,c as O,D as X,s as ve,E as be,l as W,k as I,F as ke,G as Ce,H as _e,j as C,I as q,T as Se,i as xe,d as Y}from"./index-9e8e01a3.js";import{i as $e,s as G}from"./index-655f8161.js";function ee(e,t,r=void 0){const n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((a,i)=>{if(i){const u=t(i);u!==""&&a.push(u),r&&r[i]&&a.push(r[i])}return a},[]).join(" ")}),n}const z=e=>e,we=()=>{let e=z;return{configure(t){e=t},generate(t){return e(t)},reset(){e=z}}},He=we(),Le=He,Ee={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Z(e,t,r="Mui"){const n=Ee[t];return n?`${r}-${n}`:`${Le.generate(e)}-${t}`}function Ve(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=Z(e,o,r)}),n}var Te=$e,Pe=function(t){return t!=="theme"},U=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Te:Pe},K=function(t,r,n){var o;if(r){var a=r.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},Fe=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return fe(r,n,o),me(function(){return ge(r,n,o)}),null},Oe=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,a,i;r!==void 0&&(a=r.label,i=r.target);var u=K(t,r,n),c=u||U(o),l=!c("as");return function(){var f=arguments,g=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&g.push("label:"+a+";"),f[0]==null||f[0].raw===void 0)g.push.apply(g,f);else{g.push(f[0][0]);for(var _=f.length,S=1;S<_;S++)g.push(f[S],f[0][S])}var h=le(function(p,b,$){var H=l&&p.as||o,w="",y=[],k=p;if(p.theme==null){k={};for(var L in p)k[L]=p[L];k.theme=s.useContext(ue)}typeof p.className=="string"?w=de(b.registered,y,p.className):p.className!=null&&(w=p.className+" ");var T=pe(g.concat(y),b.registered,k);w+=b.key+"-"+T.name,i!==void 0&&(w+=" "+i);var M=l&&u===void 0?U(H):c,P={};for(var d in p)l&&d==="as"||M(d)&&(P[d]=p[d]);return P.className=w,P.ref=$,s.createElement(s.Fragment,null,s.createElement(Fe,{cache:b,serialized:T,isStringTag:typeof H=="string"}),s.createElement(H,P))});return h.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=g,h.__emotion_forwardProp=u,Object.defineProperty(h,"toString",{value:function(){return"."+i}}),h.withComponent=function(p,b){return e(p,m({},r,b,{shouldForwardProp:K(h,b,!0)})).apply(void 0,g)},h}},je=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],N=Oe.bind();je.forEach(function(e){N[e]=N(e)});/**
 * @mui/styled-engine v5.14.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Me(e,t){return N(e,t)}const Be=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Re=["sx"],Ie=e=>{var t,r;const n={systemProps:{},otherProps:{}},o=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:he;return Object.keys(e).forEach(a=>{o[a]?n.systemProps[a]=e[a]:n.otherProps[a]=e[a]}),n};function te(e){const{sx:t}=e,r=j(e,Re),{systemProps:n,otherProps:o}=Ie(r);let a;return Array.isArray(t)?a=[n,...t]:typeof t=="function"?a=(...i)=>{const u=t(...i);return ye(u)?m({},n,u):n}:a=m({},n,t),m({},o,{sx:a})}function re(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=re(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function ne(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=re(e))&&(n&&(n+=" "),n+=t);return n}const Ne=["variant"];function J(e){return e.length===0}function oe(e){const{variant:t}=e,r=j(e,Ne);let n=t||"";return Object.keys(r).sort().forEach(o=>{o==="color"?n+=J(n)?e[o]:O(e[o]):n+=`${J(n)?o:O(o)}${O(e[o].toString())}`}),n}const Ge=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Ze(e){return Object.keys(e).length===0}function De(e){return typeof e=="string"&&e.charCodeAt(0)>96}const Ae=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,We=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);const n={};return r.forEach(o=>{const a=oe(o.props);n[a]=o.style}),n},qe=(e,t,r,n)=>{var o;const{ownerState:a={}}=e,i=[],u=r==null||(o=r.components)==null||(o=o[n])==null?void 0:o.variants;return u&&u.forEach(c=>{let l=!0;Object.keys(c.props).forEach(f=>{a[f]!==c.props[f]&&e[f]!==c.props[f]&&(l=!1)}),l&&i.push(t[oe(c.props)])}),i};function B(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ze=X(),Ue=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function F({defaultTheme:e,theme:t,themeId:r}){return Ze(t)?e:t[r]||t}function Ke(e){return e?(t,r)=>r[e]:null}function ae(e={}){const{themeId:t,defaultTheme:r=ze,rootShouldForwardProp:n=B,slotShouldForwardProp:o=B}=e,a=i=>ve(m({},i,{theme:F(m({},i,{defaultTheme:r,themeId:t}))}));return a.__mui_systemSx=!0,(i,u={})=>{Be(i,y=>y.filter(k=>!(k!=null&&k.__mui_systemSx)));const{name:c,slot:l,skipVariantsResolver:f,skipSx:g,overridesResolver:_=Ke(Ue(l))}=u,S=j(u,Ge),h=f!==void 0?f:l&&l!=="Root"&&l!=="root"||!1,p=g||!1;let b,$=B;l==="Root"||l==="root"?$=n:l?$=o:De(i)&&($=void 0);const H=Me(i,m({shouldForwardProp:$,label:b},S)),w=(y,...k)=>{const L=k?k.map(d=>typeof d=="function"&&d.__emotion_real!==d?E=>d(m({},E,{theme:F(m({},E,{defaultTheme:r,themeId:t}))})):d):[];let T=y;c&&_&&L.push(d=>{const E=F(m({},d,{defaultTheme:r,themeId:t})),D=Ae(c,E);if(D){const A={};return Object.entries(D).forEach(([ce,R])=>{A[ce]=typeof R=="function"?R(m({},d,{theme:E})):R}),_(d,A)}return null}),c&&!h&&L.push(d=>{const E=F(m({},d,{defaultTheme:r,themeId:t}));return qe(d,We(c,E),E,c)}),p||L.push(a);const M=L.length-k.length;if(Array.isArray(y)&&M>0){const d=new Array(M).fill("");T=[...y,...d],T.raw=[...y.raw,...d]}else typeof y=="function"&&y.__emotion_real!==y&&(T=d=>y(m({},d,{theme:F(m({},d,{defaultTheme:r,themeId:t}))})));const P=H(T,...L);return i.muiName&&(P.muiName=i.muiName),P};return H.withConfig&&(w.withConfig=H.withConfig),w}}const Je=ae(),Qe=Je,Xe=["component","direction","spacing","divider","children","className","useFlexGap"],Ye=X(),et=Qe("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function tt(e){return be({props:e,name:"MuiStack",defaultTheme:Ye})}function rt(e,t){const r=s.Children.toArray(e).filter(Boolean);return r.reduce((n,o,a)=>(n.push(o),a<r.length-1&&n.push(s.cloneElement(t,{key:`separator-${a}`})),n),[])}const nt=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ot=({ownerState:e,theme:t})=>{let r=m({display:"flex",flexDirection:"column"},W({theme:t},I({values:e.direction,breakpoints:t.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=ke(t),o=Object.keys(t.breakpoints.values).reduce((c,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(c[l]=!0),c),{}),a=I({values:e.direction,base:o}),i=I({values:e.spacing,base:o});typeof a=="object"&&Object.keys(a).forEach((c,l,f)=>{if(!a[c]){const _=l>0?a[f[l-1]]:"column";a[c]=_}}),r=Ce(r,W({theme:t},i,(c,l)=>e.useFlexGap?{gap:q(n,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${nt(l?a[l]:e.direction)}`]:q(n,c)}}))}return r=_e(t.breakpoints,r),r};function at(e={}){const{createStyledComponent:t=et,useThemeProps:r=tt,componentName:n="MuiStack"}=e,o=()=>ee({root:["root"]},c=>Z(n,c),{}),a=t(ot);return s.forwardRef(function(c,l){const f=r(c),g=te(f),{component:_="div",direction:S="column",spacing:h=0,divider:p,children:b,className:$,useFlexGap:H=!1}=g,w=j(g,Xe),y={direction:S,spacing:h,useFlexGap:H},k=o();return C.jsx(a,m({as:_,ownerState:y,ref:l,className:ne(k.root,$)},w,{children:p?rt(b,p):b}))})}const st=e=>B(e)&&e!=="classes",it=ae({themeId:Se,defaultTheme:xe,rootShouldForwardProp:st}),v=it;function ct(e){return Z("MuiTypography",e)}Ve("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const lt=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ut=e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:i}=e,u={root:["root",a,e.align!=="inherit"&&`align${O(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return ee(u,ct,i)},dt=v("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${O(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>m({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Q={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},pt={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ft=e=>pt[e]||e,mt=s.forwardRef(function(t,r){const n=Y({props:t,name:"MuiTypography"}),o=ft(n.color),a=te(m({},n,{color:o})),{align:i="inherit",className:u,component:c,gutterBottom:l=!1,noWrap:f=!1,paragraph:g=!1,variant:_="body1",variantMapping:S=Q}=a,h=j(a,lt),p=m({},a,{align:i,color:o,className:u,component:c,gutterBottom:l,noWrap:f,paragraph:g,variant:_,variantMapping:S}),b=c||(g?"p":S[_]||Q[_])||"span",$=ut(p);return C.jsx(dt,m({as:b,ref:r,ownerState:p,className:ne($.root,u)},h))}),Bt=mt,gt=at({createStyledComponent:v("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>Y({props:e,name:"MuiStack"})}),Rt=gt,ht=v("div")(({colorSchema:e,theme:{extendPalette:t}})=>({position:"relative",width:"100%",minHeight:"100vh",display:"flex",flexDirection:"column",flexGrow:1,backgroundColor:e===V.LIGHT?t.backgroundColorLight:t.backgroundColorBlack})),yt=G.section`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,vt=G.div`
  line-height: 1;
  margin: 0 0 80px;
`,bt="/rndcex/assets/background11-3641a1a5.png",kt="/rndcex/assets/background2-71b2f984.png",Ct="/rndcex/assets/background21-47a09f3b.png",_t="/rndcex/assets/background211-e4ed7011.png",St="/rndcex/assets/background3-37bca795.png",xt="/rndcex/assets/background31-76692deb.png",$t="/rndcex/assets/background42-ccffa496.png",wt="/rndcex/assets/background51-96fe5fb0.png",Ht="/rndcex/assets/background6-bf89cd1a.png",Lt="/rndcex/assets/background61-b19f6f4d.png",x=v("div")(({theme:{extendPalette:e}})=>({width:"100%",height:"100%",position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:0,backgroundColor:"#000",backgroundImage:`linear-gradient(318.17deg, ${e.brown75} 14.17%, ${e.dark100} 114%)`})),Et=v(x)(({theme:{extendPalette:e}})=>({background:`linear-gradient(136deg, ${e.orange75}00 50%, ${e.orange75}0C 100%), ${e.light90}`})),It=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${St}), linear-gradient(274.39deg, ${e.aqua75} -17.7%, ${e.dark100} 100.12%)`})),Nt=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${kt}), linear-gradient(0deg, ${e.brown75} -48.75%, ${e.dark100} 100%)`})),Gt=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${Ct}), linear-gradient(302deg, ${e.brown75} -2.25%, ${e.dark100} 51%)`}));v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${Ht}), linear-gradient(302deg, ${e.brown75} -2.25%, ${e.dark100} 51%)`}));const Zt=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${Lt}), linear-gradient(74deg, ${e.brown75} 1%, ${e.dark100} 64%)`})),Dt=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${xt}), linear-gradient(318deg, ${e.aqua75} -25%, ${e.dark100} 77%)`})),At=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${_t}), linear-gradient(0deg, ${e.brown75} -49%, ${e.dark100} 100%)`})),Wt=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${bt}), radial-gradient(155% 155% at 9% 141%, ${e.aqua75} 0%, ${e.dark100} 100%)`})),qt=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${wt}), radial-gradient(50% 128% at 50% 50%, ${e.aqua85} 0%, ${e.dark100} 100%)`})),zt=v(x)(({theme:{extendPalette:e}})=>({backgroundImage:`url(${$t}), radial-gradient(79% 201% at 78% 50%, ${e.aqua85} 0%, ${e.dark100} 100%)`})),se=s.memo(({children:e,backgroundComponent:t=null,colorSchema:r=V.LIGHT})=>{const n=!t&&r===V.LIGHT?Et:t;return C.jsxs(ht,{colorSchema:r,children:[!!n&&C.jsx(n,{}),e]})});var V=(e=>(e[e.LIGHT=0]="LIGHT",e[e.DARK=1]="DARK",e[e.COLOR=2]="COLOR",e))(V||{});const Vt=G.div`
  position: relative;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 5.468%;
`,ie=s.memo(({children:e})=>C.jsx(Vt,{children:e})),Tt=e=>s.createElement("svg",{width:260,height:30,viewBox:"0 0 260 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("g",{clipPath:"url(#clip0_207_1043)"},s.createElement("path",{d:"M158.112 0C168.94 0 175.774 3.41539 177.549 9.78462L172.712 10.8C171.292 6.09231 166.322 3.73846 158.112 3.73846C147.773 3.73846 142.137 7.84615 142.137 14.9538C142.137 22.1538 147.728 26.2154 158.112 26.2154C166.588 26.2154 171.691 23.8154 172.845 18.9692L177.638 19.9385C175.907 26.6308 169.162 30 158.112 30C144.977 30 137.477 24.3692 137.477 15C137.477 5.67692 145.154 0 158.112 0Z"}),s.createElement("path",{d:"M185.581 0.461426H218.375V4.06143H190.019V12.8307H215.801V16.4307H190.019V25.8922H218.73V29.5384H185.581V0.461426Z"}),s.createElement("path",{d:"M222.547 29.5384L238.211 14.7691L222.902 0.461426H229.07L241.495 12.1845L253.92 0.461426H259.778L244.38 14.8153L260 29.5384H253.876L241.096 17.5383L228.493 29.5384H222.547Z"}),s.createElement("path",{d:"M0 0.461426H24.9394C32.3502 0.461426 36.2553 4.10758 36.2553 9.92297C36.2553 15.1383 32.7496 18.8307 26.3594 19.2922L37.276 29.5384H27.4245L17.3511 19.8922H7.49957V29.5384H0V0.461426ZM7.49957 6.1845V14.1691H23.6081C26.9807 14.1691 28.6226 12.8307 28.6226 10.1999C28.6226 7.56912 26.9807 6.23066 23.6081 6.23066H7.49957V6.1845Z"}),s.createElement("path",{d:"M92.0362 0.461426H114.18C125.629 0.461426 131.93 5.72296 131.93 15.046C131.93 24.323 125.673 29.5384 114.18 29.5384H92.0362V0.461426ZM124.209 15.046C124.209 9.41527 121.103 6.50758 114.712 6.50758H99.5358V23.5384H114.712C121.103 23.4922 124.209 20.6307 124.209 15.046Z"}),s.createElement("path",{d:"M75.3951 29.5384L43.9324 2.30762V29.5384H51.0326V18.0461L64.3011 29.5384H75.3951Z"}),s.createElement("path",{d:"M51.1657 0.461426L82.6284 27.6922V0.461426H75.5282V11.9537L62.2598 0.461426H51.1657Z"})),s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_207_1043"},s.createElement("rect",{width:260,height:30,fill:"transparent"})))),Pt=e=>s.createElement("svg",{width:260,height:30,viewBox:"0 0 260 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("g",{clipPath:"url(#clip0_660_1040)"},s.createElement("path",{d:"M158.112 0C168.94 0 175.774 3.41538 177.549 9.78462L172.712 10.8C171.292 6.09231 166.322 3.73846 158.112 3.73846C147.773 3.73846 142.137 7.84615 142.137 14.9538C142.137 22.1538 147.728 26.2154 158.112 26.2154C166.588 26.2154 171.691 23.8154 172.845 18.9692L177.638 19.9385C175.907 26.6308 169.162 30 158.112 30C144.977 30 137.477 24.3692 137.477 15C137.477 5.67692 145.154 0 158.112 0Z",fill:"#96FF00"}),s.createElement("path",{d:"M185.581 0.461914H218.375V4.06191H190.019V12.8311H215.801V16.4311H190.019V25.8927H218.73V29.5388H185.581V0.461914Z",fill:"#96FF00"}),s.createElement("path",{d:"M222.546 29.5388L238.211 14.7696L222.901 0.461914H229.07L241.495 12.185L253.92 0.461914H259.778L244.379 14.8158L260 29.5388H253.876L241.096 17.5388L228.493 29.5388H222.546Z",fill:"#96FF00"}),s.createElement("path",{d:"M0 0.461914H24.9394C32.3502 0.461914 36.2553 4.10807 36.2553 9.92345C36.2553 15.1388 32.7496 18.8311 26.3594 19.2927L37.276 29.5388H27.4245L17.3511 19.8927H7.49957V29.5388H0V0.461914ZM7.49957 6.18499V14.1696H23.6081C26.9807 14.1696 28.6226 12.8311 28.6226 10.2004C28.6226 7.56961 26.9807 6.23115 23.6081 6.23115H7.49957V6.18499Z",fill:"white"}),s.createElement("path",{d:"M92.0361 0.461914H114.18C125.629 0.461914 131.93 5.72345 131.93 15.0465C131.93 24.3235 125.673 29.5388 114.18 29.5388H92.0361V0.461914ZM124.209 15.0465C124.209 9.41576 121.103 6.50807 114.712 6.50807H99.5357V23.5388H114.712C121.103 23.4927 124.209 20.6311 124.209 15.0465Z",fill:"white"}),s.createElement("path",{d:"M75.3951 29.5384L43.9324 2.30762V29.5384H51.0326V18.0461L64.301 29.5384H75.3951Z",fill:"#96FF00"}),s.createElement("path",{d:"M51.1658 0.461914L82.6285 27.6927V0.461914H75.5283V11.9542L62.2598 0.461914H51.1658Z",fill:"#FF7900"})),s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_660_1040"},s.createElement("rect",{width:260,height:30,fill:"white"})))),Ft=e=>{switch(e){case V.LIGHT:return"#181818";case V.DARK:return"#fff";default:return"inherit"}},Ot=s.memo(({colorSchema:e=V.LIGHT})=>{const t=e===V.COLOR?Pt:Tt;return C.jsx(t,{fill:Ft(e)})}),Ut=s.memo(({children:e,colorSchema:t,...r})=>C.jsx(se,{colorSchema:t,...r,children:C.jsxs(ie,{children:[C.jsx(yt,{children:e}),C.jsx(vt,{children:C.jsx(Ot,{colorSchema:t})})]})}));s.memo(({children:e,...t})=>C.jsx(se,{...t,children:C.jsx(ie,{children:e})}));export{Wt as B,Le as C,V as E,se as L,Rt as S,Bt as T,Ot as a,Ut as b,At as c,Dt as d,Z as e,ne as f,Ve as g,ee as h,Zt as i,te as j,zt as k,Gt as l,qt as m,x as n,It as o,Nt as p,Me as q,st as r,v as s};