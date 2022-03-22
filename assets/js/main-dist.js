/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/**
 * Copyright (C) 2010-2021 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * jQuery.tagcanvas 2.11
 * For more information, please contact <graham@goat1000.com>
 */
 (function($){
  "use strict";
  var i, j, abs = Math.abs, sin = Math.sin, cos = Math.cos, max = Math.max,
    min = Math.min, ceil = Math.ceil, sqrt = Math.sqrt, pow = Math.pow,
    hexlookup3 = {}, hexlookup2 = {}, hexlookup1 = {
    0:"0,",   1:"17,",  2:"34,",  3:"51,",  4:"68,",  5:"85,",
    6:"102,", 7:"119,", 8:"136,", 9:"153,", a:"170,", A:"170,",
    b:"187,", B:"187,", c:"204,", C:"204,", d:"221,", D:"221,",
    e:"238,", E:"238,", f:"255,", F:"255,"  
    }, Oproto, Tproto, TCproto, Mproto, Vproto, TSproto, TCVproto,
    doc = document, ocanvas, audio, audioClick, handlers = {};
  for(i = 0; i < 256; ++i) {
    j = i.toString(16);
    if(i < 16)
      j = '0' + j;
    hexlookup2[j] = hexlookup2[j.toUpperCase()] = i.toString() + ',';
  }
  function Defined(d) {
    return typeof d != 'undefined';
  }
  function IsObject(o) {
    return typeof o == 'object' && o != null;
  }
  function Clamp(v, mn, mx) {
    return isNaN(v) ? mx : min(mx, max(mn, v));
  }
  function Nop() {
    return false;
  }
  function TimeNow() {
    return new Date().valueOf();
  }
  function SortList(l, f) {
    var nl = [], tl = l.length, i;
    for(i = 0; i < tl; ++i)
      nl.push(l[i]);
    nl.sort(f);
    return nl;
  }
  function Shuffle(a) {
    var i = a.length-1, t, p;
    while(i) {
      p = ~~(Math.random()*i);
      t = a[i];
      a[i] = a[p];
      a[p] = t;
      --i;
    }
  }
  function SetupAudio() {
    var ac = window.AudioContext || window.webkitAudioContext;
    audio = new ac();
    if(!audio) {
      audio = 'off';
      return;
    }
    return audio;
  }
  function AudioIcon(mute,c,size,offsetx,offsety,stroke,colour) {
    var x = offsetx, y = offsety, s = size * 0.01, w = 80 * s, h = 100 * s, d = 40 * s, e = 30 * s;
    var f = e / 2;
    var x2 = x + w, x1 = x2 - d;
    var y3 = y + h, y2 = y3 - e, y1 = y + e, y4 = y + h / 2;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.setLineDash([]);
    c.globalAlpha = 1;
    c.strokeStyle = colour;
    c.lineWidth = stroke;
    c.lineJoin = 'round';
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x1, y2);
    c.moveTo(x2, y3);
    c.lineTo(x1, y2);
    c.lineTo(x, y2);
    c.lineTo(x, y1);
    c.lineTo(x1, y1);
    c.lineTo(x2, y);
    if(mute) {
      c.lineTo(x2, y1);
      c.moveTo(x2, y2);
      c.lineTo(x2, y3);
      c.moveTo(x2 - f, y4 - f);
      c.lineTo(x2 + f, y4 + f);
      c.moveTo(x2 + f, y4 - f);
      c.lineTo(x2 - f, y4 + f);
      c.stroke();
      return;
    }
    c.closePath();
    c.stroke();
  }
  function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  Vproto = Vector.prototype;
  Vproto.length = function() {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };
  Vproto.dot = function(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  };
  Vproto.cross = function(v) {
    var x = this.y * v.z - this.z * v.y,
      y = this.z * v.x - this.x * v.z,
      z = this.x * v.y - this.y * v.x;
    return new Vector(x, y, z);
  };
  Vproto.angle = function(v) {
    var dot = this.dot(v), ac;
    if(dot == 0)
      return Math.PI / 2.0;
    ac = dot / (this.length() * v.length());
    if(ac >= 1)
      return 0;
    if(ac <= -1)
      return Math.PI;
    return Math.acos(ac);
  };
  Vproto.unit = function() {
    var l = this.length();
    return new Vector(this.x / l, this.y / l, this.z / l);
  };
  function MakeVector(lg, lt) {
    lt = lt * Math.PI / 180;
    lg = lg * Math.PI / 180;
    var x = sin(lg) * cos(lt), y = -sin(lt), z = -cos(lg) * cos(lt);
    return new Vector(x, y, z);
  }
  function Matrix(a) {
    this[1] = {1: a[0],  2: a[1],  3: a[2]};
    this[2] = {1: a[3],  2: a[4],  3: a[5]};
    this[3] = {1: a[6],  2: a[7],  3: a[8]};
  }
  Mproto = Matrix.prototype;
  Matrix.Identity = function() {
    return new Matrix([1,0,0, 0,1,0, 0,0,1]);
  };
  Matrix.Rotation = function(angle, u) {
    var sina = sin(angle), cosa = cos(angle), mcos = 1 - cosa;
    return new Matrix([
      cosa + pow(u.x, 2) * mcos, u.x * u.y * mcos - u.z * sina, u.x * u.z * mcos + u.y * sina,
      u.y * u.x * mcos + u.z * sina, cosa + pow(u.y, 2) * mcos, u.y * u.z * mcos - u.x * sina,
      u.z * u.x * mcos - u.y * sina, u.z * u.y * mcos + u.x * sina, cosa + pow(u.z, 2) * mcos
    ]);
  }
  Mproto.mul = function(m) {
    var a = [], i, j, mmatrix = (m.xform ? 1 : 0);
    for(i = 1; i <= 3; ++i)
      for(j = 1; j <= 3; ++j) {
        if(mmatrix)
          a.push(this[i][1] * m[1][j] +
            this[i][2] * m[2][j] +
            this[i][3] * m[3][j]);
        else
          a.push(this[i][j] * m);
      }
    return new Matrix(a);
  };
  Mproto.xform = function(p) {
    var a = {}, x = p.x, y = p.y, z = p.z;
    a.x = x * this[1][1] + y * this[2][1] + z * this[3][1];
    a.y = x * this[1][2] + y * this[2][2] + z * this[3][2];
    a.z = x * this[1][3] + y * this[2][3] + z * this[3][3];
    return a;
  };
  function PointsOnSphere(n,xr,yr,zr,magic) {
    var i, y, r, phi, pts = [], off = 2/n, inc;
    inc = Math.PI * (3 - sqrt(5) + (parseFloat(magic) ? parseFloat(magic) : 0));
    for(i = 0; i < n; ++i) {
      y = i * off - 1 + (off / 2);
      r = sqrt(1 - y*y);
      phi = i * inc;
      pts.push([cos(phi) * r * xr, y * yr, sin(phi) * r * zr]);
    }
    return pts;
  }
  function Cylinder(n,o,xr,yr,zr,magic) {
    var phi, pts = [], off = 2/n, inc, i, j, k, l;
    inc = Math.PI * (3 - sqrt(5) + (parseFloat(magic) ? parseFloat(magic) : 0));
    for(i = 0; i < n; ++i) {
      j = i * off - 1 + (off / 2);
      phi = i * inc;
      k = cos(phi);
      l = sin(phi);
      pts.push(o ? [j * xr, k * yr, l * zr] : [k * xr, j * yr, l * zr]);
    }
    return pts;
  }
  function Ring(o, n, xr, yr, zr, j) {
    var phi, pts = [], inc = Math.PI * 2 / n, i, k, l;
    for(i = 0; i < n; ++i) {
      phi = i * inc;
      k = cos(phi);
      l = sin(phi);
      pts.push(o ? [j * xr, k * yr, l * zr] : [k * xr, j * yr, l * zr]);
    }
    return pts;
  }
  function PointsOnCylinderV(n,xr,yr,zr,m) { return Cylinder(n, 0, xr, yr, zr, m) }
  function PointsOnCylinderH(n,xr,yr,zr,m) { return Cylinder(n, 1, xr, yr, zr, m) }
  function PointsOnRingV(n, xr, yr, zr, offset) {
    offset = isNaN(offset) ? 0 : offset * 1;
    return Ring(0, n, xr, yr, zr, offset);
  }
  function PointsOnRingH(n, xr, yr, zr, offset) {
    offset = isNaN(offset) ? 0 : offset * 1;
    return Ring(1, n, xr, yr, zr, offset);
  }
  function CentreImage(t) {
    var i = new Image;
    i.onload = function() {
      var dx = i.width / 2, dy = i.height / 2;
      t.centreFunc = function(c, w, h, cx, cy) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.globalAlpha = 1;
        c.drawImage(i, cx - dx, cy - dy);
      };
    };
    i.src = t.centreImage;
  }
  function SetAlpha(c,a) {
    var d = c, p1, p2, ae = (a*1).toPrecision(3) + ')';
    if(c[0] === '#') {
      if(!hexlookup3[c])
        if(c.length === 4)
          hexlookup3[c] = 'rgba(' + hexlookup1[c[1]] + hexlookup1[c[2]] + hexlookup1[c[3]];
        else
          hexlookup3[c] = 'rgba(' + hexlookup2[c.substr(1,2)] + hexlookup2[c.substr(3,2)] + hexlookup2[c.substr(5,2)];
      d = hexlookup3[c] + ae;
    } else if(c.substr(0,4) === 'rgb(' || c.substr(0,4) === 'hsl(') {
      d = (c.replace('(','a(').replace(')', ',' + ae));
    } else if(c.substr(0,5) === 'rgba(' || c.substr(0,5) === 'hsla(') {
      p1 = c.lastIndexOf(',') + 1, p2 = c.indexOf(')');
      a *= parseFloat(c.substring(p1,p2));
      d = c.substr(0,p1) + a.toPrecision(3) + ')';
    }
    return d;
  }
  function NewCanvas(w,h) {
    // if using excanvas, give up now
    if(window.G_vmlCanvasManager)
      return null;
    var c = doc.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }
  // I think all browsers pass this test now...
  function ShadowAlphaBroken() {
    var cv = NewCanvas(3,3), c, i;
    if(!cv)
      return false;
    c = cv.getContext('2d');
    c.strokeStyle = '#000';
    c.shadowColor = '#fff';
    c.shadowBlur = 3;
    c.globalAlpha = 0;
    c.strokeRect(2,2,2,2);
    c.globalAlpha = 1;
    i = c.getImageData(2,2,1,1);
    cv = null;
    return (i.data[0] > 0);
  }
  function SetGradient(c, l, o, g) {
    var gd = c.createLinearGradient(0, 0, l, 0), i;
    for(i in g)
      gd.addColorStop(1 - i, g[i]);
    c.fillStyle = gd;
    c.fillRect(0, o, l, 1);
  }
  function FindGradientColour(tc, p, r) {
    var l = 1024, h = 1, gl = tc.weightGradient, cv, c, i, d;
    if(tc.gCanvas) {
      c = tc.gCanvas.getContext('2d');
      h = tc.gCanvas.height;
    } else {
      if(IsObject(gl[0]))
        h = gl.length;
      else
        gl = [gl];
      tc.gCanvas = cv = NewCanvas(l, h);
      if(!cv)
        return null;
      c = cv.getContext('2d');
      for(i = 0; i < h; ++i)
        SetGradient(c, l, i, gl[i]);
    }
    r = max(min(r || 0, h - 1), 0);
    d = c.getImageData(~~((l - 1) * p), r, 1, 1).data;
    return 'rgba(' + d[0] + ',' + d[1] + ',' + d[2] + ',' + (d[3]/255) + ')';
  }
  function TextSet(ctxt, font, colour, strings, padx, pady, shadowColour,
    shadowBlur, shadowOffsets, maxWidth, widths, align) {
    var xo = padx + (shadowBlur || 0) + 
      (shadowOffsets.length && shadowOffsets[0] < 0 ? abs(shadowOffsets[0]) : 0),
      yo = pady + (shadowBlur || 0) + 
      (shadowOffsets.length && shadowOffsets[1] < 0 ? abs(shadowOffsets[1]) : 0), i, xc;
    ctxt.font = font;
    ctxt.textBaseline = 'top';
    ctxt.fillStyle = colour;
    shadowColour && (ctxt.shadowColor = shadowColour);
    shadowBlur && (ctxt.shadowBlur = shadowBlur);
    shadowOffsets.length && (ctxt.shadowOffsetX = shadowOffsets[0],
      ctxt.shadowOffsetY = shadowOffsets[1]);
    for(i = 0; i < strings.length; ++i) {
      xc = 0;
      if(widths) {
        if('right' == align) {
          xc = maxWidth - widths[i];
        } else if('centre' == align) {
          xc = (maxWidth - widths[i]) / 2;
        }
      }
      ctxt.fillText(strings[i], xo + xc, yo);
      yo += parseInt(font);
    }
  }
  function RRect(c, x, y, w, h, r, s) {
    if(r) {
      c.beginPath();
      c.moveTo(x, y + h - r);
      c.arcTo(x, y, x + r, y, r);
      c.arcTo(x + w, y, x + w, y + r, r);
      c.arcTo(x + w, y + h, x + w - r, y + h, r);
      c.arcTo(x, y + h, x, y + h - r, r);
      c.closePath();
      c[s ? 'stroke' : 'fill']();
    } else {
      c[s ? 'strokeRect' : 'fillRect'](x, y, w, h);
    }
  }
  function TextCanvas(strings, font, w, h, maxWidth, stringWidths, align, valign,
    scale) {
    this.strings = strings;
    this.font = font;
    this.width = w;
    this.height = h;
    this.maxWidth = maxWidth;
    this.stringWidths = stringWidths;
    this.align = align;
    this.valign = valign;
    this.scale = scale;
  }
  TCVproto = TextCanvas.prototype;
  TCVproto.SetImage = function(image, w, h, position, padding, align, valign,
    scale) {
    this.image = image;
    this.iwidth = w * this.scale;
    this.iheight = h * this.scale;
    this.ipos = position;
    this.ipad = padding * this.scale;
    this.iscale = scale;
    this.ialign = align;
    this.ivalign = valign;
  };
  TCVproto.Align = function(size, space, a) {
    var pos = 0;
    if(a == 'right' || a == 'bottom')
      pos = space - size;
    else if(a != 'left' && a != 'top')
      pos = (space - size) / 2;
    return pos;
  };
  TCVproto.Create = function(colour, bgColour, bgOutline, bgOutlineThickness,
    shadowColour, shadowBlur, shadowOffsets, padding, radius) {
    var cv, cw, ch, c, x1, x2, y1, y2, offx, offy, ix, iy, iw, ih, rr,
      sox = abs(shadowOffsets[0]), soy = abs(shadowOffsets[1]), shadowcv, shadowc;
    padding = max(padding, sox + shadowBlur, soy + shadowBlur);
    x1 = 2 * (padding + bgOutlineThickness);
    y1 = 2 * (padding + bgOutlineThickness);
    cw = this.width + x1;
    ch = this.height + y1;
    offx = offy = padding + bgOutlineThickness;
  
    if(this.image) {
      ix = iy = padding + bgOutlineThickness;
      iw = this.iwidth;
      ih = this.iheight;
      if(this.ipos == 'top' || this.ipos == 'bottom') {
        if(iw < this.width)
          ix += this.Align(iw, this.width, this.ialign);
        else
          offx += this.Align(this.width, iw, this.align);
        if(this.ipos == 'top')
          offy += ih + this.ipad;
        else
          iy += this.height + this.ipad;
        cw = max(cw, iw + x1);
        ch += ih + this.ipad;
      } else {
        if(ih < this.height)
          iy += this.Align(ih, this.height, this.ivalign);
        else
          offy += this.Align(this.height, ih, this.valign);
        if(this.ipos == 'right')
          ix += this.width + this.ipad;
        else
          offx += iw + this.ipad;
        cw += iw + this.ipad;
        ch = max(ch, ih + y1);
      }
    }
  
    cv = NewCanvas(cw, ch);
    if(!cv)
      return null;
    x1 = y1 = bgOutlineThickness / 2;
    x2 = cw - bgOutlineThickness;
    y2 = ch - bgOutlineThickness;
    rr = min(radius, x2 / 2, y2 / 2);
    c = cv.getContext('2d');
    if(bgColour) {
      c.fillStyle = bgColour;
      RRect(c, x1, y1, x2, y2, rr);
    }
    if(bgOutlineThickness) {
      c.strokeStyle = bgOutline;
      c.lineWidth = bgOutlineThickness;
      RRect(c, x1, y1, x2, y2, rr, true);
    }
    if(shadowBlur || sox || soy) {
      // use a transparent canvas to draw on
      shadowcv = NewCanvas(cw, ch);
      if(shadowcv) {
        shadowc = c;
        c = shadowcv.getContext('2d');
      }
    }
  
    // don't use TextSet shadow support because it adds space for shadow
    TextSet(c, this.font, colour, this.strings, offx, offy, 0, 0, [],
      this.maxWidth, this.stringWidths, this.align);
        
    if(this.image)
      c.drawImage(this.image, ix, iy, iw, ih);
  
    if(shadowc) {
      // draw the text and image with the added shadow
      c = shadowc;
      shadowColour && (c.shadowColor = shadowColour);
      shadowBlur && (c.shadowBlur = shadowBlur);
      c.shadowOffsetX = shadowOffsets[0];
      c.shadowOffsetY = shadowOffsets[1];
      c.drawImage(shadowcv, 0, 0);
    }
    return cv;
  };
  function ExpandImage(i, w, h) {
    var cv = NewCanvas(w, h), c;
    if(!cv)
      return null;
    c = cv.getContext('2d');
    c.drawImage(i, (w - i.width) / 2, (h - i.height) / 2);
    return cv;
  }
  function ScaleImage(i, w, h) {
    var cv = NewCanvas(w, h), c;
    if(!cv)
      return null;
    c = cv.getContext('2d');
    c.drawImage(i, 0, 0, w, h);
    return cv;
  }
  function AddBackgroundToImage(i, w, h, scale, colour, othickness, ocolour,
    padding, radius, ofill) {
    var cw = w + ((2 * padding) + othickness) * scale,
      ch = h + ((2 * padding) + othickness) * scale,
      cv = NewCanvas(cw, ch), c, x1, y1, x2, y2, ocanvas, cc, rr;
    if(!cv)
      return null;
    othickness *= scale;
    radius *= scale;
    x1 = y1 = othickness / 2;
    x2 = cw - othickness;
    y2 = ch - othickness;
    padding = (padding * scale) + x1; // add space for outline
    c = cv.getContext('2d');
    rr = min(radius, x2 / 2, y2 / 2);
    if(colour) {
      c.fillStyle = colour;
      RRect(c, x1, y1, x2, y2, rr);
    }
    if(othickness) {
      c.strokeStyle = ocolour;
      c.lineWidth = othickness;
      RRect(c, x1, y1, x2, y2, rr, true);
    }
    
    if(ofill) {
      // use compositing to colour in the image and border
      ocanvas = NewCanvas(cw, ch);
      cc = ocanvas.getContext('2d');
      cc.drawImage(i, padding, padding, w, h);
      cc.globalCompositeOperation = 'source-in';
      cc.fillStyle = ocolour;
      cc.fillRect(0, 0, cw, ch);
      cc.globalCompositeOperation = 'destination-over';
      cc.drawImage(cv, 0, 0);
      cc.globalCompositeOperation = 'source-over';
      c.drawImage(ocanvas, 0, 0);
    } else {
      c.drawImage(i, padding, padding, i.width, i.height);
    }
    return {image: cv, width: cw / scale, height: ch / scale};
  }
  /**
   * Rounds off the corners of an image
   */
  function RoundImage(i, r, iw, ih, s) {
    var cv, c, r1 = parseFloat(r), l = max(iw, ih);
    cv = NewCanvas(iw, ih);
    if(!cv)
      return null;
    if(r.indexOf('%') > 0)
      r1 = l * r1 / 100;
    else
      r1 = r1 * s;
    c = cv.getContext('2d');
    c.globalCompositeOperation = 'source-over';
    c.fillStyle = '#fff';
    if(r1 >= l/2) {
      r1 = min(iw,ih) / 2;
      c.beginPath();
      c.moveTo(iw/2,ih/2);
      c.arc(iw/2,ih/2,r1,0,2*Math.PI,false);
      c.fill();
      c.closePath();
    } else {
      r1 = min(iw/2,ih/2,r1);
      RRect(c, 0, 0, iw, ih, r1, true);
      c.fill();
    }
    c.globalCompositeOperation = 'source-in';
    c.drawImage(i, 0, 0, iw, ih);
    return cv;
  }
  /**
   * Creates a new canvas containing the image and its shadow
   * Returns an object containing the image and its dimensions at z=0
   */
  function AddShadowToImage(i, w, h, scale, sc, sb, so) {
    var sw = abs(so[0]), sh = abs(so[1]), 
      cw = w + (sw > sb ? sw + sb : sb * 2) * scale,
      ch = h + (sh > sb ? sh + sb : sb * 2) * scale,
      xo = scale * ((sb || 0) + (so[0] < 0 ? sw : 0)),
      yo = scale * ((sb || 0) + (so[1] < 0 ? sh : 0)), cv, c;
    cv = NewCanvas(cw, ch);
    if(!cv)
      return null;
    c = cv.getContext('2d');
    sc && (c.shadowColor = sc);
    sb && (c.shadowBlur = sb * scale);
    so && (c.shadowOffsetX = so[0] * scale, c.shadowOffsetY = so[1] * scale);
    c.drawImage(i, xo, yo, w, h);
    return {image: cv, width: cw / scale, height: ch / scale};
  }
  function FindTextBoundingBox(s,f,ht) {
    var w = parseInt(s.toString().length * ht), h = parseInt(ht * 2 * s.length),
      cv = NewCanvas(w,h), c, idata, w1, h1, x, y, i, ex;
    if(!cv)
      return null;
    c = cv.getContext('2d');
    c.fillStyle = '#000';
    c.fillRect(0,0,w,h);
    TextSet(c,ht + 'px ' + f,'#fff',s,0,0,0,0,[],'centre')
  
    idata = c.getImageData(0,0,w,h);
    w1 = idata.width; h1 = idata.height;
    ex = {
      min: { x: w1, y: h1 },
      max: { x: -1, y: -1 }
    };
    for(y = 0; y < h1; ++y) {
      for(x = 0; x < w1; ++x) {
        i = (y * w1 + x) * 4;
        if(idata.data[i+1] > 0) {
          if(x < ex.min.x) ex.min.x = x;
          if(x > ex.max.x) ex.max.x = x;
          if(y < ex.min.y) ex.min.y = y;
          if(y > ex.max.y) ex.max.y = y;
        }
      }
    }
    // device pixels might not be css pixels
    if(w1 != w) {
      ex.min.x *= (w / w1);
      ex.max.x *= (w / w1);
    }
    if(h1 != h) {
      ex.min.y *= (w / h1);
      ex.max.y *= (w / h1);
    }
  
    cv = null;
    return ex;
  }
  function FixFont(f) {
    return "'" + f.replace(/(\'|\")/g,'').replace(/\s*,\s*/g, "', '") + "'";
  }
  function AddHandler(h,f,e) {
    e = e || doc;
    if(e.addEventListener)
      e.addEventListener(h,f,false);
    else
      e.attachEvent('on' + h, f);
  }
  function RemoveHandler(h,f,e) {
    e = e || doc;
    if(e.removeEventListener)
      e.removeEventListener(h, f);
    else
      e.detachEvent('on' + h, f);
  }
  function AddImage(i, o, alt, t, tc) {
    var s = tc.imageScale, mscale, ic, bc, oc, iw, ih;
    // image not loaded, wait for image onload
    if(!o.complete)
      return AddHandler('load',function() { AddImage(i,o,alt,t,tc); }, o);
    if(!i.complete)
      return AddHandler('load',function() { AddImage(i,o,alt,t,tc); }, i);
    if(alt && !alt.complete)
      return AddHandler('load',function() { AddImage(i,o,alt,t,tc); }, alt);
  
    // Yes, this does look like nonsense, but it makes sure that both the
    // width and height are actually set and not just calculated. This is
    // required to keep proportional sizes when the images are hidden, so
    // the images can be used again for another cloud.
    o.width = o.width;
    o.height = o.height;
  
    if(s) {
      i.width = o.width * s;
      i.height = o.height * s;
    }
    // the standard width of the image, with imageScale applied
    t.iw = i.width;
    t.ih = i.height;
    if(tc.txtOpt) {
      ic = i;
      mscale = tc.zoomMax * tc.txtScale;
      iw = t.iw * mscale;
      ih = t.ih * mscale;
      if(iw < o.naturalWidth || ih < o.naturalHeight) {
        ic = ScaleImage(i, iw, ih);
        if(ic)
          t.fimage = ic;
      } else {
        iw = t.iw;
        ih = t.ih;
        mscale = 1;
      }
      if(parseFloat(tc.imageRadius))
        t.image = t.fimage = i = RoundImage(t.image, tc.imageRadius, iw, ih, mscale);
      if(!t.HasText()) {
        if(tc.shadow) {
          ic = AddShadowToImage(t.image, iw, ih, mscale, tc.shadow, tc.shadowBlur,
            tc.shadowOffset);
          if(ic) {
            t.fimage = ic.image;
            t.w = ic.width;
            t.h = ic.height;
          }
        }
        if(tc.bgColour || tc.bgOutlineThickness) {
          bc = tc.bgColour == 'tag' ? GetProperty(t.a, 'background-color') :
            tc.bgColour;
          oc = tc.bgOutline == 'tag' ? GetProperty(t.a, 'color') : 
            (tc.bgOutline || tc.textColour);
          iw = t.fimage.width;
          ih = t.fimage.height;
          if(tc.outlineMethod == 'colour') {
            // create the outline version first, using the current image state
            ic = AddBackgroundToImage(t.fimage, iw, ih, mscale, bc,
              tc.bgOutlineThickness, t.outline.colour, tc.padding, tc.bgRadius, 1);
            if(ic)
              t.oimage = ic.image;
          }
          ic = AddBackgroundToImage(t.fimage, iw, ih, mscale, bc, 
            tc.bgOutlineThickness, oc, tc.padding, tc.bgRadius);
          if(ic) {
            t.fimage = ic.image;
            t.w = ic.width;
            t.h = ic.height;
          }
        }
        if(tc.outlineMethod == 'size') {
          if(tc.outlineIncrease > 0) {
            t.iw += 2 * tc.outlineIncrease;
            t.ih += 2 * tc.outlineIncrease;
            iw = mscale * t.iw;
            ih = mscale * t.ih;
            ic = ScaleImage(t.fimage, iw, ih);
            t.oimage = ic;
            t.fimage = ExpandImage(t.fimage, t.oimage.width, t.oimage.height);
          } else {
            iw = mscale * (t.iw + (2 * tc.outlineIncrease));
            ih = mscale * (t.ih + (2 * tc.outlineIncrease));
            ic = ScaleImage(t.fimage, iw, ih);
            t.oimage = ExpandImage(ic, t.fimage.width, t.fimage.height);
          }
        }
      }
    }
    t.alt = alt;
    t.Init();
  }
  function GetProperty(e,p) {
    var dv = doc.defaultView, pc = p.replace(/\-([a-z])/g,function(a){return a.charAt(1).toUpperCase()});
    return (dv && dv.getComputedStyle && dv.getComputedStyle(e,null).getPropertyValue(p)) ||
      (e.currentStyle && e.currentStyle[pc]);
  }
  function FindWeight(a, wFrom, tHeight) {
    var w = 1, p;
    if(wFrom) {
      w = 1 * (a.getAttribute(wFrom) || tHeight);
    } else if(p = GetProperty(a,'font-size')) {
      w = (p.indexOf('px') > -1 && p.replace('px','') * 1) ||
        (p.indexOf('pt') > -1 && p.replace('pt','') * 1.25) ||
        p * 3.3;
    }
    return w;
  }
  function EventToCanvasId(e) {
    return e.target && Defined(e.target.id) ? e.target.id :
      e.srcElement.parentNode.id;
  }
  function EventXY(e, c) {
    var xy, p, xmul = parseInt(GetProperty(c, 'width')) / c.width,
      ymul = parseInt(GetProperty(c, 'height')) / c.height;
    if(Defined(e.offsetX)) {
      xy = {x: e.offsetX, y: e.offsetY};
    } else {
      p = AbsPos(c.id);
      if(Defined(e.changedTouches))
        e = e.changedTouches[0];
      if(e.pageX)
        xy = {x: e.pageX - p.x, y: e.pageY - p.y};
    }
    if(xy && xmul && ymul) {
      xy.x /= xmul;
      xy.y /= ymul;
    }
    return xy;
  }
  function MouseOut(e) {
    var cv = e.target || e.fromElement.parentNode, tc = TagCanvas.tc[cv.id];
    if(tc) {
     tc.mx = tc.my = -1;
     tc.UnFreeze();
     tc.EndDrag();
    }
  }
  function MouseMove(e) {
    var i, t = TagCanvas, tc, p, tg = EventToCanvasId(e);
    for(i in t.tc) {
      tc = t.tc[i];
      if(tc.tttimer) {
        clearTimeout(tc.tttimer);
        tc.tttimer = null;
      }
    }
    if(tg && t.tc[tg]) {
      tc = t.tc[tg];
      if(p = EventXY(e, tc.canvas)) {
        tc.mx = p.x;
        tc.my = p.y;
        tc.Drag(e, p);
      }
      tc.drawn = 0;
    }
  }
  function MouseDown(e) {
    var t = TagCanvas, cb = doc.addEventListener ? 0 : 1,
      tg = EventToCanvasId(e);
    if(tg && e.button == cb && t.tc[tg]) {
      t.tc[tg].BeginDrag(e);
    }
  }
  function MouseUp(e) {
    var t = TagCanvas, cb = doc.addEventListener ? 0 : 1,
      tg = EventToCanvasId(e), tc;
    if(tg && e.button == cb && t.tc[tg]) {
      tc = t.tc[tg];
      MouseMove(e);
      if(!tc.EndDrag() && !tc.touchState)
        tc.Clicked(e);
    }
  }
  function TouchDown(e) {
    var tg = EventToCanvasId(e), tc = (tg && TagCanvas.tc[tg]), p;
    if(tc && e.changedTouches) {
      if(e.touches.length == 1 && tc.touchState == 0) {
        tc.touchState = 1;
        tc.BeginDrag(e);
        if(p = EventXY(e, tc.canvas)) {
          tc.mx = p.x;
          tc.my = p.y;
          tc.drawn = 0;
        }
      } else if(e.targetTouches.length == 2 && tc.pinchZoom) {
        tc.touchState = 3;
        tc.EndDrag();
        tc.BeginPinch(e);
      } else {
        tc.EndDrag();
        tc.EndPinch();
        tc.touchState = 0;
      }
    }
  }
  function TouchUp(e) {
    var tg = EventToCanvasId(e), tc = (tg && TagCanvas.tc[tg]);
    if(tc && e.changedTouches) {
      switch(tc.touchState) {
      case 1:
        tc.Draw();
        tc.Clicked();
        break;
      case 2:
        tc.EndDrag();
        break;
      case 3:
        tc.EndPinch();
      }
      tc.touchState = 0;
    }
  }
  function TouchMove(e) {
    var i, t = TagCanvas, tc, p, tg = EventToCanvasId(e);
    for(i in t.tc) {
      tc = t.tc[i];
      if(tc.tttimer) {
        clearTimeout(tc.tttimer);
        tc.tttimer = null;
      }
    }
    tc = (tg && t.tc[tg]);
    if(tc && e.changedTouches && tc.touchState) {
      switch(tc.touchState) {
      case 1:
      case 2:
        if(p = EventXY(e, tc.canvas)) {
          tc.mx = p.x;
          tc.my = p.y;
          if(tc.Drag(e, p))
            tc.touchState = 2;
        }
        break;
      case 3:
        tc.Pinch(e);
      }
      tc.drawn = 0;
    }
  }
  function MouseWheel(e) {
    var t = TagCanvas, tg = EventToCanvasId(e);
    if(tg && t.tc[tg]) {
      e.cancelBubble = true;
      e.returnValue = false;
      e.preventDefault && e.preventDefault();
      t.tc[tg].Wheel((e.wheelDelta || e.detail) > 0);
    }
  }
  function Scroll(e) {
    var i, t = TagCanvas;
    clearTimeout(t.scrollTimer);
    for(i in t.tc) {
      t.tc[i].Pause();
    }
    t.scrollTimer = setTimeout(function() {
      var i, t = TagCanvas;
      for(i in t.tc) {
        t.tc[i].Resume();
      }
    }, t.scrollPause);
  }
  function DrawCanvas() {
    DrawCanvasRAF(TimeNow());
  }
  function DrawCanvasRAF(t) {
    var tc = TagCanvas.tc, i;
    TagCanvas.NextFrame(TagCanvas.interval);
    t = t || TimeNow();
    for(i in tc)
      tc[i].Draw(t);
  }
  function NextFrameRAF() {
    requestAnimationFrame(DrawCanvasRAF);
  };
  function NextFrameTimeout(iv) {
    setTimeout(DrawCanvas, iv);
  };
  function AbsPos(id) {
    var e = doc.getElementById(id), r = e.getBoundingClientRect(),
      dd = doc.documentElement, b = doc.body, w = window,
      xs = w.pageXOffset || dd.scrollLeft,
      ys = w.pageYOffset || dd.scrollTop,
      xo = dd.clientLeft || b.clientLeft,
      yo = dd.clientTop || b.clientTop;
    return { x: r.left + xs - xo, y: r.top + ys - yo };
  }
  function Project(tc,p1,sx,sy) {
    var m = tc.radius * tc.z1 / (tc.z1 + tc.z2 + p1.z);
    return {
      x: p1.x * m * sx,
      y: p1.y * m * sy,
      z: p1.z,
      w: (tc.z1 - p1.z) / tc.z2
    };
  }
  /**
   * @constructor
   * for recursively splitting tag contents on <br> tags
   */
  function TextSplitter(e) {
    this.e = e;
    this.br = 0;
    this.line = [];
    this.text = [];
    this.original = e.innerText || e.textContent;
  }
  TSproto = TextSplitter.prototype;
  TSproto.Empty = function() {
    for(var i = 0; i < this.text.length; ++i)
      if(this.text[i].length)
        return false;
    return true;
  };
  TSproto.Lines = function(e) {
    var r = e ? 1 : 0, cn, cl, i;
    e = e || this.e;
    cn = e.childNodes;
    cl = cn.length;
  
    for(i = 0; i < cl; ++i) {
      if(cn[i].nodeName == 'BR') {
        this.text.push(this.line.join(' '));
        this.br = 1;
      } else if(cn[i].nodeType == 3) {
        if(this.br) {
          this.line = [cn[i].nodeValue];
          this.br = 0;
        } else {
          this.line.push(cn[i].nodeValue);
        }
      } else {
        this.Lines(cn[i]);
      }
    }
    r || this.br || this.text.push(this.line.join(' '));
    return this.text;
  };
  TSproto.SplitWidth = function(w, c, f, h) {
    var i, j, words, text = [];
    c.font = h + 'px ' + f;
    for(i = 0; i < this.text.length; ++i) {
      words = this.text[i].split(/\s+/);
      this.line = [words[0]];
      for(j = 1; j < words.length; ++j) {
        if(c.measureText(this.line.join(' ') + ' ' + words[j]).width > w) {
          text.push(this.line.join(' '));
          this.line = [words[j]];
        } else {
          this.line.push(words[j]);
        }
      }
      text.push(this.line.join(' '));
    }
    return this.text = text;
  };
  /**
   * @constructor
   */
  function Outline(tc,t) {
    this.ts = null;
    this.tc = tc;
    this.tag = t;
    this.x = this.y = this.w = this.h = this.sc = 1;
    this.z = 0;
    this.pulse = 1;
    this.pulsate = tc.pulsateTo < 1;
    this.colour = tc.outlineColour;
    this.adash = ~~tc.outlineDash;
    this.agap = ~~tc.outlineDashSpace || this.adash;
    this.aspeed = tc.outlineDashSpeed * 1;
    if(this.colour == 'tag')
      this.colour = GetProperty(t.a, 'color');
    else if(this.colour == 'tagbg')
      this.colour = GetProperty(t.a, 'background-color');
    this.Draw = this.pulsate ? this.DrawPulsate : this.DrawSimple;
    this.radius = tc.outlineRadius | 0;
    this.SetMethod(tc.outlineMethod,tc.altImage);
  }
  Oproto = Outline.prototype;
  Oproto.SetMethod = function(om,alt) {
    var methods = {
      block: ['PreDraw','DrawBlock'],
      colour: ['PreDraw','DrawColour'],
      outline: ['PostDraw','DrawOutline'],
      classic: ['LastDraw','DrawOutline'],
      size: ['PreDraw','DrawSize'],
      none: ['LastDraw']
    }, funcs = methods[om] || methods.outline;
    if(om == 'none') {
      this.Draw = function() { return 1; }
    } else {
      this.drawFunc = this[funcs[1]];
    }
    this[funcs[0]] = this.Draw;
    if(alt) {
      this.RealPreDraw = this.PreDraw;
      this.PreDraw = this.DrawAlt;
    }
  };
  Oproto.Update = function(x,y,w,h,sc,z,xo,yo) {
    var o = this.tc.outlineOffset, o2 = 2 * o;
    this.x = sc * x + xo - o;
    this.y = sc * y + yo - o;
    this.w = sc * w + o2;
    this.h = sc * h + o2;
    this.sc = sc; // used to determine frontmost
    this.z = z;
  };
  Oproto.Ants = function(c) {
    if(!this.adash)
      return;
    var l = this.adash, g = this.agap, s = this.aspeed, length = l + g,
      l1 = 0, l2 = l, g1 = g, g2 = 0, seq = 0, ants;
    if(s) {
      seq = abs(s) * (TimeNow() - this.ts) / 50;
      if(s < 0)
        seq = 8.64e6 - seq;
      s = ~~seq % length;
    }
    if(s) {
      if(l >= s) {
        l1 = l - s;
        l2 = s;
      } else {
        g1 = length - s;
        g2 = g - g1;
      }
      ants = [l1, g1, l2, g2];
    } else {
      ants = [l,g];
    }
    c.setLineDash(ants);
  }
  Oproto.DrawOutline = function(c,x,y,w,h,colour) {
    var r = min(this.radius, h/2, w/2);
    c.strokeStyle = colour;
    this.Ants(c);
    RRect(c, x, y, w, h, r, true);
  };
  Oproto.DrawSize = function(c,x,y,w,h,colour,tag,x1,y1) {
    var tw = tag.w, th = tag.h, m, i, sc;
    if(this.pulsate) {
      if(tag.image)
        sc = (tag.image.height + this.tc.outlineIncrease) / tag.image.height;
      else
        sc = tag.oscale;
      i = tag.fimage || tag.image;
      m = 1 + ((sc - 1) * (1-this.pulse));
      tag.h *= m;
      tag.w *= m;
    } else {
      i = tag.oimage;
    }
    tag.alpha = 1;
    tag.Draw(c, x1, y1, i);
    tag.h = th;
    tag.w = tw;
    return 1;
  };
  Oproto.DrawColour = function(c,x,y,w,h,colour,tag,x1,y1) {
    if(tag.oimage) {
      if(this.pulse < 1) {
        tag.alpha = 1 - pow(this.pulse, 2);
        tag.Draw(c, x1, y1, tag.fimage);
        tag.alpha = this.pulse;
      } else {
        tag.alpha = 1;
      }
      tag.Draw(c, x1, y1, tag.oimage);
      return 1;
    }
    return this[tag.image ? 'DrawColourImage' : 'DrawColourText'](c,x,y,w,h,colour,tag,x1,y1);
  };
  Oproto.DrawColourText = function(c,x,y,w,h,colour,tag,x1,y1) {
    var normal = tag.colour;
    tag.colour = colour;
    tag.alpha = 1;
    tag.Draw(c,x1,y1);
    tag.colour = normal;
    return 1;
  };
  Oproto.DrawColourImage = function(c,x,y,w,h,colour,tag,x1,y1) {
    var ccanvas = c.canvas, fx = ~~max(x,0), fy = ~~max(y,0), 
      fw = min(ccanvas.width - fx, w) + .5|0, fh = min(ccanvas.height - fy,h) + .5|0, cc;
    if(ocanvas)
      ocanvas.width = fw, ocanvas.height = fh;
    else
      ocanvas = NewCanvas(fw, fh);
    if(!ocanvas)
      return this.SetMethod('outline'); // if using IE and images, give up!
    cc = ocanvas.getContext('2d');
  
    cc.drawImage(ccanvas,fx,fy,fw,fh,0,0,fw,fh);
    c.clearRect(fx,fy,fw,fh);
    if(this.pulsate) {
      tag.alpha = 1 - pow(this.pulse, 2);
    } else {
      tag.alpha = 1;
    }
    tag.Draw(c,x1,y1);
    c.setTransform(1,0,0,1,0,0);
    c.save();
    c.beginPath();
    c.rect(fx,fy,fw,fh);
    c.clip();
    c.globalCompositeOperation = 'source-in';
    c.fillStyle = colour;
    c.fillRect(fx,fy,fw,fh);
    c.restore();
    c.globalAlpha = 1;
    c.globalCompositeOperation = 'destination-over';
    c.drawImage(ocanvas,0,0,fw,fh,fx,fy,fw,fh);
    c.globalCompositeOperation = 'source-over';
    return 1;
  };
  Oproto.DrawAlt = function(c,tag,x1,y1,ga,useGa) {
    var r = this.RealPreDraw(c,tag,x1,y1,ga,useGa);
    if(tag.alt) {
      tag.DrawImage(c, x1, y1, tag.alt);
      r = 1;
    }
    return r;
  };
  Oproto.DrawBlock = function(c,x,y,w,h,colour) {
    var r = min(this.radius, h/2, w/2);
    c.fillStyle = colour;
    RRect(c, x, y, w, h, r);
  };
  Oproto.DrawSimple = function(c, tag, x1, y1, ga, useGa) {
    var t = this.tc;
    c.setTransform(1,0,0,1,0,0);
    c.strokeStyle = this.colour;
    c.lineWidth = t.outlineThickness;
    c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0;
    c.globalAlpha = useGa ? ga : 1;
    return this.drawFunc(c,this.x,this.y,this.w,this.h,this.colour,tag,x1,y1);
  };
  Oproto.DrawPulsate = function(c, tag, x1, y1) {
    var diff = TimeNow() - this.ts, t = this.tc,
      ga = t.pulsateTo + ((1 - t.pulsateTo) * 
      (0.5 + (cos(2 * Math.PI * diff / (1000 * t.pulsateTime)) / 2)));
    this.pulse = ga = TagCanvas.Smooth(1,ga);
    return this.DrawSimple(c, tag, x1, y1, ga, 1);
  };
  Oproto.Active = function(c,x,y) {
    var a = (x >= this.x && y >= this.y &&
      x <= this.x + this.w && y <= this.y + this.h);
    if(a) {
      this.ts = this.ts || TimeNow();
    } else {
      this.ts = null;
    }
    return a;
  };
  Oproto.PreDraw = Oproto.PostDraw = Oproto.LastDraw = Nop;
  /**
   * @constructor
   */
  function Tag(tc, text, a, v, w, h, col, bcol, bradius, boutline, bothickness,
    font, padding, original) {
    this.tc = tc;
    this.image = null;
    this.text = text;
    this.text_original = original;
    this.line_widths = [];
    this.title = a.title || null;
    this.a = a;
    this.position = new Vector(v[0], v[1], v[2]);
    this.x = this.y = this.z = 0;
    this.w = w;
    this.h = h;
    this.colour = col || tc.textColour;
    this.bgColour = bcol || tc.bgColour;
    this.bgRadius = bradius | 0;
    this.bgOutline = boutline || this.colour;
    this.bgOutlineThickness = bothickness | 0;
    this.textFont = font || tc.textFont;
    this.padding = padding | 0;
    this.sc = this.alpha = 1;
    this.weighted = !tc.weight;
    this.outline = new Outline(tc,this);
    this.audio = null;
  }
  Tproto = Tag.prototype;
  Tproto.Init = function(e) {
    var tc = this.tc;
    this.textHeight = tc.textHeight;
    if(this.HasText()) {
      this.Measure(tc.ctxt,tc);
    } else {
      this.w = this.iw;
      this.h = this.ih;
    }
  
    this.SetShadowColour = tc.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed;
    this.SetDraw(tc);
  };
  Tproto.Draw = Nop;
  Tproto.HasText = function() {
    return this.text && this.text[0].length > 0;
  };
  Tproto.EqualTo = function(e) {
    var i = e.getElementsByTagName('img');
    if(this.a.href != e.href)
      return 0;
    if(i.length)
      return this.image.src == i[0].src;
    return (e.innerText || e.textContent) == this.text_original;
  };
  Tproto.SetImage = function(i) {
    this.image = this.fimage = i;
  };
  Tproto.SetAudio = function(a) {
    this.audio = a;
    this.audio.load();
  };
  Tproto.SetDraw = function(t) {
    this.Draw = this.fimage ? (t.ie > 7 ? this.DrawImageIE : this.DrawImage) : this.DrawText;
    t.noSelect && (this.CheckActive = Nop);
  };
  Tproto.MeasureText = function(c) {
    var i, l = this.text.length, w = 0, wl;
    for(i = 0; i < l; ++i) {
      this.line_widths[i] = wl = c.measureText(this.text[i]).width;
      w = max(w, wl);
    }
    return w;
  };
  Tproto.Measure = function(c,t) {
    var extents = FindTextBoundingBox(this.text, this.textFont, this.textHeight),
      s, th, f, soff, cw, twidth, theight, img, tcv;
    // add the gap at the top to the height to make equal gap at bottom
    theight = extents ? extents.max.y + extents.min.y : this.textHeight;
    c.font = this.font = this.textHeight + 'px ' + this.textFont;
    twidth = this.MeasureText(c);
    if(t.txtOpt) {
      s = t.txtScale;
      th = s * this.textHeight;
      f = th + 'px ' + this.textFont;
      soff = [s * t.shadowOffset[0], s * t.shadowOffset[1]];
      c.font = f;
      cw = this.MeasureText(c);
      tcv = new TextCanvas(this.text, f, cw + s, (s * theight) + s, cw,
        this.line_widths, t.textAlign, t.textVAlign, s);
  
      if(this.image)
        tcv.SetImage(this.image, this.iw, this.ih, t.imagePosition, t.imagePadding,
          t.imageAlign, t.imageVAlign, t.imageScale);
  
      img = tcv.Create(this.colour, this.bgColour, this.bgOutline,
        s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff,
        s * this.padding, s * this.bgRadius);
  
      // add outline image using highlight colour
      if(t.outlineMethod == 'colour') {
        this.oimage = tcv.Create(this.outline.colour, this.bgColour, this.outline.colour,
          s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff,
          s * this.padding, s * this.bgRadius);
  
      } else if(t.outlineMethod == 'size') {
        extents = FindTextBoundingBox(this.text, this.textFont,
          this.textHeight + t.outlineIncrease);
        th = extents.max.y + extents.min.y;
        f = (s * (this.textHeight + t.outlineIncrease)) + 'px ' + this.textFont;
        c.font = f;
        cw = this.MeasureText(c);
  
        tcv = new TextCanvas(this.text, f, cw + s, (s * th) + s, cw,
          this.line_widths, t.textAlign, t.textVAlign, s);
        if(this.image)
          tcv.SetImage(this.image, this.iw + t.outlineIncrease,
            this.ih + t.outlineIncrease, t.imagePosition, t.imagePadding,
            t.imageAlign, t.imageVAlign, t.imageScale);
            
        this.oimage = tcv.Create(this.colour, this.bgColour, this.bgOutline,
          s * this.bgOutlineThickness, t.shadow, s * t.shadowBlur, soff,
          s * this.padding, s * this.bgRadius);
  
        this.oscale = this.oimage.width / img.width;
        if(t.outlineIncrease > 0)
          img = ExpandImage(img, this.oimage.width, this.oimage.height);
        else
          this.oimage = ExpandImage(this.oimage, img.width, img.height);
      }
      if(img) {
        this.fimage = img;
        twidth = this.fimage.width / s;
        theight = this.fimage.height / s;
      }
      this.SetDraw(t);
      t.txtOpt = !!this.fimage;
    }
    this.h = theight;
    this.w = twidth;
  };
  Tproto.SetFont = function(f, c, bc, boc) {
    this.textFont = f;
    this.colour = c;
    this.bgColour = bc;
    this.bgOutline = boc;
    this.Measure(this.tc.ctxt, this.tc);
  };
  Tproto.SetWeight = function(w) {
    var tc = this.tc, modes = tc.weightMode.split(/[, ]/), m, s, wl = w.length;
    if(!this.HasText())
      return;
    this.weighted = true;
    for(s = 0; s < wl; ++s) {
      m = modes[s] || 'size';
      if('both' == m) {
        this.Weight(w[s], tc.ctxt, tc, 'size', tc.min_weight[s], 
          tc.max_weight[s], s);
        this.Weight(w[s], tc.ctxt, tc, 'colour', tc.min_weight[s],
          tc.max_weight[s], s);
      } else {
        this.Weight(w[s], tc.ctxt, tc, m, tc.min_weight[s], tc.max_weight[s], s);
      }
    }
    this.Measure(tc.ctxt, tc);
  };
  Tproto.Weight = function(w, c, t, m, wmin, wmax, wnum) {
    w = isNaN(w) ? 1 : w;
    var nweight = (w - wmin) / (wmax - wmin);
    if('colour' == m)
      this.colour = FindGradientColour(t, nweight, wnum);
    else if('bgcolour' == m)
      this.bgColour = FindGradientColour(t, nweight, wnum);
    else if('bgoutline' == m)
      this.bgOutline = FindGradientColour(t, nweight, wnum);
    else if('outline' == m)
      this.outline.colour = FindGradientColour(t, nweight, wnum);
    else if('size' == m) {
      if(t.weightSizeMin > 0 && t.weightSizeMax > t.weightSizeMin) {
        this.textHeight = t.weightSize * 
          (t.weightSizeMin + (t.weightSizeMax - t.weightSizeMin) * nweight);
      } else {
        // min textHeight of 1
        this.textHeight = max(1, w * t.weightSize);
      }
    }
  };
  Tproto.SetShadowColourFixed = function(c,s,a) {
    c.shadowColor = s;
  };
  Tproto.SetShadowColourAlpha = function(c,s,a) {
    c.shadowColor = SetAlpha(s, a);
  };
  Tproto.DrawText = function(c,xoff,yoff) {
    var t = this.tc, x = this.x, y = this.y, s = this.sc, i, xl;
    c.globalAlpha = this.alpha;
    c.fillStyle = this.colour;
    t.shadow && this.SetShadowColour(c,t.shadow,this.alpha);
    c.font = this.font;
    x += xoff / s;
    y += (yoff / s) - (this.h / 2);
    for(i = 0; i < this.text.length; ++i) {
      xl = x;
      if('right' == t.textAlign) {
        xl += this.w / 2 - this.line_widths[i];
      } else if('centre' == t.textAlign) {
        xl -= this.line_widths[i] / 2;
      } else {
        xl -= this.w / 2;
      }
      c.setTransform(s, 0, 0, s, s * xl, s * y);
      c.fillText(this.text[i], 0, 0);
      y += this.textHeight;
    }
  };
  Tproto.DrawImage = function(c,xoff,yoff,im) {
    var x = this.x, y = this.y, s = this.sc,
      i = im || this.fimage, w = this.w, h = this.h, a = this.alpha,
      shadow = this.shadow;
    c.globalAlpha = a;
    shadow && this.SetShadowColour(c,shadow,a);
    x += (xoff / s) - (w / 2);
    y += (yoff / s) - (h / 2);
    c.setTransform(s, 0, 0, s, s * x, s * y);
    c.drawImage(i, 0, 0, w, h);
  };
  Tproto.DrawImageIE = function(c,xoff,yoff) {
    var i = this.fimage, s = this.sc,
      w = i.width = this.w*s, h = i.height = this.h * s,
      x = (this.x*s) + xoff - (w/2), y = (this.y*s) + yoff - (h/2);
    c.setTransform(1,0,0,1,0,0);
    c.globalAlpha = this.alpha;
    c.drawImage(i, x, y);
  };
  Tproto.Calc = function(m,a) {
    var pp, t = this.tc, mnb = t.minBrightness,
      mxb = t.maxBrightness, r = t.max_radius;
    pp = m.xform(this.position);
    this.xformed = pp;
    pp = Project(t, pp, t.stretchX, t.stretchY);
    this.x = pp.x;
    this.y = pp.y;
    this.z = pp.z;
    this.sc = pp.w;
    this.alpha = a * Clamp(mnb + (mxb - mnb) * (r - this.z) / (2 * r), 0, 1);
    return this.xformed;
  };
  Tproto.UpdateActive = function(c, xoff, yoff) {
    var o = this.outline, w = this.w, h = this.h,
      x = this.x - w/2, y = this.y - h/2;
    o.Update(x, y, w, h, this.sc, this.z, xoff, yoff);
    return o;
  };
  Tproto.CheckActive = function(c,xoff,yoff) {
    var t = this.tc, o = this.UpdateActive(c, xoff, yoff);
    return o.Active(c, t.mx, t.my) ? o : null;
  };
  Tproto.Clicked = function(e) {
    var a = this.a, t = a.target, h = a.href, evt;
    if(t != '' && t != '_self') {
      if(self.frames[t]) {
        self.frames[t].document.location = h;
      } else{
        try {
          if(top.frames[t]) {
            top.frames[t].document.location = h;
            return;
          }
        } catch(err) {
          // different domain/port/protocol?
        }
        window.open(h, t);
      }
      return;
    }
    if(doc.createEvent) {
      evt = doc.createEvent('MouseEvents');
      evt.initMouseEvent('click', 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
      if(!a.dispatchEvent(evt))
        return;
    } else if(a.fireEvent) {
      if(!a.fireEvent('onclick'))
        return;
    }
    doc.location = h;
  };
  Tproto.StopAudio = function() {
    this.audio && this.playing && this.audio.pause();
    this.stopped = 1;
    this.playing = 0;
  };
  Tproto.PlayAudio = function() {
    if(audio === 'off' || this.tc.audioOff)
      return;
    if(!audio && !SetupAudio())
      return;
  
    var a = this.tc.audio, g = this.tc.gain, sus = 'suspended', p;
    if(this.audio) {
      if(!this.track) {
        this.track = audio.createMediaElementSource(this.audio);
        this.gain = audio.createGain();
        this.track.connect(this.gain);
        this.gain.connect(audio.destination);
      }
      a = this.audio;
      g = this.gain;
      if(!a.paused)
        return 1;
    }
  
    if(a) {
      if(audio.state == sus)
        audio.resume();
      if(audio.state == sus)
        return;
  
      g.gain.value = min(2, max(0, this.tc.audioVolume * 1));
      a.currentTime = 0;
      this.stopped = 0;
      p = a.play();
      if(p !== undefined) {
        p.then(r => {
          this.stopped ? this.audio.pause() : this.playing = 1;
        });
      }
      return 1;
    }
  };
  /**
   * @constructor
   */
  function TagCanvas(cid,lctr,opt) {
    var i, p, c = doc.getElementById(cid), cp = ['id','class','innerHTML'];
  
    if(!c) throw 0;
    if(Defined(window.G_vmlCanvasManager)) {
      c = window.G_vmlCanvasManager.initElement(c);
      this.ie = parseFloat(navigator.appVersion.split('MSIE')[1]);
    }
    if(c && (!c.getContext || !c.getContext('2d').fillText)) {
      p = doc.createElement('DIV');
      for(i = 0; i < cp.length; ++i)
        p[cp[i]] = c[cp[i]];
      c.parentNode.insertBefore(p,c);
      c.parentNode.removeChild(c);
      throw 0;
    }
    for(i in TagCanvas.options)
      this[i] = opt && Defined(opt[i]) ? opt[i] : 
        (Defined(TagCanvas[i]) ? TagCanvas[i] : TagCanvas.options[i]);
  
    this.canvas = c;
    this.ctxt = c.getContext('2d');
    this.z1 = 250 / max(this.depth, 0.001);
    this.z2 = this.z1 / this.zoom;
    this.radius = min(c.height, c.width) * 0.0075; // fits radius of 100 in canvas
    this.max_radius = 100;
    this.max_weight = [];
    this.min_weight = [];
    this.textFont = this.textFont && FixFont(this.textFont);
    this.textHeight *= 1;
    this.imageRadius = this.imageRadius.toString();
    this.pulsateTo = Clamp(this.pulsateTo, 0, 1);
    this.minBrightness = Clamp(this.minBrightness, 0, 1);
    this.maxBrightness = Clamp(this.maxBrightness, this.minBrightness, 1);
    this.ctxt.textBaseline = 'top';
    this.lx = (this.lock + '').indexOf('x') + 1;
    this.ly = (this.lock + '').indexOf('y') + 1;
    this.frozen = this.dx = this.dy = this.fixedAnim = this.touchState = 0;
    this.fixedAlpha = 1;
    this.source = lctr || cid;
    this.repeatTags = min(64, ~~this.repeatTags);
    this.minTags = min(200, ~~this.minTags);
    if(~~this.scrollPause > 0)
      TagCanvas.scrollPause = ~~this.scrollPause;
    else
      this.scrollPause = 0;
    if(this.minTags > 0 && this.repeatTags < 1 && (i = this.GetTags().length))
      this.repeatTags = ceil(this.minTags / i) - 1;
    this.transform = Matrix.Identity();
    this.startTime = this.time = TimeNow();
    this.mx = this.my = -1;
    this.centreImage && CentreImage(this);
    this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition;
    this.animTiming = (typeof TagCanvas[this.animTiming] == 'function' ?
      TagCanvas[this.animTiming] : TagCanvas.Smooth);
    if(this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1]) {
      // let the browser translate "red" into "#ff0000"
      this.ctxt.shadowColor = this.shadow;
      this.shadow = this.ctxt.shadowColor;
      this.shadowAlpha = ShadowAlphaBroken();
    } else {
      delete this.shadow;
    }
    if(this.activeAudio === false) {
      audio = 'off';
    } else {
      this.activeAudio && this.LoadAudio();
    }
    this.Load();
    if(lctr && this.hideTags) {
      (function(t) {
      if(TagCanvas.loaded)
        t.HideTags();
      else
        AddHandler('load', function() { t.HideTags(); }, window);
      })(this);
    }
  
    this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0;
    this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0;
    if(this.tooltip) {
      this.ctitle = c.title;
      c.title = '';
      if(this.tooltip == 'native') {
        this.Tooltip = this.TooltipNative;
      } else {
        this.Tooltip = this.TooltipDiv;
        if(!this.ttdiv) {
          this.ttdiv = doc.createElement('div');
          this.ttdiv.className = this.tooltipClass;
          this.ttdiv.style.position = 'absolute';
          this.ttdiv.style.zIndex = c.style.zIndex + 1;
          AddHandler('mouseover',function(e){e.target.style.display='none';},this.ttdiv);
          doc.body.appendChild(this.ttdiv);
        }
      }
    } else {
      this.Tooltip = this.TooltipNone;
    }
    if(!this.noMouse && !handlers[cid]) {
      handlers[cid] = [
        ['mousemove', MouseMove],
        ['mouseout', MouseOut],
        ['mouseup', MouseUp],
        ['touchstart', TouchDown],
        ['touchend', TouchUp],
        ['touchcancel', TouchUp],
        ['touchmove', TouchMove]
      ];
      if(this.dragControl) {
        handlers[cid].push(['mousedown', MouseDown]);
        handlers[cid].push(['selectstart', Nop]);
      }
      if(this.wheelZoom) {
        handlers[cid].push(['mousewheel', MouseWheel]);
        handlers[cid].push(['DOMMouseScroll', MouseWheel]);
      }
      if(this.scrollPause) {
        handlers[cid].push(['scroll', Scroll, window]);
      }
      for(i = 0; i < handlers[cid].length; ++i) {
        p = handlers[cid][i];
        AddHandler(p[0], p[1], p[2] ? p[2] : c);
      }
    }
    if(!TagCanvas.started) {
      TagCanvas.NextFrame = window.requestAnimationFrame ? NextFrameRAF :
        NextFrameTimeout;
      TagCanvas.interval = this.interval;
      TagCanvas.NextFrame(this.interval);
      TagCanvas.started = 1;
    }
  }
  TCproto = TagCanvas.prototype;
  TCproto.SourceElements = function() {
    if(doc.querySelectorAll)
      return doc.querySelectorAll('#' + this.source);
    return [doc.getElementById(this.source)];
  };
  TCproto.HideTags = function() {
    var el = this.SourceElements(), i;
    for(i = 0; i < el.length; ++i)
      el[i].style.display = 'none';
  };
  TCproto.GetTags = function() {
    var el = this.SourceElements(), etl, tl = [], i, j, k;
    for(k = 0; k <= this.repeatTags; ++k) {
      for(i = 0; i < el.length; ++i) {
        etl = el[i].getElementsByTagName('a');
        for(j = 0; j < etl.length; ++j) {
          tl.push(etl[j]);
        }
      }
    }
    return tl;
  };
  TCproto.Message = function(text) {
    var tl = [], i, p, tc = text.split(''), a, t, x, z;
    for(i = 0; i < tc.length; ++i) {
      if(tc[i] != ' ') {
        p = i - tc.length / 2;
        a = doc.createElement('A');
        a.href = '#';
        a.innerText = tc[i];
        x = 100 * sin(p / 9);
        z = -100 * cos(p / 9);
        t = new Tag(this, tc[i], a, [x,0,z], 2, 18, '#000', '#fff', 0, 0, 0,
          'monospace', 2, tc[i]);
        t.Init();
        tl.push(t);
      }
    }
    return tl;
  };
  TCproto.AddAudio = function(e, t) {
    if(audio === 'off')
      return;
    var au = e.getElementsByTagName('audio');
    if(au.length) {
      t.SetAudio(au[0]);
      this.hasAudio = 1;
    }
  };
  TCproto.CreateTag = function(e) {
    var im, i, t, txt, ts, font, bc, boc, p = [0, 0, 0], au;
    if('text' != this.imageMode) {
      im = e.getElementsByTagName('img');
      if(im.length) {
        i = new Image;
        i.src = im[0].src;
  
        if(!this.imageMode) {
          t = new Tag(this, "", e, p, 0, 0);
          t.SetImage(i);
          //t.Init();
          AddImage(i, im[0], im[1], t, this);
          this.AddAudio(e, t);
          return t;
        }
      }
    }
    if('image' != this.imageMode) {
      ts = new TextSplitter(e);
      txt = ts.Lines();
      if(!ts.Empty()) {
        font = this.textFont || FixFont(GetProperty(e,'font-family'));
        if(this.splitWidth)
          txt = ts.SplitWidth(this.splitWidth, this.ctxt, font, this.textHeight);
  
        bc = this.bgColour == 'tag' ? GetProperty(e, 'background-color') :
          this.bgColour;
        boc = this.bgOutline == 'tag' ? GetProperty(e, 'color') : this.bgOutline;
      } else {
        ts = null;
      }
    }
    if(ts || i) {
      t = new Tag(this, txt, e, p, 2, this.textHeight + 2,
        this.textColour || GetProperty(e,'color'), bc, this.bgRadius,
        boc, this.bgOutlineThickness, font, this.padding, ts && ts.original);
      if(i) {
        t.SetImage(i);
        AddImage(i, im[0], im[1], t, this);
      } else {
        t.Init();
      }
      this.AddAudio(e, t);
      return t;
    }
  };
  TCproto.UpdateTag = function(t, a) {
    var colour = this.textColour || GetProperty(a, 'color'),
      font = this.textFont || FixFont(GetProperty(a, 'font-family')),
      bc = this.bgColour == 'tag' ? GetProperty(a, 'background-color') :
        this.bgColour, boc = this.bgOutline == 'tag' ? GetProperty(a, 'color') :
        this.bgOutline;
    t.a = a;
    t.title = a.title;
    if(t.colour != colour || t.textFont != font || t.bgColour != bc ||
      t.bgOutline != boc)
      t.SetFont(font, colour, bc, boc);
  };
  TCproto.Weight = function(tl) {
    var ll = tl.length, w, i, s, weights = [], valid,
      wfrom = this.weightFrom ? this.weightFrom.split(/[, ]/) : [null],
      wl = wfrom.length;
    for(i = 0; i < ll; ++i) {
      weights[i] = [];
      for(s = 0; s < wl; ++s) {
        w = FindWeight(tl[i].a, wfrom[s], this.textHeight);
        if(!this.max_weight[s] || w > this.max_weight[s])
          this.max_weight[s] = w;
        if(!this.min_weight[s] || w < this.min_weight[s])
          this.min_weight[s] = w;
        weights[i][s] = w;
      }
    }
    for(s = 0; s < wl; ++s) {
      if(this.max_weight[s] > this.min_weight[s])
        valid = 1;
    }
    if(valid) {
      for(i = 0; i < ll; ++i) {
        tl[i].SetWeight(weights[i]);
      }
    }
  };
  TCproto.Load = function() {
    var tl = this.GetTags(), taglist = [], shape, t,
      shapeArgs, rx, ry, rz, vl, i, tagmap = [], pfuncs = {
        sphere: PointsOnSphere,
        vcylinder: PointsOnCylinderV,
        hcylinder: PointsOnCylinderH,
        vring: PointsOnRingV,
        hring: PointsOnRingH
      };
  
    if(tl.length) {
      tagmap.length = tl.length;
      for(i = 0; i < tl.length; ++i)
        tagmap[i] = i;
      this.shuffleTags && Shuffle(tagmap);
      rx = 100 * this.radiusX;
      ry = 100 * this.radiusY;
      rz = 100 * this.radiusZ;
      this.max_radius = max(rx, max(ry, rz));
  
      for(i = 0; i < tl.length; ++i) {
        t = this.CreateTag(tl[tagmap[i]]);
        if(t)
          taglist.push(t);
      }
      this.weight && this.Weight(taglist, true);
    
      if(this.shapeArgs) {
        this.shapeArgs[0] = taglist.length;
      } else {
        shapeArgs = this.shape.toString().split(/[(),]/);
        shape = shapeArgs.shift();
        if(typeof window[shape] === 'function')
          this.shape = window[shape];
        else
          this.shape = pfuncs[shape] || pfuncs.sphere;
        this.shapeArgs = [taglist.length, rx, ry, rz].concat(shapeArgs);
      }
      vl = this.shape.apply(this, this.shapeArgs);
      this.listLength = taglist.length;
      for(i = 0; i < taglist.length; ++i)
        taglist[i].position = new Vector(vl[i][0], vl[i][1], vl[i][2]);
    }
    if(this.noTagsMessage && !taglist.length) {
      i = (this.imageMode && this.imageMode != 'both' ? this.imageMode + ' ': '');
      taglist = this.Message('No ' + i + 'tags');
    }
    this.taglist = taglist;
  };
  TCproto.Update = function() {
    var tl = this.GetTags(), newlist = [],
      taglist = this.taglist, found,
      added = [], removed = [], vl, ol, nl, i, j;
  
    if(!this.shapeArgs)
      return this.Load();
  
    if(tl.length) {
      nl = this.listLength = tl.length;
      ol = taglist.length;
  
      // copy existing list, populate "removed"
      for(i = 0; i < ol; ++i) {
        newlist.push(taglist[i]);
        removed.push(i);
      }
  
      // find added and removed tags
      for(i = 0; i < nl; ++i) {
        for(j = 0, found = 0; j < ol; ++j) {
          if(taglist[j].EqualTo(tl[i])) {
            this.UpdateTag(newlist[j], tl[i]);
            found = removed[j] = -1;
          }
        }
        if(!found)
          added.push(i);
      }
  
      // clean out found tags from removed list
      for(i = 0, j = 0; i < ol; ++i) {
        if(removed[j] == -1)
          removed.splice(j,1);
        else
          ++j;
      }
  
      // insert new tags in gaps where old tags removed
      if(removed.length) {
        Shuffle(removed);
        while(removed.length && added.length) {
          i = removed.shift();
          j = added.shift();
          newlist[i] = this.CreateTag(tl[j]);
        }
  
        // remove any more (in reverse order)
        removed.sort(function(a,b) {return a-b});
        while(removed.length) {
          newlist.splice(removed.pop(), 1);
        }
      }
  
      // add any extra tags
      j = newlist.length / (added.length + 1);
      i = 0;
      while(added.length) {
        newlist.splice(ceil(++i * j), 0, this.CreateTag(tl[added.shift()]));
      }
  
      // assign correct positions to tags
      this.shapeArgs[0] = nl = newlist.length;
      vl = this.shape.apply(this, this.shapeArgs);
      for(i = 0; i < nl; ++i)
        newlist[i].position = new Vector(vl[i][0], vl[i][1], vl[i][2]);
  
      // reweight tags
      this.weight && this.Weight(newlist);
    }
    this.taglist = newlist;
  };
  TCproto.SetShadow = function(c) {
    c.shadowBlur = this.shadowBlur;
    c.shadowOffsetX = this.shadowOffset[0];
    c.shadowOffsetY = this.shadowOffset[1];
  };
  TCproto.LoadAudio = function() {
    if(!audio && !SetupAudio())
      return;
    this.audio = doc.createElement('audio');
    this.audio.src = this.activeAudio;
    this.track = audio.createMediaElementSource(this.audio);
    this.gain = audio.createGain();
    this.track.connect(this.gain);
    this.gain.connect(audio.destination);
    this.hasAudio = 1;
    audioClick = function(e) {
      audio.resume();
      doc.removeEventListener('click', audioClick);
    };
    doc.addEventListener('click', audioClick);
  };
  TCproto.ShowAudioIcon = function() {
    var s = this.audioIconSize, cv = this.canvas, c = this.ctxt,
      x = cv.width - s - 3, y = cv.height - s - 3, t = this.audioIconThickness,
      c1 = '#000', c2 = '#fff', d = this.audioIconDark, muted = this.audioOff,
      sus = 'suspended';
    if(!audio)
      return;
    if(!muted)
      muted = (audio.state === sus);
  
    if(this.audioIcon && this.hasAudio) {
      AudioIcon(muted,c,s,x,y,t+1,d ? c2 : c1);
      AudioIcon(muted,c,s,x,y,t,d ? c1 : c2);
    }
  };
  TCproto.CheckAudioIcon = function() {
    var s = this.audioIconSize, cv = this.canvas, t = this.audioIconThickness / 2,
      x = cv.width - s - 3 - t, y = cv.height - s - 3 - t;
    if(this.audioIcon && this.mx >= x && this.my >= y)
      return true;
  };
  TCproto.ToggleAudio = function() {
    var on = this.audioOff || (audio && audio.state === 'suspended');
    on || this.currentAudio && this.currentAudio.StopAudio();
    this.audioOff = !on;
  };
  TCproto.Draw = function(t) {
    if(this.paused)
      return;
    var cv = this.canvas, cw = cv.width, ch = cv.height, max_sc = 0,
      tdelta = (t - this.time) * TagCanvas.interval / 1000,
      x = cw / 2 + this.offsetX, y = ch / 2 + this.offsetY, c = this.ctxt,
      active, a, i, aindex = -1, tl = this.taglist, l = tl.length,
      last = this.active && this.active.tag, cursor = '',
      frontsel = this.frontSelect, centreDrawn = (this.centreFunc == Nop), fixed;
    this.time = t;
    if(this.frozen && this.drawn)
      return this.Animate(cw,ch,tdelta);
    fixed = this.AnimateFixed();
    c.setTransform(1,0,0,1,0,0);
    for(i = 0; i < l; ++i)
      tl[i].Calc(this.transform, this.fixedAlpha);
    tl = SortList(tl, function(a,b) {return b.z-a.z});
    
    if(fixed && this.fixedAnim.active) {
      active = this.fixedAnim.tag.UpdateActive(c, x, y);
    } else {
      this.active = null;
      if(this.CheckAudioIcon()) {
        cursor = 'pointer';
      } else {
        for(i = 0; i < l; ++i) {
          a = this.mx >= 0 && this.my >= 0 && this.taglist[i].CheckActive(c, x, y);
          if(a && a.sc > max_sc && (!frontsel || a.z <= 0)) {
            active = a;
            aindex = i;
            active.tag = this.taglist[i];
            max_sc = a.sc;
          }
        }
        this.active = active;
      }
    }
  
    this.txtOpt || (this.shadow && this.SetShadow(c));
    c.clearRect(0,0,cw,ch);
    for(i = 0; i < l; ++i) {
      if(!centreDrawn && tl[i].z <= 0) {
        // run the centreFunc if the next tag is at the front
        try { this.centreFunc(c, cw, ch, x, y); }
        catch(e) {
          alert(e);
          // don't run it again
          this.centreFunc = Nop;
        }
        centreDrawn = true;
      }
  
      if(!(active && active.tag == tl[i] && active.PreDraw(c, tl[i], x, y)))
        tl[i].Draw(c, x, y);
      active && active.tag == tl[i] && active.PostDraw(c);
    }
    if(this.freezeActive && active) {
      this.Freeze();
    } else {
      this.UnFreeze();
      this.drawn = (l == this.listLength);
    }
    if(this.fixedCallback) {
      this.fixedCallback(this,this.fixedCallbackTag);
      this.fixedCallback = null;
    }
    fixed || this.Animate(cw, ch, tdelta);
    if(active) {
      active.LastDraw(c);
      if(active.tag != last) {
        this.currentAudio && this.currentAudio != active.tag && this.currentAudio.StopAudio();
        if(active.tag.PlayAudio())
          this.currentAudio = active.tag;
      }
      cursor = this.activeCursor;
    }
    cv.style.cursor = cursor;
    this.Tooltip(active,this.taglist[aindex]);
    this.audioIcon && this.ShowAudioIcon();
  };
  TCproto.TooltipNone = function() { };
  TCproto.TooltipNative = function(active,tag) {
    if(active)
      this.canvas.title = tag && tag.title ? tag.title : '';
    else
      this.canvas.title = this.ctitle;
  };
  TCproto.SetTTDiv = function(title, tag) {
    var tc = this, s = tc.ttdiv.style;
    if(title != tc.ttdiv.innerHTML)
      s.display = 'none';
    tc.ttdiv.innerHTML = title;
    tag && (tag.title = tc.ttdiv.innerHTML);
    if(s.display == 'none' && ! tc.tttimer) {
      tc.tttimer = setTimeout(function() {
        var p = AbsPos(tc.canvas.id);
        s.display = 'block';
        s.left = p.x + tc.mx + 'px';
        s.top = p.y + tc.my + 24 + 'px';
        tc.tttimer = null;
      }, tc.tooltipDelay);
    }
  };
  TCproto.TooltipDiv = function(active,tag) {
    if(active && tag && tag.title) {
      this.SetTTDiv(tag.title, tag);
    } else if(!active && this.mx != -1 && this.my != -1 && this.ctitle.length) {
      this.SetTTDiv(this.ctitle);
    } else {
      this.ttdiv.style.display = 'none';
    }
  };
  TCproto.Transform = function(tc, p, y) {
    if(p || y) {
      var sp = sin(p), cp = cos(p), sy = sin(y), cy = cos(y),
        ym = new Matrix([cy,0,sy, 0,1,0, -sy,0,cy]),
        pm = new Matrix([1,0,0, 0,cp,-sp, 0,sp,cp]);
      tc.transform = tc.transform.mul(ym.mul(pm));
    }
  };
  TCproto.AnimateFixed = function() {
    var fa, t1, angle, m, d;
    if(this.fadeIn) {
      t1 = TimeNow() - this.startTime;
      if(t1 >= this.fadeIn) {
        this.fadeIn = 0;
        this.fixedAlpha = 1;
      } else {
        this.fixedAlpha = t1 / this.fadeIn;
      }
    }
    if(this.fixedAnim) {
      if(!this.fixedAnim.transform)
        this.fixedAnim.transform = this.transform;
      fa = this.fixedAnim, t1 = TimeNow() - fa.t0, angle = fa.angle,
        m, d = this.animTiming(fa.t, t1);
      this.transform = fa.transform;
      if(t1 >= fa.t) {
        this.fixedCallbackTag = fa.tag;
        this.fixedCallback = fa.cb;
        this.fixedAnim = this.yaw = this.pitch = 0;
      } else {
        angle *= d;
      }
      m = Matrix.Rotation(angle, fa.axis);
      this.transform = this.transform.mul(m);
      return (this.fixedAnim != 0);
    }
    return false;
  };
  TCproto.AnimatePosition = function(w, h, t) {
    var tc = this, x = tc.mx, y = tc.my, s, r;
    if(!tc.frozen && x >= 0 && y >= 0 && x < w && y < h) {
      s = tc.maxSpeed, r = tc.reverse ? -1 : 1;
      tc.lx || (tc.yaw = ((x * 2 * s / w) - s) * r * t);
      tc.ly || (tc.pitch = ((y * 2 * s / h) - s) * -r * t);
      tc.initial = null;
    } else if(!tc.initial) {
      if(tc.frozen && !tc.freezeDecel)
        tc.yaw = tc.pitch = 0;
      else
        tc.Decel(tc);
    }
    this.Transform(tc, tc.pitch, tc.yaw);
  };
  TCproto.AnimateDrag = function(w, h, t) {
    var tc = this, rs = 100 * t * tc.maxSpeed / tc.max_radius / tc.zoom;
    if(tc.dx || tc.dy) {
      tc.lx || (tc.yaw = tc.dx * rs / tc.stretchX);
      tc.ly || (tc.pitch = tc.dy * -rs / tc.stretchY);
      tc.dx = tc.dy = 0;
      tc.initial = null;
    } else if(!tc.initial) {
      tc.Decel(tc);
    }
    this.Transform(tc, tc.pitch, tc.yaw);
  };
  TCproto.Freeze = function() {
    if(!this.frozen) {
      this.preFreeze = [this.yaw, this.pitch];
      this.frozen = 1;
      this.drawn = 0;
    }
  };
  TCproto.UnFreeze = function() {
    if(this.frozen) {
      this.yaw = this.preFreeze[0];
      this.pitch = this.preFreeze[1];
      this.frozen = 0;
    }
  };
  TCproto.Decel = function(tc) {
    var s = tc.minSpeed, ay = abs(tc.yaw), ap = abs(tc.pitch);
    if(!tc.lx && ay > s)
      tc.yaw = ay > tc.z0 ? tc.yaw * tc.decel : 0;
    if(!tc.ly && ap > s)
      tc.pitch = ap > tc.z0 ? tc.pitch * tc.decel : 0;
  };
  TCproto.Zoom = function(r) {
    this.z2 = this.z1 * (1/r);
    this.drawn = 0;
  };
  TCproto.Clicked = function(e) {
    if(this.CheckAudioIcon()) {
      this.ToggleAudio();
      return;
    }
    var a = this.active;
    try {
      if(a && a.tag)
        if(this.clickToFront === false || this.clickToFront === null)
          a.tag.Clicked(e);
        else
          this.TagToFront(a.tag, this.clickToFront, function() {
            a.tag.Clicked(e);
          }, true);
    } catch(ex) {
    }
  };
  TCproto.Wheel = function(i) {
    var z = this.zoom + this.zoomStep * (i ? 1 : -1);
    this.zoom = min(this.zoomMax,max(this.zoomMin,z));
    this.Zoom(this.zoom);
  };
  TCproto.BeginDrag = function(e) {
    this.down = EventXY(e, this.canvas);
    e.cancelBubble = true;
    e.returnValue = false;
    e.preventDefault && e.preventDefault();
  };
  TCproto.Drag = function(e, p) {
    if(this.dragControl && this.down) {
      var t2 = this.dragThreshold * this.dragThreshold,
        dx = p.x - this.down.x, dy = p.y - this.down.y;
      if(this.dragging || dx * dx + dy * dy > t2) {
        this.dx = dx;
        this.dy = dy;
        this.dragging = 1;
        this.down = p;
      }
    }
    return this.dragging;
  };
  TCproto.EndDrag = function() {
    var res = this.dragging;
    this.dragging = this.down = null;
    return res;
  };
  function PinchDistance(e) {
    var t1 = e.targetTouches[0], t2 = e.targetTouches[1];
    return sqrt(pow(t2.pageX - t1.pageX, 2) + pow(t2.pageY - t1.pageY, 2));
  }
  TCproto.BeginPinch = function(e) {
    this.pinched = [PinchDistance(e), this.zoom];
    e.preventDefault && e.preventDefault();
  };
  TCproto.Pinch = function(e) {
    var z, d, p = this.pinched;
    if(!p)
      return;
    d = PinchDistance(e);
    z = p[1] * d / p[0];
    this.zoom = min(this.zoomMax,max(this.zoomMin,z));
    this.Zoom(this.zoom);
  };
  TCproto.EndPinch = function(e) {
    this.pinched = null;
  };
  TCproto.Pause = function() { this.paused = true; };
  TCproto.Resume = function() { this.paused = false; };
  TCproto.SetSpeed = function(i) {
    this.initial = i;
    this.yaw = i[0] * this.maxSpeed;
    this.pitch = i[1] * this.maxSpeed;
  };
  TCproto.FindTag = function(t) {
    if(!Defined(t))
      return null;
    Defined(t.index) && (t = t.index);
    if(!IsObject(t))
      return this.taglist[t];
    var srch, tgt, i;
    if(Defined(t.id))
      srch = 'id', tgt = t.id;
    else if(Defined(t.text))
      srch = 'innerText', tgt = t.text;
  
    for(i = 0; i < this.taglist.length; ++i)
      if(this.taglist[i].a[srch] == tgt)
        return this.taglist[i];
  };
  TCproto.RotateTag = function(tag, lt, lg, time, callback, active) {
    var t = tag.Calc(this.transform, 1), v1 = new Vector(t.x, t.y, t.z),
      v2 = MakeVector(lg, lt), angle = v1.angle(v2), u = v1.cross(v2).unit();
    if(angle == 0) {
      this.fixedCallbackTag = tag;
      this.fixedCallback = callback;
    } else {
      this.fixedAnim = {
        angle: -angle,
        axis: u,
        t: time,
        t0: TimeNow(),
        cb: callback,
        tag: tag,
        active: active
      };
    }
  };
  TCproto.TagToFront = function(tag, time, callback, active) {
    this.RotateTag(tag, 0, 0, time, callback, active);
  };
  TCproto.Volume = function(vol) {
    this.audioVolume = vol * 1;
  };
  TagCanvas.Start = function(id,l,o) {
    TagCanvas.Delete(id);
    TagCanvas.tc[id] = new TagCanvas(id,l,o);
  };
  function tccall(f,id) {
    TagCanvas.tc[id] && TagCanvas.tc[id][f]();
  }
  TagCanvas.Linear = function(t, t0) { return t0 / t; }
  TagCanvas.Smooth = function(t, t0) { return 0.5 - cos(t0 * Math.PI / t) / 2; }
  TagCanvas.Pause = function(id) { tccall('Pause',id); };
  TagCanvas.Resume = function(id) { tccall('Resume',id); };
  TagCanvas.Reload = function(id) { tccall('Load',id); };
  TagCanvas.Update = function(id) { tccall('Update',id); };
  TagCanvas.SetSpeed = function(id, speed) {
    if(IsObject(speed) && TagCanvas.tc[id] &&
      !isNaN(speed[0]) && !isNaN(speed[1])) {
      TagCanvas.tc[id].SetSpeed(speed);
      return true;
    }
    return false;
  };
  TagCanvas.TagToFront = function(id, options) {
    if(!IsObject(options))
      return false;
    options.lat = options.lng = 0;
    return TagCanvas.RotateTag(id, options);
  };
  TagCanvas.RotateTag = function(id, options) {
    if(IsObject(options) && TagCanvas.tc[id]) {
      if(isNaN(options.time))
        options.time = 500;
      var tt = TagCanvas.tc[id].FindTag(options);
      if(tt) {
        TagCanvas.tc[id].RotateTag(tt, options.lat, options.lng,
          options.time, options.callback, options.active);
        return true;
      }
    }
    return false;
  };
  TagCanvas.Delete = function(id) {
    var i, c;
    if(handlers[id]) {
      c = doc.getElementById(id);
      if(c) {
        for(i = 0; i < handlers[id].length; ++i)
          RemoveHandler(handlers[id][i][0], handlers[id][i][1], c);
      }
    }
    delete handlers[id];
    delete TagCanvas.tc[id];
  };
  TagCanvas.tc = {};
  TagCanvas.options = {
  z1: 20000,
  z2: 20000,
  z0: 0.0002,
  freezeActive: false,
  freezeDecel: false,
  activeCursor: 'pointer',
  pulsateTo: 1,
  pulsateTime: 3,
  reverse: false,
  depth: 0.5,
  maxSpeed: 0.05,
  minSpeed: 0,
  decel: 0.95,
  interval: 20,
  minBrightness: 0.1,
  maxBrightness: 1,
  outlineColour: '#ffff99',
  outlineThickness: 2,
  outlineOffset: 5,
  outlineMethod: 'outline',
  outlineRadius: 0,
  textColour: '#ff99ff',
  textHeight: 15,
  textFont: 'Helvetica, Arial, sans-serif',
  shadow: '#000',
  shadowBlur: 0,
  shadowOffset: [0,0],
  initial: null,
  hideTags: true,
  zoom: 1,
  weight: false,
  weightMode: 'size',
  weightFrom: null,
  weightSize: 1,
  weightSizeMin: null,
  weightSizeMax: null,
  weightGradient: {0:'#f00', 0.33:'#ff0', 0.66:'#0f0', 1:'#00f'},
  txtOpt: true,
  txtScale: 2,
  frontSelect: false,
  wheelZoom: true,
  zoomMin: 0.3,
  zoomMax: 3,
  zoomStep: 0.05,
  shape: 'sphere',
  lock: null,
  tooltip: null,
  tooltipDelay: 300,
  tooltipClass: 'tctooltip',
  radiusX: 1,
  radiusY: 1,
  radiusZ: 1,
  stretchX: 1,
  stretchY: 1,
  offsetX: 0,
  offsetY: 0,
  shuffleTags: false,
  noSelect: false,
  noMouse: false,
  imageScale: 1,
  paused: false,
  dragControl: false,
  dragThreshold: 4,
  centreFunc: Nop,
  splitWidth: 0,
  animTiming: 'Smooth',
  clickToFront: false,
  fadeIn: 0,
  padding: 0,
  bgColour: null,
  bgRadius: 0,
  bgOutline: null,
  bgOutlineThickness: 0,
  outlineIncrease: 4,
  textAlign: 'centre',
  textVAlign: 'middle',
  imageMode: null,
  imagePosition: null,
  imagePadding: 2,
  imageAlign: 'centre',
  imageVAlign: 'middle',
  noTagsMessage: true,
  centreImage: null,
  pinchZoom: false,
  repeatTags: 0,
  minTags: 0,
  imageRadius: 0,
  scrollPause: false,
  outlineDash: 0,
  outlineDashSpace: 0,
  outlineDashSpeed: 1,
  activeAudio: '',
  audioVolume: 1,
  audioIcon: 1,
  audioIconSize: 20,
  audioIconThickness: 2,
  audioIconDark: 0,
  altImage: 0
  };
  for(i in TagCanvas.options) TagCanvas[i] = TagCanvas.options[i];
  window.TagCanvas = TagCanvas;
  jQuery.fn.tagcanvas = function(options, lctr) {
    var fn = {
      pause: function() {
        $(this).each(function() { tccall('Pause',$(this)[0].id); });
      },
      resume: function() {
        $(this).each(function() { tccall('Resume',$(this)[0].id); });
      },
      reload: function() {
        $(this).each(function() { tccall('Load',$(this)[0].id); });
      },
      update: function() {
        $(this).each(function() { tccall('Update',$(this)[0].id); });
      },
      tagtofront: function() {
        $(this).each(function() { TagCanvas.TagToFront($(this)[0].id, lctr); });
      },
      rotatetag: function() {
        $(this).each(function() { TagCanvas.RotateTag($(this)[0].id, lctr); });
      },
      'delete': function() {
        $(this).each(function() { TagCanvas.Delete($(this)[0].id); });
      },
      setspeed: function() {
        $(this).each(function() { TagCanvas.SetSpeed($(this)[0].id, lctr); });
      }
    };
    if(typeof options == 'string' && fn[options]) {
      fn[options].apply(this);
      return this;
    } else {
      TagCanvas.jquery = 1;
      $(this).each(function() { TagCanvas.Start($(this)[0].id, lctr, options); });
      return TagCanvas.started;
    }
  };
  
  // set a flag for when the window has loaded
  AddHandler('load',function(){TagCanvas.loaded=1},window);
  })(jQuery);
function setupTypewriter(t) {
    var HTML = t.innerHTML;
    t.innerHTML = "";
    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 50,
    tempTypeSpeed = 0;

    var type = function() {
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }
        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }
        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }
    };
    return {
        type: type
    };
}
$(document).ready(function () {

    // $('.filpCard').on("click", function(){
    //     $(this).toggleClass('flipped');
    // })

    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        // spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
        },
    });
    $(document).on('click', '.js-slideTo', function(){ 
        $('html, body').animate({ scrollTop: $('.infoBox').offset().top - 20}, 500);

        var _to = $(this).attr('data-slide');
        if(_to == 'slideToSelf') swiper.slideTo(0, 1000);
        if(_to == 'slideToEducation') swiper.slideTo(1, 1000);
        if(_to == 'slideToWork') swiper.slideTo(2, 1000);
        if(_to == 'slideToProject') swiper.slideTo(3, 1000);
    })

    

	var typer = document.getElementById('typewriter');
	typewriter = setupTypewriter(typewriter);
	setTimeout(function(){
        typewriter.type();
    }, 5500)


    // Skill
    $(document).on("click", "#skillCanvasContainer", function(){
        $.magnificPopup.close();
    })
    var initCanvasSize = function(){
        limitNum = 1;
        // if($(window).width()>540){ limitNum = 0.95; }

        canvasWidth = ($(window).width() > 800)? 800 : $(window).width()*limitNum;
        canvasHeight = ($(window).height() > 600)? 600 : $(window).height()*limitNum;
        $('#skillCanvas').attr('width', canvasWidth);
        $('#skillCanvas').attr('height', canvasHeight);
    }
    $(document).on('click', '.js-showSkill', function(){ 
        initCanvasSize();

        var weightSize = 1;
        if($(window).width()>540){ weightSize = 1.5; }

        $.magnificPopup.open({
            items: {
                src: '#skillCanvasContainer',
            },
            type: 'inline',
            mainClass: 'mfp-zoom-out',
            removalDelay: 200,
            showCloseBtn: false,
            fixedBgPos: true, 
            fixedContentPos: true, 
            callbacks: {
                open: function() {
                    $('#skillCanvas').tagcanvas({ 
                        initial:[.1,.01],
                        shape: "sphere",
                        textColour: '#fff', 
                        // outlineColour: '#fff', 
                        weight: true,
                        weightSize: weightSize,
                        noSelect: true,
                        reverse: true, 
                        depth: 0.6, 
                        maxSpeed: 0.1,
                    },'skillTags')
                },
            }
        });

    })

    var scene = $('#scene')[0];
    var parallaxInstance = new Parallax(scene);
    parallaxInstance.friction(0.1, 0.1);
});
//@prepros-prepend ../../bower_components/jquery/dist/jquery.min.js
//@prepros-prepend ../../bower_components/animejs/lib/anime.min.js;
//@prepros-prepend ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js;
//@prepros-prepend _jquery.tagcanvas.js;
//@prepros-prepend _typeWriter.js;

//@prepros-prepend ./_global.js
