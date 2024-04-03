import{r as _,l as v,b as S,t as x,n as A,o as q}from"./vue.esm-bundler-VY3Qmrzw.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={name:"CallToAction",props:{label:{type:String,required:!0},size:{type:String,default:"desktop",validator:function(e){return["mobile","desktop"].indexOf(e)!==-1}},buttonType:{type:String,required:!0,default:"primary",validator:function(e){return["primary","secondary","tertiary","login"].indexOf(e)!==-1}}},emits:["click"],setup(e,{emit:t}){return e=_(e),{classes:v(()=>({"storybook-button":!0,[`storybook-button--${e.size||"desktop"}`]:!0,[`storybook-button--${e.buttonType||"primary"}`]:!0})),onClick(){t("click")}}}};function O(e,t,z,n,D,E){return q(),S("button",{type:"button",class:A(n.classes),onClick:t[0]||(t[0]=(...C)=>n.onClick&&n.onClick(...C))},x(z.label),3)}const w=B(T,[["render",O]]);T.__docgenInfo={displayName:"CallToAction",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'desktop'"},values:["mobile","desktop"]},{name:"buttonType",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","tertiary","login"]}],events:[{name:"click"}],sourceFiles:["/Users/vincaswanson/Documents/shawscott/email-stories/src/stories/callToAction/CallToAction.vue"]};const P={title:"Components/Button",component:w,tags:["autodocs"],argTypes:{onClick:{},buttonType:{control:{type:"select"},options:["primary","secondary","tertiary","login"]},size:{control:{type:"select"},options:["desktop","mobile"]}}},o={args:{buttonType:"primary",label:"Call to action",size:"desktop"}},r={args:{buttonType:"secondary",label:"call to action",size:"desktop"}},a={args:{buttonType:"tertiary",label:"call to action",size:"desktop"}},s={args:{buttonType:"login",label:"call to action",size:"desktop"}};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    buttonType: 'primary',
    label: 'Call to action',
    size: 'desktop'
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    buttonType: 'secondary',
    label: 'call to action',
    size: 'desktop'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,y,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    buttonType: 'tertiary',
    label: 'call to action',
    size: 'desktop'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,k,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    buttonType: 'login',
    label: 'call to action',
    size: 'desktop'
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const V=["Primary","Secondary","Tertiary","Login"];export{s as Login,o as Primary,r as Secondary,a as Tertiary,V as __namedExportsOrder,P as default};
