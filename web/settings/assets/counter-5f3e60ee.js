import{_ as c,q as t,l as u,m as d,A as o,K as s,v as a,u as p,x as l}from"./vendor-b78ff8c0.js";import"./vendor-sortablejs-116030fd.js";const _={name:"DeviceSunnyBoyCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},m={class:"device-sunnyboy-counter"},f={class:"small"};function b(e,n,g,y,v,h){const i=t("openwb-base-heading"),r=t("openwb-base-alert");return u(),d("div",m,[o(i,null,{default:s(()=>[a(" Einstellungen für SMA Sunny Boy Zähler "),p("span",f,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const $=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_sunny_boy/counter.vue"]]);export{$ as default};
