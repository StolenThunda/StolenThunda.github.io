(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{3469:function(t,e,o){},"98b6":function(t,e,o){"use strict";o("3469")},fb63:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("iframe",{ref:"theFrame",attrs:{src:t.getURL}})},n=[],r={name:"Tools",data:()=>({html:""}),computed:{getURL:()=>"https://texasbluesalley.com/proplayer7-5/--load-tools-SpiderDrills"},created(){this.getTool()},mounted(){this.resizeIFrameToFitContent()},methods:{async getTool(){const t="https://texasbluesalley.com"+this.$route.meta.src;return console.log("src",t),await this.$store.getters.req(t,null,!1).then((t=>this.html=t))},resizeIFrameToFitContent(){const t=this.$refs.theFrame;t.width=t.contentWindow.parent.document.body.scrollWidth+"px",t.height=.9*t.contentWindow.parent.document.body.scrollHeight+"px"}}},l=r,a=(o("98b6"),o("42e1")),i=Object(a["a"])(l,s,n,!1,null,null,null);e["default"]=i.exports}}]);