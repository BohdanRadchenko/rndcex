import{r as c,b as d,c as h,f as v,j as s,i as y,l as J,k as M,n as K}from"./index-201a28f1.js";import{g as C,f as x,s as b,i as T,j as w,S,b as Z,E as q,l as G}from"./backgrounds-3f389860.js";import{C as Q,a as V}from"./CardBackground-1fdb05fb.js";import"./index-174290cb.js";const Y=c.createContext(),X=Y;function ee(e){return C("MuiTable",e)}x("MuiTable",["root","stickyHeader"]);const te=["className","component","padding","size","stickyHeader"],oe=e=>{const{classes:t,stickyHeader:o}=e;return w({root:["root",o&&"stickyHeader"]},ee,t)},ae=b("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>d({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":d({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),_="table",se=c.forwardRef(function(t,o){const a=h({props:t,name:"MuiTable"}),{className:i,component:n=_,padding:l="normal",size:r="medium",stickyHeader:p=!1}=a,g=v(a,te),u=d({},a,{component:n,padding:l,size:r,stickyHeader:p}),R=oe(u),z=c.useMemo(()=>({padding:l,size:r,stickyHeader:p}),[l,r,p]);return s.jsx(X.Provider,{value:z,children:s.jsx(ae,d({as:n,role:n===_?null:"table",ref:o,className:T(R.root,i),ownerState:u},g))})}),ne=se,re=c.createContext(),H=re;function le(e){return C("MuiTableBody",e)}x("MuiTableBody",["root"]);const ie=["className","component"],ce=e=>{const{classes:t}=e;return w({root:["root"]},le,t)},de=b("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),pe={variant:"body"},L="tbody",ue=c.forwardRef(function(t,o){const a=h({props:t,name:"MuiTableBody"}),{className:i,component:n=L}=a,l=v(a,ie),r=d({},a,{component:n}),p=ce(r);return s.jsx(H.Provider,{value:pe,children:s.jsx(de,d({className:T(p.root,i),as:n,ref:o,role:n===L?null:"rowgroup",ownerState:r},l))})}),be=ue;function ge(e){return C("MuiTableCell",e)}const me=x("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),fe=me,ye=["align","className","component","padding","scope","size","sortDirection","variant"],he=e=>{const{classes:t,variant:o,align:a,padding:i,size:n,stickyHeader:l}=e,r={root:["root",o,l&&"stickyHeader",a!=="inherit"&&`align${y(a)}`,i!=="normal"&&`padding${y(i)}`,`size${y(n)}`]};return w(r,ge,t)},ve=b("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${y(o.size)}`],o.padding!=="normal"&&t[`padding${y(o.padding)}`],o.align!=="inherit"&&t[`align${y(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>d({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?J(M(e.palette.divider,1),.88):K(M(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${fe.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),Ce=c.forwardRef(function(t,o){const a=h({props:t,name:"MuiTableCell"}),{align:i="inherit",className:n,component:l,padding:r,scope:p,size:g,sortDirection:u,variant:R}=a,z=v(a,ye),m=c.useContext(X),k=c.useContext(H),N=k&&k.variant==="head";let $;l?$=l:$=N?"th":"td";let j=p;$==="td"?j=void 0:!j&&N&&(j="col");const U=R||k&&k.variant,A=d({},a,{align:i,component:$,padding:r||(m&&m.padding?m.padding:"normal"),size:g||(m&&m.size?m.size:"medium"),sortDirection:u,stickyHeader:U==="head"&&m&&m.stickyHeader,variant:U}),I=he(A);let P=null;return u&&(P=u==="asc"?"ascending":"descending"),s.jsx(ve,d({as:$,ref:o,className:T(I.root,n),"aria-sort":P,scope:j,ownerState:A},z))}),f=Ce;function xe(e){return C("MuiTableContainer",e)}x("MuiTableContainer",["root"]);const Te=["className","component"],we=e=>{const{classes:t}=e;return w({root:["root"]},xe,t)},Re=b("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),$e=c.forwardRef(function(t,o){const a=h({props:t,name:"MuiTableContainer"}),{className:i,component:n="div"}=a,l=v(a,Te),r=d({},a,{component:n}),p=we(r);return s.jsx(Re,d({ref:o,as:n,className:T(p.root,i),ownerState:r},l))}),ke=$e;function je(e){return C("MuiTableHead",e)}x("MuiTableHead",["root"]);const Me=["className","component"],He=e=>{const{classes:t}=e;return w({root:["root"]},je,t)},ze=b("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Se={variant:"head"},O="thead",Be=c.forwardRef(function(t,o){const a=h({props:t,name:"MuiTableHead"}),{className:i,component:n=O}=a,l=v(a,Me),r=d({},a,{component:n}),p=He(r);return s.jsx(H.Provider,{value:Se,children:s.jsx(ze,d({as:n,className:T(p.root,i),ref:o,role:n===O?null:"rowgroup",ownerState:r},l))})}),Ne=Be;function Ue(e){return C("MuiTableRow",e)}const Ae=x("MuiTableRow",["root","selected","hover","head","footer"]),D=Ae,Pe=["className","component","hover","selected"],_e=e=>{const{classes:t,selected:o,hover:a,head:i,footer:n}=e;return w({root:["root",o&&"selected",a&&"hover",i&&"head",n&&"footer"]},Ue,t)},Le=b("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${D.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${D.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:M(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:M(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),E="tr",Oe=c.forwardRef(function(t,o){const a=h({props:t,name:"MuiTableRow"}),{className:i,component:n=E,hover:l=!1,selected:r=!1}=a,p=v(a,Pe),g=c.useContext(H),u=d({},a,{component:n,hover:l,selected:r,head:g&&g.variant==="head",footer:g&&g.variant==="footer"}),R=_e(u);return s.jsx(Le,d({as:n,ref:o,className:T(R.root,i),role:n===E?null:"row",ownerState:u},p))}),W=Oe,B=new Map([["company","Company"],["support","24/7 Support"],["transfer","Code Transfer"],["listings","Unlimited Listings"],["customization","Сustomization"],["launch","7 days Launch"]]),F=new Map([...new Set([...B].concat([...B]))]),De=e=>e.reduce((t,o)=>(Object.keys(o).forEach(a=>{F.has(a.toString())&&(t[a]=F.get(a)||"")}),t),{}),Ee=e=>{const t=De(e);return[...B].map(([o])=>({key:o,label:t[o]}))},We=b(Q)(({theme:{extendPalette:e}})=>({padding:0,width:"100%",backgroundImage:`radial-gradient(circle at 89%, ${e.brown75}59 0%, ${e.dark75}59 100%)`})),Fe=b(V)({fontSize:46}),Xe=b(f)(({theme:{extendPalette:e}})=>({fontSize:18,fontFamily:"Zetta",color:e.light100,textTransform:"uppercase"})),Ie=c.memo(({values:e})=>s.jsx(ke,{component:We,children:s.jsxs(ne,{children:[s.jsx(Ne,{children:s.jsx(W,{children:Ee(e).map(({label:t})=>s.jsx(Xe,{align:"right",children:t}))})}),s.jsx(be,{children:s.jsxs(W,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[s.jsx(f,{component:"th",scope:"row",children:"row.name"}),s.jsx(f,{align:"center",children:"row.calories"}),s.jsx(f,{align:"center",children:"row.fat"}),s.jsx(f,{align:"center",children:"row.carbs"}),s.jsx(f,{align:"center",children:"row.protein"})]},"row.name")})]})})),Je={company:"R’N’D CEX",support:!0,transfer:!0,listings:!0,customization:!0,launch:!0,current:!0},Ke={company:"Modulus",support:!0,transfer:!0,listings:!0,customization:!0,launch:!0,current:!1},Ze={company:"Soft-FX",support:!0,transfer:!0,listings:!0,customization:!1,launch:!1,current:!1},qe={company:"B2B Broker",support:!0,transfer:!1,listings:!1,customization:!1,launch:!1,current:!1},Ge=[{title:"Benchmarking with Competitors by Services",values:[Je,Ke,Ze,qe]},{title:"Benchmarking with Competitors by Costs & Fees",values:[]}],Qe=c.memo(()=>s.jsx(S,{spacing:5,children:Ge.map(({title:e,values:t})=>s.jsxs(S,{spacing:3,children:[s.jsx(Fe,{children:e},e),s.jsx(Ie,{values:t})]}))})),ot=c.memo(()=>s.jsx(Z,{colorSchema:q.DARK,backgroundComponent:G,children:s.jsx(S,{pt:8,pb:5,flex:1,children:s.jsx(Qe,{})})}));export{ot as default};
