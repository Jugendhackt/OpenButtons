module.exports=function(e){var _={};function t(r){if(_[r])return _[r].exports;var o=_[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=_,t.d=function(e,_,r){t.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,_){if(1&_&&(e=t(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var o in e)t.d(r,o,function(_){return e[_]}.bind(null,o));return r},t.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(_,"a",_),_},t.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},t.p="./",t(t.s="./app/index.js")}({"./app/index.js":function(e,_,t){"use strict";t.r(_),function(e){var _,r=t("react"),o=t.n(r),a=t("react-dom"),l=t("react-router"),n=t("./app/pages/Home.js"),i="/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/index.js";(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("./node_modules/react-hot-loader/index.js")).enterModule)&&_(e);const{dialog:u}=t("electron").remote,s=e=>o.a.createElement(l.MemoryRouter,{__source:{fileName:i,lineNumber:8},__self:void 0},o.a.createElement(l.Route,{exact:!0,path:"/",render:()=>o.a.createElement(n.a,{__source:{fileName:i,lineNumber:9},__self:void 0}),__source:{fileName:i,lineNumber:9},__self:void 0}));var c,d;Object(a.render)(o.a.createElement(s,{__source:{fileName:i,lineNumber:14},__self:void 0}),window.document.getElementById("root")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("./node_modules/react-hot-loader/index.js")).default)&&(c.register(u,"dialog","/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/index.js"),c.register(s,"App","/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/index.js")),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t("./node_modules/react-hot-loader/index.js")).leaveModule)&&d(e)}.call(this,t("./node_modules/webpack/buildin/harmony-module.js")(e))},"./app/pages/Home.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return Home});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@material-ui/core"),_material_ui_core__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__),_parts_CustomTableRow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/parts/CustomTableRow.js"),_jsxFileName="/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/pages/Home.js",enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const{exec:exec}=__webpack_require__("child_process"),ks=__webpack_require__("node-key-sender"),bluetooth=__webpack_require__("node-bluetooth"),BluetoothHandler=__webpack_require__("./app/parts/BluetoothHandler.js"),commands={up:"",down:"",left:"",right:"",pressed:""},bthandler=new BluetoothHandler;class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(e){super(e),this.state={topTriggered:!1,bottomTriggered:!1,leftTriggered:!1,rightTriggered:!1,pressTriggered:!1}}render(){return bthandler.registerListener("joystick",e=>{switch(console.log(e),this.setState({topTriggered:"top"==e.y,bottomTriggered:"bottom"==e.y,rightTriggered:"right"==e.x,leftTriggered:"left"==e.x,pressTriggered:"1"==e.btn}),e.y){case"top":ks.sendCombination(["@17","@18","@84"]),setTimeout(()=>{ks.sendKeys(["e","c","h","o","@32","H","a","l","l","o","@523","W","e","l","t","@10"])},2e3),console.log(commands.up);break;case"bottom":console.log(commands.down)}switch(e.x){case"right":console.log(commands.right),ks.sendKey("@39");break;case"left":console.log(commands.left),ks.sendKey("@37")}"1"==e.btn&&console.log(commands.pressed)}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:101},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AppBar,{position:"static",__source:{fileName:_jsxFileName,lineNumber:102},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar,{__source:{fileName:_jsxFileName,lineNumber:103},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography,{variant:"h6",__source:{fileName:_jsxFileName,lineNumber:104},__self:this},"Shortcuts"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{margin:"16px"},__source:{fileName:_jsxFileName,lineNumber:107},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField,{value:this.state.textFieldValue,onChange:e=>{this.setState({textFieldValue:e.target.value[e.target.value.length-1]})},__source:{fileName:_jsxFileName,lineNumber:108},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button,{onClick:()=>{ks.sendCombination(["alt","tab"])},__source:{fileName:_jsxFileName,lineNumber:116},__self:this},"Send"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button,{onClick:()=>{exec('echo "SOME TEST!" && PAUSE',(e,_,t)=>{e||(console.log(`stdout: ${_}`),console.log(`stderr: ${t}`))})},__source:{fileName:_jsxFileName,lineNumber:123},__self:this},"exec"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button,{variant:"contained",color:"primary",onClick:()=>{bthandler.connect(()=>{})},__source:{fileName:_jsxFileName,lineNumber:139},__self:this},"test"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Paper,{__source:{fileName:_jsxFileName,lineNumber:148},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Table,{__source:{fileName:_jsxFileName,lineNumber:149},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableHead,{__source:{fileName:_jsxFileName,lineNumber:150},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableRow,{__source:{fileName:_jsxFileName,lineNumber:151},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableCell,{__source:{fileName:_jsxFileName,lineNumber:152},__self:this},"Joystick Direction"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableCell,{align:"left",style:{width:"75%"},__source:{fileName:_jsxFileName,lineNumber:153},__self:this},"Command"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableBody,{__source:{fileName:_jsxFileName,lineNumber:158},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_CustomTableRow__WEBPACK_IMPORTED_MODULE_2__.a,{inputName:"up",onCommandChanged:e=>{commands.up=e},triggered:this.state.topTriggered,__source:{fileName:_jsxFileName,lineNumber:159},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_CustomTableRow__WEBPACK_IMPORTED_MODULE_2__.a,{inputName:"down",onCommandChanged:e=>{commands.down=e},triggered:this.state.bottomTriggered,__source:{fileName:_jsxFileName,lineNumber:166},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_CustomTableRow__WEBPACK_IMPORTED_MODULE_2__.a,{inputName:"left",onCommandChanged:e=>{commands.left=e},triggered:this.state.leftTriggered,__source:{fileName:_jsxFileName,lineNumber:173},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_CustomTableRow__WEBPACK_IMPORTED_MODULE_2__.a,{inputName:"right",onCommandChanged:e=>{commands.right=e},triggered:this.state.rightTriggered,__source:{fileName:_jsxFileName,lineNumber:180},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_parts_CustomTableRow__WEBPACK_IMPORTED_MODULE_2__.a,{inputName:"press",onCommandChanged:e=>{commands.press=e},triggered:this.state.pressTriggered,__source:{fileName:_jsxFileName,lineNumber:187},__self:this}))))))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}var reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&(reactHotLoader.register(commands,"commands","/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/pages/Home.js"),reactHotLoader.register(bthandler,"bthandler","/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/pages/Home.js"),reactHotLoader.register(Home,"Home","/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/pages/Home.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./app/parts/BluetoothHandler.js":function(module,exports,__webpack_require__){const bluetooth=__webpack_require__("node-bluetooth");module.exports=class BluetoothHandler{constructor(){this._listeners={},this._connected=!1}connect(e){if(!this._connected){const _=new bluetooth.DeviceINQ;this._connected=!0,_.on("finished",console.log.bind(console,"finished")).on("found",function(t,r){"Joystick"==r&&_.findSerialPortChannel(t,(_=>{bluetooth.connect(t,_,(_,t)=>{if(_)return"function"==typeof e&&e(!1),console.error(_);e(!0),t.on("data",(e=>{if(""!=e.toString().trim())try{const _=JSON.parse(e.toString());Object.keys(this._listeners).forEach(e=>{"function"==typeof this._listeners[e]&&this._listeners[e](_)})}catch(e){console.error(e)}}).bind(this))})}).bind(this))}.bind(this)).scan()}}registerListener(e,_){this._listeners[e]=_}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}},"./app/parts/CustomTableRow.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return CustomTableRow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@material-ui/core"),_material_ui_core__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__),_jsxFileName="/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/parts/CustomTableRow.js",enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).enterModule,enterModule&&enterModule(module);const UUIDv4=__webpack_require__("./node_modules/uuid/v4.js");class CustomTableRow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(e){super(e),this.state={oldValue:""}}render(){const e=`${this.props.inputName}---${UUIDv4()}`;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableRow,{key:e,style:{backgroundColor:this.props.triggered?"#ff0000":"inherit"},__source:{fileName:_jsxFileName,lineNumber:19},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableCell,{component:"th",scope:"row",__source:{fileName:_jsxFileName,lineNumber:25},__self:this},this.props.inputName),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TableCell,{align:"left",style:{width:"75%"},__source:{fileName:_jsxFileName,lineNumber:28},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField,{style:{width:"100%"},defaultValue:this.state.oldValue,label:"Command",onBlur:e=>{this.state.oldValue!=e.target.value&&(null!=this.props.onCommandChanged&&this.props.onCommandChanged(e.target.value),this.setState({oldValue:e.target.value}))},__source:{fileName:_jsxFileName,lineNumber:29},__self:this})))}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}var reactHotLoader,leaveModule;reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).default,reactHotLoader&&reactHotLoader.register(CustomTableRow,"CustomTableRow","/media/justus_fluegel/PROJECTS/JugendHackt/OpenButtons/Software/electron/openbutton/app/parts/CustomTableRow.js"),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__("./node_modules/react-hot-loader/index.js")).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":function(e,_,t){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var r,o=(r=t("react"))&&"object"==typeof r&&"default"in r?r.default:r;_.AppContainer=function(e){return o.Children.only(e.children)},_.hot=function(){return function(e){return e}},_.areComponentsEqual=function(e,_){return e===_},_.setConfig=function(){},_.cold=function(e){return e},_.configureComponent=function(){}},"./node_modules/react-hot-loader/index.js":function(e,_,t){"use strict";e.exports=t("./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js")},"./node_modules/uuid/lib/bytesToUuid.js":function(e,_){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,_){var r=_||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},"./node_modules/uuid/lib/rng-browser.js":function(e,_){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,_=0;_<16;_++)0==(3&_)&&(e=4294967296*Math.random()),o[_]=e>>>((3&_)<<3)&255;return o}}},"./node_modules/uuid/v4.js":function(e,_,t){var r=t("./node_modules/uuid/lib/rng-browser.js"),o=t("./node_modules/uuid/lib/bytesToUuid.js");e.exports=function(e,_,t){var a=_&&t||0;"string"==typeof e&&(_="binary"===e?new Array(16):null,e=null);var l=(e=e||{}).random||(e.rng||r)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,_)for(var n=0;n<16;++n)_[a+n]=l[n];return _||o(l)}},"./node_modules/webpack/buildin/harmony-module.js":function(e,_){e.exports=function(e){if(!e.webpackPolyfill){var _=Object.create(e);_.children||(_.children=[]),Object.defineProperty(_,"loaded",{enumerable:!0,get:function(){return _.l}}),Object.defineProperty(_,"id",{enumerable:!0,get:function(){return _.i}}),Object.defineProperty(_,"exports",{enumerable:!0}),_.webpackPolyfill=1}return _}},"@material-ui/core":function(e,_){e.exports=require("@material-ui/core")},child_process:function(e,_){e.exports=require("child_process")},electron:function(e,_){e.exports=require("electron")},"node-bluetooth":function(e,_){e.exports=require("node-bluetooth")},"node-key-sender":function(e,_){e.exports=require("node-key-sender")},react:function(e,_){e.exports=require("react")},"react-dom":function(e,_){e.exports=require("react-dom")},"react-router":function(e,_){e.exports=require("react-router")}});
//# sourceMappingURL=renderer.prod.js.map