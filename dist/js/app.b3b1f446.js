(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)i=u[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17fe":function(e,t,n){"use strict";var r=n("fc27"),o=n.n(r);o.a},"46fa":function(e,t,n){"use strict";var r=n("70b4"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h4",[e._v("Demo1:")]),n("VTextMarquee",{attrs:{speed:e.speed}},[e._v("Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。")]),n("div",[e._v("Speed:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.speed,expression:"speed"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.speed=t.target.multiple?n:n[0]}}},e._l([10,30,50,70,90],function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))]),n("hr"),n("h4",[e._v("Demo2:")]),n("VTextMarquee",{attrs:{speed:40,content:e.message}}),n("div",[n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{rows:"4",cols:"20",placeholder:"Input content"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})]),n("div",[n("button",{on:{click:e.sub}},[e._v("Start")])])])],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-marquee"},[n("div",{style:{"animation-duration":e.time,"animation-name":e.name}},[e._t("default",[e._v(e._s(e.content))])],2)])},u=[],s=(n("7f7f"),n("c5f6"),0),c={name:"VTextMarquee",props:{speed:{type:Number,default:50},content:String},data:function(){return s++,{time:0,name:"marquee"+s,styleEl:document.createElement("style")}},watch:{content:function(){this.start()},speed:function(){this.start()}},methods:{getTime:function(){return Math.max(this.$el.firstChild.offsetWidth,this.$el.offsetWidth)/this.speed+"s"},prefix:function(e,t){return["-webkit-","-moz-","-ms-",""].map(function(n){return"".concat(n+e,":").concat(t,";")}).join("")},keyframes:function(){var e=this.prefix("transform","translateX(".concat(this.$el.offsetWidth,"px)")),t=this.prefix("transform","translateX(-".concat(this.$el.firstChild.offsetWidth,"px)")),n="@keyframes ".concat(this.name," {\n                from { ").concat(e," }\n                to { ").concat(t," }\n            }");this.styleEl.innerHTML=n,document.head.appendChild(this.styleEl)},start:function(){var e=this;this.$nextTick(function(){e.time=e.getTime(),e.keyframes()})}},mounted:function(){this.start()}},f=c,l=(n("17fe"),n("2877")),p=Object(l["a"])(f,i,u,!1,null,"71b32d0e",null);p.options.__file="TextMarquee.vue";var d=p.exports,m={name:"app",components:{VTextMarquee:d},data:function(){return{content:"",message:"",speed:30}},methods:{sub:function(){this.message=this.content}}},v=m,h=(n("46fa"),Object(l["a"])(v,o,a,!1,null,"45fa6c00",null));h.options.__file="App.vue";var b=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"70b4":function(e,t,n){},fc27:function(e,t,n){}});
//# sourceMappingURL=app.b3b1f446.js.map