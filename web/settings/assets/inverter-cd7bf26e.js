import{_ as p,q as l,l as m,m as _,A as i,K as r,v as t,u,x as f}from"./vendor-b78ff8c0.js";import"./vendor-sortablejs-116030fd.js";const g={name:"DeviceJsonInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},h={class:"device-json-inverter"},w={class:"small"},b=u("br",null,null,-1);function v(n,e,s,j,x,a){const c=l("openwb-base-heading"),d=l("openwb-base-text-input");return m(),_("div",h,[i(c,null,{default:r(()=>[t(" Einstellungen für JSON Wechselrichter "),u("span",w,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),i(d,{title:"Abfrage für Leistung",subtype:"text",required:"","model-value":s.configuration.jq_power,"onUpdate:modelValue":e[0]||(e[0]=o=>a.updateConfiguration(o,"configuration.jq_power"))},{help:r(()=>[t(' Zur Analyse der Werte aus dem json-Objekt wird jq benutzt. Ist die Json Antwort z.B. {"PowerInstalledPeak":4655, "PowerProduced":132, "PowerOut":897.08172362555717, "PowerSelfSupplied":234.9182763744428} So muss hier .PowerOut eingetragen werden. '),b,t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt darstellt. Produzierte Leistung muss ein negatives Vorzeichen haben. (In bestimmten Konstellationen, z.B. wenn ein Hybridsystem über einen zweiten Wechselrichter geladen wird, hat die Leistung ein positives Vorzeichen.) ")]),_:1},8,["model-value"]),i(d,{title:"Abfrage für Zählerstand",subtype:"text","model-value":s.configuration.jq_exported,"onUpdate:modelValue":e[1]||(e[1]=o=>a.updateConfiguration(o,"configuration.jq_exported"))},{help:r(()=>[t(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")]),_:1},8,["model-value"])])}const P=p(g,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/json/inverter.vue"]]);export{P as default};
