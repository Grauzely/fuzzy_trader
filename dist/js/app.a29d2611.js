(function(t){function e(e){for(var s,n,c=e[0],r=e[1],i=e[2],u=0,v=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&v.push(l[n][0]),l[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==l[r]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},l={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("8a23"),l=a.n(s);l.a},"34ba":function(t,e,a){"use strict";var s=a("538f"),l=a.n(s);l.a},4230:function(t,e,a){},"48f0":function(t,e,a){"use strict";var s=a("d372"),l=a.n(s);l.a},"538f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"namespaced",(function(){return P})),a.d(s,"state",(function(){return $})),a.d(s,"mutations",(function(){return F})),a.d(s,"actions",(function(){return L})),a.d(s,"getters",(function(){return q}));var l={};a.r(l),a.d(l,"namespaced",(function(){return G})),a.d(l,"state",(function(){return z})),a.d(l,"mutations",(function(){return H})),a.d(l,"actions",(function(){return J}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("NavBar"),a("v-content",[a("router-view")],1)],1)},c=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("v-app-bar",{staticClass:"navTop",attrs:{color:"#0e153a",fixed:"",dark:""}},[a("v-toolbar-title",{staticClass:"brand"},[t._v("Fuzzy Trader")]),a("v-spacer"),a("v-btn",{attrs:{to:{name:"Home"},icon:""}},[a("v-icon",[t._v("mdi-home")])],1),a("v-btn",{attrs:{to:{name:"Ativos"},icon:""}},[a("v-icon",[t._v("mdi-chart-areaspline")])],1),a("v-btn",{attrs:{to:{name:"Carteira"},icon:""}},[a("v-icon",[t._v("mdi-wallet")])],1),a("h1",[t._v("U$ "+t._s(t.walletModule.valueWallet))])],1),a("v-bottom-navigation",{staticClass:"navBottom",attrs:{fixed:""},model:{value:t.bottomNav,callback:function(e){t.bottomNav=e},expression:"bottomNav"}},[a("v-btn",{attrs:{value:"inicio"}},[a("span",[t._v("Inicio")]),a("v-icon",[t._v("mdi-home")])],1),a("v-spacer"),a("v-btn",{attrs:{value:"ativo"}},[a("span",[t._v("Ativos")]),a("v-icon",[t._v("mdi-chart-areaspline")])],1),a("v-spacer"),a("v-btn",{attrs:{value:"carteira"}},[a("span",[t._v("Carteira")]),a("v-icon",[t._v("mdi-wallet")])],1)],1)],1)},i=[],d=a("5530"),u=a("2f62"),v={data:function(){return{bottomNav:"1"}},computed:Object(d["a"])({},Object(u["b"])(["walletModule"]))},h=v,p=(a("34ba"),a("2877")),m=a("6544"),f=a.n(m),_=a("40dc"),g=a("b81c"),C=a("8336"),y=a("132d"),b=a("2fa4"),A=a("2a7f"),w=Object(p["a"])(h,r,i,!1,null,null,null),S=w.exports;f()(w,{VAppBar:_["a"],VBottomNavigation:g["a"],VBtn:C["a"],VIcon:y["a"],VSpacer:b["a"],VToolbarTitle:A["a"]});var k={name:"App",components:{NavBar:S}},I=k,T=(a("034f"),a("7496")),x=a("a75b"),M=Object(p["a"])(I,n,c,!1,null,null,null),W=M.exports;f()(M,{VApp:T["a"],VContent:x["a"]});var E=a("8c4f"),V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",{staticClass:"container-home",attrs:{fluid:""}},[s("v-card",{staticClass:"card-home",attrs:{width:"700"}},[s("h1",[t._v(" A melhor ferramenta de apoio a decisão em investimentos de Criptomoedas e Ações ")]),s("img",{staticClass:"img-home",attrs:{width:"200",height:"auto",src:a("ca3e")}}),s("h1",[t._v(" Informe o valor em dólar que deseja aplicar: ")]),s("div",{staticClass:"field-value"},[s("h1",[t._v("U$")]),s("v-text-field",{directives:[{name:"money",rawName:"v-money",value:t.money,expression:"money"}],staticClass:"input-value",attrs:{filled:"","error-messages":t.msgWarning},on:{focus:t.clearMsgWarning},model:{value:t.valueToInvest,callback:function(e){t.valueToInvest=e},expression:"valueToInvest"}}),s("v-btn",{staticClass:"btn-search",on:{click:t.search}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("Buscar Ativos")]),s("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{indeterminate:"",color:"white"}})],1)],1),s("p",{staticClass:"obs"},[t._v(" * Com base no valor que você deseja aplicar buscaremos os melhores ativos do mercado para apoia-lo nessa tomada de decisão. ")])])],1)],1)},O=[],B=(a("4de4"),a("bc3a")),U=a.n(B),R="https://financialmodelingprep.com/api/v3/quote/BTCUSD,XRPUSD,ETHUSD,AAPL,GOOG,AMZN,NFLX,FB,MSFT?apikey=c0078849f46492cf5769650aeda42c5b",j=U.a.create({baseURL:R,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),N={getCryptoAndStock:function(){return j.get()}},P=!0,$={cryptos:[],stocks:[],cryptosAndStocks:[]},F={SET_CRYPTOS_AND_STOCKS:function(t,e){t.cryptosAndStocks=e},SET_CRYPTOS:function(t,e){t.cryptos=e},SET_STOCKS:function(t,e){t.stocks=e}},L={fetchCryptoAndStock:function(t){var e=t.commit,a=t.getters,s=t.dispatch;setInterval((function(){return N.getCryptoAndStock().then((function(t){e("SET_CRYPTOS_AND_STOCKS",t.data),s("walletModule/fetchValueCurrent",t.data,{root:!0}),e("SET_CRYPTOS",a.getCryptos),e("SET_STOCKS",a.getStocks)}))}),2e3)}},q={getCryptos:function(t){return t.cryptosAndStocks.filter((function(t){return"CRYPTO"==t.exchange}))},getStocks:function(t){return t.cryptosAndStocks.filter((function(t){return"CRYPTO"!=t.exchange}))},getCheckExistAssets:function(t){return 0==t.cryptosAndStocks.length}},G=(a("c740"),a("d81d"),a("13d5"),a("ac1f"),a("5319"),!0);function D(t){if(t)return t.toLocaleString("en-US",{minimumFractionDigits:2})}function Y(t){if(t)return parseFloat(t.replace(",",""))}var z={valueInBox:0,valueToInvest:0,valueWallet:0,valueInvested:0,assetsWallet:[]},H={SET_VALUE_INVESTED:function(t,e){t.valueInvested=e},SET_VALUES_INIT:function(t,e){t.valueWallet=e,t.valueInBox=e,t.valueToInvest=e,localStorage.setItem("valueWallet",e),localStorage.setItem("valueInBox",e),localStorage.setItem("valueToInvest",e),localStorage.removeItem("assetsWallet"),t.valueInvested=0,t.assetsWallet=[]},RECOVERY_WALLET:function(t){t.valueWallet=localStorage.getItem("valueWallet"),t.valueInBox=localStorage.getItem("valueInBox"),t.valueToInvest=localStorage.getItem("valueToInvest"),t.valueInvested=localStorage.getItem("valueInvested"),t.assetsWallet=JSON.parse(localStorage.getItem("assetsWallet"))},SET_ASSET_WALLET:function(t,e){var a=t.assetsWallet.findIndex((function(t){return t.symbol===e.symbol}));-1!=a?(e.valueTotal=D(e.qtdAssets*e.valueBuy+Y(t.assetsWallet[a].valueTotal)),e.qtdAssets+=t.assetsWallet[a].qtdAssets,e.valueCurrent=e.valueBuy,e.valueBuy=(e.valueBuy+t.assetsWallet[a].valueBuy)/2,t.assetsWallet[a]=Object(d["a"])({},e)):(e.valueCurrent=e.valueBuy,e.valueTotal=D(e.qtdAssets*e.valueBuy),t.assetsWallet.push(Object(d["a"])({},e))),t.valueInvested=t.assetsWallet.reduce((function(t,e){return t+Y(e.valueTotal)})),t.valueInvested=D(t.assetsWallet.reduce((function(t,e){return t+Y(e.valueTotal)}),0)),localStorage.setItem("valueInvested",t.valueInvested),t.valueInBox=D(Y(t.valueWallet)-Y(t.valueInvested)),localStorage.setItem("valueInBox",t.valueInBox?t.valueInBox:"0.00"),localStorage.setItem("assetsWallet",JSON.stringify(t.assetsWallet))},SET_VALUE_CURRENT:function(t,e){t.assetsWallet=t.assetsWallet.map((function(t){var a=e.filter((function(e){return e.symbol==t.symbol}));return t.valueCurrent=a[0].price,t}))}},J={addAssetWallet:function(t,e){var a=t.commit;a("SET_ASSET_WALLET",e)},fetchValueCurrent:function(t,e){var a=t.commit;a("SET_VALUE_CURRENT",e)}};o["a"].use(u["a"]);var K=new u["a"].Store({state:{},mutations:{},actions:{},modules:{cryptoAndStockModule:s,walletModule:l}});function Q(t,e){var a=localStorage.getItem("valueToInvest"),s=localStorage.getItem("valueInvested");K.getters["cryptoAndStockModule/getCheckExistAssets"]&&(s&&(K.commit("walletModule/RECOVERY_WALLET"),K.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then((function(){e()}))),!s&&a&&(K.commit("walletModule/SET_VALUES_INIT",a),K.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then((function(){e()})))),e()}var X={data:function(){return{valueToInvest:null,loading:!1,money:{decimal:".",thousands:",",prefix:"",suffix:"",precision:2,masked:!1},msgWarning:null}},methods:{search:function(){var t=this;0!=this.valueToInvest?(this.loading=!0,K.commit("walletModule/SET_VALUES_INIT",this.valueToInvest),K.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then((function(){t.loading=!1,t.$router.push({path:"/ativos"})})).catch((function(e){t.loading=!1,console.log("Erro: "+e)}))):this.msgWarning="Por favor, defina um valor no campo acima!"},clearMsgWarning:function(){this.msgWarning=null}},beforeRouteEnter:function(t,e,a){Q(t,a)},computed:Object(d["a"])({},Object(u["b"])(["cryptoAndStockModule","walletModule"]))},Z=X,tt=(a("cccb"),a("b0af")),et=a("a523"),at=a("490a"),st=a("8654"),lt=Object(p["a"])(Z,V,O,!1,null,null,null),ot=lt.exports;f()(lt,{VApp:T["a"],VBtn:C["a"],VCard:tt["a"],VContainer:et["a"],VProgressCircular:at["a"],VTextField:st["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"container-assets",attrs:{fluid:""}},[0==this.cryptoAndStockModule.cryptosAndStocks.length?a("div",{staticClass:"info-msg"},[a("h1",[t._v(" Por favor, informe um valor que deseja investir, para vizualizar os ativos! ")])]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:this.cryptoAndStockModule.cryptosAndStocks.length>0,expression:"this.cryptoAndStockModule.cryptosAndStocks.length > 0"}],staticClass:"header-title"},[a("h1",[t._v(" Com base no valor de U$ "+t._s(this.walletModule.valueInBox?this.walletModule.valueInBox:"0.00")+" sugerimos os seguintes ativos: ")])]),a("h1",{directives:[{name:"show",rawName:"v-show",value:0!=this.cryptoAndStockModule.cryptos.length,expression:"this.cryptoAndStockModule.cryptos.length != 0"}],staticClass:"body-title"},[t._v(" Criptomoeadas ")]),a("v-row",t._l(this.cryptoAndStockModule.cryptos,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",xs:"12",sm:"4",md:"4",lg:"4",xl:"4"}},[a("v-card",{staticClass:"card-assets"},[a("div",{staticClass:"card-header"},[a("h1",[t._v(t._s(e.name.split(" ")[0]))])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-line"},[a("h2",[t._v("1 "+t._s(e.symbol.substring(0,3)))]),a("v-spacer"),a("h2",[a("v-icon",{class:e.change>0?"colorGreen":"colorRed"},[t._v(t._s(e.changesPercentage>0?"mdi-chevron-up":"mdi-chevron-down"))]),t._v(" U$ "+t._s(e.price)+" ")],1)],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Abertura")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.open))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Mínima")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.dayLow))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Máxima")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.dayHigh))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Variação atual")]),a("v-spacer"),a("h2",{class:e.change>0?"colorGreen":"colorRed"},[a("v-icon",{class:e.change>0?"colorGreen":"colorRed"},[t._v(t._s(e.changesPercentage>0?"mdi-chevron-up":"mdi-chevron-down"))]),t._v(" U$ "+t._s(e.change)+" ")],1)],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Variação Percentual")]),a("v-spacer"),a("h2",{class:e.change>0?"colorGreen":"colorRed"},[a("v-icon",{class:e.change>0?"colorGreen":"colorRed"},[t._v(t._s(e.changesPercentage>0?"mdi-chevron-up":"mdi-chevron-down"))]),t._v(" "+t._s(e.changesPercentage)+" % ")],1)],1)]),a("div",{staticClass:"card-footer"},[a("v-dialog",{attrs:{"retain-focus":!1,persistent:"","max-width":"450"},scopedSlots:t._u([{key:"activator",fn:function(s){var l=s.on;return[a("v-btn",t._g({staticClass:"btn-add",on:{click:function(a){return t.fillDialog(e)}}},l),[t._v(" Adicionar "),a("v-icon",[t._v("mdi-wallet")])],1)]}}],null,!0),model:{value:t.dialogCrypto,callback:function(e){t.dialogCrypto=e},expression:"dialogCrypto"}},[a("v-card",{staticClass:"card-assets"},[a("div",{staticClass:"card-header"},[a("h1",[t._v(" "+t._s(t.wallet.name)+" ")])]),a("div",{staticClass:"card-line"},[a("h2",[t._v("1 "+t._s(t.wallet.symbol_short))]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(t.wallet.valueBuy))])],1),a("div",{staticClass:"card-line1"},[a("h2",[t._v("U$")]),a("v-text-field",{staticClass:"input-invest",attrs:{label:"Quantos U$ deseja investir?",type:"number",filled:"","error-messages":t.msgWarning,rounded:""},on:{focus:t.clearMsgWarning},model:{value:t.valueAdd,callback:function(e){t.valueAdd=e},expression:"valueAdd"}})],1),a("div",{staticClass:"card-line2"},[a("h2",[t._v(t._s(t.wallet.symbol_short))]),a("v-spacer"),a("h2",[t._v(t._s(t.cryptoToAdd))])],1),a("v-card-actions",{staticClass:"wallet-actions"},[a("v-btn",{staticClass:"btn-add",attrs:{color:"#FFC529"},on:{click:t.cancelAdd}},[t._v(" Cancelar ")]),a("v-spacer"),a("v-btn",{staticClass:"btn-add",attrs:{color:"#FFC529"},on:{click:function(e){return t.addInWallet("crypto")}}},[t._v("Adicionar ")])],1)],1)],1)],1)])],1)})),1),a("h1",{directives:[{name:"show",rawName:"v-show",value:0!=this.cryptoAndStockModule.stocks.length,expression:"this.cryptoAndStockModule.stocks.length != 0"}],staticClass:"body-title"},[t._v(" Ações ")]),a("v-row",t._l(this.cryptoAndStockModule.stocks,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",xs:"12",sm:"4",md:"4",lg:"4",xl:"4"}},[a("v-card",{staticClass:"card-assets"},[a("div",{staticClass:"card-header"},[a("h1",[t._v(t._s(e.name))])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-line"},[a("h2",[t._v("1 "+t._s(e.symbol))]),a("v-spacer"),a("h2",[a("v-icon",{class:e.change>0?"colorGreen":"colorRed"},[t._v(t._s(e.changesPercentage>0?"mdi-chevron-up":"mdi-chevron-down"))]),t._v(" U$ "+t._s(e.price.toFixed(2))+" ")],1)],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Abertura")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.open.toFixed(2)))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Mínima")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.dayLow.toFixed(2)))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Máxima")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.dayHigh.toFixed(2)))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Variação atual")]),a("v-spacer"),a("h2",{class:e.change>0?"colorGreen":"colorRed"},[a("v-icon",{class:e.change>0?"colorGreen":"colorRed"},[t._v(t._s(e.changesPercentage>0?"mdi-chevron-up":"mdi-chevron-down"))]),t._v(" U$ "+t._s(e.change.toFixed(2))+" ")],1)],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Variação Percentual")]),a("v-spacer"),a("h2",{class:e.change>0?"colorGreen":"colorRed"},[a("v-icon",{class:e.change>0?"colorGreen":"colorRed"},[t._v(t._s(e.changesPercentage>0?"mdi-chevron-up":"mdi-chevron-down"))]),t._v(" "+t._s(e.changesPercentage.toFixed(2))+" % ")],1)],1)]),a("div",{staticClass:"card-footer"},[a("v-dialog",{attrs:{"retain-focus":!1,persistent:"","max-width":"450"},scopedSlots:t._u([{key:"activator",fn:function(s){var l=s.on;return[a("v-btn",t._g({staticClass:"btn-add",on:{click:function(a){return t.fillDialog(e)}}},l),[t._v(" Adicionar "),a("v-icon",[t._v("mdi-wallet")])],1)]}}],null,!0),model:{value:t.dialogStock,callback:function(e){t.dialogStock=e},expression:"dialogStock"}},[a("v-card",{staticClass:"card-assets"},[a("div",{staticClass:"card-header"},[a("h1",[t._v(" "+t._s(t.wallet.name)+" ")])]),a("div",{staticClass:"card-line"},[a("h2",[t._v("1 "+t._s(t.wallet.symbol))]),a("v-spacer"),a("h2",[t._v(" "+t._s(t.wallet.valueBuy)+" ")])],1),a("div",{staticClass:"card-line1"},[a("h2",[t._v(t._s(t.wallet.symbol))]),a("v-text-field",{staticClass:"input-invest",attrs:{label:"Quantas ações deseja adquirir?",type:"number",filled:"","error-messages":t.msgWarning,rounded:""},on:{focus:t.clearMsgWarning},model:{value:t.valueAdd,callback:function(e){t.valueAdd=e},expression:"valueAdd"}})],1),a("div",{staticClass:"card-line2"},[a("h2",[t._v("U$")]),a("v-spacer"),a("h2",[t._v(t._s(t.stockToAdd))])],1),a("v-card-actions",{staticClass:"wallet-actions"},[a("v-btn",{staticClass:"btn-add",attrs:{color:"#FFC529"},on:{click:t.cancelAdd}},[t._v(" Cancelar ")]),a("v-spacer"),a("v-btn",{staticClass:"btn-add",attrs:{color:"#FFC529"},on:{click:function(e){return t.addInWallet("stock")}}},[t._v("Adicionar ")])],1)],1)],1)],1)])],1)})),1)],1)],1)},ct=[];a("b0c0"),a("b680");function rt(t,e){var a=localStorage.getItem("valueToInvest"),s=localStorage.getItem("valueInvested");K.getters["cryptoAndStockModule/getCheckExistAssets"]&&(s&&(K.commit("walletModule/RECOVERY_WALLET"),K.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then((function(){e()}))),!s&&a&&(K.commit("walletModule/SET_VALUES_INIT",a),K.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then((function(){e()})))),e()}function it(t){if(t)return parseFloat(t.replace(",",""))}var dt={data:function(){return{loading:!1,msgWarning:null,dialogCrypto:null,dialogStock:null,valueAdd:null,wallet:this.createNewWallet()}},methods:{createNewWallet:function(){return{name:null,symbol:null,symbol_short:null,valueBuy:null,qtdAssets:null,exchange:null}},fillDialog:function(t){this.wallet.name=t.name,this.wallet.symbol_short=t.symbol.substring(0,3),this.wallet.symbol=t.symbol,this.wallet.valueBuy=t.price,this.wallet.exchange=t.exchange},clearMsgWarning:function(){this.msgWarning=null},cancelAdd:function(){this.dialogCrypto=!1,this.dialogStock=!1,this.valueAdd=null,this.msgWarning=null,this.createNewWallet()},addInWallet:function(t){this.valueAdd?"crypto"==t&&it(this.walletModule.valueInBox)>=it(this.valueAdd)?(this.wallet.qtdAssets=this.cryptoToAdd,K.dispatch("walletModule/addAssetWallet",this.wallet),this.createNewWallet(),this.valueAdd=null,this.dialogCrypto=!1,this.dialogStock=!1):"stock"==t&&it(this.walletModule.valueInBox)>=this.stockToAdd?(this.wallet.qtdAssets=parseInt(this.valueAdd),K.dispatch("walletModule/addAssetWallet",this.wallet),this.createNewWallet(),this.valueAdd=null,this.dialogCrypto=!1,this.dialogStock=!1):this.msgWarning="Não é possivel fazer a operação, saldo insuficiente!":this.msgWarning="Por favor, preenchar o campo acima!"}},beforeRouteEnter:function(t,e,a){rt(t,a)},computed:Object(d["a"])(Object(d["a"])({},Object(u["b"])(["cryptoAndStockModule","walletModule"])),{},{cryptoToAdd:function(){return this.valueAdd?parseFloat(this.valueAdd)/parseFloat(this.wallet.valueBuy):0},stockToAdd:function(){return this.valueAdd?(parseFloat(this.valueAdd)*parseFloat(this.wallet.valueBuy)).toFixed(2):0}})},ut=dt,vt=(a("8be0"),a("99d9")),ht=a("62ad"),pt=a("169a"),mt=a("0fd9"),ft=Object(p["a"])(ut,nt,ct,!1,null,null,null),_t=ft.exports;f()(ft,{VApp:T["a"],VBtn:C["a"],VCard:tt["a"],VCardActions:vt["a"],VCol:ht["a"],VContainer:et["a"],VDialog:pt["a"],VIcon:y["a"],VRow:mt["a"],VSpacer:b["a"],VTextField:st["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"container-wallet",attrs:{fluid:""}},[a("div",{staticClass:"header"},[a("h1",[t._v(" Minha Carteira de Ativos ")])]),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"card-wallet"},[a("div",{staticClass:"card-wallet-header"},[a("h1",[t._v("Valor Total")])]),a("div",{staticClass:"card-wallet-body"},[a("h1",[t._v(" U$ "+t._s(this.walletModule.valueWallet?this.walletModule.valueWallet:"0.00")+" ")])])])],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"card-wallet"},[a("div",{staticClass:"card-wallet-header"},[a("h1",[t._v("Valor em Caixa")])]),a("div",{staticClass:"card-wallet-body"},[a("h1",[t._v(" U$ "+t._s(this.walletModule.valueInBox?this.walletModule.valueInBox:"0.00")+" ")])])])],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"card-wallet"},[a("div",{staticClass:"card-wallet-header"},[a("h1",[t._v("Valor em Investido")])]),a("div",{staticClass:"card-wallet-body"},[a("h1",[t._v(" U$ "+t._s(this.walletModule.valueInvested?this.walletModule.valueInvested:"0.00")+" ")])])])],1)],1),a("v-row",{staticClass:"row-assets-wallet"},t._l(this.walletModule.assetsWallet,(function(e,s){return a("v-col",{key:s,staticClass:"col-assets-wallet",attrs:{cols:"4"}},[a("v-card",{staticClass:"card-asset-wallet"},[a("div",{staticClass:"card-header-wallet"},[a("h1",[t._v(t._s(e.name))])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-line"},[a("h2",[t._v("Valor Total:")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.valueTotal))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Quantidade Total:")]),a("v-spacer"),a("h2",[t._v(t._s(e.qtdAssets))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Preço Médio:")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.valueBuy))])],1),a("div",{staticClass:"card-line"},[a("h2",[t._v("Preço Atual:")]),a("v-spacer"),a("h2",[t._v("U$ "+t._s(e.valueCurrent))])],1),a("div",{class:e.valueBuy>=e.valueCurrent?"card-line-green":"card-line-red"},[a("h2",[t._v("Lucro/Prejuizo:")]),a("v-spacer"),a("h2",[t._v(" U$ "+t._s(((e.valueBuy-e.valueCurrent)*e.qtdAssets).toFixed(2))+" ")])],1)])])],1)})),1)],1)],1)},Ct=[];function yt(t,e){var a=localStorage.getItem("valueToInvest"),s=localStorage.getItem("valueInvested");K.getters["cryptoAndStockModule/getCheckExistAssets"]&&(s&&(K.commit("walletModule/RECOVERY_WALLET"),K.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then((function(){e()}))),!s&&a&&(K.commit("walletModule/SET_VALUES_INIT",a),K.dispatch("cryptoAndStockModule/fetchCryptoAndStock").then((function(){e()})))),e()}var bt={data:function(){return{loading:!1}},beforeRouteEnter:function(t,e,a){yt(t,a)},computed:Object(d["a"])({},Object(u["b"])(["walletModule"]))},At=bt,wt=(a("48f0"),Object(p["a"])(At,gt,Ct,!1,null,null,null)),St=wt.exports;f()(wt,{VApp:T["a"],VCard:tt["a"],VCol:ht["a"],VContainer:et["a"],VRow:mt["a"],VSpacer:b["a"]}),o["a"].use(E["a"]);var kt=[{path:"/",name:"Home",component:ot},{path:"/ativos",name:"Ativos",component:_t},{path:"/carteira",name:"Carteira",component:St}],It=new E["a"]({mode:"history",base:"/",routes:kt}),Tt=It,xt=a("f309");o["a"].use(xt["a"]);var Mt=new xt["a"]({}),Wt=a("716b"),Et=a.n(Wt);o["a"].use(Et.a,{precision:2}),o["a"].config.productionTip=!1,new o["a"]({router:Tt,store:K,vuetify:Mt,render:function(t){return t(W)}}).$mount("#app")},"8a23":function(t,e,a){},"8be0":function(t,e,a){"use strict";var s=a("c536"),l=a.n(s);l.a},c536:function(t,e,a){},ca3e:function(t,e,a){t.exports=a.p+"img/chart.3edceab9.png"},cccb:function(t,e,a){"use strict";var s=a("4230"),l=a.n(s);l.a},d372:function(t,e,a){}});
//# sourceMappingURL=app.a29d2611.js.map