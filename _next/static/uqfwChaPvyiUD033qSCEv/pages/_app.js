(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},1:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var l=s[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;d.has(f)?a=!1:(d.add(f),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var v=m;t.default=v},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("48fX"),u=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(l,u);var c=f(l);function l(e){var a;return r(this,l),a=c.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component))}},hUgY:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a);var u=n("vOnD");function c(){var e,t,n=(e=["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: 'Poiret One', cursive;\n  }\n\n  html, body, #__next {\n    height: 100%;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var l=Object(u.a)(c()),f=o.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps;return f(o.a.Fragment,null,f(i.a,null,f("title",null,"Glob Pattern Tester"),f("link",{rel:"shortcut icon",href:"/img/icon-512.png"}),f("link",{rel:"apple-touch-icon",href:"/img/icon-512.png"}),f("link",{rel:"manifest",href:"/manifest.json"}),f("link",{href:"https://fonts.googleapis.com/css2?family=Poiret+One&display=swap",rel:"stylesheet"}),f("meta",{name:"description",content:"Test all files combinations with glob pattern in a interactive website application"})),f(l,null),f(t,n))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[[1,0,1,2,3]]]);