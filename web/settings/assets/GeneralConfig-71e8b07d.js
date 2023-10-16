import{C as T}from"./index-8b0976ac.js";import{_ as z}from"./dynamic-import-helper-be004503.js";import{_ as h,p as d,k as s,l as p,y as _,L as i,u as r,x as c,A as t,q as a,a0 as $,a1 as C,z as f}from"./vendor-722d145b.js";import"./vendor-fortawesome-6065c3c9.js";import"./vendor-bootstrap-f38507dc.js";import"./vendor-jquery-f14c9652.js";import"./vendor-axios-99347cb8.js";import"./vendor-sortablejs-580a7723.js";const V={name:"WebThemeFallback",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},webThemeType:{type:String}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},q={class:"web-theme-fallback"},D={key:1};function L(e,n,u,w,W,m){const l=d("openwb-base-alert"),g=d("openwb-base-textarea");return s(),p("div",q,[Object.keys(u.configuration).length==0?(s(),_(l,{key:0,subtype:"info"},{default:i(()=>[r(' Das Web Theme "'+c(u.webThemeType)+'" bietet keine Einstellungen. ',1)]),_:1})):(s(),p("div",D,[t(l,{subtype:"warning"},{default:i(()=>[r(' Es wurde keine Konfigurationsseite für das Web Theme "'+c(u.webThemeType)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),t(g,{title:"Theme Konfiguration",subtype:"json","model-value":u.configuration,"onUpdate:modelValue":n[0]||(n[0]=b=>m.updateConfiguration(b,"configuration"))},{help:i(()=>[r(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),t(l,{subtype:"info"},{default:i(()=>[a("pre",null,c(JSON.stringify(u.configuration,void 0,2)),1)]),_:1})]))])}const O=h(V,[["render",L],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeFallback.vue"]]),E={name:"OpenwbWebThemeProxy",emits:["update:configuration"],props:{webThemeType:{type:String,required:!0},configuration:{type:Object,required:!0}},computed:{myComponent(){return console.debug(`loading web theme: ${this.webThemeType}`),$({loader:()=>z(Object.assign({}),`./${this.webThemeType}/webTheme.vue`),errorComponent:O})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}};function N(e,n,u,w,W,m){return s(),_(C(m.myComponent),{configuration:u.configuration,webThemeType:u.webThemeType,"onUpdate:configuration":n[0]||(n[0]=l=>m.updateConfiguration(l))},null,40,["configuration","webThemeType"])}const x=h(E,[["render",N],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeProxy.vue"]]),P={name:"OpenwbGeneralConfig",mixins:[T],components:{OpenwbWebThemeProxy:x},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/control_interval","openWB/general/grid_protection_configured","openWB/general/external_buttons_hw","openWB/general/modbus_control","openWB/general/notifications/selected","openWB/general/notifications/configuration","openWB/general/notifications/start_charging","openWB/general/notifications/stop_charging","openWB/general/notifications/plug","openWB/general/notifications/smart_home","openWB/general/price_kwh","openWB/general/range_unit","openWB/general/web_theme","openWB/system/configurable/web_themes"]}},computed:{webThemeList:{get(){return this.$store.state.mqtt["openWB/system/configurable/web_themes"]}}},methods:{getWebThemeDefaultConfiguration(e){const n=this.webThemeList.find(u=>u.value==e);return Object.prototype.hasOwnProperty.call(n,"defaults")?{...JSON.parse(JSON.stringify(n.defaults.configuration))}:(console.warn("no default configuration found for web theme type!",e),{})},updateSelectedWebTheme(e){this.updateState("openWB/general/web_theme",e,"type"),this.updateState("openWB/general/web_theme",this.getWebThemeDefaultConfiguration(e),"configuration")},updateConfiguration(e,n){console.debug("updateConfiguration",e,n),this.updateState(e,n.value,n.object)}}},R={class:"generalConfig"},U={name:"generalConfigForm"},F=a("br",null,null,-1),A=a("br",null,null,-1),j=a("br",null,null,-1),M=a("a",{href:"https://openwb.de/main/?page_id=1025",target:"_blank",rel:"noopener noreferrer"}," Homepage ",-1),G=a("a",{href:"https://openwb.de/main/wp-content/uploads/2023/10/ModbusTCP-openWB-series2-Pro-1.pdf",target:"_blank",rel:"noopener noreferrer"}," hier",-1),H={key:0},I={key:0},J={key:1},K=a("br",null,null,-1),Z=a("span",{class:"text-danger"},' Nicht nur die Regelung der PV geführten Ladung, sondern auch die Ladestromänderung, beispielsweise “Stop“ etc., werden dann nur noch in diesem Intervall ausgeführt. Die Regelung wird insgesamt träger. Solange es keinen triftigen Grund gibt, sollte "Normal" gewählt werden. ',-1),Q=a("br",null,null,-1),X=a("span",{class:"text-danger"}," Die Option ist nur aktiv, wenn der EVU-Zähler die Frequenz übermittelt. ",-1),Y={key:0},ee={key:1},ne={key:0},te=a("hr",null,null,-1),oe=a("br",null,null,-1);function re(e,n,u,w,W,m){const l=d("openwb-base-alert"),g=d("openwb-base-button-group-input"),b=d("openwb-base-card"),B=d("openwb-base-heading"),y=d("openwb-base-select-input"),v=d("openwb-web-theme-proxy"),k=d("openwb-base-number-input"),S=d("openwb-base-submit-buttons");return s(),p("div",R,[a("form",U,[t(b,{title:"Steuerungsmodus"},{default:i(()=>[t(l,{subtype:"info"},{default:i(()=>[r(' Wird für den Steuerungsmodus "primary" gewählt, übernimmt diese openWB die alleinige Regelung und steuert ggf. vorhandene weitere openWB (z.B. externe openWB im Steuermodus secondary, openWB Pro, Satellit u.a.) fern. Sie werden in den Ladepunkt-Einstellungen der primary-openWB hinzugefügt. '),F,A,r(' Wird für den Steuerungsmodus "secondary" gewählt, übernimmt diese openWB keine Regelung und muss von einer anderen primary openWB ferngesteuert werden. Wichtig ist, dass in der secondary-openWB eine "interne openWB" mit der korrekten Bauart (= openWB-Hardwarevariante z.B. "Custom, Standard, Standard+, Duo, Buchse") konfiguriert ist. Bei einer Duo sind zwei "interne openWB" zu konfigurieren. Im "secondary"-Modus bleiben alle ausgeblendeten Einstellungen unbeachtet.'),j,r(" Eine bebilderte Anleitung zur Konfiguration der Ladepunkte findest Du auf der "),M,r(". ")]),_:1}),t(g,{title:"Steuerungsmodus",buttons:[{buttonValue:!1,text:"primary",class:"btn-outline-danger"},{buttonValue:!0,text:"secondary",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/extern"],"onUpdate:modelValue":n[0]||(n[0]=o=>e.updateState("openWB/general/extern",o))},null,8,["model-value"]),t(g,{title:"Steuerung über Modbus als secondary",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/modbus_control"],"onUpdate:modelValue":n[1]||(n[1]=o=>e.updateState("openWB/general/modbus_control",o))},{help:i(()=>[r(" Im secondary-Modus kann die openWB über die Modbus-Schnittstelle gesteuert werden. Die Register sind "),G,r("dokumentiert. Bei aktivierter Modbus-Schnittstelle darf die openWB nicht von einer primary-openWB gesteuert werden. ")]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/general/modbus_control"]===!0?(s(),p("div",H,[t(l,{subtype:"info"},{default:i(()=>[r(' Wenn die Steuerung über Modbus auf "aus" geändert wird, muss danach ein Neustart durchgeführt werden! ')]),_:1})])):f("",!0)]),_:1}),t(b,{title:"Hardware"},{default:i(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(s(),p("div",I,[t(l,{subtype:"info"},{default:i(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),p("div",J,[t(g,{title:"Geschwindigkeit Regelintervall",buttons:[{buttonValue:10,text:"Normal",class:"btn-outline-success"},{buttonValue:20,text:"Langsam",class:"btn-outline-warning"},{buttonValue:60,text:"Sehr Langsam",class:"btn-outline-danger"}],"model-value":e.$store.state.mqtt["openWB/general/control_interval"],"onUpdate:modelValue":n[2]||(n[2]=o=>e.updateState("openWB/general/control_interval",o))},{help:i(()=>[r(' Sollten Probleme oder Fehlermeldungen auftauchen, stelle bitte zunächst das Regelintervall auf "Normal". Werden Module genutzt, welche z.B. eine Online-API zur Abfrage nutzen (höhere Latenzzeiten) oder möchte man weniger Regeleingriffe, so kann man das Regelintervall auf "Langsam" (20 Sekunden) herabsetzen. Die Einstellung „Sehr Langsam“ führt zu einer Regelzeit von 60 Sekunden.'),K,Z]),_:1},8,["model-value"]),t(g,{title:"Netzschutz",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/grid_protection_configured"],"onUpdate:modelValue":n[3]||(n[3]=o=>e.updateState("openWB/general/grid_protection_configured",o))},{help:i(()=>[r(' Diese Option ist standardmäßig aktiviert und sollte so belassen werden. Bei Unterschreitung einer kritischen Frequenz des Stromnetzes wird die Ladung nach einer zufälligen Zeit zwischen 1 und 90 Sekunden pausiert. Der Lademodus wechselt auf "Stop". Sobald die Frequenz wieder in einem normalen Bereich ist wird automatisch der zuletzt gewählte Lademodus wieder aktiviert. Ebenso wird die Ladung bei Überschreiten von 51,8 Hz unterbrochen. Dies ist dann der Fall, wenn der Energieversorger Wartungsarbeiten am (Teil-)Netz durchführt und auf einen vorübergehenden Generator-Betrieb umschaltet. Die Erhöhung der Frequenz wird durchgeführt, um die PV Anlagen abzuschalten.'),Q,X]),_:1},8,["model-value"])]))]),_:1}),t(b,{title:"Darstellung"},{default:i(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(s(),p("div",Y,[t(l,{subtype:"info"},{default:i(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),p("div",ee,[t(B,{class:"mt-0"},{default:i(()=>[r(" Hauptseite ")]),_:1}),e.$store.state.mqtt["openWB/general/web_theme"]!==void 0?(s(),p("div",ne,[t(y,{class:"mb-2",title:"Theme",options:m.webThemeList,"model-value":e.$store.state.mqtt["openWB/general/web_theme"].type,"onUpdate:modelValue":n[4]||(n[4]=o=>m.updateSelectedWebTheme(o))},null,8,["options","model-value"]),e.$store.state.mqtt["openWB/general/web_theme"].type?(s(),_(v,{key:0,webThemeType:e.$store.state.mqtt["openWB/general/web_theme"].type,configuration:e.$store.state.mqtt["openWB/general/web_theme"].configuration,"onUpdate:configuration":n[5]||(n[5]=o=>m.updateConfiguration("openWB/general/web_theme",o))},null,8,["webThemeType","configuration"])):f("",!0)])):f("",!0),te,t(B,null,{default:i(()=>[r(" Lade-Log ")]),_:1}),t(k,{title:"Preis je kWh",min:0,step:1e-4,unit:"€","model-value":e.$store.state.mqtt["openWB/general/price_kwh"],"onUpdate:modelValue":n[6]||(n[6]=o=>e.updateState("openWB/general/price_kwh",o))},{help:i(()=>[r(" Dient zur Berechnung der Ladekosten im Lade-Log."),oe,r(" Es können bis zu 4 Nachkommastellen genutzt werden. ")]),_:1},8,["model-value"]),t(g,{title:"Einheit für Entfernungen","model-value":e.$store.state.mqtt["openWB/general/range_unit"],"onUpdate:modelValue":n[7]||(n[7]=o=>e.updateState("openWB/general/range_unit",o)),buttons:[{buttonValue:"km",text:"Kilometer"},{buttonValue:"mi",text:"Meilen"}]},null,8,["model-value"])]))]),_:1}),t(S,{formName:"generalConfigForm",onSave:n[8]||(n[8]=o=>e.$emit("save")),onReset:n[9]||(n[9]=o=>e.$emit("reset")),onDefaults:n[10]||(n[10]=o=>e.$emit("defaults"))})])])}const ge=h(P,[["render",re],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralConfig.vue"]]);export{ge as default};
