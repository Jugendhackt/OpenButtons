module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./app/main.dev.js")}({"./app/main.dev.js":function(e,t,o){"use strict";o.r(t),function(e){var t,n=o("electron");(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o("./node_modules/react-hot-loader/index.js")).enterModule)&&t(e);let r=null;var i,l;n.app.on("window-all-closed",()=>{"darwin"!==process.platform&&n.app.quit()}),n.app.on("ready",async()=>{(r=new n.BrowserWindow({show:!1,width:1024,height:728})).loadFile(`${__dirname}/../renderer/app.html`),r.webContents.on("did-finish-load",()=>{if(!r)throw new Error('"mainWindow" is not defined');r.show(),r.focus()}),r.setMenuBarVisibility(!1),r.on("closed",()=>{r=null})}),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o("./node_modules/react-hot-loader/index.js")).default)&&i.register(r,"mainWindow","/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/main.dev.js"),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o("./node_modules/react-hot-loader/index.js")).leaveModule)&&l(e)}.call(this,o("./node_modules/webpack/buildin/harmony-module.js")(e))},"./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=o("react"))&&"object"==typeof n&&"default"in n?n.default:n;t.AppContainer=function(e){return r.Children.only(e.children)},t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},"./node_modules/react-hot-loader/index.js":function(e,t,o){"use strict";e.exports=o("./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js")},"./node_modules/webpack/buildin/harmony-module.js":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},electron:function(e,t){e.exports=require("electron")},react:function(e,t){e.exports=require("react")}});
//# sourceMappingURL=main.prod.js.map