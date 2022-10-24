import{h as m,j as d,g as H,K as se,P as z,Q as oe,R as ce,S as X,U as de,r as Q,p as fe,T as ve,v as me,V as w,W as ge,s as be}from"./index.6e68d1cc.js";import{c as N,h as ye,d as T,e as he,u as ke,f as pe}from"./use-router-link.70840599.js";const O={xs:18,sm:24,md:32,lg:38,xl:46},Y={size:String};function G(e,t=O){return m(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const A="0 0 24 24",F=e=>e,j=e=>`ionicons ${e}`,J={"mdi-":e=>`mdi ${e}`,"icon-":F,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":j,"ion-ios":j,"ion-logo":j,"iconfont ":F,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},Z={o_:"-outlined",r_:"-round",s_:"-sharp"},ee={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xe=new RegExp("^("+Object.keys(J).join("|")+")"),qe=new RegExp("^("+Object.keys(Z).join("|")+")"),I=new RegExp("^("+Object.keys(ee).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Se=/^svguse:/,$e=/^ion-/,Be=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var U=N({name:"QIcon",props:{...Y,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=H(),r=G(e),s=m(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=m(()=>{let u,l=e.name;if(l==="none"||!l)return{none:!0};if(a.iconMapFn!==null){const c=a.iconMapFn(l);if(c!==void 0)if(c.icon!==void 0){if(l=c.icon,l==="none"||!l)return{none:!0}}else return{cls:c.cls,content:c.content!==void 0?c.content:" "}}if(Ee.test(l)===!0){const[c,y=A]=l.split("|");return{svg:!0,viewBox:y,nodes:c.split("&&").map(x=>{const[i,q,g]=x.split("@@");return d("path",{style:q,d:i,transform:g})})}}if(we.test(l)===!0)return{img:!0,src:l.substring(4)};if(Se.test(l)===!0){const[c,y=A]=l.split("|");return{svguse:!0,src:c.substring(7),viewBox:y}}let k=" ";const E=l.match(xe);if(E!==null)u=J[E[1]](l);else if(Be.test(l)===!0)u=l;else if($e.test(l)===!0)u=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(I.test(l)===!0){u="notranslate material-symbols";const c=l.match(I);c!==null&&(l=l.substring(6),u+=ee[c[1]]),k=l}else{u="notranslate material-icons";const c=l.match(qe);c!==null&&(l=l.substring(2),u+=Z[c[1]]),k=l}return{cls:u,content:k}});return()=>{const u={class:s.value,style:r.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?d(e.tag,u,ye(t.default)):f.value.img===!0?d("span",u,T(t.default,[d("img",{src:f.value.src})])):f.value.svg===!0?d("span",u,T(t.default,[d("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?d("span",u,T(t.default,[d("svg",{viewBox:f.value.viewBox},[d("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(u.class+=" "+f.value.cls),d(e.tag,u,T(t.default,[f.value.content])))}}});const _e={size:{type:[Number,String],default:"1em"},color:String};function Re(e){return{cSize:m(()=>e.size in O?`${O[e.size]}px`:e.size),classes:m(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Le=N({name:"QSpinner",props:{..._e,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Re(e);return()=>d("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[d("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Ce(e,t){const a=e.style;for(const r in t)a[r]=t[r]}function Ue(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=se(e);if(t)return t.$el||t}function Ve(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}function Te(e,t=250){let a=!1,r;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),r=e.apply(this,arguments)),r}}function V(e,t,a,r){a.modifiers.stop===!0&&X(e);const s=a.modifiers.color;let f=a.modifiers.center;f=f===!0||r===!0;const u=document.createElement("span"),l=document.createElement("span"),k=de(e),{left:E,top:c,width:y,height:x}=t.getBoundingClientRect(),i=Math.sqrt(y*y+x*x),q=i/2,g=`${(y-i)/2}px`,o=f?g:`${k.left-E-q}px`,h=`${(x-i)/2}px`,_=f?h:`${k.top-c-q}px`;l.className="q-ripple__inner",Ce(l,{height:`${i}px`,width:`${i}px`,transform:`translate3d(${o},${_},0) scale3d(.2,.2,1)`,opacity:0}),u.className=`q-ripple${s?" text-"+s:""}`,u.setAttribute("dir","ltr"),u.appendChild(l),t.appendChild(u);const M=()=>{u.remove(),clearTimeout(R)};a.abort.push(M);let R=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${g},${h},0) scale3d(1,1,1)`,l.style.opacity=.2,R=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,R=setTimeout(()=>{u.remove(),a.abort.splice(a.abort.indexOf(M),1)},275)},250)},50)}function W(e,{modifiers:t,value:a,arg:r}){const s=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}var Me=he({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const r={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(s){r.enabled===!0&&s.qSkipRipple!==!0&&s.type===(r.modifiers.early===!0?"pointerdown":"click")&&V(s,e,r,s.qKeyEvent===!0)},keystart:Te(s=>{r.enabled===!0&&s.qSkipRipple!==!0&&z(s,r.modifiers.keyCodes)===!0&&s.type===`key${r.modifiers.early===!0?"down":"up"}`&&V(s,e,r,!0)},300)};W(r,t),e.__qripple=r,oe(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&W(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ce(t,"main"),delete e._qripple)}});const te={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Pe=Object.keys(te),je={align:{type:String,validator:e=>Pe.includes(e)}};function ze(e){return m(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${te[t]}`})}const D={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Oe={xs:8,sm:10,md:14,lg:20,xl:24},Ne=["button","submit","reset"],Ke=/[^\s]\/[^\s]/,Qe={...Y,...ke,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...je.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ae(e){const t=G(e,Oe),a=ze(e),{hasRouterLink:r,hasLink:s,linkTag:f,linkProps:u,navigateToRouterLink:l}=pe("button"),k=m(()=>{const o=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},o,{padding:e.padding.split(/\s+/).map(h=>h in D?D[h]+"px":h).join(" "),minWidth:"0",minHeight:"0"}):o}),E=m(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),c=m(()=>e.disable!==!0&&e.loading!==!0),y=m(()=>c.value===!0?e.tabindex||0:-1),x=m(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),i=m(()=>{const o={tabindex:y.value};return s.value===!0?Object.assign(o,u.value):Ne.includes(e.type)===!0&&(o.type=e.type),f.value==="a"?(e.disable===!0?o["aria-disabled"]="true":o.href===void 0&&(o.role="button"),r.value!==!0&&Ke.test(e.type)===!0&&(o.type=e.type)):e.disable===!0&&(o.disabled="",o["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(o,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),o}),q=m(()=>{let o;e.color!==void 0?e.flat===!0||e.outline===!0?o=`text-${e.textColor||e.color}`:o=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(o=`text-${e.textColor}`);const h=e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${x.value} q-btn--${h}`+(o!==void 0?" "+o:"")+(c.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),g=m(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:q,style:k,innerClasses:g,attributes:i,hasRouterLink:r,hasLink:s,linkTag:f,navigateToRouterLink:l,isActionable:c}}const{passiveCapture:b}=be;let S=null,$=null,B=null;var We=N({name:"QBtn",props:{...Qe,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:r}=H(),{classes:s,style:f,innerClasses:u,attributes:l,hasRouterLink:k,hasLink:E,linkTag:c,navigateToRouterLink:y,isActionable:x}=Ae(e),i=Q(null),q=Q(null);let g=null,o,h;const _=m(()=>e.label!==void 0&&e.label!==null&&e.label!==""),M=m(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),R=m(()=>({center:e.round})),ne=m(()=>{const n=Math.max(0,Math.min(100,e.percentage));return n>0?{transition:"transform 0.6s",transform:`translateX(${n-100}%)`}:{}}),ae=m(()=>e.loading===!0?{onMousedown:C,onTouchstartPassive:C,onClick:C,onKeydown:C,onKeyup:C}:x.value===!0?{onClick:K,onKeydown:le,onMousedown:ue,onTouchstart:re}:{onClick:w}),ie=m(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:f.value,...l.value,...ae.value}));function K(n){if(i.value!==null){if(n!==void 0){if(n.defaultPrevented===!0)return;const v=document.activeElement;if(e.type==="submit"&&v!==document.body&&i.value.contains(v)===!1&&v.contains(i.value)===!1){i.value.focus();const P=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",P,b),i.value!==null&&i.value.removeEventListener("blur",P,b)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",P,b),i.value.addEventListener("blur",P,b)}}if(k.value===!0){const v=()=>{n.__qNavigate=!0,y(n)};a("click",n,v),n.defaultPrevented!==!0&&v()}else a("click",n)}}function le(n){i.value!==null&&(a("keydown",n),z(n,[13,32])===!0&&$!==i.value&&($!==null&&L(),n.defaultPrevented!==!0&&(i.value.focus(),$=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",p,!0),i.value.addEventListener("blur",p,b)),w(n)))}function re(n){i.value!==null&&(a("touchstart",n),n.defaultPrevented!==!0&&(S!==i.value&&(S!==null&&L(),S=i.value,g=n.target,g.addEventListener("touchcancel",p,b),g.addEventListener("touchend",p,b)),o=!0,clearTimeout(h),h=setTimeout(()=>{o=!1},200)))}function ue(n){i.value!==null&&(n.qSkipRipple=o===!0,a("mousedown",n),n.defaultPrevented!==!0&&B!==i.value&&(B!==null&&L(),B=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",p,b)))}function p(n){if(i.value!==null&&!(n!==void 0&&n.type==="blur"&&document.activeElement===i.value)){if(n!==void 0&&n.type==="keyup"){if($===i.value&&z(n,[13,32])===!0){const v=new MouseEvent("click",n);v.qKeyEvent=!0,n.defaultPrevented===!0&&ge(v),n.cancelBubble===!0&&X(v),i.value.dispatchEvent(v),w(n),n.qKeyEvent=!0}a("keyup",n)}L()}}function L(n){const v=q.value;n!==!0&&(S===i.value||B===i.value)&&v!==null&&v!==document.activeElement&&(v.setAttribute("tabindex",-1),v.focus()),S===i.value&&(g!==null&&(g.removeEventListener("touchcancel",p,b),g.removeEventListener("touchend",p,b)),S=g=null),B===i.value&&(document.removeEventListener("mouseup",p,b),B=null),$===i.value&&(document.removeEventListener("keyup",p,!0),i.value!==null&&i.value.removeEventListener("blur",p,b),$=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function C(n){w(n),n.qSkipRipple=!0}return fe(()=>{L(!0)}),Object.assign(r,{click:K}),()=>{let n=[];e.icon!==void 0&&n.push(d(U,{name:e.icon,left:e.stack===!1&&_.value===!0,role:"img","aria-hidden":"true"})),_.value===!0&&n.push(d("span",{class:"block"},[e.label])),n=T(t.default,n),e.iconRight!==void 0&&e.round===!1&&n.push(d(U,{name:e.iconRight,right:e.stack===!1&&_.value===!0,role:"img","aria-hidden":"true"}));const v=[d("span",{class:"q-focus-helper",ref:q})];return e.loading===!0&&e.percentage!==void 0&&v.push(d("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[d("span",{class:"q-btn__progress-indicator fit block",style:ne.value})])),v.push(d("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+u.value},n)),e.loading!==null&&v.push(d(ve,{name:"q-transition--fade"},()=>e.loading===!0?[d("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[d(Le)])]:null)),me(d(c.value,ie.value,v),[[Me,M.value,void 0,R.value]])}}});export{U as Q,Me as R,We as a,G as b,Ce as c,je as d,ze as e,Ve as f,Ue as g,Le as h,Y as u};
