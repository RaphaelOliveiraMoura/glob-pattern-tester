(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"2LKJ":function(t,e,n){t.exports=d,d.Minimatch=g;var r={sep:"/"};try{r=n("33yf")}catch(y){}var i=d.GLOBSTAR=g.GLOBSTAR={},o=n("TuBq"),a={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},s="[^/]",c=s+"*?",u="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",l="(?:(?!(?:\\/|^)\\.).)*?",p="().*{}+?[]^$\\!".split("").reduce((function(t,e){return t[e]=!0,t}),{});var f=/\/+/;function h(t,e){t=t||{},e=e||{};var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function d(t,e,n){if("string"!==typeof e)throw new TypeError("glob pattern string required");return n||(n={}),!(!n.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new g(e,n).match(t))}function g(t,e){if(!(this instanceof g))return new g(t,e);if("string"!==typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==r.sep&&(t=t.split(r.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function m(t,e){if(e||(e=this instanceof g?this.options:{}),"undefined"===typeof(t="undefined"===typeof t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:o(t)}d.filter=function(t,e){return e=e||{},function(n,r,i){return d(n,t,e)}},d.defaults=function(t){if(!t||!Object.keys(t).length)return d;var e=d,n=function(n,r,i){return e.minimatch(n,r,h(t,i))};return n.Minimatch=function(n,r){return new e.Minimatch(n,h(t,r))},n},g.defaults=function(t){return t&&Object.keys(t).length?d.defaults(t).Minimatch:g},g.prototype.debug=function(){},g.prototype.make=function(){if(this._made)return;var t=this.pattern,e=this.options;if(!e.nocomment&&"#"===t.charAt(0))return void(this.comment=!0);if(!t)return void(this.empty=!0);this.parseNegate();var n=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error);this.debug(this.pattern,n),n=this.globParts=n.map((function(t){return t.split(f)})),this.debug(this.pattern,n),n=n.map((function(t,e,n){return t.map(this.parse,this)}),this),this.debug(this.pattern,n),n=n.filter((function(t){return-1===t.indexOf(!1)})),this.debug(this.pattern,n),this.set=n},g.prototype.parseNegate=function(){var t=this.pattern,e=!1,n=this.options,r=0;if(n.nonegate)return;for(var i=0,o=t.length;i<o&&"!"===t.charAt(i);i++)e=!e,r++;r&&(this.pattern=t.substr(r));this.negate=e},d.braceExpand=function(t,e){return m(t,e)},g.prototype.braceExpand=m,g.prototype.parse=function(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var n=this.options;if(!n.noglobstar&&"**"===t)return i;if(""===t)return"";var r,o="",u=!!n.nocase,l=!1,f=[],h=[],d=!1,g=-1,m=-1,v="."===t.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",w=this;function x(){if(r){switch(r){case"*":o+=c,u=!0;break;case"?":o+=s,u=!0;break;default:o+="\\"+r}w.debug("clearStateChar %j %j",r,o),r=!1}}for(var j,E=0,O=t.length;E<O&&(j=t.charAt(E));E++)if(this.debug("%s\t%s %s %j",t,E,o,j),l&&p[j])o+="\\"+j,l=!1;else switch(j){case"/":return!1;case"\\":x(),l=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,E,o,j),d){this.debug("  in class"),"!"===j&&E===m+1&&(j="^"),o+=j;continue}w.debug("call clearStateChar %j",r),x(),r=j,n.noext&&x();continue;case"(":if(d){o+="(";continue}if(!r){o+="\\(";continue}f.push({type:r,start:E-1,reStart:o.length,open:a[r].open,close:a[r].close}),o+="!"===r?"(?:(?!(?:":"(?:",this.debug("plType %j %j",r,o),r=!1;continue;case")":if(d||!f.length){o+="\\)";continue}x(),u=!0;var A=f.pop();o+=A.close,"!"===A.type&&h.push(A),A.reEnd=o.length;continue;case"|":if(d||!f.length||l){o+="\\|",l=!1;continue}x(),o+="|";continue;case"[":if(x(),d){o+="\\"+j;continue}d=!0,m=E,g=o.length,o+=j;continue;case"]":if(E===m+1||!d){o+="\\"+j,l=!1;continue}if(d){var C=t.substring(m+1,E);try{RegExp("["+C+"]")}catch(y){var k=this.parse(C,b);o=o.substr(0,g)+"\\["+k[0]+"\\]",u=u||k[1],d=!1;continue}}u=!0,d=!1,o+=j;continue;default:x(),l?l=!1:!p[j]||"^"===j&&d||(o+="\\"),o+=j}d&&(C=t.substr(m+1),k=this.parse(C,b),o=o.substr(0,g)+"\\["+k[0],u=u||k[1]);for(A=f.pop();A;A=f.pop()){var S=o.slice(A.reStart+A.open.length);this.debug("setting tail",o,A),S=S.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(t,e,n){return n||(n="\\"),e+e+n+"|"})),this.debug("tail=%j\n   %s",S,S,A,o);var _="*"===A.type?c:"?"===A.type?s:"\\"+A.type;u=!0,o=o.slice(0,A.reStart)+_+"\\("+S}x(),l&&(o+="\\\\");var N=!1;switch(o.charAt(0)){case".":case"[":case"(":N=!0}for(var P=h.length-1;P>-1;P--){var M=h[P],R=o.slice(0,M.reStart),T=o.slice(M.reStart,M.reEnd-8),$=o.slice(M.reEnd-8,M.reEnd),I=o.slice(M.reEnd);$+=I;var z=R.split("(").length-1,L=I;for(E=0;E<z;E++)L=L.replace(/\)[+*?]?/,"");var B="";""===(I=L)&&e!==b&&(B="$"),o=R+T+I+B+$}""!==o&&u&&(o="(?=.)"+o);N&&(o=v+o);if(e===b)return[o,u];if(!u)return function(t){return t.replace(/\\(.)/g,"$1")}(t);var D=n.nocase?"i":"";try{var G=new RegExp("^"+o+"$",D)}catch(y){return new RegExp("$.")}return G._glob=t,G._src=o,G};var b={};d.makeRe=function(t,e){return new g(t,e||{}).makeRe()},g.prototype.makeRe=function(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,n=e.noglobstar?c:e.dot?u:l,r=e.nocase?"i":"",o=t.map((function(t){return t.map((function(t){return t===i?n:"string"===typeof t?function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}(t):t._src})).join("\\/")})).join("|");o="^(?:"+o+")$",this.negate&&(o="^(?!"+o+").*$");try{this.regexp=new RegExp(o,r)}catch(a){this.regexp=!1}return this.regexp},d.match=function(t,e,n){var r=new g(e,n=n||{});return t=t.filter((function(t){return r.match(t)})),r.options.nonull&&!t.length&&t.push(e),t},g.prototype.match=function(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var n=this.options;"/"!==r.sep&&(t=t.split(r.sep).join("/"));t=t.split(f),this.debug(this.pattern,"split",t);var i,o,a=this.set;for(this.debug(this.pattern,"set",a),o=t.length-1;o>=0&&!(i=t[o]);o--);for(o=0;o<a.length;o++){var s=a[o],c=t;if(n.matchBase&&1===s.length&&(c=[i]),this.matchOne(c,s,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate},g.prototype.matchOne=function(t,e,n){var r=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var o=0,a=0,s=t.length,c=e.length;o<s&&a<c;o++,a++){this.debug("matchOne loop");var u,l=e[a],p=t[o];if(this.debug(e,l,p),!1===l)return!1;if(l===i){this.debug("GLOBSTAR",[e,l,p]);var f=o,h=a+1;if(h===c){for(this.debug("** at the end");o<s;o++)if("."===t[o]||".."===t[o]||!r.dot&&"."===t[o].charAt(0))return!1;return!0}for(;f<s;){var d=t[f];if(this.debug("\nglobstar while",t,f,e,h,d),this.matchOne(t.slice(f),e.slice(h),n))return this.debug("globstar found match!",f,s,d),!0;if("."===d||".."===d||!r.dot&&"."===d.charAt(0)){this.debug("dot detected!",t,f,e,h);break}this.debug("globstar swallow a segment, and continue"),f++}return!(!n||(this.debug("\n>>> no match, partial?",t,f,e,h),f!==s))}if("string"===typeof l?(u=r.nocase?p.toLowerCase()===l.toLowerCase():p===l,this.debug("string match",l,p,u)):(u=p.match(l),this.debug("pattern match",l,p,u)),!u)return!1}if(o===s&&a===c)return!0;if(o===s)return n;if(a===c)return o===s-1&&""===t[o];throw new Error("wtf?")}},"33yf":function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return(i?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!i).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),a="/"===i(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&a&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var u=[];for(c=s;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(s))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===r&&(i=!1,r=a+1),46===s?-1===e?e=a:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=a+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("8oxB"))},Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n};function c(t){return function(e){return r.createElement(u,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function u(t){var e=function(e){var n,i=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var o=t.attr,c=t.title,u=s(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}},QeBL:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return M}));var r=n("q1tI"),i=n.n(r);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n("vOnD"),c=s.b.main.withConfig({displayName:"styles__Container",componentId:"sc-1w3czte-0"})(["width:100vw;height:100vh;display:grid;grid-template-columns:2fr 3fr;justify-items:center;align-items:center;"]),u=n("33Fu"),l=s.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1jwn6kk-0"})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;h1{font-size:28px;margin-bottom:26px;}& > svg{position:fixed;top:12px;left:12px;}footer{position:fixed;bottom:12px;left:12px;}"]);function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var f=s.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1jxpcox-0"})(["max-width:400px;width:100%;input{width:100%;height:62px;border-radius:8px;border:1px solid #ddd;padding:16px 22px;font-size:24px;color:#333;}"]),h=i.a.createElement,d=function(t){return h(f,null,h("input",p({type:"text",autoCorrect:"off",autoComplete:"off"},t)))},g=i.a.createElement,m=function(t){var e=t.globPattern,n=t.setGlobPattern;return g(l,null,g(u.a,{size:24}),g("h1",null,"Glob Pattern Tester"),g(d,{value:e,onChange:function(t){return n(t.target.value)}}),g("footer",null,"Made with \ufe0f\ufe0f\u2764\ufe0f by Raphael"))},b=n("X13+"),y=s.b.div.withConfig({displayName:"styles__Container",componentId:"ywcj08-0"})(["background:#2b303a;height:100%;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;"]),v=n("2LKJ"),w=n.n(v),x=s.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1lwewm6-0"})(["font-size:22px;color:#444;"]),j=s.b.article.withConfig({displayName:"styles__NodeItem",componentId:"sc-1lwewm6-1"})(["display:flex;align-items:center;margin-top:10px;margin-left:",";strong{margin-left:4px;color:",";}"],(function(t){var e=t.depth;return"".concat(30*e,"px")}),(function(t){return t.matchGlob?"#82D11D":"#FFFFFF"})),E=i.a.createElement,O={directory:b.c,file:b.a},A=function t(e){var n=e.node,r=e.globPattern,i=e.depth,o=void 0===i?0:i,a="file"===n.type&&w()(n.path,r,{dot:!0}),s=O[n.type];return E(x,null,E(j,{matchGlob:a,depth:o},E(s,{color:a?"#82D11D":"#fff"}),E("strong",null,n.name)),n.childrens&&n.childrens.map((function(e){return E(t,{key:e.name,node:e,globPattern:r,depth:o+1})})))},C={path:"/",name:"/",type:"directory",childrens:[{path:"/lib",name:"lib",type:"directory",childrens:[]},{path:"/bin",name:"bin",type:"directory",childrens:[{path:"/bin/etc",name:"etc",type:"directory",childrens:[{path:"/bin/etc/index.ts",name:"index.ts",type:"file"},{path:"/bin/etc/.prettierrc",name:".prettierrc",type:"file"}]},{path:"/bin/index.ts",name:"index.ts",type:"file"},{path:"/bin/.prettierrc",name:".prettierrc",type:"file"}]},{path:"/src",name:"src",type:"directory",childrens:[{path:"/src/index.tsx",name:"index.tsx",type:"file"},{path:"/src/.eslintrc",name:".eslintrc",type:"file"}]}]},k=i.a.createElement,S=function(t){var e=t.globPattern;return k(y,null,k("header",{style:{display:"none"}},k(b.b,null)," ",k(b.d,null)),k(A,{node:C,globPattern:e}))},_=i.a.createElement,N=function(){var t=a(i.a.useState("**/index.ts"),2),e=t[0],n=t[1];return _(c,null,_(m,{globPattern:e,setGlobPattern:n}),_(S,{globPattern:e}))},P=i.a.createElement;function M(){return P(N,null)}},TuBq:function(t,e,n){var r=n("icBU"),i=n("kbA8");t.exports=function(t){if(!t)return[];"{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2));return function t(e,n){var o=[],a=i("{","}",e);if(!a||/\$$/.test(a.pre))return[e];var c,u=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body),p=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body),m=u||p,b=a.body.indexOf(",")>=0;if(!m&&!b)return a.post.match(/,.*\}/)?(e=a.pre+"{"+a.body+s+a.post,t(e)):[e];if(m)c=a.body.split(/\.\./);else{if(1===(c=function t(e){if(!e)return[""];var n=[],r=i("{","}",e);if(!r)return e.split(",");var o=r.pre,a=r.body,s=r.post,c=o.split(",");c[c.length-1]+="{"+a+"}";var u=t(s);s.length&&(c[c.length-1]+=u.shift(),c.push.apply(c,u));return n.push.apply(n,c),n}(a.body)).length)if(1===(c=t(c[0],!1).map(f)).length)return(w=a.post.length?t(a.post,!1):[""]).map((function(t){return a.pre+c[0]+t}))}var y,v=a.pre,w=a.post.length?t(a.post,!1):[""];if(m){var x=l(c[0]),j=l(c[1]),E=Math.max(c[0].length,c[1].length),O=3==c.length?Math.abs(l(c[2])):1,A=d;j<x&&(O*=-1,A=g);var C=c.some(h);y=[];for(var k=x;A(k,j);k+=O){var S;if(p)"\\"===(S=String.fromCharCode(k))&&(S="");else if(S=String(k),C){var _=E-S.length;if(_>0){var N=new Array(_+1).join("0");S=k<0?"-"+N+S.slice(1):N+S}}y.push(S)}}else y=r(c,(function(e){return t(e,!1)}));for(var P=0;P<y.length;P++)for(var M=0;M<w.length;M++){var R=v+y[P]+w[M];(!n||m||R)&&o.push(R)}return o}(function(t){return t.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(s).split("\\,").join(c).split("\\.").join(u)}(t),!0).map(p)};var o="\0SLASH"+Math.random()+"\0",a="\0OPEN"+Math.random()+"\0",s="\0CLOSE"+Math.random()+"\0",c="\0COMMA"+Math.random()+"\0",u="\0PERIOD"+Math.random()+"\0";function l(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function p(t){return t.split(o).join("\\").split(a).join("{").split(s).join("}").split(c).join(",").split(u).join(".")}function f(t){return"{"+t+"}"}function h(t){return/^-?0\d/.test(t)}function d(t,e){return t<=e}function g(t,e){return t>=e}},icBU:function(t,e){t.exports=function(t,e){for(var r=[],i=0;i<t.length;i++){var o=e(t[i],i);n(o)?r.push.apply(r,o):r.push(o)}return r};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},kbA8:function(t,e,n){"use strict";function r(t,e,n){t instanceof RegExp&&(t=i(t,n)),e instanceof RegExp&&(e=i(e,n));var r=o(t,e,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+t.length,r[1]),post:n.slice(r[1]+e.length)}}function i(t,e){var n=e.match(t);return n?n[0]:null}function o(t,e,n){var r,i,o,a,s,c=n.indexOf(t),u=n.indexOf(e,c+1),l=c;if(c>=0&&u>0){for(r=[],o=n.length;l>=0&&!s;)l==c?(r.push(l),c=n.indexOf(t,l+1)):1==r.length?s=[r.pop(),u]:((i=r.pop())<o&&(o=i,a=u),u=n.indexOf(e,l+1)),l=c<u&&c>=0?c:u;r.length&&(s=[o,a])}return s}t.exports=r,r.range=o}},[["/EDR",0,1,5,4,2]]]);