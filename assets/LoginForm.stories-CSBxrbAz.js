import{p as k,k as p,s as N,G as re,v as Me,a6 as at,f,n as G,j as z,y as S,V as se,q as _e,g,M as O,E as ae,Q as F,N as Re,C as st,B as Dt,a7 as Ut,a8 as ot,a9 as lt,a3 as it,P as rt,U as We,aa as ut,ab as te,ac as dt,ad as ct,a2 as ft,A as Ae,R as Ft,F as oe,ae as Et,K as Be,z as $t,af as Ot,D as Nt,H as Mt,ag as Je,T as ke,u as Wt,ah as qt,ai as jt,aj as gt,ak as zt,d as Ht,e as Ke,w as _,o as le,h as Fe,l as Z,t as me,i as Ze,al as Jt}from"./iframe-Cuo1OJfX.js";import{J as Kt,x as Zt,u as mt,t as Gt,v as Yt,i as vt,o as qe,y as yt,k as Qt,m as Xt,b as en,c as ht,A as tn,B as nn,d as an,D as bt,e as pt,f as Y,E as sn,F as ie,G as Oe,j as Q,M as wt,K as Lt,s as on,H as ln,L as rn,C as un,N as Ge,V as dn,O as Ye,a as Qe,P as cn}from"./VCard-CAeJwUPr.js";import{V as Ne}from"./VBtn-BoSPszTr.js";import"./preload-helper-PPVm8Dsz.js";class ve{constructor(s){const l=document.body.currentCSSZoom??1,n=s instanceof Element,t=n?1+(1-l)/l:1,{x:a,y:i,width:o,height:c}=n?s.getBoundingClientRect():s;this.x=a*t,this.y=i*t,this.width=o*t,this.height=c*t}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function fn(e){const s=new ve(e),l=getComputedStyle(e),n=l.transform;if(n){let t,a,i,o,c;if(n.startsWith("matrix3d("))t=n.slice(9,-1).split(/, /),a=Number(t[0]),i=Number(t[5]),o=Number(t[12]),c=Number(t[13]);else if(n.startsWith("matrix("))t=n.slice(7,-1).split(/, /),a=Number(t[0]),i=Number(t[3]),o=Number(t[4]),c=Number(t[5]);else return new ve(s);const r=l.transformOrigin,u=s.x-o-(1-a)*parseFloat(r),d=s.y-c-(1-i)*parseFloat(r.slice(r.indexOf(" ")+1)),m=a?s.width/a:e.offsetWidth+1,v=i?s.height/i:e.offsetHeight+1;return new ve({x:u,y:d,width:m,height:v})}else return new ve(s)}function gn(e,s,l){if(typeof e.animate>"u")return{finished:Promise.resolve()};let n;try{n=e.animate(s,l)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(t=>{n.onfinish=()=>{t(n)}})),n}var ne=(e=>(e.Administrator="Administrator",e.Staff="Staff",e.Student="Student",e.Anonymous="Anonymous",e.Kiosk="Kiosk",e.CalendarAdmin="CalendarAdmin",e.EventScheduler="EventScheduler",e.EventAdmin="EventAdmin",e.EventProcessor="EventProcessor",e.ContentAdmin="ContentAdmin",e.RequestsAdmin="RequestsAdmin",e.RequestsProcessor="RequestsProcessor",e.TransactionReader="TransactionReader",e.StoreAdmin="StoreAdmin",e.ClassScheduler="ClassScheduler",e))(ne||{});const mn=Kt("v-alert-title"),vn=k({iconSize:[Number,String],iconSizes:{type:Array,default:()=>[["x-small",10],["small",16],["default",24],["large",28],["x-large",32]]}},"iconSize");function yn(e,s){return{iconSize:p(()=>{const n=new Map(e.iconSizes),t=e.iconSize??s()??"default";return n.has(t)?n.get(t):t})}}const hn=["success","info","warning","error"],bn=k({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:se,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>hn.includes(e)},...Y(),...pt(),...bt(),...an(),...vn(),...nn(),...tn(),...ht(),...en(),..._e(),...Xt({variant:"flat"})},"VAlert"),Xe=N()({name:"VAlert",props:bn(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{emit:l,slots:n}=s;const t=re(e,"modelValue"),a=S(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),{iconSize:i}=yn(e,()=>e.prominent?44:void 0),{themeClasses:o}=Me(e),{colorClasses:c,colorStyles:r,variantClasses:u}=Zt(()=>({color:e.color??e.type,variant:e.variant})),{densityClasses:d}=mt(e),{dimensionStyles:m}=yt(e),{elevationClasses:v}=Qt(e),{locationStyles:I}=Gt(e),{positionClasses:B}=Yt(e),{roundedClasses:w}=vt(e),{textColorClasses:E,textColorStyles:C}=qe(()=>e.borderColor),{t:V}=at(),L=S(()=>({"aria-label":V(e.closeLabel),onClick(y){t.value=!1,l("click:close",y)}}));return()=>{const y=!!(n.prepend||a.value),U=!!(n.title||e.title),b=!!(n.close||e.closable),h={density:e.density,icon:a.value,size:e.iconSize||e.prominent?i.value:void 0};return t.value&&f(e.tag,{class:z(["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},o.value,c.value,d.value,v.value,B.value,w.value,u.value,e.class]),style:G([r.value,m.value,I.value,e.style]),role:"alert"},{default:()=>[sn(!1,"v-alert"),e.border&&g("div",{key:"border",class:z(["v-alert__border",E.value]),style:G(C.value)},null),y&&g("div",{key:"prepend",class:"v-alert__prepend"},[n.prepend?f(Oe,{key:"prepend-defaults",disabled:!a.value,defaults:{VIcon:{...h}}},n.prepend):f(ie,O({key:"prepend-icon"},h),null)]),g("div",{class:"v-alert__content"},[U&&f(mn,{key:"title"},{default:()=>[n.title?.()??e.title]}),n.text?.()??e.text,n.default?.()]),n.append&&g("div",{key:"append",class:"v-alert__append"},[n.append()]),b&&g("div",{key:"close",class:"v-alert__close"},[n.close?f(Oe,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[n.close?.({props:L.value})]}):f(Ne,O({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},L.value),null)])]})}}}),St=Symbol.for("vuetify:form"),pn=k({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function wn(e){const s=re(e,"modelValue"),l=S(()=>e.disabled),n=S(()=>e.readonly),t=Re(!1),a=F([]),i=F([]);async function o(){const u=[];let d=!0;i.value=[],t.value=!0;for(const m of a.value){const v=await m.validate();if(v.length>0&&(d=!1,u.push({id:m.id,errorMessages:v})),!d&&e.fastFail)break}return i.value=u,t.value=!1,{valid:d,errors:i.value}}function c(){a.value.forEach(u=>u.reset())}function r(){a.value.forEach(u=>u.resetValidation())}return ae(a,()=>{let u=0,d=0;const m=[];for(const v of a.value)v.isValid===!1?(d++,m.push({id:v.id,errorMessages:v.errorMessages})):v.isValid===!0&&u++;i.value=m,s.value=d>0?!1:u===a.value.length?!0:null},{deep:!0,flush:"post"}),Dt(St,{register:u=>{let{id:d,vm:m,validate:v,reset:I,resetValidation:B}=u;a.value.some(w=>w.id===d),a.value.push({id:d,validate:v,reset:I,resetValidation:B,vm:Ut(m),isValid:null,errorMessages:[]})},unregister:u=>{a.value=a.value.filter(d=>d.id!==u)},update:(u,d,m)=>{const v=a.value.find(I=>I.id===u);v&&(v.isValid=d,v.errorMessages=m)},isDisabled:l,isReadonly:n,isValidating:t,isValid:s,items:a,validateOn:S(()=>e.validateOn)}),{errors:i,isDisabled:l,isReadonly:n,isValidating:t,isValid:s,items:a,validate:o,reset:c,resetValidation:r}}function Ln(e){const s=st(St,null);return{...s,isReadonly:p(()=>!!(e?.readonly??s?.isReadonly.value)),isDisabled:p(()=>!!(e?.disabled??s?.isDisabled.value))}}const Ee=Symbol("Forwarded refs");function $e(e,s){let l=e;for(;l;){const n=Reflect.getOwnPropertyDescriptor(l,s);if(n)return n;l=Object.getPrototypeOf(l)}}function xt(e){for(var s=arguments.length,l=new Array(s>1?s-1:0),n=1;n<s;n++)l[n-1]=arguments[n];return e[Ee]=l,new Proxy(e,{get(t,a){if(Reflect.has(t,a))return Reflect.get(t,a);if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const i of l)if(i.value&&Reflect.has(i.value,a)){const o=Reflect.get(i.value,a);return typeof o=="function"?o.bind(i.value):o}}},has(t,a){if(Reflect.has(t,a))return!0;if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const i of l)if(i.value&&Reflect.has(i.value,a))return!0;return!1},set(t,a,i){if(Reflect.has(t,a))return Reflect.set(t,a,i);if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const o of l)if(o.value&&Reflect.has(o.value,a))return Reflect.set(o.value,a,i);return!1},getOwnPropertyDescriptor(t,a){const i=Reflect.getOwnPropertyDescriptor(t,a);if(i)return i;if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const o of l){if(!o.value)continue;const c=$e(o.value,a)??("_"in o.value?$e(o.value._?.setupState,a):void 0);if(c)return c}for(const o of l){const c=o.value&&o.value[Ee];if(!c)continue;const r=c.slice();for(;r.length;){const u=r.shift(),d=$e(u.value,a);if(d)return d;const m=u.value&&u.value[Ee];m&&r.push(...m)}}}}})}const Sn=k({...Y(),...pn()},"VForm"),xn=N()({name:"VForm",props:Sn(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,s){let{slots:l,emit:n}=s;const t=wn(e),a=F();function i(c){c.preventDefault(),t.reset()}function o(c){const r=c,u=t.validate();r.then=u.then.bind(u),r.catch=u.catch.bind(u),r.finally=u.finally.bind(u),n("submit",r),r.defaultPrevented||u.then(d=>{let{valid:m}=d;m&&a.value?.submit()}),r.preventDefault()}return Q(()=>g("form",{ref:a,class:z(["v-form",e.class]),style:G(e.style),novalidate:!0,onReset:i,onSubmit:o},[l.default?.(t)])),xt(t,a)}}),In=k({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function D(e,s,l){return N()({name:e,props:In({mode:l,origin:s}),setup(n,t){let{slots:a}=t;const i={onBeforeEnter(o){n.origin&&(o.style.transformOrigin=n.origin)},onLeave(o){if(n.leaveAbsolute){const{offsetTop:c,offsetLeft:r,offsetWidth:u,offsetHeight:d}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${c}px`,o.style.left=`${r}px`,o.style.width=`${u}px`,o.style.height=`${d}px`}n.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(n.leaveAbsolute&&o?._transitionInitialStyles){const{position:c,top:r,left:u,width:d,height:m}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=c||"",o.style.top=r||"",o.style.left=u||"",o.style.width=d||"",o.style.height=m||""}}};return()=>{const o=n.group?ot:lt;return it(o,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:i},a.default)}}})}function je(e,s){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return N()({name:e,props:{mode:{type:String,default:l},disabled:{type:Boolean,default:rt()},group:Boolean,hideOnLeave:Boolean},setup(n,t){let{slots:a}=t;const i=n.group?ot:lt;return()=>it(i,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:{...s,onLeave:o=>{n.hideOnLeave?o.style.setProperty("display","none","important"):s.onLeave?.(o)}}},a.default)}})}function ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"y";return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,width:t.style.width,height:t.style.height}},onEnter(t){const a=t._initialStyle;if(!a)return;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const i=`${t.offsetWidth}px`,o=`${t.offsetHeight}px`;["x","both"].includes(s)&&(t.style.width="0"),["y","both"].includes(s)&&(t.style.height="0"),t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{["x","both"].includes(s)&&(t.style.width=i),["y","both"].includes(s)&&(t.style.height=o)})},onAfterEnter:n,onEnterCancelled:n,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,width:t.style.width,height:t.style.height},t.style.overflow="hidden",["x","both"].includes(s)&&(t.style.width=`${t.offsetWidth}px`),["y","both"].includes(s)&&(t.style.height=`${t.offsetHeight}px`),t.offsetHeight,requestAnimationFrame(()=>{["x","both"].includes(s)&&(t.style.width="0"),["y","both"].includes(s)&&(t.style.height="0")})},onAfterLeave:l,onLeaveCancelled:l};function l(t){e&&t._parent&&t._parent.classList.remove(e),n(t)}function n(t){if(!t._initialStyle)return;const{width:a,height:i}=t._initialStyle;t.style.overflow=t._initialStyle.overflow,a!=null&&["x","both"].includes(s)&&(t.style.width=a),i!=null&&["y","both"].includes(s)&&(t.style.height=i),delete t._initialStyle}}D("fab-transition","center center","out-in");D("dialog-bottom-transition");D("dialog-top-transition");D("fade-transition");D("scale-transition");D("scroll-x-transition");D("scroll-x-reverse-transition");D("scroll-y-transition");D("scroll-y-reverse-transition");D("slide-x-transition");D("slide-x-reverse-transition");const It=D("slide-y-transition");D("slide-y-reverse-transition");je("expand-transition",ze());const Cn=je("expand-x-transition",ze("","x"));je("expand-both-transition",ze("","both"));const Vn=k({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Y(),...Lt({transition:{component:It}})},"VCounter"),Bn=N()({name:"VCounter",functional:!0,props:Vn(),setup(e,s){let{slots:l}=s;const n=S(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return Q(()=>f(wt,{transition:e.transition},{default:()=>[We(g("div",{class:z(["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class]),style:G(e.style)},[l.default?l.default({counter:n.value,max:e.max,value:e.value}):n.value]),[[ut,e.active]])]})),{}}}),kn=k({text:String,onClick:te(),...Y(),..._e()},"VLabel"),Tn=N()({name:"VLabel",props:kn(),setup(e,s){let{slots:l}=s;return Q(()=>g("label",{class:z(["v-label",{"v-label--clickable":!!e.onClick},e.class]),style:G(e.style),onClick:e.onClick},[e.text,l.default?.()])),{}}}),Pn=k({floating:Boolean,...Y()},"VFieldLabel"),ye=N()({name:"VFieldLabel",props:Pn(),setup(e,s){let{slots:l}=s;return Q(()=>f(Tn,{class:z(["v-field-label",{"v-field-label--floating":e.floating},e.class]),style:G(e.style)},l)),{}}});function Ct(e){const{t:s}=at();function l(n){let{name:t,color:a,...i}=n;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[t],c=e[`onClick:${t}`];function r(d){d.key!=="Enter"&&d.key!==" "||(d.preventDefault(),d.stopPropagation(),dt(c,new PointerEvent("click",d)))}const u=c&&o?s(`$vuetify.input.${o}`,e.label??""):void 0;return f(ie,O({icon:e[`${t}Icon`],"aria-label":u,onClick:c,onKeydown:r,color:a},i),null)}return{InputIcon:l}}const Vt=k({focused:Boolean,"onUpdate:focused":te()},"focus");function Bt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ct();const l=re(e,"focused"),n=S(()=>({[`${s}--focused`]:l.value}));function t(){l.value=!0}function a(){l.value=!1}return{focusClasses:n,isFocused:l,focus:t,blur:a}}const Rn=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],kt=k({appendInnerIcon:se,bgColor:String,clearable:Boolean,clearIcon:{type:se,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},glow:Boolean,error:Boolean,flat:Boolean,iconColor:[Boolean,String],label:String,persistentClear:Boolean,prependInnerIcon:se,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Rn.includes(e)},"onClick:clear":te(),"onClick:appendInner":te(),"onClick:prependInner":te(),...Y(),...un(),...ht(),..._e()},"VField"),et=N()({name:"VField",inheritAttrs:!1,props:{id:String,details:Boolean,labelId:String,...Vt(),...kt()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:l,emit:n,slots:t}=s;const{themeClasses:a}=Me(e),{loaderClasses:i}=on(e),{focusClasses:o,isFocused:c,focus:r,blur:u}=Bt(e),{InputIcon:d}=Ct(e),{roundedClasses:m}=vt(e),{rtlClasses:v}=ft(),I=S(()=>e.dirty||e.active),B=S(()=>!!(e.label||t.label)),w=S(()=>!e.singleLine&&B.value),E=Ae(),C=p(()=>e.id||`input-${E}`),V=S(()=>e.details?`${C.value}-messages`:void 0),L=F(),y=F(),U=F(),b=p(()=>["plain","underlined"].includes(e.variant)),h=p(()=>e.error||e.disabled?void 0:I.value&&c.value?e.color:e.baseColor),T=p(()=>{if(!(!e.iconColor||e.glow&&!c.value))return e.iconColor===!0?h.value:e.iconColor}),{backgroundColorClasses:H,backgroundColorStyles:M}=ln(()=>e.bgColor),{textColorClasses:W,textColorStyles:X}=qe(h);ae(I,P=>{if(w.value&&!rt()){const j=L.value.$el,J=y.value.$el;requestAnimationFrame(()=>{const K=fn(j),R=J.getBoundingClientRect(),ee=R.x-K.x,De=R.y-K.y-(K.height/2-R.height/2),fe=R.width/.75,ge=Math.abs(fe-K.width)>1?{maxWidth:Ft(fe)}:void 0,Ue=getComputedStyle(j),He=getComputedStyle(J),Rt=parseFloat(Ue.transitionDuration)*1e3||150,_t=parseFloat(He.getPropertyValue("--v-field-label-scale")),At=He.getPropertyValue("color");j.style.visibility="visible",J.style.visibility="hidden",gn(j,{transform:`translate(${ee}px, ${De}px) scale(${_t})`,color:At,...ge},{duration:Rt,easing:Et,direction:P?"normal":"reverse"}).finished.then(()=>{j.style.removeProperty("visibility"),J.style.removeProperty("visibility")})})}},{flush:"post"});const A=p(()=>({isActive:I,isFocused:c,controlRef:U,iconColor:T,blur:u,focus:r})),q=S(()=>{const P=!I.value;return{"aria-hidden":P,for:P?void 0:C.value}}),de=S(()=>{const P=w.value&&I.value;return{"aria-hidden":P,for:P?void 0:C.value}});function ce(P){P.target!==document.activeElement&&P.preventDefault()}return Q(()=>{const P=e.variant==="outlined",j=!!(t["prepend-inner"]||e.prependInnerIcon),J=!!(e.clearable||t.clear)&&!e.disabled,K=!!(t["append-inner"]||e.appendInnerIcon||J),R=()=>t.label?t.label({...A.value,label:e.label,props:{for:C.value}}):e.label;return g("div",O({class:["v-field",{"v-field--active":I.value,"v-field--appended":K,"v-field--center-affix":e.centerAffix??!b.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--glow":e.glow,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":j,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!R(),[`v-field--variant-${e.variant}`]:!0},a.value,H.value,o.value,i.value,m.value,v.value,e.class],style:[M.value,e.style],onClick:ce},l),[g("div",{class:"v-field__overlay"},null),f(rn,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),j&&g("div",{key:"prepend",class:"v-field__prepend-inner"},[t["prepend-inner"]?t["prepend-inner"](A.value):e.prependInnerIcon&&f(d,{key:"prepend-icon",name:"prependInner",color:T.value},null)]),g("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&w.value&&f(ye,O({key:"floating-label",ref:y,class:[W.value],floating:!0},q.value,{style:X.value}),{default:()=>[R()]}),B.value&&f(ye,O({key:"label",ref:L,id:e.labelId},de.value),{default:()=>[R()]}),t.default?.({...A.value,props:{id:C.value,class:"v-field__input","aria-describedby":V.value},focus:r,blur:u})??g("div",{id:C.value,class:"v-field__input","aria-describedby":V.value},null)]),J&&f(Cn,{key:"clear"},{default:()=>[We(g("div",{class:"v-field__clearable",onMousedown:ee=>{ee.preventDefault(),ee.stopPropagation()}},[f(Oe,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...A.value,props:{onFocus:r,onBlur:u,onClick:e["onClick:clear"],tabindex:-1}}):f(d,{name:"clear",onFocus:r,onBlur:u,tabindex:-1},null)]})]),[[ut,e.dirty]])]}),K&&g("div",{key:"append",class:"v-field__append-inner"},[t["append-inner"]?t["append-inner"](A.value):e.appendInnerIcon&&f(d,{key:"append-icon",name:"appendInner",color:T.value},null)]),g("div",{class:z(["v-field__outline",W.value]),style:G(X.value)},[P&&g(oe,null,[g("div",{class:"v-field__outline__start"},null),w.value&&g("div",{class:"v-field__outline__notch"},[f(ye,O({ref:y,floating:!0},q.value),{default:()=>[R()]})]),g("div",{class:"v-field__outline__end"},null)]),b.value&&w.value&&f(ye,O({ref:y,floating:!0},q.value),{default:()=>[R()]})])])}),{controlRef:U,fieldIconColor:T}}}),_n=k({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Y(),...Lt({transition:{component:It,leaveAbsolute:!0,group:!0}})},"VMessages"),An=N()({name:"VMessages",props:_n(),setup(e,s){let{slots:l}=s;const n=p(()=>Be(e.messages)),{textColorClasses:t,textColorStyles:a}=qe(()=>e.color);return Q(()=>f(wt,{transition:e.transition,tag:"div",class:z(["v-messages",t.value,e.class]),style:G([a.value,e.style])},{default:()=>[e.active&&n.value.map((i,o)=>g("div",{class:"v-messages__message",key:`${o}-${n.value}`},[l.message?l.message({message:i}):i]))]})),{}}}),Dn=Symbol.for("vuetify:rules");function Un(e){const s=st(Dn,null);if(!e){if(!s)throw new Error("Could not find Vuetify rules injection");return s.aliases}return s?.resolve(e)??S(e)}const Fn=k({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Vt()},"validation");function En(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ct(),l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ae();const n=re(e,"modelValue"),t=p(()=>e.validationValue===void 0?n.value:e.validationValue),a=Ln(e),i=Un(()=>e.rules),o=F([]),c=Re(!0),r=p(()=>!!(Be(n.value===""?null:n.value).length||Be(t.value===""?null:t.value).length)),u=p(()=>e.errorMessages?.length?Be(e.errorMessages).concat(o.value).slice(0,Math.max(0,Number(e.maxErrors))):o.value),d=p(()=>{let L=(e.validateOn??a.validateOn?.value)||"input";L==="lazy"&&(L="input lazy"),L==="eager"&&(L="input eager");const y=new Set(L?.split(" ")??[]);return{input:y.has("input"),blur:y.has("blur")||y.has("input")||y.has("invalid-input"),invalidInput:y.has("invalid-input"),lazy:y.has("lazy"),eager:y.has("eager")}}),m=p(()=>e.error||e.errorMessages?.length?!1:e.rules.length?c.value?o.value.length||d.value.lazy?null:!0:!o.value.length:!0),v=Re(!1),I=p(()=>({[`${s}--error`]:m.value===!1,[`${s}--dirty`]:r.value,[`${s}--disabled`]:a.isDisabled.value,[`${s}--readonly`]:a.isReadonly.value})),B=$t("validation"),w=p(()=>e.name??Wt(l));Ot(()=>{a.register?.({id:w.value,vm:B,validate:V,reset:E,resetValidation:C})}),Nt(()=>{a.unregister?.(w.value)}),Mt(async()=>{d.value.lazy||await V(!d.value.eager),a.update?.(w.value,m.value,u.value)}),Je(()=>d.value.input||d.value.invalidInput&&m.value===!1,()=>{ae(t,()=>{if(t.value!=null)V();else if(e.focused){const L=ae(()=>e.focused,y=>{y||V(),L()})}})}),Je(()=>d.value.blur,()=>{ae(()=>e.focused,L=>{L||V()})}),ae([m,u],()=>{a.update?.(w.value,m.value,u.value)});async function E(){n.value=null,await ke(),await C()}async function C(){c.value=!0,d.value.lazy?o.value=[]:await V(!d.value.eager)}async function V(){let L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const y=[];v.value=!0;for(const U of i.value){if(y.length>=Number(e.maxErrors??1))break;const h=await(typeof U=="function"?U:()=>U)(t.value);if(h!==!0){if(h!==!1&&typeof h!="string"){console.warn(`${h} is not a valid value. Rule functions must return boolean true or a string.`);continue}y.push(h||"")}}return o.value=y,v.value=!1,c.value=L,o.value}return{errorMessages:u,isDirty:r,isDisabled:a.isDisabled,isReadonly:a.isReadonly,isPristine:c,isValid:m,isValidating:v,reset:E,resetValidation:C,validate:V,validationClasses:I}}const Tt=k({id:String,appendIcon:se,baseColor:String,centerAffix:{type:Boolean,default:!0},color:String,glow:Boolean,iconColor:[Boolean,String],prependIcon:se,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":te(),"onClick:append":te(),...Y(),...pt(),...qt(bt(),["maxWidth","minWidth","width"]),..._e(),...Fn()},"VInput"),tt=N()({name:"VInput",props:{...Tt()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:l,slots:n,emit:t}=s;const{densityClasses:a}=mt(e),{dimensionStyles:i}=yt(e),{themeClasses:o}=Me(e),{rtlClasses:c}=ft(),{InputIcon:r}=Ct(e),u=Ae(),d=p(()=>e.id||`input-${u}`),{errorMessages:m,isDirty:v,isDisabled:I,isReadonly:B,isPristine:w,isValid:E,isValidating:C,reset:V,resetValidation:L,validate:y,validationClasses:U}=En(e,"v-input",d),b=p(()=>e.errorMessages?.length||!w.value&&m.value.length?m.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages),h=S(()=>b.value.length>0),T=S(()=>!e.hideDetails||e.hideDetails==="auto"&&(h.value||!!n.details)),H=p(()=>T.value?`${d.value}-messages`:void 0),M=p(()=>({id:d,messagesId:H,isDirty:v,isDisabled:I,isReadonly:B,isPristine:w,isValid:E,isValidating:C,hasDetails:T,reset:V,resetValidation:L,validate:y})),W=S(()=>e.error||e.disabled?void 0:e.focused?e.color:e.baseColor),X=S(()=>{if(e.iconColor)return e.iconColor===!0?W.value:e.iconColor});return Q(()=>{const A=!!(n.prepend||e.prependIcon),q=!!(n.append||e.appendIcon);return g("div",{class:z(["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--focused":e.focused,"v-input--glow":e.glow,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,o.value,c.value,U.value,e.class]),style:G([i.value,e.style])},[A&&g("div",{key:"prepend",class:"v-input__prepend"},[n.prepend?n.prepend(M.value):e.prependIcon&&f(r,{key:"prepend-icon",name:"prepend",color:X.value},null)]),n.default&&g("div",{class:"v-input__control"},[n.default?.(M.value)]),q&&g("div",{key:"append",class:"v-input__append"},[n.append?n.append(M.value):e.appendIcon&&f(r,{key:"append-icon",name:"append",color:X.value},null)]),T.value&&g("div",{id:H.value,class:"v-input__details",role:"alert","aria-live":"polite"},[f(An,{active:h.value,messages:b.value},{message:n.message}),n.details?.(M.value)])])}),{reset:V,resetValidation:L,validate:y,isValid:E,errorMessages:m}}}),$n=k({autocomplete:String},"autocomplete");function On(e){const s=Ae(),l=Re(0),n=S(()=>e.autocomplete==="suppress"),t=S(()=>{if(e.name)return n.value?`${e.name}-${s}-${l.value}`:e.name}),a=S(()=>n.value?"off":e.autocomplete);return{isSuppressing:n,fieldAutocomplete:a,fieldName:t,update:()=>l.value=new Date().getTime()}}function Nn(e){function s(l,n){if(!e.autofocus||!l)return;const t=n[0].target;(t.matches("input,textarea")?t:t.querySelector("input,textarea"))?.focus()}return{onIntersect:s}}const Mn=["color","file","time","date","datetime-local","week","month"],Wn=k({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...$n(),...gt(Tt(),["direction"]),...kt()},"VTextField"),nt=N()({name:"VTextField",directives:{vIntersect:Ge},inheritAttrs:!1,props:Wn(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:l,emit:n,slots:t}=s;const a=re(e,"modelValue",void 0,b=>Object.is(b,-0)?"-0":b),{isFocused:i,focus:o,blur:c}=Bt(e),{onIntersect:r}=Nn(e),u=p(()=>typeof e.counterValue=="function"?e.counterValue(a.value):typeof e.counterValue=="number"?e.counterValue:(a.value??"").toString().length),d=p(()=>{if(l.maxlength)return l.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),m=p(()=>["plain","underlined"].includes(e.variant)),v=F(),I=F(),B=F(),w=On(e),E=p(()=>Mn.includes(e.type)||e.persistentPlaceholder||i.value||e.active);function C(){w.isSuppressing.value&&w.update(),i.value||o(),ke(()=>{B.value!==document.activeElement&&B.value?.focus()})}function V(b){n("mousedown:control",b),b.target!==B.value&&(C(),b.preventDefault())}function L(b){n("click:control",b)}function y(b,h){b.stopPropagation(),C(),ke(()=>{h(),dt(e["onClick:clear"],b)})}function U(b){const h=b.target;if(!(e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type))){a.value=h.value;return}const T=h.value,H=h.selectionStart,M=h.selectionEnd;a.value=T,ke(()=>{let W=0;T.trimStart().length===h.value.length&&(W=T.length-h.value.length),H!=null&&(h.selectionStart=H-W),M!=null&&(h.selectionEnd=M-W)})}return Q(()=>{const b=!!(t.counter||e.counter!==!1&&e.counter!=null),h=!!(b||t.details),[T,H]=jt(l),{modelValue:M,...W}=tt.filterProps(e),X=et.filterProps(e);return f(tt,O({ref:v,modelValue:a.value,"onUpdate:modelValue":A=>a.value=A,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":m.value},e.class],style:e.style},T,W,{centerAffix:!m.value,focused:i.value}),{...t,default:A=>{let{id:q,isDisabled:de,isDirty:ce,isReadonly:P,isValid:j,hasDetails:J,reset:K}=A;return f(et,O({ref:I,onMousedown:V,onClick:L,"onClick:clear":R=>y(R,K),role:e.role},gt(X,["onClick:clear"]),{id:q.value,labelId:`${q.value}-label`,active:E.value||ce.value,dirty:ce.value||e.dirty,disabled:de.value,focused:i.value,details:J.value,error:j.value===!1}),{...t,default:R=>{let{props:{class:ee,...De},controlRef:fe}=R;const ge=g("input",O({ref:Ue=>B.value=fe.value=Ue,value:a.value,onInput:U,autofocus:e.autofocus,readonly:P.value,disabled:de.value,name:w.fieldName.value,autocomplete:w.fieldAutocomplete.value,placeholder:e.placeholder,size:1,role:e.role,type:e.type,onFocus:o,onBlur:c,"aria-labelledby":`${q.value}-label`},De,H),null);return g(oe,null,[e.prefix&&g("span",{class:"v-text-field__prefix"},[g("span",{class:"v-text-field__prefix__text"},[e.prefix])]),We(t.default?g("div",{class:z(ee),"data-no-activator":""},[t.default({id:q}),ge]):zt(ge,{class:ee}),[[Ge,r,null,{once:!0}]]),e.suffix&&g("span",{class:"v-text-field__suffix"},[g("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:h?A=>g(oe,null,[t.details?.(A),b&&g(oe,null,[g("span",null,null),f(Bn,{active:e.persistentCounter||i.value,value:u.value,max:d.value,disabled:e.disabled},t.counter)])]):void 0})}),xt({},v,I,B)}}),qn={class:"text-center mb-4"},jn={key:0},zn={class:"text-medium-emphasis"},Te=Ht({__name:"LoginForm",props:{isLoggedIn:{type:Boolean,default:!1},currentUser:{default:null},userRoles:{default:()=>[]},isLoading:{type:Boolean,default:!1},error:{default:null}},emits:["login","logout"],setup(e,{emit:s}){const l=s,n=F({username:"",password:""}),t=F({username:[],password:[]}),a=p(()=>n.value.username.length>0&&n.value.password.length>0),i=()=>{t.value={username:[],password:[]},n.value.username||t.value.username.push("Username is required"),n.value.password||t.value.password.push("Password is required"),a.value&&l("login",{...n.value})},o=()=>{n.value={username:"",password:""},l("logout")};return(c,r)=>(le(),Ke(dn,{class:"mx-auto","max-width":"400"},{default:_(()=>[e.isLoggedIn?(le(),Fe(oe,{key:0},[f(Ye,null,{default:_(()=>[...r[2]||(r[2]=[Z("Welcome!",-1)])]),_:1}),f(Qe,null,{default:_(()=>[g("div",qn,[f(cn,{color:"primary",size:"64",class:"mb-3"},{default:_(()=>[f(ie,{size:"32"},{default:_(()=>[...r[3]||(r[3]=[Z("mdi-account-circle",-1)])]),_:1})]),_:1}),e.currentUser?(le(),Fe("h3",jn,me(e.currentUser.firstName)+" "+me(e.currentUser.lastName),1)):Ze("",!0),g("p",zn,me(e.currentUser?.email||e.currentUser?.identikey),1)]),f(Xe,{type:"success",variant:"tonal",class:"mb-4"},{default:_(()=>[f(ie,null,{default:_(()=>[...r[4]||(r[4]=[Z("mdi-check-circle",-1)])]),_:1}),r[5]||(r[5]=Z(" You are successfully logged in ",-1))]),_:1}),f(Ne,{color:"error",variant:"outlined",loading:e.isLoading,onClick:o,block:""},{default:_(()=>[f(ie,{start:""},{default:_(()=>[...r[6]||(r[6]=[Z("mdi-logout",-1)])]),_:1}),r[7]||(r[7]=Z(" Sign Out ",-1))]),_:1},8,["loading"])]),_:1})],64)):(le(),Fe(oe,{key:1},[f(Ye,null,{default:_(()=>[...r[8]||(r[8]=[Z("Login",-1)])]),_:1}),f(Qe,null,{default:_(()=>[f(xn,{onSubmit:Jt(i,["prevent"])},{default:_(()=>[f(nt,{modelValue:n.value.username,"onUpdate:modelValue":r[0]||(r[0]=u=>n.value.username=u),label:"Username",type:"text",required:"",disabled:e.isLoading,"error-messages":t.value.username,"prepend-icon":"mdi-account"},null,8,["modelValue","disabled","error-messages"]),f(nt,{modelValue:n.value.password,"onUpdate:modelValue":r[1]||(r[1]=u=>n.value.password=u),label:"Password",type:"password",required:"",disabled:e.isLoading,"error-messages":t.value.password,"prepend-icon":"mdi-lock"},null,8,["modelValue","disabled","error-messages"]),e.error?(le(),Ke(Xe,{key:0,type:"error",class:"mb-4"},{default:_(()=>[Z(me(e.error),1)]),_:1})):Ze("",!0),f(Ne,{type:"submit",color:"primary",loading:e.isLoading,disabled:!a.value,block:""},{default:_(()=>[...r[9]||(r[9]=[Z(" Sign In ",-1)])]),_:1},8,["loading","disabled"])]),_:1})]),_:1})],64))]),_:1}))}});Te.__docgenInfo=Object.assign({displayName:Te.name??Te.__name},{exportName:"default",displayName:"LoginForm",description:"",tags:{},props:[{name:"isLoggedIn",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"currentUser",required:!1,type:{name:"union",elements:[{name:"UserDTO"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"userRoles",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"isLoading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"login",type:{names:["LoginCredentials"]}},{name:"logout"}],sourceFiles:["/workspaces/Conductor/Conductor.Web/src/components/examples/LoginForm.vue"]});const{fn:x,userEvent:Pe,within:Pt,expect:$}=__STORYBOOK_MODULE_TEST__,ue={id:1,identikey:"john.doe",firstName:"John",lastName:"Doe",email:"john.doe@colorado.edu",buffOneCardNumber:"12345678",role:"Student",createdAt:"2024-01-01T00:00:00.000Z",updatedAt:"2024-01-01T00:00:00.000Z"},Hn={id:2,identikey:"admin.user",firstName:"Admin",lastName:"User",email:"admin@colorado.edu",buffOneCardNumber:"87654321",role:"Administrator",createdAt:"2024-01-01T00:00:00.000Z",updatedAt:"2024-01-01T00:00:00.000Z"},Yn={title:"Components/Examples/LoginForm",component:Te,parameters:{layout:"centered",docs:{description:{component:"A presentational login form component. Receives authentication state as props and emits events for login/logout actions. This separation allows for easy testing and flexible usage patterns."}}},tags:["autodocs"],argTypes:{isLoggedIn:{control:"boolean"},isLoading:{control:"boolean"},error:{control:"text"},currentUser:{control:"object"},userRoles:{control:"object"},onLogin:{action:"login"},onLogout:{action:"logout"}},decorators:[()=>({template:'<div style="min-width: 450px; padding: 20px;"><story /></div>'})]},he={args:{isLoggedIn:!1,currentUser:null,userRoles:[],isLoading:!1,error:null,onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Shows the login form when the user is not authenticated. Enter any username and password and click login to see the login event being fired."}}}},be={args:{isLoggedIn:!0,currentUser:ue,userRoles:[ne.Student],isLoading:!1,error:null,onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Shows the logged in state for a student user. Displays user information with avatar, name, and email, plus a logout button."}}}},pe={args:{isLoggedIn:!0,currentUser:Hn,userRoles:[ne.Administrator],isLoading:!1,error:null,onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Shows the logged in state for an administrator user. Same layout as student but with admin user information."}}}},we={args:{isLoggedIn:!1,currentUser:null,userRoles:[],isLoading:!0,error:null,onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Shows the login form in a loading state. This represents what users see when their login request is being processed."}}}},Le={args:{isLoggedIn:!0,currentUser:ue,userRoles:[ne.Student],isLoading:!0,error:null,onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Shows the logged in state with loading indicator active. This represents what users see when their logout request is being processed."}}}},Se={args:{isLoggedIn:!1,currentUser:null,userRoles:[],isLoading:!1,error:"Invalid username or password",onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Shows the login form with an error message displayed. This helps demonstrate error handling and user feedback."}}}},xe={args:{isLoggedIn:!0,currentUser:{...ue,firstName:"Jane",lastName:"Smith",email:void 0,identikey:"jane.smith"},userRoles:[ne.Student],isLoading:!1,error:null,onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Shows a logged in user with minimal information (no email). The component gracefully falls back to displaying the identikey when email is not available."}}}},Ie={args:{isLoggedIn:!1,currentUser:null,userRoles:[],isLoading:!1,error:null,onLogin:x(),onLogout:x()},parameters:{docs:{description:{story:"Interactive playground to test different prop combinations. Use the controls panel to modify the component state and see how it responds."}}}},Ce={args:{isLoggedIn:!1,currentUser:null,userRoles:[],isLoading:!1,error:null,onLogin:x(),onLogout:x()},play:async({canvasElement:e,args:s,step:l})=>{const n=Pt(e);await l("Fill out login form",async()=>{const t=n.getByLabelText("Username"),a=n.getByLabelText("Password"),i=n.getByRole("button",{name:/sign in/i});await $(i).toBeDisabled(),await Pe.type(t,"testuser"),await Pe.type(a,"password123"),await $(i).toBeEnabled(),await Pe.click(i),await $(s.onLogin).toHaveBeenCalledWith({username:"testuser",password:"password123"})}),await l("Simulate successful login",async()=>{await new Promise(t=>setTimeout(t,1e3)),Object.assign(s,{isLoggedIn:!0,currentUser:ue,userRoles:[ne.Student],isLoading:!1,error:null}),await new Promise(t=>setTimeout(t,100)),await $(n.getByText("John Doe")).toBeInTheDocument(),await $(n.getByText("john.doe@colorado.edu")).toBeInTheDocument()})},parameters:{docs:{description:{story:"This story demonstrates interaction testing using storybook/test. It automatically fills out the form and verifies the login event is fired with the correct credentials. Check the Actions panel to see the event details."}}}},Ve={args:{isLoggedIn:!0,currentUser:ue,userRoles:[ne.Student],isLoading:!1,error:null,onLogin:x(),onLogout:x()},play:async({canvasElement:e,args:s,step:l})=>{const n=Pt(e);await l("Verify logged in state and logout",async()=>{await $(n.getByText("John Doe")).toBeInTheDocument(),await $(n.getByText("john.doe@colorado.edu")).toBeInTheDocument();const t=n.getByRole("button",{name:/sign out/i});s.onLogout.mockClear?.(),await Pe.click(t),await $(s.onLogout).toHaveBeenCalledTimes(1)}),await l("Simulate successful logout",async()=>{await new Promise(t=>setTimeout(t,1e3)),Object.assign(s,{isLoggedIn:!1,currentUser:null,userRoles:[],isLoading:!1,error:null}),await new Promise(t=>setTimeout(t,100)),await $(n.getByLabelText("Username")).toBeInTheDocument(),await $(n.getByLabelText("Password")).toBeInTheDocument(),await $(n.getByRole("button",{name:/sign in/i})).toBeInTheDocument()})},parameters:{docs:{description:{story:"This story tests the logout functionality. It verifies that user information is displayed correctly and that clicking the logout button fires the logout event."}}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: false,
    currentUser: null,
    userRoles: [],
    isLoading: false,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the login form when the user is not authenticated. Enter any username and password and click login to see the login event being fired."
      }
    }
  }
}`,...he.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: true,
    currentUser: studentUser,
    userRoles: [AuthorizationRoles.Student],
    isLoading: false,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the logged in state for a student user. Displays user information with avatar, name, and email, plus a logout button."
      }
    }
  }
}`,...be.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: true,
    currentUser: adminUser,
    userRoles: [AuthorizationRoles.Administrator],
    isLoading: false,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the logged in state for an administrator user. Same layout as student but with admin user information."
      }
    }
  }
}`,...pe.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: false,
    currentUser: null,
    userRoles: [],
    isLoading: true,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the login form in a loading state. This represents what users see when their login request is being processed."
      }
    }
  }
}`,...we.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: true,
    currentUser: studentUser,
    userRoles: [AuthorizationRoles.Student],
    isLoading: true,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the logged in state with loading indicator active. This represents what users see when their logout request is being processed."
      }
    }
  }
}`,...Le.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: false,
    currentUser: null,
    userRoles: [],
    isLoading: false,
    error: "Invalid username or password",
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the login form with an error message displayed. This helps demonstrate error handling and user feedback."
      }
    }
  }
}`,...Se.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: true,
    currentUser: {
      ...studentUser,
      firstName: "Jane",
      lastName: "Smith",
      email: undefined,
      // No email
      identikey: "jane.smith"
    },
    userRoles: [AuthorizationRoles.Student],
    isLoading: false,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a logged in user with minimal information (no email). The component gracefully falls back to displaying the identikey when email is not available."
      }
    }
  }
}`,...xe.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: false,
    currentUser: null,
    userRoles: [],
    isLoading: false,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive playground to test different prop combinations. Use the controls panel to modify the component state and see how it responds."
      }
    }
  }
}`,...Ie.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: false,
    currentUser: null,
    userRoles: [],
    isLoading: false,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Fill out login form", async () => {
      // Find form elements
      const usernameInput = canvas.getByLabelText("Username");
      const passwordInput = canvas.getByLabelText("Password");
      const submitButton = canvas.getByRole("button", {
        name: /sign in/i
      });

      // Test that submit button is initially disabled
      await expect(submitButton).toBeDisabled();

      // Fill in the form
      await userEvent.type(usernameInput, "testuser");
      await userEvent.type(passwordInput, "password123");

      // Submit button should now be enabled
      await expect(submitButton).toBeEnabled();

      // Click the submit button
      await userEvent.click(submitButton);

      // Verify the login event was called with correct credentials
      await expect(args.onLogin).toHaveBeenCalledWith({
        username: "testuser",
        password: "password123"
      });
    });
    await step("Simulate successful login", async () => {
      // Add a delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update the component state to logged in
      Object.assign(args, {
        isLoggedIn: true,
        currentUser: studentUser,
        userRoles: [AuthorizationRoles.Student],
        isLoading: false,
        error: null
      });

      // Wait a moment for the component to re-render
      await new Promise(resolve => setTimeout(resolve, 100));

      // Verify the logged in state is displayed
      await expect(canvas.getByText("John Doe")).toBeInTheDocument();
      await expect(canvas.getByText("john.doe@colorado.edu")).toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates interaction testing using storybook/test. It automatically fills out the form and verifies the login event is fired with the correct credentials. Check the Actions panel to see the event details."
      }
    }
  }
}`,...Ce.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
  args: {
    isLoggedIn: true,
    currentUser: studentUser,
    userRoles: [AuthorizationRoles.Student],
    isLoading: false,
    error: null,
    onLogin: fn(),
    onLogout: fn()
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Verify logged in state and logout", async () => {
      // Verify user information is displayed
      await expect(canvas.getByText("John Doe")).toBeInTheDocument();
      await expect(canvas.getByText("john.doe@colorado.edu")).toBeInTheDocument();

      // Find the logout button
      const logoutButton = canvas.getByRole("button", {
        name: /sign out/i
      });

      // Reset the mock before clicking to get accurate count
      (args.onLogout as any).mockClear?.();

      // Click the logout button
      await userEvent.click(logoutButton);

      // Verify the logout event was called exactly once
      await expect(args.onLogout).toHaveBeenCalledTimes(1);
    });
    await step("Simulate successful logout", async () => {
      // Add a delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update the component state to logged out
      Object.assign(args, {
        isLoggedIn: false,
        currentUser: null,
        userRoles: [],
        isLoading: false,
        error: null
      });

      // Wait a moment for the component to re-render
      await new Promise(resolve => setTimeout(resolve, 100));

      // Verify the login form is displayed again
      await expect(canvas.getByLabelText("Username")).toBeInTheDocument();
      await expect(canvas.getByLabelText("Password")).toBeInTheDocument();
      await expect(canvas.getByRole("button", {
        name: /sign in/i
      })).toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: "This story tests the logout functionality. It verifies that user information is displayed correctly and that clicking the logout button fires the logout event."
      }
    }
  }
}`,...Ve.parameters?.docs?.source}}};const Qn=["LoggedOut","LoggedInStudent","LoggedInAdmin","LoadingLogin","LoadingLogout","WithError","MinimalUserInfo","Playground","InteractionTest","LogoutInteractionTest"];export{Ce as InteractionTest,we as LoadingLogin,Le as LoadingLogout,pe as LoggedInAdmin,be as LoggedInStudent,he as LoggedOut,Ve as LogoutInteractionTest,xe as MinimalUserInfo,Ie as Playground,Se as WithError,Qn as __namedExportsOrder,Yn as default};
