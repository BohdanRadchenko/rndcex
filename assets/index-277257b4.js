import{r as s,j as e,e as x}from"./index-201a28f1.js";import{s as o,T as g,S as r,b as u,E as f,n as j}from"./backgrounds-3f389860.js";import{C as S,a as c,b as y}from"./CardBackground-1fdb05fb.js";import{C}from"./CheckmarkItem-e1864306.js";import{B as T}from"./Box-0946e908.js";import{B as b}from"./BorderGradient-fc0bbe17.js";import"./index-174290cb.js";const w=[{price:"$300.000",features:["Complete CEX","Functionality with Spot Trading"]},{price:"$400.000",features:["Complete CEX","Functionality with Spot and Margin Trading"]}],P=[{title:"Basic Support",subtitle:"Ensures the functioning of the spot trading and new listings support",price:"$10.000/month"},{title:"Active Development and Support",subtitle:"From",price:"$20.000/month"}],p=o(S)(({theme:{extendPalette:t}})=>({backgroundImage:`radial-gradient(89% 128% at 100% 100%, ${t.brown75} 0%, #181818 100%)`}));o(c)(({theme:{palette:{typography:t}}})=>({color:t.white}));const l=o(g)(({theme:{palette:{typography:t}}})=>({color:t.secondary,fontFamily:"Peta",fontSize:30,fontWeight:400})),k=o("div")(({theme:{spacing:t,extendPalette:n}})=>({backgroundColor:n.orange75,margin:t(0,1.4),padding:t(1.5,3.8),display:"flex",position:"relative",transform:"skew(-20deg)",borderRadius:"10px"})),B=o(l)(({theme:{palette:{typography:t}}})=>({fontSize:46,fontFamily:"Tera",color:t.white})),d=o(l)(({theme:{palette:{typography:t}}})=>({color:t.accent,fontSize:46,fontFamily:"Tera"})),m=o(d)(({theme:{palette:{typography:t}}})=>({color:t.white,fontSize:30,fontFamily:"Zetta",textTransform:"uppercase"})),F=o(m)(({theme:{palette:{typography:t}}})=>({fontSize:26,fontFamily:"Peta",textTransform:"none",maxWidth:474})),h=s.memo(({text:t,sx:n,...i})=>e.jsx(T,{display:"flex",children:e.jsx(k,{children:e.jsx(B,{...i,sx:{...n},children:t})})})),E=s.memo(()=>e.jsx(r,{direction:"row",gap:3,children:w.map(({price:t,features:n},i)=>e.jsx(p,{children:e.jsxs(r,{spacing:3,children:[e.jsx(h,{text:t}),e.jsx(r,{spacing:3,children:n.map(a=>e.jsx(C,{text:a},a))})]})},`${i}-${t}`))})),$=s.memo(()=>e.jsx(p,{children:e.jsxs(r,{spacing:3,children:[e.jsx(d,{children:"Support Costs"}),e.jsx(r,{spacing:1.6,direction:"row",children:P.map(({title:t,subtitle:n,price:i})=>e.jsxs(r,{spacing:1.6,flexBasis:"50%",children:[e.jsx(b,{color:x.green75,space:1.6,children:e.jsxs(m,{children:[t,":"]})}),e.jsx(F,{children:n}),e.jsx(h,{text:i,sx:{fontSize:30}})]},t))})]})})),G=s.memo(()=>e.jsx(u,{colorSchema:f.DARK,backgroundComponent:j,children:e.jsxs(r,{spacing:5,flexGrow:1,pt:8,children:[e.jsxs(r,{spacing:3,children:[e.jsx(c,{children:"Pricing"}),e.jsx(y,{children:"Price include complete transfer of the code base"})]}),e.jsxs(r,{spacing:3,children:[e.jsx(E,{}),e.jsx($,{})]})]})}));export{G as default};
