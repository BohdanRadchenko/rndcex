import{j as t,r as s}from"./index-101e8fe5.js";import{s as a,T as n,S as i,C as g,L as m}from"./backgrounds-0aac33b0.js";import{B as c}from"./Box-68d4ae23.js";import{B as x}from"./BorderGradient-de585129.js";import{L as u}from"./ListItem-d5eba45a.js";import"./index-bb45e2d3.js";const j=[{title:"Trading",list:["Spot","Margin","Derivatives","P2P"]},{title:"Order Book",list:["Order Placement","Volumes Display","Grouping"]},{title:"TradingView Widget",list:["Graph Display","Indicators","TimeFrame Configuration"]},{title:"Orders History",list:["Open Orders","Closed Orders","Inactive Orders"]},{title:"WorkSpace Settings",list:["WorkSpaces Configuration","Interactive Tutorial","Widgets Addition/Removal","Market Depth Widget"]},{title:"Order Placement Widget",list:["Market Orders FOK & IOC","Limit Orders","Stop Orders"]}],f=[{title:"Digital Wallets",list:["Spot","Margin","Funding","Futures","Investments"]},{title:"Investments",list:["Staking","Auto Invest","Options Betting","Farming Pools","Liquidity Vaults"]},{title:"Dashboard",list:["Advanced Analytics","Portfolio RoI & PnL Tracking","Aggregated Balances","Asset Distribution"]},{title:"Payments & Transfers",list:["Buy / Sell Crypto with Credit Card","Payments to Merchants","Transfer by Username"]},{title:"Additional Functionality",list:["Appearance Setting","Referral Program Dashboard","Market Feed"]},{title:"Customer Support",list:["Live Chat","Helpdesk","FAQ"]}],h="/rndcex/assets/snap12-138638d0.png",y="/rndcex/assets/snap13-011f0b09.png",C=a(n)(({theme:e})=>({position:"relative",fontSize:26,backgroundColor:e.extendPalette.green75,padding:e.spacing(1.6,3),borderRadius:10})),S=a("div")({display:"grid",gridRowGap:20,gridColumnGap:50,gridTemplateColumns:"repeat(2, 1fr)"}),k=a(c)({position:"absolute",right:0,bottom:0,left:0,paddingRight:50}),p=a(({...e})=>t.jsx(i,{...e,direction:"row",spacing:"28px"}))({justifyContent:"flex-end",alignItems:"flex-end","& img":{objectFit:"none"}}),v=s.memo(()=>t.jsxs(p,{direction:"row",spacing:"28px",children:[t.jsx("img",{src:h,alt:"snap 12"}),t.jsx("img",{src:y,alt:"snap 12"})]})),F="/rndcex/assets/snap131-4fe0c2de.png",P=s.memo(()=>t.jsx(p,{direction:"row",spacing:"28px",children:t.jsx("img",{src:F,alt:"snap 12"})})),T=s.memo(({content:e})=>t.jsx(c,{children:t.jsx(S,{children:e.map(({title:r,list:o})=>t.jsxs(i,{spacing:1,children:[t.jsx(x,{children:t.jsxs(n,{sx:{fontFamily:"Zetta",fontSize:30,textTransform:"uppercase"},children:[r,":"]})}),t.jsx(i,{component:"ul",spacing:"4px",children:o.map(l=>t.jsx(u,{component:"li",children:t.jsx(n,{fontFamily:"Peta",children:l})},l))})]},r))})})),d=s.memo(({title:e,content:r,children:o})=>t.jsxs(g,{sx:{p:5,flexGrow:1,flexBasis:"50%",position:"relative"},children:[t.jsx(k,{children:o}),t.jsxs(i,{spacing:3,children:[t.jsx(i,{direction:"row",children:t.jsx(C,{children:e})}),t.jsx(T,{content:r})]})]})),A=s.memo(()=>t.jsx(m,{children:t.jsxs(i,{spacing:5,sx:{flexGrow:1,pt:8,pb:5},children:[t.jsxs(n,{variant:"title",fontSize:46,children:["R’N’D CEX Whitelabel ",t.jsx(n,{variant:"title",component:"span",sx:({palette:{typography:e}})=>({fontSize:46,color:e.orange}),children:"Functionality"})]}),t.jsxs(i,{direction:"row",sx:{gap:3,flexGrow:1},children:[t.jsx(d,{title:"Trading Platform",content:j,children:t.jsx(v,{})}),t.jsx(d,{title:"User Panel",content:f,children:t.jsx(P,{})})]})]})}));export{A as default};
