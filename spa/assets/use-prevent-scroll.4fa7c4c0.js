import{p as L,Y as m,Z as d,s,V as T,$ as E}from"./index.2aa6dee5.js";import{e as S,d as P,j as H}from"./QItemSection.6cedac1f.js";function W(o,e,l){let t;function r(){t!==void 0&&(m.remove(t),t=void 0)}return L(()=>{o.value===!0&&r()}),{removeFromHistory:r,addToHistory(){t={condition:()=>l.value===!0,handler:e},m.add(t)}}}let c=0,p,v,a,w=!1,y,h,n;function q(o){V(o)&&T(o)}function V(o){if(o.target===document.body||o.target.classList.contains("q-layout__backdrop"))return!0;const e=E(o),l=o.shiftKey&&!o.deltaX,t=!l&&Math.abs(o.deltaX)<=Math.abs(o.deltaY),r=l||t?o.deltaY:o.deltaX;for(let f=0;f<e.length;f++){const i=e[f];if(H(i,t))return t?r<0&&i.scrollTop===0?!0:r>0&&i.scrollTop+i.clientHeight===i.scrollHeight:r<0&&i.scrollLeft===0?!0:r>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function g(o){o.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function u(o){w!==!0&&(w=!0,requestAnimationFrame(()=>{w=!1;const{height:e}=o.target,{clientHeight:l,scrollTop:t}=document.scrollingElement;(a===void 0||e!==window.innerHeight)&&(a=l-e,document.scrollingElement.scrollTop=t),t>a&&(document.scrollingElement.scrollTop-=Math.ceil((t-a)/8))}))}function b(o){const e=document.body,l=window.visualViewport!==void 0;if(o==="add"){const{overflowY:t,overflowX:r}=window.getComputedStyle(e);p=S(window),v=P(window),y=e.style.left,h=e.style.top,e.style.left=`-${p}px`,e.style.top=`-${v}px`,r!=="hidden"&&(r==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),t!=="hidden"&&(t==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,d.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",u,s.passiveCapture),window.visualViewport.addEventListener("scroll",u,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",g,s.passiveCapture))}d.is.desktop===!0&&d.is.mac===!0&&window[`${o}EventListener`]("wheel",q,s.notPassive),o==="remove"&&(d.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",u,s.passiveCapture),window.visualViewport.removeEventListener("scroll",u,s.passiveCapture)):window.removeEventListener("scroll",g,s.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=y,e.style.top=h,window.scrollTo(p,v),a=void 0)}function x(o){let e="add";if(o===!0){if(c++,n!==void 0){clearTimeout(n),n=void 0;return}if(c>1)return}else{if(c===0||(c--,c>0))return;if(e="remove",d.is.ios===!0&&d.is.nativeMobile===!0){clearTimeout(n),n=setTimeout(()=>{b(e),n=void 0},100);return}}b(e)}function X(){let o;return{preventBodyScroll(e){e!==o&&(o!==void 0||e===!0)&&(o=e,x(e))}}}export{X as a,W as u};