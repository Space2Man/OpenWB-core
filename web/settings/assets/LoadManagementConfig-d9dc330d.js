import{l as z,L as S,M as C,F as L}from"./vendor-fortawesome-12414438.js";import{C as $}from"./index-5e211303.js";import{S as V}from"./OpenwbSortableList-58b728a1.js";import{_ as x,q as d,l,m as u,u as m,A as r,K as s,v as i,F as _,G as v,z as M,y as w,x as k}from"./vendor-b78ff8c0.js";import"./vendor-bootstrap-760bc08d.js";import"./vendor-jquery-41669b5b.js";import"./vendor-axios-a6fb860e.js";import"./vendor-sortablejs-116030fd.js";z.add(S,C);const q={name:"OpenwbLoadManagementConfig",mixins:[$],emits:["sendCommand"],components:{SortableList:V,FontAwesomeIcon:L},data(){return{mqttTopicsToSubscribe:["openWB/counter/config/reserve_for_not_charging","openWB/counter/get/hierarchy","openWB/system/device/+/component/+/config","openWB/counter/+/config/max_currents","openWB/counter/+/config/max_total_power","openWB/pv/+/config/max_ac_out","openWB/chargepoint/+/config"]}},computed:{counterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("counter")).reduce((t,o)=>({...t,[o]:e[o]}),{})}},inverterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("inverter")).reduce((t,o)=>({...t,[o]:e[o]}),{})}},hierarchyLabels:{get(){let e={};for(const t of Object.values(this.$store.state.mqtt["openWB/counter/get/hierarchy"]))e={...e,...this.getElementTreeNames(t)};return e}}},methods:{getElementTreeNames(e){let t={};if(e.type=="cp"){let o=this.getChargePoint(e.id);o&&(t[e.id]=o.name)}else{let o=this.getComponent(e.id);o&&(t[e.id]=o.name)}return e.children.forEach(o=>{t={...t,...this.getElementTreeNames(o)}}),t},getComponent(e){let t;return Object.keys(this.$store.state.mqtt).forEach(o=>{o.match("^openWB/system/device/[0-9]+/component/"+e+"/config$")&&(t=this.$store.state.mqtt[o])}),t},getChargePoint(e){let t;return Object.keys(this.$store.state.mqtt).forEach(o=>{o.match("^openWB/chargepoint/"+e+"/config$")&&(t=this.$store.state.mqtt[o])}),t}}},F={class:"loadManagementConfig"},Z={name:"loadManagementConfigForm"},D={key:0},N={key:1},U=m("br",null,null,-1),E=m("br",null,null,-1),A={key:0},P={key:1},T=m("br",null,null,-1),O=m("br",null,null,-1),j=m("br",null,null,-1);function G(e,t,o,K,R,g){const h=d("openwb-base-alert"),W=d("openwb-base-button-group-input"),f=d("openwb-base-heading"),b=d("font-awesome-icon"),c=d("openwb-base-number-input"),p=d("openwb-base-card"),B=d("sortable-list"),y=d("openwb-base-submit-buttons");return l(),u("div",F,[m("form",Z,[r(p,{title:"Einstellungen",collapsible:!0,collapsed:!1},{default:s(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),u("div",D,[r(h,{subtype:"info"},{default:s(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(l(),u("div",N,[r(W,{title:"Nicht-ladende Fahrzeuge",buttons:[{buttonValue:!1,text:"nicht berücksichtigen",class:"btn-outline-danger"},{buttonValue:!0,text:"berücksichtigen",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/counter/config/reserve_for_not_charging"],"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateState("openWB/counter/config/reserve_for_not_charging",n))},{help:s(()=>[i(" Wenn angesteckte Fahrzeuge, die nicht laden, im Lastmanagement berücksichtigt werden, wird für diese der Fahrzeug-Mindeststrom bei vorliegender Ladefreigabe reserviert. Dadurch können bei Eingreifen des Lastmanagements andere Fahrzeuge möglicherweise nur mit reduzierter Stromstärke laden und der reservierte Strom wird nicht genutzt. Wenn die Fahrzeuge wieder Leistung beziehen, z. B. um zu klimatisieren, nutzen sie den für sie reservierten Strom."),U,i(" Wenn angesteckte Fahrzeuge, die nicht laden, nicht im Lastmanagement berücksichtigt werden, wird für diese kein Strom bei vorliegender Ladefreigabe reserviert. Wenn die Lastmanagement-Grenzen fast erreicht sind und die Fahrzeuge wieder Leistung beziehen, z. B. um zu klimatisieren, kann es zu einer kurzzeitigen Überschreitung der Lastmanagement-Grenzen kommen, bis im nächsten Zyklus die Stromstärken aller Ladepunkte an die neue Situation angepasst werden."),E,i(" Das kurzzeitige Überschreiten der Maximal-Werte stellt für die Sicherungen in der Regel kein Problem dar. ")]),_:1},8,["model-value"]),r(f,null,{default:s(()=>[i(" Vorhandene Zählermodule ")]),_:1}),r(h,{subtype:"info"},{default:s(()=>[i(" Die maximale Leistung wird nur für den EVU-Zähler berücksichtigt. Bei Zwischenzählern begrenzt das Lastmanagement rein anhand der maximalen Phasenströme. ")]),_:1}),(l(!0),u(_,null,v(g.counterConfigs,n=>(l(),w(p,{key:n.id,collapsible:!0,collapsed:!0,subtype:"danger"},{header:s(()=>[r(b,{"fixed-width":"",icon:["fas","gauge-high"]}),i(" "+k(n.name),1)]),default:s(()=>[r(c,{title:"Maximale Leistung",min:1,step:1,unit:"kW","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_total_power"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_total_power",a*1e3)},{help:s(()=>[i(" Maximal zulässige Leistung für diesen (Zwischen-)Zähler. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),r(c,{title:"Maximaler Strom L1",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][0],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"0")},{help:s(()=>[i(" Maximal zulässiger Strom für die Phase 1 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),r(c,{title:"Maximaler Strom L2",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][1],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"1")},{help:s(()=>[i(" Maximal zulässiger Strom für die Phase 2 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),r(c,{title:"Maximaler Strom L3",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][2],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"2")},{help:s(()=>[i(" Maximal zulässiger Strom für die Phase 3 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128)),r(f,null,{default:s(()=>[i(" Vorhandene Wechselrichtermodule ")]),_:1}),(l(!0),u(_,null,v(g.inverterConfigs,n=>(l(),w(p,{key:n.id,collapsible:!0,collapsed:!0,subtype:"success"},{header:s(()=>[r(b,{"fixed-width":"",icon:["fas","solar-panel"]}),i(" "+k(n.name),1)]),default:s(()=>[r(c,{title:"Maximale Ausgangsleistung des Wechselrichters",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/pv/"+n.id+"/config/max_ac_out"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/pv/"+n.id+"/config/max_ac_out",a*1e3)},{help:s(()=>[i(" Relevant bei Hybrid-Systemen mit DC-Speicher. ")]),_:2},1032,["step","model-value","onUpdate:modelValue"])]),_:2},1024))),128))]))]),_:1}),r(p,{title:"Struktur",collapsible:!0,collapsed:!0},{default:s(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),u("div",A,[r(h,{subtype:"info"},{default:s(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(l(),u("div",P,[M(" ToDo: Fix: nested lists bypass store commits! "),r(B,{title:"Anordnung der Komponenten","model-value":e.$store.state.mqtt["openWB/counter/get/hierarchy"],"onUpdate:modelValue":t[1]||(t[1]=n=>e.updateState("openWB/counter/get/hierarchy",n)),labels:g.hierarchyLabels},{help:s(()=>[i(" Durch die Anordnung der Komponenten werden Abhängigkeiten abgebildet."),T,i(" An erster Stelle muss eine Zählerkomponente stehen, die den Netzanschlusspunkt erfasst. Dafür kann auch ein virtueller Zähler genutzt werden."),O,i(" Die weiteren Komponenten müssen hierarchisch so angeordnet werden, wie sie auch physisch im Stromnetz angeschlossen werden."),j,i(" Bei DC-gekoppelten Speichern sind diese hinter dem zugehörigen Wechselrichter zu platzieren, damit die Abhängigkeit in der Regelung berücksichtigt werden kann. ")]),_:1},8,["model-value","labels"])]))]),_:1}),r(y,{formName:"loadManagementConfigForm",onSave:t[2]||(t[2]=n=>e.$emit("save")),onReset:t[3]||(t[3]=n=>e.$emit("reset")),onDefaults:t[4]||(t[4]=n=>e.$emit("defaults"))})])])}const ne=x(q,[["render",G],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/LoadManagementConfig.vue"]]);export{ne as default};
