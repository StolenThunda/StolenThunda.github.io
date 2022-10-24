import{a as P}from"./QBtn.d8693490.js";import{d as oe}from"./pinia.5fa276e4.js";import{r as v,l as w,A as b,I as F,H as _,G as se,K as S,F as ae,h as re,w as ce,D as x}from"./index.6e68d1cc.js";import"./use-router-link.70840599.js";const q=(e,t)=>Array(Math.abs(t)+1).join(e);function z(e){return e!==null&&typeof e=="object"&&typeof e.name=="string"}function j(e){return e!==null&&typeof e=="object"&&typeof e.step=="number"&&typeof e.alt=="number"}const H=[0,2,4,-1,1,3,5],W=H.map(e=>Math.floor(e*7/12));function V(e){const{step:t,alt:n,oct:s,dir:a=1}=e,o=H[t]+7*n;if(s===void 0)return[a*o];const r=s-W[t]-4*n;return[a*o,a*r]}const ie=[3,0,4,1,5,2,6];function le(e){const[t,n,s]=e,a=ie[ue(t)],o=Math.floor((t+1)/7);if(n===void 0)return{step:a,alt:o,dir:s};const r=n+4*o+W[a];return{step:a,alt:o,oct:r,dir:s}}function ue(e){const t=(e+1)%7;return t<0?7+t:t}const U={empty:!0,name:"",pc:"",acc:""},I=new Map,de=e=>"CDEFGAB".charAt(e),fe=e=>e<0?q("b",-e):q("#",e),me=e=>e[0]==="b"?-e.length:e.length;function C(e){const t=I.get(e);if(t)return t;const n=typeof e=="string"?ve(e):j(e)?C(ye(e)):z(e)?C(e.name):U;return I.set(e,n),n}const he=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function pe(e){const t=he.exec(e);return[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]}function E(e){return C(le(e))}const ge=(e,t)=>(e%t+t)%t,k=[0,2,4,5,7,9,11];function ve(e){const t=pe(e);if(t[0]===""||t[3]!=="")return U;const n=t[0],s=t[1],a=t[2],o=(n.charCodeAt(0)+3)%7,r=me(s),c=a.length?+a:void 0,i=V({step:o,alt:r,oct:c}),h=n+s+a,f=n+s,m=(k[o]+r+120)%12,g=c===void 0?ge(k[o]+r,12)-12*99:k[o]+r+12*(c+1),l=g>=0&&g<=127?g:null,y=c===void 0?null:Math.pow(2,(g-69)/12)*440;return{empty:!1,acc:s,alt:r,chroma:m,coord:i,freq:y,height:g,letter:n,midi:l,name:h,oct:c,pc:f,step:o}}function ye(e){const{step:t,alt:n,oct:s}=e,a=de(t);if(!a)return"";const o=a+fe(n);return s||s===0?o+s:o}const T={empty:!0,name:"",acc:""},_e="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Ae="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Ce=new RegExp("^"+_e+"|"+Ae+"$");function Ne(e){const t=Ce.exec(`${e}`);return t===null?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}const L={};function D(e){return typeof e=="string"?L[e]||(L[e]=Me(e)):j(e)?D(Se(e)):z(e)?D(e.name):T}const O=[0,2,4,5,7,9,11],X="PMMPPMM";function Me(e){const t=Ne(e);if(t[0]==="")return T;const n=+t[0],s=t[1],a=(Math.abs(n)-1)%7,o=X[a];if(o==="M"&&s==="P")return T;const r=o==="M"?"majorable":"perfectable",c=""+n+s,i=n<0?-1:1,h=n===8||n===-8?n:i*(a+1),f=xe(r,s),m=Math.floor((Math.abs(n)-1)/7),g=i*(O[a]+f+12*m),l=(i*(O[a]+f)%12+12)%12,y=V({step:a,alt:f,oct:m,dir:i});return{empty:!1,name:c,num:n,q:s,step:a,alt:f,dir:i,type:r,simple:h,semitones:g,chroma:l,coord:y,oct:m}}function xe(e,t){return t==="M"&&e==="majorable"||t==="P"&&e==="perfectable"?0:t==="m"&&e==="majorable"?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*(e==="perfectable"?t.length:t.length+1):0}function Se(e){const{step:t,alt:n,oct:s=0,dir:a}=e;if(!a)return"";const o=t+1+7*s,r=o===0?t+1:o,c=a<0?"-":"",i=X[t]==="M"?"majorable":"perfectable";return c+r+qe(i,n)}function qe(e,t){return t===0?e==="majorable"?"M":"P":t===-1&&e==="majorable"?"m":t>0?q("A",t):q("d",e==="perfectable"?t:t+1)}function J(e,t){const n=C(e),s=D(t);if(n.empty||s.empty)return"";const a=n.coord,o=s.coord,r=a.length===1?[a[0]+o[0]]:[a[0]+o[0],a[1]+o[1]];return E(r).name}const we=Math.log(2),be=Math.log(440);function Q(e){const t=12*(Math.log(e)-be)/we+69;return Math.round(t*100)/100}const Fe="C C# D D# E F F# G G# A A# B".split(" "),ke="C Db D Eb E F Gb G Ab A Bb B".split(" ");function N(e,t={}){if(isNaN(e)||e===-1/0||e===1/0)return"";e=Math.round(e);const s=(t.sharps===!0?Fe:ke)[e%12];if(t.pitchClass)return s;const a=Math.floor(e/12)-1;return s+a}const Ee=["C","D","E","F","G","A","B"],K=e=>e.name,Y=e=>e.map(C).filter(t=>!t.empty);function Te(e){return e===void 0?Ee.slice():Array.isArray(e)?Y(e).map(K):[]}const p=C,De=e=>p(e).name,$e=e=>p(e).pc,Be=e=>p(e).acc,Re=e=>p(e).oct,Pe=e=>p(e).midi,Ie=e=>p(e).freq,Le=e=>p(e).chroma;function Oe(e){return N(e)}function Ge(e){return N(Q(e))}function ze(e){return N(Q(e),{sharps:!0})}function je(e){return N(e,{sharps:!0})}const $=J,He=J,Z=e=>t=>$(t,e),We=Z,ee=e=>t=>$(e,t),Ve=ee;function te(e,t){const n=p(e);if(n.empty)return"";const[s,a]=n.coord;return E(a===void 0?[s+t]:[s+t,a]).name}const Ue=te,B=(e,t)=>e.height-t.height,Xe=(e,t)=>t.height-e.height;function ne(e,t){return t=t||B,Y(e).sort(t).map(K)}function Je(e){return ne(e,B).filter((t,n,s)=>n===0||t!==s[n-1])}const Qe=e=>{const t=p(e);return t.empty?"":N(t.midi||t.chroma,{sharps:t.alt>0,pitchClass:t.midi===null})};function Ke(e,t){const n=p(e);if(n.empty)return"";const s=p(t||N(n.midi||n.chroma,{sharps:n.alt<0,pitchClass:!0}));if(s.empty||s.chroma!==n.chroma)return"";if(n.oct===void 0)return s.pc;const a=n.chroma-n.alt,o=s.chroma-s.alt,r=a>11||o<0?-1:a<0||o>11?1:0,c=n.oct+r;return s.pc+c}var G={names:Te,get:p,name:De,pitchClass:$e,accidentals:Be,octave:Re,midi:Pe,ascending:B,descending:Xe,sortedNames:ne,sortedUniqNames:Je,fromMidi:Oe,fromMidiSharps:je,freq:Ie,fromFreq:Ge,fromFreqSharps:ze,chroma:Le,transpose:$,tr:He,transposeBy:Z,trBy:We,transposeFrom:ee,trFrom:Ve,transposeFifths:te,trFifths:Ue,simplify:Qe,enharmonic:Ke};const R=oe("tuner",{state:()=>({info:null,middleA:440,semitone:69,bufferSize:4096,noteStrings:["C","C\u266F","D","D\u266F","E","F","F\u266F","G","G\u266F","A","A\u266F","B"],audioContext:null,audioinputInstalled:!1,message:"",workletNode:null,gainNode:null,analyser:null,NoteDetected:{},oscillator:null,stopped:null}),getters:{getFreqBinCount:e=>e.analyser.frequencyBinCount,isAnalyserInitialized:e=>!!e.analyser},actions:{async startRecord(){await this.init(),this.message="start record",await navigator.mediaDevices.getUserMedia({audio:!0}).then(e=>{this.message="Begin Audio";let t=this.audioContext.createMediaStreamSource(e);this.gainNode.gain.value=0,t.connect(this.analyser),t.connect(this.workletNode),t.connect(this.audioContext.destination)}).catch(e=>{this.message=`mediadevices error: ${e.name} = ${e.message}`})},getAutoCorrolatedPitch(e,t){let n=0,s=[];for(let o=0;o<this.analyser.fftSize;o++){t[o]=0;for(let r=0;r<this.analyser.fftSize-o;r++)t[o]+=e[r]*e[r+o];if(o>1&&t[o-2]-t[o-1]<0&&t[o-1]-t[o]>0&&(s[n]=o-1,n++,n>=s.length))break}let a=s[0];for(let o=1;o<n;o++)a+=s[o]-s[o-1];return a/=n,Number((this.audioContext.sampleRate/a).toFixed(1))},getWorkletNode(e){if(e.audioWorklet)return e.audioWorklet.addModule("worklets/tuner.worklet.js").then(async()=>{this.message="worklet loaded";let t=await new AudioWorkletNode(this.audioContext,"tuner-proc");return t.port.onmessage=n=>{if(this.stopped)return null;if(n.data instanceof Float32Array){const s=n.data;let a=new Float32Array(this.analyser.fftSize);this.analyser.getFloatTimeDomainData(s);const o=this.getAutoCorrolatedPitch(s,a);if(o>3270)return;if(this.message=`worklet data: ${o}`,o){const r=G.get(G.fromFreq(o));this.NoteDetected={name:r.name,value:r.midi,cents:this.getCents(o,r.midi),octave:r.oct,frequency:o},console.log({note:r}),console.log(`${this.NoteDetected.name}: ${JSON.stringify(this.NoteDetected)}`)}}},t}).catch(t=>{this.message=`worklet error: ${t}`,console.log(this.message)})},getAudioContext(){return new(window.AudioContext||window.webkitAudioContext)},stopRecord(){this.audioContext=null,this.analyser=null,this.workletNode=null,this.stopped=!0},async init(){try{this.audioContext=this.getAudioContext(),this.analyser=this.audioContext.createAnalyser(),this.gainNode=this.audioContext.createGain(),this.workletNode=await this.getWorkletNode(this.audioContext),this.stopped=!1,this.message="Tuner Initialized"}catch(e){this.message=JSON.stringify(e),console.error({error:e})}},getStandardFrequency(e){return this.middleA*Math.pow(2,(e-this.semitone)/12)},getCents(e,t){return Math.floor(1200*Math.log(e/this.getStandardFrequency(t))/Math.log(2))},play(e){this.audioContext=this.getAudioContext(),this.oscillator||(this.oscillator=this.audioContext.createOscillator(),this.oscillator.connect(this.audioContext.destination),this.oscillator.start()),this.oscillator.frequency.value=e},stop(){this.oscillator&&(this.oscillator.stop(),this.oscillator=null)},checkIOSPerms(){try{window.audioinput&&!window.audioinput.isCapturing()?getMicrophonePermission(this.setup(window.audioinput.getStream())):this.message="Already capturing!"}catch(e){this.message="startCapture exception: "+e}}}});const Ye={__name:"FrequencyBars",setup(e,{expose:t}){const n=v(null),s=v(null),a=()=>s.value.clearRect(0,0,n.value.width,n.value.height),o=()=>n.value.width===document.querySelector("[role=tuner-app]").clientWidth&&n.value.height===document.querySelector("[role=tuner-app]").clientHeight/2,r=()=>{n.value.width=document.querySelector("[role=tuner-app]").clientWidth,n.value.height=document.querySelector("[role=tuner-app]").clientHeight/2};return t({update:function(i){o&&r();const h=64,f=n.value.width/h-.5;a(),s.value.globalAlpha=.35;for(var m=0;m<h;m+=1)s.value.fillStyle="#ef6c00",s.value.fillRect(m*(f+.5),n.value.height-i[m],f+.8,i[m])},reset:a}),w(()=>{r(),s.value=n.value.getContext("2d")}),(i,h)=>(b(),F("canvas",{class:"frequency-bars",ref_key:"freqBars",ref:n},null,512))}};const Ze={ref:"notes",class:"notes"},et=_("span",null,null,-1),tt=ae("\xA0Hz "),nt=[et,tt],ot={__name:"NotesCmp",props:{note:{type:Object,default:()=>({name:"A",frequency:a4,octave:4,value:69,cents:0})}},setup(e,{expose:t}){const n=e,s=R(),a=v(!0),o=v(null),r=v(null);let c=[],i={};w(()=>{c=[];const l=2,y=5;for(var A=l;A<=y;A+=1)for(var d=0;d<12;d+=1){const u=document.createElement("div");u.className="note",u.dataset.name=s.noteStrings[d],u.dataset.value=12*(A+1)+d,u.dataset.octave=A.toString(),u.dataset.frequency=s.getStandardFrequency(u.dataset.value),u.innerHTML=u.dataset.name[0]+'<span class="note-sharp">'+(u.dataset.name[1]||"")+'</span><span class="note-octave">'+u.dataset.octave+"</span>",o.value.appendChild(u),c.push(u),i[u.dataset.value]=u}c.forEach(function(u){u.addEventListener("click",function(){if(a)return;const M=$notesList.querySelector(".active");M===this?(self.tuner.stop(),M.classList.remove("active")):(self.tuner.play(this.dataset.frequency),self.update(u.dataset))})}),m()});const h=function(l){f(),l.classList.add("active"),o.value.scrollLeft=l.offsetLeft-(o.value.clientWidth-l.clientWidth)/2},f=function(){const l=o.value.querySelector(".active");l&&l.classList.remove("active")},m=l=>{l=l||n.note,l.value in i&&(h(i[l.value]),r.value.childNodes[0].textContent=parseFloat(l.frequency).toFixed(1))};return t({isAutoMode:a,update:m,toggleAutoMode:function(){a?f():s.stop(),a=!a}}),(l,y)=>(b(),F("section",Ze,[_("div",{ref_key:"notesList",ref:o,class:"notes-list"},null,512),_("div",{ref_key:"frequency",ref:r,class:"frequency text-h5"},nt,512),_("div",null,se(S(s).message),1)],512))}};const st=_("div",{class:"meter-dot"},null,-1),at={__name:"MeterCmp",setup(e,{expose:t}){const n=v(null),s=v(null),a=R(),o=()=>{var c;return((c=a.NoteDetected.cents)!=null?c:0)/50*45},r=()=>{o(),console.log(o()),s.value.style.transform="rotate("+o()+"deg)"};return w(()=>{for(var c=0;c<=10;c+=1){const i=document.createElement("div");i.className="meter-scale",i.style.transform="rotate("+(c*9-45)+"deg)",c%5===0&&i.classList.add("meter-scale-strong"),n.value.appendChild(i),r()}}),t({update:r}),(c,i)=>(b(),F("div",{ref_key:"meter",ref:n,class:"meter"},[st,_("div",{ref_key:"meterPointer",ref:s,class:"meter-pointer"},null,512)],512))}};const rt={role:"tuner-app"},dt={__name:"TunerApp",setup(e){const t=R();let n="",s=!1,a;const o=v(null),r=v(null),c=v(null),i=v(null);let h=parseInt(localStorage.getItem("a4"))||440,f={name:"A",frequency:h,octave:4,value:69,cents:0};re(()=>s===null),w(()=>{g({name:"A",frequency:h,octave:4,value:69,cents:0})});const m=d=>{!o.value.isAutoMode||(f=t.NoteDetected,n!==d.name?g(d):n=d.name)},g=d=>{var M;f=d,o.value.update(f);let u=((M=f.cents)!=null?M:0)/50*45;i.value.update(u)},l=()=>{var d;return t.isAnalyserInitialized&&(r.value=new Uint8Array(t.getFreqBinCount),t.analyser.getByteFrequencyData(r.value),(d=c.value)==null||d.update(r.value)),requestAnimationFrame(l.bind(this))},y=()=>{s=!0,t.startRecord(),a=l()},A=()=>{var d;s?(t.stopRecord(),cancelAnimationFrame(a),c.value.reset(),(d=window==null?void 0:window.audioinput)==null||d.stop()):console.log("isn't playing")};return ce(()=>t.NoteDetected,(d,u)=>{d.name!==""?m(d):m(u)}),(d,u)=>(b(),F("main",rt,[_("section",null,[x(P,{onClick:y,color:"positive",label:"Start",class:"q-ma-md",size:"3vh",rounded:"",disabled:S(t).stopped===void 0||S(t).stopped},null,8,["disabled"]),x(P,{onClick:A,label:"Stop",color:"negative",class:"q-ma-md",size:"3vh",rounded:"",disabled:!S(t).stopped},null,8,["disabled"])]),x(ot,{note:S(f),ref_key:"notesRef",ref:o},null,8,["note"]),x(at,{ref_key:"meterRef",ref:i},null,512),x(Ye,{freqData:r.value,ref_key:"freqBars",ref:c},null,8,["freqData"])]))}};export{dt as default};
