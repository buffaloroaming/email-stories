import{r as x,l as o,b as v,d as t,t as $,n as k,m as N,F as z,o as B}from"./vue.esm-bundler-VY3Qmrzw.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h={name:"CallToAction",props:{spacing:{type:Number}},setup(e){return e=x(e),{classes:o(()=>({"storybook-spacing":!0,[`storybook-button--${e.spacing||10}`]:!0})),style:o(()=>({height:`${e.spacing}px`}))}}};function F(e,A,T,c,D,E){return B(),v(z,null,[t("span",null,$(`${T.spacing}px`),1),t("div",{class:k(c.classes),style:N(c.style)},null,6)],64)}const O=C(h,[["render",F],["__scopeId","data-v-c3c38ff8"]]);h.__docgenInfo={displayName:"CallToAction",exportName:"default",description:"",tags:{},props:[{name:"spacing",type:{name:"number"}}],sourceFiles:["/Users/vincaswanson/Documents/shawscott/email-stories/src/stories/themeSpacing/ThemeSpacing.vue"]};const j={title:"Theme/Spacing",component:O,argTypes:{spacing:{control:{type:"select"},options:[10,20,30,40]}}},s={args:{spacing:10}},a={args:{spacing:20}},r={args:{spacing:30}},n={args:{spacing:40}};var p,i,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    spacing: 10
  }
}`,...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    spacing: 20
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,S,_;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    spacing: 30
  }
}`,...(_=(S=r.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var y,f,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    spacing: 40
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const w=["Spacing10","Spacing20","Spacing30","Spacing40"],P=Object.freeze(Object.defineProperty({__proto__:null,Spacing10:s,Spacing20:a,Spacing30:r,Spacing40:n,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{s as S,P as T,a,r as b,n as c};
