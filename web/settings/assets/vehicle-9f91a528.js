import{_ as g,q as a,l as h,m as f,A as n,K as i,v as t,u as r,x as d}from"./vendor-b78ff8c0.js";import"./vendor-sortablejs-116030fd.js";const v={name:"VehicleSocMercedesEq",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},computed:{callback_url(){return this.configuration.callback_url=`${location.origin}/openWB/web/settings/modules/vehicles/mercedeseq/callback_vehicle.php`,this.configuration.callback_url},login_url(){return`https://ssoalpha.dvb.corpinter.net/v1/auth?response_type=code&state=${this.vehicleId}&client_id=${this.configuration.client_id}&redirect_uri=${this.callback_url}&scope=mb:vehicle:mbdata:evstatus%20offline_access%20openid`},input_complete(){return this.configuration.client_id&&this.configuration.client_secret&&this.configuration.vin}},methods:{updateConfiguration(l,e=void 0){this.$emit("update:configuration",{value:l,object:e})},login_window(){console.debug("callback url",this.callback_url),console.debug("login url",this.login_url);var l=window.open(this.login_url,"MercedesLogin","width=800,height=600,status=yes,scrollbars=yes,resizable=yes");l.focus()}}},w={class:"vehicle-soc-mercedeseq"},k={class:"small"},C=r("br",null,null,-1),y=r("br",null,null,-1),q=r("br",null,null,-1);function x(l,e,c,B,D,o){const p=a("openwb-base-heading"),u=a("openwb-base-text-input"),_=a("openwb-base-copy-to-clipboard"),b=a("openwb-base-alert"),m=a("openwb-base-button-input");return h(),f("div",w,[n(p,null,{default:i(()=>[t(" Einstellungen für Mercedes EQ SoC "),r("span",k,"(Modul: "+d(l.$options.name)+")",1)]),_:1}),n(u,{title:"Client-ID",required:"",subtype:"user","model-value":c.configuration.client_id,"onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.client_id"))},{help:i(()=>[t(" Die im Developer Portal angelegte Client-ID. ")]),_:1},8,["model-value"]),n(u,{title:"Client Secret",required:"",subtype:"password","model-value":c.configuration.client_secret,"onUpdate:modelValue":e[1]||(e[1]=s=>o.updateConfiguration(s,"configuration.client_secret"))},{help:i(()=>[t(" Das im Developer Portal angelegte Client Secret. ")]),_:1},8,["model-value"]),n(u,{title:"VIN",required:"","model-value":c.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=s=>o.updateConfiguration(s,"configuration.vin"))},{help:i(()=>[t(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"]),n(b,{subtype:"info"},{default:i(()=>[t(" Vor dem Anmelden bitte die Angaben speichern."),C,t(" Die Callback-URL für die Anmeldung lautet:"),y,n(_,{class:"text-info",tooltip:"URL kopieren"},{default:i(()=>[t(d(o.callback_url),1)]),_:1})]),_:1}),n(m,{title:"Anmelden",buttonText:"Bei Mercedes Anmelden",subtype:"success",disabled:!o.input_complete,onButtonClicked:o.login_window},{help:i(()=>[t(" Es wird ein neues Browserfenster geöffnet, in dem Sie sich bei Mercedes mit Ihren Zugangsdaten anmelden können."),q]),_:1},8,["disabled","onButtonClicked"])])}const I=g(v,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/mercedeseq/vehicle.vue"]]);export{I as default};
