import{b as t,d as o,t as i,F as g,q as F,o as d,m as z}from"./vue.esm-bundler-VY3Qmrzw.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={__name:"ThemeColors",props:{numberOfColors:Number,sectionHeadline:String,backgroundColor:Array},setup(e){return(L,M)=>(d(),t(g,null,[o("h2",null,i(e.sectionHeadline),1),o("section",null,[(d(!0),t(g,null,F(e.numberOfColors,m=>(d(),t("div",{key:m},[o("p",null,i(e.backgroundColor[m-1].colorName.split("-").slice(1).join("-")),1),o("p",null,i(e.backgroundColor[m-1].colorValue),1),o("div",{class:"box",style:z({backgroundColor:`var(--${e.backgroundColor[m-1].colorName})`})},null,4)]))),128))])],64))}},E=D(j,[["__scopeId","data-v-34d03449"]]);j.__docgenInfo={exportName:"default",displayName:"ThemeColors",description:"",tags:{},props:[{name:"numberOfColors",type:{name:"number"}},{name:"sectionHeadline",type:{name:"string"}},{name:"backgroundColor",type:{name:"array"}}],sourceFiles:["/Users/vincaswanson/Documents/shawscott/email-stories/src/stories/themeColors/ThemeColors.vue"]};const q={title:"Theme/Colors",component:E,parameters:{docs:{story:{iframeHeight:700}}}},r={args:{sectionHeadline:"Primary",backgroundColor:[{colorName:"primary-black",colorValue:"#000001"},{colorName:"primary-email-green",colorValue:"#000001"},{colorName:"primary-web-primary-green",colorValue:"#000001"},{colorName:"primary-white",colorValue:"#000001"},{colorName:"primary-grey-lightest",colorValue:"#000001"},{colorName:"primary-gray-background",colorValue:"#000001"}],numberOfColors:6}},a={args:{sectionHeadline:"Secondary",backgroundColor:[{colorName:"secondary-green",colorValue:"#45a821"},{colorName:"secondary-violet",colorValue:"#070540"},{colorName:"secondary-yellow-medium",colorValue:"#f1c043"},{colorName:"secondary-yellow-light",colorValue:" #f9e48a"},{colorName:"secondary-blue-medium",colorValue:"#b9d1e3"},{colorName:"secondary-blue-light",colorValue:"#e8f289"},{colorName:"secondary-orange-medium",colorValue:"#ee7623"},{colorName:"secondary-orange-light",colorValue:"#ff8935"}],numberOfColors:8}},l={args:{sectionHeadline:"Neutral",backgroundColor:[{colorName:"neutral-beige",colorValue:"#e5c598"},{colorName:"neutral-gray-light",colorValue:"#d8d8d8"},{colorName:"neutral-gray-medium",colorValue:"#bfbfbf"},{colorName:"neutral-gray",colorValue:"#808080"},{colorName:"neutral-gray-dark",colorValue:"#595959"},{colorName:"neutral-gray-darkest",colorValue:"#3f4143"}],numberOfColors:6}},n={args:{sectionHeadline:"Green Screens",backgroundColor:[{colorName:"green-screen-50",colorValue:"#e8f8ec"},{colorName:"green-screen-100",colorValue:"#c7eed1"},{colorName:"green-screen--200-300",colorValue:"#79da94"},{colorName:"green-screen-400",colorValue:"#40d271"},{colorName:"green-screen-500",colorValue:"#00c859"},{colorName:"green-screen-600",colorValue:"#2ab75b"},{colorName:"green-screen-700",colorValue:"#1da44f"},{colorName:"green-screen-800",colorValue:"#129244"},{colorName:"green-screen-900",colorValue:"#007230"},{colorName:"green-screen-950",colorValue:"#007324"}],numberOfColors:10}},c={args:{sectionHeadline:"Orange",backgroundColor:[{colorName:"illustration-orange-200",colorValue:"#ffc6ab"},{colorName:"illustration-orange-300",colorValue:"#ff9974"},{colorName:"illustration-orange-400",colorValue:"#e97c3d"}],numberOfColors:3}},s={args:{sectionHeadline:"Purple",backgroundColor:[{colorName:"illustration-purple-0",colorValue:"#baa6fe"},{colorName:"illustration-purple-100",colorValue:"#c6baee"},{colorName:"illustration-purple-200",colorValue:"#aa96ee"},{colorName:"illustration-purple-300",colorValue:"#8c80ff"},{colorName:"illustration-purple-400",colorValue:"#aa96ee"}],numberOfColors:5}},u={args:{sectionHeadline:"Blue",backgroundColor:[{colorName:"illustration-blue-100",colorValue:"#deeeff"},{colorName:"illustration-blue-200",colorValue:"#5cbfea"}],numberOfColors:2}};var N,p,V;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    sectionHeadline: 'Primary',
    backgroundColor: [{
      colorName: 'primary-black',
      colorValue: '#000001'
    }, {
      colorName: 'primary-email-green',
      colorValue: '#000001'
    }, {
      colorName: 'primary-web-primary-green',
      colorValue: '#000001'
    }, {
      colorName: 'primary-white',
      colorValue: '#000001'
    }, {
      colorName: 'primary-grey-lightest',
      colorValue: '#000001'
    }, {
      colorName: 'primary-gray-background',
      colorValue: '#000001'
    }],
    numberOfColors: 6
  }
}`,...(V=(p=r.parameters)==null?void 0:p.docs)==null?void 0:V.source}}};var b,f,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    sectionHeadline: 'Secondary',
    backgroundColor: [{
      colorName: 'secondary-green',
      colorValue: '#45a821'
    }, {
      colorName: 'secondary-violet',
      colorValue: '#070540'
    }, {
      colorName: 'secondary-yellow-medium',
      colorValue: '#f1c043'
    }, {
      colorName: 'secondary-yellow-light',
      colorValue: ' #f9e48a'
    }, {
      colorName: 'secondary-blue-medium',
      colorValue: '#b9d1e3'
    }, {
      colorName: 'secondary-blue-light',
      colorValue: '#e8f289'
    }, {
      colorName: 'secondary-orange-medium',
      colorValue: '#ee7623'
    }, {
      colorName: 'secondary-orange-light',
      colorValue: '#ff8935'
    }],
    numberOfColors: 8
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,k,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    sectionHeadline: 'Neutral',
    backgroundColor: [{
      colorName: 'neutral-beige',
      colorValue: '#e5c598'
    }, {
      colorName: 'neutral-gray-light',
      colorValue: '#d8d8d8'
    }, {
      colorName: 'neutral-gray-medium',
      colorValue: '#bfbfbf'
    }, {
      colorName: 'neutral-gray',
      colorValue: '#808080'
    }, {
      colorName: 'neutral-gray-dark',
      colorValue: '#595959'
    }, {
      colorName: 'neutral-gray-darkest',
      colorValue: '#3f4143'
    }],
    numberOfColors: 6
  }
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var h,S,H;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sectionHeadline: 'Green Screens',
    backgroundColor: [{
      colorName: 'green-screen-50',
      colorValue: '#e8f8ec'
    }, {
      colorName: 'green-screen-100',
      colorValue: '#c7eed1'
    }, {
      colorName: 'green-screen--200-300',
      colorValue: '#79da94'
    }, {
      colorName: 'green-screen-400',
      colorValue: '#40d271'
    }, {
      colorName: 'green-screen-500',
      colorValue: '#00c859'
    }, {
      colorName: 'green-screen-600',
      colorValue: '#2ab75b'
    }, {
      colorName: 'green-screen-700',
      colorValue: '#1da44f'
    }, {
      colorName: 'green-screen-800',
      colorValue: '#129244'
    }, {
      colorName: 'green-screen-900',
      colorValue: '#007230'
    }, {
      colorName: 'green-screen-950',
      colorValue: '#007324'
    }],
    numberOfColors: 10
  }
}`,...(H=(S=n.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var _,w,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    sectionHeadline: 'Orange',
    backgroundColor: [{
      colorName: 'illustration-orange-200',
      colorValue: '#ffc6ab'
    }, {
      colorName: 'illustration-orange-300',
      colorValue: '#ff9974'
    }, {
      colorName: 'illustration-orange-400',
      colorValue: '#e97c3d'
    }],
    numberOfColors: 3
  }
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var v,I,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    sectionHeadline: 'Purple',
    backgroundColor: [{
      colorName: 'illustration-purple-0',
      colorValue: '#baa6fe'
    }, {
      colorName: 'illustration-purple-100',
      colorValue: '#c6baee'
    }, {
      colorName: 'illustration-purple-200',
      colorValue: '#aa96ee'
    }, {
      colorName: 'illustration-purple-300',
      colorValue: '#8c80ff'
    }, {
      colorName: 'illustration-purple-400',
      colorValue: '#aa96ee'
    }],
    numberOfColors: 5
  }
}`,...(B=(I=s.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var T,x,G;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    sectionHeadline: 'Blue',
    backgroundColor: [{
      colorName: 'illustration-blue-100',
      colorValue: '#deeeff'
    }, {
      colorName: 'illustration-blue-200',
      colorValue: '#5cbfea'
    }],
    numberOfColors: 2
  }
}`,...(G=(x=u.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const A=["Primary","Secondary","Neutral","GreenScreen","IllustrationOrange","IllustrationPurple","IllustrationBlue"],J=Object.freeze(Object.defineProperty({__proto__:null,GreenScreen:n,IllustrationBlue:u,IllustrationOrange:c,IllustrationPurple:s,Neutral:l,Primary:r,Secondary:a,__namedExportsOrder:A,default:q},Symbol.toStringTag,{value:"Module"}));export{J as C,n as G,c as I,l as N,r as P,a as S,s as a,u as b};
