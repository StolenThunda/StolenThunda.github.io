import{Q as Ie,a as we}from"./QBtn.6d4dd523.js";import{c as M,h as ve,a as Ae,b as pe,d as je}from"./use-router-link.9b827328.js";import{h as u,j as w,r as S,k as ze,l as A,n as X,p as j,q as qe,g as E,s as se,w as m,i as he,u as Z,v as Ue,x as $e,y as Ke,a as G,o as Ge,z as Je,_ as Xe,A as F,B as I,C as k,D as T,E as Ye,F as Y,G as ce,H as _e,I as Ze,J as et,K as tt,L as at,T as ot,M as lt,N as nt,O as it}from"./index.2aa6dee5.js";import{Q as rt}from"./selection.e01d6ebc.js";import{u as ut,a as st,b as ct,c as dt,g as ft,d as vt,e as ht,f as re,Q as Se,h as de,i as mt}from"./QItemSection.6cedac1f.js";import{u as gt,a as bt}from"./use-prevent-scroll.4fa7c4c0.js";import{u as yt,a as wt}from"./use-dark.430168dd.js";import{T as ue}from"./TouchPan.3883d4dd.js";import{b as J}from"./format.801e7424.js";import{l as pt}from"./ToolList.5190f64f.js";import{Q as _t}from"./QItem.b17cc00a.js";var St=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:g}){const n=u(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:n.value},ve(g.default))}});function xt(){const e=S(!ze.value);return e.value===!1&&A(()=>{e.value=!0}),e}const Ce=typeof ResizeObserver!="undefined",xe=Ce===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var fe=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:g}){let n=null,o,l={width:-1,height:-1};function s(v){v===!0||e.debounce===0||e.debounce==="0"?f():n===null&&(n=setTimeout(f,e.debounce))}function f(){if(clearTimeout(n),n=null,o){const{offsetWidth:v,offsetHeight:a}=o;(v!==l.width||a!==l.height)&&(l={width:v,height:a},g("resize",l))}}const{proxy:y}=E();if(Ce===!0){let v;return A(()=>{X(()=>{o=y.$el.parentNode,o&&(v=new ResizeObserver(s),v.observe(o),f())})}),j(()=>{clearTimeout(n),v!==void 0&&(v.disconnect!==void 0?v.disconnect():o&&v.unobserve(o))}),qe}else{let C=function(){clearTimeout(n),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",s,se.passive),a=void 0)},x=function(){C(),o&&o.contentDocument&&(a=o.contentDocument.defaultView,a.addEventListener("resize",s,se.passive),f())};const v=xt();let a;return A(()=>{X(()=>{o=y.$el,o&&x()})}),j(C),y.trigger=s,()=>{if(v.value===!0)return w("object",{style:xe.style,tabindex:-1,type:"text/html",data:xe.url,"aria-hidden":"true",onLoad:x})}}}}),Tt=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:g,emit:n}){const{proxy:{$q:o}}=E(),l=he(Z,()=>{console.error("QHeader needs to be child of QLayout")}),s=S(parseInt(e.heightHint,10)),f=S(!0),y=u(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||o.platform.is.ios&&l.isContainer.value===!0),v=u(()=>{if(e.modelValue!==!0)return 0;if(y.value===!0)return f.value===!0?s.value:0;const i=s.value-l.scroll.value.position;return i>0?i:0}),a=u(()=>e.modelValue!==!0||y.value===!0&&f.value!==!0),C=u(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),x=u(()=>"q-header q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=u(()=>{const i=l.rows.value.top,q={};return i[0]==="l"&&l.left.space===!0&&(q[o.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),i[2]==="r"&&l.right.space===!0&&(q[o.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),q});function r(i,q){l.update("header",i,q)}function p(i,q){i.value!==q&&(i.value=q)}function _({height:i}){p(s,i),r("size",i)}function h(i){C.value===!0&&p(f,!0),n("focusin",i)}m(()=>e.modelValue,i=>{r("space",i),p(f,!0),l.animate()}),m(v,i=>{r("offset",i)}),m(()=>e.reveal,i=>{i===!1&&p(f,e.modelValue)}),m(f,i=>{l.animate(),n("reveal",i)}),m(l.scroll,i=>{e.reveal===!0&&p(f,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const Q={};return l.instances.header=Q,e.modelValue===!0&&r("size",s.value),r("space",e.modelValue),r("offset",v.value),j(()=>{l.instances.header===Q&&(l.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const i=Ae(g.default,[]);return e.elevated===!0&&i.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(w(fe,{debounce:0,onResize:_})),w("header",{class:x.value,style:z.value,onFocusin:h},i)}}});const Te=150;var kt=M({name:"QDrawer",inheritAttrs:!1,props:{...ut,...yt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...st,"on-layout","mini-state"],setup(e,{slots:g,emit:n,attrs:o}){const l=E(),{proxy:{$q:s}}=l,f=wt(e,s),{preventBodyScroll:y}=bt(),{registerTimeout:v}=ct(),a=he(Z,()=>{console.error("QDrawer needs to be child of QLayout")});let C,x,z;const r=S(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),p=u(()=>e.mini===!0&&r.value!==!0),_=u(()=>p.value===!0?e.miniWidth:e.width),h=S(e.showIfAbove===!0&&r.value===!1?!0:e.modelValue===!0),Q=u(()=>e.persistent!==!0&&(r.value===!0||Le.value===!0));function i(t,d){if(O(),t!==!1&&a.animate(),B(0),r.value===!0){const $=a.instances[U.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),V(1),a.isContainer.value!==!0&&y(!0)}else V(0),t!==!1&&le(!1);v(()=>{t!==!1&&le(!0),d!==!0&&n("show",t)},Te)}function q(t,d){H(),t!==!1&&a.animate(),V(0),B(R.value*_.value),ne(),d!==!0&&v(()=>{n("hide",t)},Te)}const{show:c,hide:b}=dt({showing:h,hideOnRouteChange:Q,handleShow:i,handleHide:q}),{addToHistory:O,removeFromHistory:H}=gt(h,b,Q),P={belowBreakpoint:r,hide:b},L=u(()=>e.side==="right"),R=u(()=>(s.lang.rtl===!0?-1:1)*(L.value===!0?1:-1)),me=S(0),W=S(!1),ee=S(!1),ge=S(_.value*R.value),U=u(()=>L.value===!0?"left":"right"),te=u(()=>h.value===!0&&r.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),ae=u(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(L.value?"R":"L")>-1||s.platform.is.ios===!0&&a.isContainer.value===!0),N=u(()=>e.overlay===!1&&h.value===!0&&r.value===!1),Le=u(()=>e.overlay===!0&&h.value===!0&&r.value===!1),Be=u(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&W.value===!1?" hidden":"")),Oe=u(()=>({backgroundColor:`rgba(0,0,0,${me.value*.4})`})),be=u(()=>L.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Qe=u(()=>L.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Pe=u(()=>{const t={};return a.header.space===!0&&be.value===!1&&(ae.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Qe.value===!1&&(ae.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Ve=u(()=>{const t={width:`${_.value}px`,transform:`translateX(${ge.value}px)`};return r.value===!0?t:Object.assign(t,Pe.value)}),De=u(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),He=u(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(f.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(r.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(ae.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(be.value===!0?" q-drawer--top-padding":""))),Me=u(()=>{const t=s.lang.rtl===!0?e.side:U.value;return[[ue,Ee,void 0,{[t]:!0,mouse:!0}]]}),Re=u(()=>{const t=s.lang.rtl===!0?U.value:e.side;return[[ue,ye,void 0,{[t]:!0,mouse:!0}]]}),We=u(()=>{const t=s.lang.rtl===!0?U.value:e.side;return[[ue,ye,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){Ne(r,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}m(r,t=>{t===!0?(C=h.value,h.value===!0&&b(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(h.value===!0?(B(0),V(0),ne()):c(!1))}),m(()=>e.side,(t,d)=>{a.instances[d]===P&&(a.instances[d]=void 0,a[d].space=!1,a[d].offset=0),a.instances[t]=P,a[t].size=_.value,a[t].space=N.value,a[t].offset=te.value}),m(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),m(()=>e.behavior+e.breakpoint,oe),m(a.isContainer,t=>{h.value===!0&&y(t!==!0),t===!0&&oe()}),m(a.scrollbarWidth,()=>{B(h.value===!0?0:void 0)}),m(te,t=>{D("offset",t)}),m(N,t=>{n("on-layout",t),D("space",t)}),m(L,()=>{B()}),m(_,t=>{B(),ie(e.miniToOverlay,t)}),m(()=>e.miniToOverlay,t=>{ie(t,_.value)}),m(()=>s.lang.rtl,()=>{B()}),m(()=>e.mini,()=>{e.modelValue===!0&&(Fe(),a.animate())}),m(p,t=>{n("mini-state",t)});function B(t){t===void 0?X(()=>{t=h.value===!0?0:_.value,B(R.value*t)}):(a.isContainer.value===!0&&L.value===!0&&(r.value===!0||Math.abs(t)===_.value)&&(t+=R.value*a.scrollbarWidth.value),ge.value=t)}function V(t){me.value=t}function le(t){const d=t===!0?"remove":a.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Fe(){clearTimeout(x),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,x=setTimeout(()=>{ee.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ee(t){if(h.value!==!1)return;const d=_.value,$=J(t.distance.x,0,d);if(t.isFinal===!0){$>=Math.min(75,d)===!0?c():(a.animate(),V(0),B(R.value*d)),W.value=!1;return}B((s.lang.rtl===!0?L.value!==!0:L.value)?Math.max(d-$,0):Math.min(0,$-d)),V(J($/d,0,1)),t.isFirst===!0&&(W.value=!0)}function ye(t){if(h.value!==!0)return;const d=_.value,$=t.direction===e.side,K=(s.lang.rtl===!0?$!==!0:$)?J(t.distance.x,0,d):0;if(t.isFinal===!0){Math.abs(K)<Math.min(75,d)===!0?(a.animate(),V(1),B(0)):b(),W.value=!1;return}B(R.value*K),V(J(1-K/d,0,1)),t.isFirst===!0&&(W.value=!0)}function ne(){y(!1),le(!0)}function D(t,d){a.update(e.side,t,d)}function Ne(t,d){t.value!==d&&(t.value=d)}function ie(t,d){D("size",t===!0?e.miniWidth:d)}return a.instances[e.side]=P,ie(e.miniToOverlay,_.value),D("space",N.value),D("offset",te.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),A(()=>{n("on-layout",N.value),n("mini-state",p.value),C=e.showIfAbove===!0;const t=()=>{(h.value===!0?i:q)(!1,!0)};if(a.totalWidth.value!==0){X(t);return}z=m(a.totalWidth,()=>{z(),z=void 0,h.value===!1&&e.showIfAbove===!0&&r.value===!1?c(!1):t()})}),j(()=>{z!==void 0&&z(),clearTimeout(x),h.value===!0&&ne(),a.instances[e.side]===P&&(a.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const t=[];r.value===!0&&(e.noSwipeOpen===!1&&t.push(Ue(w("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Me.value)),t.push(pe("div",{ref:"backdrop",class:Be.value,style:Oe.value,"aria-hidden":"true",onClick:b},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>We.value)));const d=p.value===!0&&g.mini!==void 0,$=[w("div",{...o,key:""+d,class:[De.value,o.class]},d===!0?g.mini():ve(g.default))];return e.elevated===!0&&h.value===!0&&$.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(pe("aside",{ref:"content",class:He.value,style:Ve.value},$,"contentclose",e.noSwipeClose!==!0&&r.value===!0,()=>Re.value)),w("div",{class:"q-drawer-container"},t)}}}),zt=M({name:"QPageContainer",setup(e,{slots:g}){const{proxy:{$q:n}}=E(),o=he(Z,()=>{console.error("QPageContainer needs to be child of QLayout")});$e(Ke,!0);const l=u(()=>{const s={};return o.header.space===!0&&(s.paddingTop=`${o.header.size}px`),o.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(s.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),s});return()=>w("div",{class:"q-page-container",style:l.value},ve(g.default))}});const{passive:ke}=se,qt=["both","horizontal","vertical"];var $t=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>qt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:g}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,l,s;m(()=>e.scrollTarget,()=>{v(),y()});function f(){o!==null&&o();const x=Math.max(0,vt(l)),z=ht(l),r={top:x-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&r.top===0||e.axis==="horizontal"&&r.left===0)return;const p=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";n.position={top:x,left:z},n.directionChanged=n.direction!==p,n.delta=r,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),g("scroll",{...n})}function y(){l=ft(s,e.scrollTarget),l.addEventListener("scroll",a,ke),a(!0)}function v(){l!==void 0&&(l.removeEventListener("scroll",a,ke),l=void 0)}function a(x){if(x===!0||e.debounce===0||e.debounce==="0")f();else if(o===null){const[z,r]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];o=()=>{r(z),o=null}}}const{proxy:C}=E();return A(()=>{s=C.$el.parentNode,y()}),j(()=>{o!==null&&o(),v()}),Object.assign(C,{trigger:a,getPosition:()=>n}),qe}}),Ct=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:g,emit:n}){const{proxy:{$q:o}}=E(),l=S(null),s=S(o.screen.height),f=S(e.container===!0?0:o.screen.width),y=S({position:0,direction:"down",inflectionPoint:0}),v=S(0),a=S(ze.value===!0?0:re()),C=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),x=u(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),z=u(()=>a.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),r=u(()=>a.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function p(c){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:c.position.top,direction:c.direction,directionChanged:c.directionChanged,inflectionPoint:c.inflectionPoint.top,delta:c.delta.top};y.value=b,e.onScroll!==void 0&&n("scroll",b)}}function _(c){const{height:b,width:O}=c;let H=!1;s.value!==b&&(H=!0,s.value=b,e.onScrollHeight!==void 0&&n("scroll-height",b),Q()),f.value!==O&&(H=!0,f.value=O),H===!0&&e.onResize!==void 0&&n("resize",c)}function h({height:c}){v.value!==c&&(v.value=c,Q())}function Q(){if(e.container===!0){const c=s.value>v.value?re():0;a.value!==c&&(a.value=c)}}let i;const q={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:l,height:s,containerHeight:v,scrollbarWidth:a,totalWidth:u(()=>f.value+a.value),rows:u(()=>{const c=e.view.toLowerCase().split(" ");return{top:c[0].split(""),middle:c[1].split(""),bottom:c[2].split("")}}),header:G({size:0,offset:0,space:!1}),right:G({size:300,offset:0,space:!1}),footer:G({size:0,offset:0,space:!1}),left:G({size:300,offset:0,space:!1}),scroll:y,animate(){i!==void 0?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),i=void 0},155)},update(c,b,O){q[c][b]=O}};if($e(Z,q),re()>0){let O=function(){c=null,b.classList.remove("hide-scrollbar")},H=function(){if(c===null){if(b.scrollHeight>o.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(c);c=setTimeout(O,300)},P=function(L){c!==null&&L==="remove"&&(clearTimeout(c),O()),window[`${L}EventListener`]("resize",H)},c=null;const b=document.body;m(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),Ge(()=>{P("remove")})}return()=>{const c=je(g.default,[w($t,{onScroll:p}),w(fe,{onResize:_})]),b=w("div",{class:C.value,style:x.value,ref:e.container===!0?void 0:l,tabindex:-1},c);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:l},[w(fe,{onResize:h}),w("div",{class:"absolute-full",style:z.value},[w("div",{class:"scroll",style:r.value},[b])])]):b}}});const Lt=Je({name:"ToolLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:""},icon:{type:String,default:""}}});function Bt(e,g,n,o,l,s){return F(),I(_t,{to:e.link},{default:k(()=>[e.icon?(F(),I(Se,{key:0,avatar:""},{default:k(()=>[T(Ie,{name:e.icon},null,8,["name"])]),_:1})):Ye("",!0),T(Se,null,{default:k(()=>[T(de,null,{default:k(()=>[Y(ce(e.title),1)]),_:1}),T(de,{caption:""},{default:k(()=>[Y(ce(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var Ot=Xe(Lt,[["render",Bt]]);const Qt=Y(" Guitar tools "),Pt={class:"column q-ma-sm"},Vt=Y(" Tools "),Dt={name:"MainLayout"},Gt=Object.assign(Dt,{setup(e){const g=S(!1),n=()=>g.value=!g.value;return(o,l)=>{const s=nt("router-view");return F(),I(Ct,{view:"lHh Lpr lFf"},{default:k(()=>[T(Tt,null,{default:k(()=>[T(rt,null,{default:k(()=>[T(we,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n}),T(St,{class:"text-h3 text-weight-bolder"},{default:k(()=>[Qt]),_:1}),_e("div",Pt,[_e("sup",null,"Quasar v"+ce(o.$q.version),1),T(we,{flat:"",dense:"",round:"",size:"2vh",to:"/",icon:"home","aria-label":"Home"})])]),_:1})]),_:1}),T(kt,{modelValue:g.value,"onUpdate:modelValue":l[0]||(l[0]=f=>g.value=f),bordered:"",overlay:""},{default:k(()=>[T(mt,null,{default:k(()=>[T(de,{header:""},{default:k(()=>[Vt]),_:1}),(F(!0),Ze(at,null,et(tt(pt),f=>(F(),I(Ot,it({key:f.title},f),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),T(zt,{class:"overflow-hidden"},{default:k(()=>[T(s,null,{default:k(({Component:f})=>[T(ot,{name:"moveUp"},{default:k(()=>[(F(),I(lt(f),{key:o.$route.path}))]),_:2},1024)]),_:1})]),_:1})]),_:1})}}});export{Gt as default};