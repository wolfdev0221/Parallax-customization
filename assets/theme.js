window.slate = window.slate || {};
window.theme = window.theme || {};
window.timber = window.timber || {};


/*================ Vendor ================*/
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=a.requestAnimationFrame||setTimeout,e=function(){var f,g,h,i,j=c.cfg,k={"data-bgset":1,"data-include":1,"data-poster":1,"data-bg":1,"data-script":1},l="(\\s|^)("+j.loadedClass,m=b.documentElement,n=function(a){d(function(){c.rC(a,j.loadedClass),j.unloadedClass&&c.rC(a,j.unloadedClass),c.aC(a,j.lazyClass)})},o=function(a){var b,c,d,e;for(b=0,c=a.length;c>b;b++)d=a[b],e=d.target,e.getAttribute(d.attributeName)&&("source"==e.localName&&e.parentNode&&(e=e.parentNode.querySelector("img")),e&&l.test(e.className)&&n(e))};j.unloadedClass&&(l+="|"+j.unloadedClass),l+="|"+j.loadingClass+")(\\s|$)",l=new RegExp(l),k[j.srcAttr]=1,k[j.srcsetAttr]=1,a.MutationObserver?(h=new MutationObserver(o),f=function(){i||(i=!0,h.observe(m,{subtree:!0,attributes:!0,attributeFilter:Object.keys(k)}))},g=function(){i&&(i=!1,h.disconnect())}):(m.addEventListener("DOMAttrModified",function(){var a,b=[],c=function(){o(b),b=[],a=!1};return function(d){i&&k[d.attrName]&&d.newValue&&(b.push({target:d.target,attributeName:d.attrName}),a||(setTimeout(c),a=!0))}}(),!0),f=function(){i=!0},g=function(){i=!1}),addEventListener("lazybeforeunveil",g,!0),addEventListener("lazybeforeunveil",f),addEventListener("lazybeforesizes",g,!0),addEventListener("lazybeforesizes",f),f(),removeEventListener("lazybeforeunveil",e)};addEventListener("lazybeforeunveil",e)}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+/g,e=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,g=/\(|\)|'/,h={contain:1,cover:1},i=function(a){var b=c.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},j=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!h[b]&&h[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},k=function(a,c,g){var h=b.createElement("picture"),i=c.getAttribute(lazySizesConfig.sizesAttr),j=c.getAttribute("data-ratio"),k=c.getAttribute("data-optimumx");c._lazybgset&&c._lazybgset.parentNode==c&&c.removeChild(c._lazybgset),Object.defineProperty(g,"_lazybgset",{value:c,writable:!0}),Object.defineProperty(c,"_lazybgset",{value:h,writable:!0}),a=a.replace(d," ").split(e),h.style.display="none",g.className=lazySizesConfig.lazyClass,1!=a.length||i||(i="auto"),a.forEach(function(a){var c=b.createElement("source");i&&"auto"!=i&&c.setAttribute("sizes",i),a.match(f)&&(c.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&c.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),h.appendChild(c)}),i&&(g.setAttribute(lazySizesConfig.sizesAttr,i),c.removeAttribute(lazySizesConfig.sizesAttr),c.removeAttribute("sizes")),k&&g.setAttribute("data-optimumx",k),j&&g.setAttribute("data-ratio",j),h.appendChild(g),c.appendChild(h)},l=function(a){if(a.target._lazybgset){var b=a.target,d=b._lazybgset,e=b.currentSrc||b.src;e&&(d.style.backgroundImage="url("+(g.test(e)?JSON.stringify(e):e)+")"),b._lazybgsetLoading&&(c.fire(d,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var d,e,f;!a.defaultPrevented&&(d=a.target.getAttribute("data-bgset"))&&(f=a.target,e=b.createElement("img"),e.alt="",e._lazybgsetLoading=!0,a.detail.firesLoad=!0,k(d,f,e),setTimeout(function(){c.loader.unveil(e),c.rAF(function(){c.fire(e,"_lazyloaded",{},!0,!0),e.complete&&l({target:e})})}))}),b.addEventListener("load",l,!0),a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c&&a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,d=j(b);h[d]&&(a.target._lazysizesParentFit=d,c.rAF(function(){a.target.setAttribute("data-parent-fit",d),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),b.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&a.detail.instance==c&&(a.detail.width=i(a.target._lazybgset))})}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(d){b(a.lazySizes,d),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c,d){"use strict";function e(a){var b=getComputedStyle(a,null)||{},c=b.fontFamily||"",d=c.match(j)||"",e=d&&c.match(k)||"";return e&&(e=e[1]),{fit:d&&d[1]||"",position:n[e]||e||"center"}}function f(a,b){var d,e=c.cfg,f=a.cloneNode(!1),g=f.style,h=function(){var b=a.currentSrc||a.src;b&&(g.backgroundImage="url("+(m.test(b)?JSON.stringify(b):b)+")",d||(d=!0,c.rC(f,e.loadingClass),c.aC(f,e.loadedClass)))};a._lazysizesParentFit=b.fit,a.addEventListener("load",function(){c.rAF(h)},!0),f.addEventListener("load",function(){var a=f.currentSrc||f.src;a&&a!=l&&(f.src=l,f.srcset="")}),c.rAF(function(){var d=a,i=a.parentNode;"PICTURE"==i.nodeName.toUpperCase()&&(d=i,i=i.parentNode),c.rC(f,e.loadedClass),c.rC(f,e.lazyClass),c.aC(f,e.loadingClass),c.aC(f,e.objectFitClass||"lazysizes-display-clone"),f.getAttribute(e.srcsetAttr)&&f.setAttribute(e.srcsetAttr,""),f.getAttribute(e.srcAttr)&&f.setAttribute(e.srcAttr,""),f.src=l,f.srcset="",g.backgroundRepeat="no-repeat",g.backgroundPosition=b.position,g.backgroundSize=b.fit,d.style.display="none",a.setAttribute("data-parent-fit",b.fit),a.setAttribute("data-parent-container","prev"),i.insertBefore(f,d),a._lazysizesParentFit&&delete a._lazysizesParentFit,a.complete&&h()})}var g=b.createElement("a").style,h="objectFit"in g,i=h&&"objectPosition"in g,j=/object-fit["']*\s*:\s*["']*(contain|cover)/,k=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,l="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",m=/\(|\)|'/,n={center:"center","50% 50%":"center"};if(!h||!i){var o=function(a){if(a.detail.instance==c){var b=a.target,d=e(b);!d.fit||h&&"center"==d.position||f(b,d)}};a.addEventListener("lazyunveilread",o,!0),d&&d.detail&&o(d)}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d,e=/^picture$/i,f=b.documentElement,g=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,c=function(b,c,d,e,f,g,h,i){a.push({c:c,u:d,w:1*("w"==i?h:e)})};return function(d){return a=[],d.replace(b,c),a}}(),h=function(){var a=function(a,b){return a.w-b.w},b=function(b,d){var e={srcset:b.getAttribute(c.cfg.srcsetAttr)||""},f=g(e.srcset);return Object.defineProperty(b,d,{value:e,writable:!0}),e.cands=f,e.index=0,e.dirty=!1,f[0]&&f[0].w?(f.sort(a),e.cSrcset=[f[e.index].c]):(e.cSrcset=e.srcset?[e.srcset]:[],e.cands=[]),e};return function(a,c){var d,f,g,h;if(!a[c]&&(h=a.parentNode||{},a[c]=b(a,c),a[c].isImg=!0,e.test(h.nodeName||"")))for(a[c].picture=!0,d=h.getElementsByTagName("source"),f=0,g=d.length;g>f;f++)b(d[f],c).isImg=!1;return a[c]}}(),i={_lazyOptimumx:function(){var a=function(a,b,c){var d,e,f;return a&&a.d?(f=c>.7?.6:.4,a.d>=c?!1:(e=Math.pow(a.d-f,1.6)||.1,.1>e?e=.1:e>3&&(e=3),d=a.d+(b-c)*e,c>d)):!0};return function(b,c,d){var e,f;for(e=0;e<b.cands.length;e++)if(f=b.cands[e],f.d=(f.w||1)/c,!(b.index>=e)){if(!(f.d<=d||a(b.cands[e-1],f.d,d)))break;b.cSrcset.push(f.c),b.index=e}}}()},j=function(){var a=function(a,b,c,d,e){var f,g=a[e];g&&(f=g.index,i[e](g,b,c),g.dirty&&f==g.index||(g.cSrcset.join(", "),a.setAttribute(d,g.cSrcset.join(", ")),g.dirty=!0))};return function(b,c,d,e,f){var g,h,i,j,k=b[f];if(k.width=c,k.picture&&(h=b.parentNode))for(g=h.getElementsByTagName("source"),j=0,i=g.length;i>j;j++)a(g[j],c,d,e,f);a(b,c,d,e,f)}}(),k=function(a){var b=a.getAttribute("data-optimumx")||a.getAttribute("data-maxdpr");return!b&&d.constrainPixelDensity&&(b="auto"),b&&(b="auto"==b?d.getOptimumX(a):parseFloat(b,10)),b},l=function(){c&&!c.getOptimumX&&(c.getX=k,c.pWS=g,f.removeEventListener("lazybeforeunveil",l))};f.addEventListener("lazybeforeunveil",l),setTimeout(l),d=c&&c.cfg||a.lazySizesConfig,d||(d={},a.lazySizesConfig=d),"function"!=typeof d.getOptimumX&&(d.getOptimumX=function(){var b=a.devicePixelRatio||1;return b>2.6?b*=.6:b>1.9?b*=.8:b-=.01,Math.min(Math.round(100*b)/100,2)}),a.devicePixelRatio&&addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,e,f,g,i=a.target,l=a.detail,m=l.dataAttr;a.defaultPrevented||!(b=k(i))||b>=devicePixelRatio||(!m||!i._lazyOptimumx||l.reloaded||d.unloadedClass&&c.hC(i,d.unloadedClass)||(i._lazyOptimumx=null),e=h(i,"_lazyOptimumx"),f=l.width,f&&(e.width||0)<f&&(g=m?c.cfg.srcsetAttr:"srcset",c.rAF(function(){j(i,f,b,g,"_lazyOptimumx")})))}})}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,e=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,f=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,g=/^picture$/i,h=function(a){return getComputedStyle(a,null)||{}},i={getParent:function(b,c){var d=b,e=b.parentNode;return c&&"prev"!=c||!e||!g.test(e.nodeName||"")||(e=e.parentNode),"self"!=c&&(d="prev"==c?b.previousElementSibling:c&&(e.closest||a.jQuery)?(e.closest?e.closest(c):jQuery(e).closest(c)[0])||e:e),d},getFit:function(a){var b,c,d=h(a),g=d.content||d.fontFamily,j={fit:a._lazysizesParentFit||a.getAttribute("data-parent-fit")};return!j.fit&&g&&(b=g.match(e))&&(j.fit=b[1]),j.fit?(c=a._lazysizesParentContainer||a.getAttribute("data-parent-container"),!c&&g&&(b=g.match(f))&&(c=b[1]),j.parent=i.getParent(a,c)):j.fit=d.objectFit,j},getImageRatio:function(b){var c,e,f,h,i=b.parentNode,j=i&&g.test(i.nodeName||"")?i.querySelectorAll("source, img"):[b];for(c=0;c<j.length;c++)if(b=j[c],e=b.getAttribute(lazySizesConfig.srcsetAttr)||b.getAttribute("srcset")||b.getAttribute("data-pfsrcset")||b.getAttribute("data-risrcset")||"",f=b._lsMedia||b.getAttribute("media"),f=lazySizesConfig.customMedia[b.getAttribute("data-media")||f]||f,e&&(!f||(a.matchMedia&&matchMedia(f)||{}).matches)){h=parseFloat(b.getAttribute("data-aspectratio")),!h&&e.match(d)&&(h="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1);break}return h},calculateSize:function(a,b){var c,d,e,f,g=this.getFit(a),h=g.fit,i=g.parent;return"width"==h||("contain"==h||"cover"==h)&&(e=this.getImageRatio(a))?(i?b=i.clientWidth:i=a,f=b,"width"==h?f=b:(d=i.clientHeight,d>40&&(c=b/d)&&("cover"==h&&e>c||"contain"==h&&c>e)&&(f=b*(e/c))),f):b}};c.parentFit=i,b.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented&&a.detail.instance==c){var b=a.target;a.detail.width=i.calculateSize(b,a.detail.width)}})}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes"),require("../fix-ios-sizes/fix-ios-sizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";var d,e=c&&c.cfg||a.lazySizesConfig,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,c=Array.prototype.forEach;return function(d){var e=b.createElement("img"),f=function(b){var c,d=b.getAttribute(lazySizesConfig.srcsetAttr);d&&(d.match(a)&&(c="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1,c&&b.setAttribute("data-aspectratio",c)),b.setAttribute(lazySizesConfig.srcsetAttr,d.replace(h,"")))},g=function(a){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&c.call(b.getElementsByTagName("source"),f),f(a.target)},i=function(){e.currentSrc&&b.removeEventListener("lazybeforeunveil",g)};d[1]&&(b.addEventListener("lazybeforeunveil",g),e.onload=i,e.onerror=i,e.srcset="data:,a 1w 1h",e.complete&&i())}}();if(e||(e={},a.lazySizesConfig=e),e.supportsType||(e.supportsType=function(a){return!a}),!a.picturefill&&!e.pf){if(a.HTMLPictureElement&&g)return b.msElementsFromPoint&&i(navigator.userAgent.match(/Edge\/(\d+)/)),void(e.pf=function(){});e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;e>c;c++)d(b.elements[c])},d=function(){var f=function(a,b){return a.w-b.w},i=/^\s*\d+\.*\d*px\s*$/,j=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},k=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),l=function(){l.init||(l.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;b>a;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},m=function(b,d){var f,g=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!g&&d&&(g=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==g||(f=k(g||""),d&&b.parentNode&&(f.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),f.isPicture&&a.matchMedia&&(c.aC(b,"lazymatchmedia"),l())),f._set=g,Object.defineProperty(b,"_lazypolyfill",{value:f,writable:!0}))},n=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.5,d)},o=function(b){return a.matchMedia?(o=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},p=function(a){var b,d,g,h,k,l,p;if(h=a,m(h,!0),k=h._lazypolyfill,k.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;g>d;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&o(b[d].getAttribute("media"))){h=b[d],m(h),k=h._lazypolyfill;break}return k.length>1?(p=h.getAttribute("sizes")||"",p=i.test(p)&&parseInt(p,10)||c.gW(a,a.parentNode),k.d=n(a),!k.src||!k.w||k.w<p?(k.w=p,l=j(k.sort(f)),k.src=l):l=k.src):l=k[0],l},q=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=p(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return q.parse=k,q}(),e.loadedClass&&e.loadingClass&&!function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}()}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!m.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(l.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(q.test(d))try{d=JSON.parse(d)}catch(f){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(p,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return k[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(s.setAttribute("href",a),a=s.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(p,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f={u:a.replace(n,e).replace(o,b.ratio?Math.round(d*b.ratio):""),w:d};c.push(f),c.srcset.push(f.c=f.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=g/f)}a=e(a,c),a.isPicture=c.isPicture,u&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var e=d(a,b);return j.modifyOptions.call(a,{target:a,details:e,detail:e}),c.fire(a,"lazyriasmodifyoptions",e),e}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}var i,j,k={string:1,number:1},l=/^\-*\+*\d+\.*\d*$/,m=/^picture$/i,n=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q=/^\[.*\]|\{.*\}$/,r=/^(?:auto|\d+(px)?)$/,s=b.createElement("a"),t=b.createElement("img"),u="srcset"in t&&!("sizes"in t),v=!!a.HTMLPictureElement&&!u;!function(){var b,d=function(){},e={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:d,widthmap:{},ratio:!1};i=c&&c.cfg||a.lazySizesConfig,i||(i={},a.lazySizesConfig=i),i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),j=i.rias,"widths"in j||(j.widths=[],function(a){for(var b,c=0;!b||3e3>b;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(b in e)b in j||(j[b]=e[b])}(),addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,d,e,k,l,m,o,p,q,s,t,u,x;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(q=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&r.test(q)){if(d=h(b),e=g(b,d),t=n.test(e.prefix)||n.test(e.postfix),e.isPicture&&(k=b.parentNode))for(l=k.getElementsByTagName("source"),m=0,o=l.length;o>m;m++)(t||n.test(p=h(l[m])))&&(f(p,e,l[m]),u=!0);t||n.test(d)?(f(d,e,b),u=!0):u&&(x=[],x.srcset=[],x.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:x,writable:!0})),u&&(v?b.removeAttribute(i.srcAttr):"auto"!=q&&(s={width:parseInt(q,10)},w({target:b,detail:s})))}}},!0);var w=function(){var d=function(a,b){return a.w-b.w},e=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},f=function(a,b){var d;return!a._lazyrias&&c.pWS&&(d=c.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:d,writable:!0}),b&&a.parentNode&&(d.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},g=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.4,d)},h=function(b,c){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;j>i;i++)if(f(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<c)&&(l.w=c,l.d=g(b),m=e(l.sort(d))),m},j=function(d){if(d.detail.instance==c){var e,g=d.target;return!u&&(a.respimage||a.picturefill||lazySizesConfig.pf)?void b.removeEventListener("lazybeforesizes",j):void(("_lazyrias"in g||d.detail.dataAttr&&f(g,!0))&&(e=h(g,d.detail.width),e&&e.u&&g._lazyrias.cur!=e.u&&(g._lazyrias.cur=e.u,e.cached=!0,c.rAF(function(){g.setAttribute(i.srcAttr,e.u),g.setAttribute("src",e.u)}))))}};return v?j=function(){}:addEventListener("lazybeforesizes",j),j}()});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=125,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&d.ricTimeout?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d&&m?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});
/**
 * @license
 * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
}function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
}return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
!r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
})){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
}function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
}),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);

 
/*
 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

/*!
* parallax.js v2.0.0 (http://pixelcog.github.io/parallax.js/)
* @copyright 2017 PixelCog, Inc.
* @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
*/
!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),s=o(0),a=i(s),f=o(2),l=i(f),d=function(){function t(e,o){function i(t,e,i){var r=parseInt(o[t]);isNaN(r)?o[t]!==e&&o[t]!==i&&(o.pos+=(o[t]="center")+" "):o.pos+=(o[t]=r)+"px "}r(this,t);var n=(0,a.default)(e);if(o.pos="",i("posX","left","right"),i("posY","top","bottom"),navigator.userAgent.match(o.excludeAgents))o.src&&!n.is("img")&&n.css("background",'url("'+o.src+'") '+o.pos+"/cover");else{o.scrollingSelector&&(t.scrollingElement=(0,a.default)(o.scrollingSelector)[0]),t.isSet||t.init(),t.iList.push(this);var s=(0,a.default)("<div>").addClass("parallax-mirror").css({visibility:"hidden",zIndex:o.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}).prependTo((0,a.default)(o.mirrorSelector)),f=n.find(o.sliderSelector);0===f.length?f=(0,a.default)("<img>").attr("src",o.src):(o.formerParent=f.parent(),o.formerStyles=f.prop("style")),f.addClass("parallax-slider").prependTo(s),f.children("img").add(f).on("load",function(){t.update(!0)}),this.$s=f,this.$m=s}this.$w=n,this.o=o,"function"==typeof o.afterSetup&&o.afterSetup(this)}return n(t,[{key:"refresh",value:function(){var e=this.$w,o=this.o;o.dH=t.dH,o.dW=t.dW;var i=o.scrollingElement;if(i&&i!==document&&(o.dH=i.scrollHeight,o.dW=i.scrollWidth),o){o.aspectRatio||function(t,e){var o=0,i=0,r=0,n=0;if(0===t.children().each(function(){var t=(0,a.default)(this),e=t.offset(),s=e.top+t.outerHeight(),f=e.left+t.outerWidth();o=e.top<o?e.top:o,r=e.left<r?e.left:r,i=s>i?s:i,n=f>n?f:n}).length)e.aspectRatio=t[0].naturalWidth/(t[0].naturalHeight||1);else{var s=t.offset(),f=i-Math.max(o,s.top),l=n-Math.max(r,s.left);e.aspectRatio=l/(f||1)}}(this.$s,o);var r=o.aspectRatio||1;o.boxWidth=e.outerWidth(),o.boxHeight=e.outerHeight()+2*o.bleed,o.boxOffsetTop=e.offset().top-o.bleed,o.boxOffsetLeft=e.offset().left,o.boxOffsetBottom=o.boxOffsetTop+o.boxHeight;var n=t.wH,s=t.dH,f=Math.min(o.boxOffsetTop,s-n),l=Math.max(o.boxOffsetTop+o.boxHeight-n,0),d=o.boxHeight+(f-l)*(1-o.speed)|0,u=(o.boxOffsetTop-f)*(1-o.speed)|0,p=void 0;o.boxWidth<d*r?(o.imageWidth=d*r|0,o.imageHeight=d,o.offsetBaseTop=u,p=o.imageWidth-o.boxWidth,"left"===o.posX?o.offsetLeft=0:"right"===o.posX?o.offsetLeft=-p:isNaN(o.posX)?o.offsetLeft=-p/2|0:o.offsetLeft=Math.max(o.posX,-p)):(o.imageWidth=o.boxWidth,o.imageHeight=o.boxWidth/r|0,o.offsetLeft=0,p=o.imageHeight-d,"top"===o.posY?o.offsetBaseTop=u:"bottom"===o.posY?o.offsetBaseTop=u-p:isNaN(o.posY)?o.offsetBaseTop=u-p/2|0:o.offsetBaseTop=u+Math.max(o.posY,-p)),"function"==typeof o.afterRefresh&&o.afterRefresh(this)}}},{key:"render",value:function(){var e=this.o,o=t.sT,i=t.sL,r=e.overScrollFix?t.overScroll:0,n=o+t.wH;e.boxOffsetBottom>o&&e.boxOffsetTop<=n?(e.visibility="visible",e.mirrorTop=e.boxOffsetTop-o,e.mirrorLeft=e.boxOffsetLeft-i,e.offsetTop=e.offsetBaseTop-e.mirrorTop*(1-e.speed)):e.visibility="hidden",this.$m.css({transform:"translate3d("+e.mirrorLeft+"px, "+(e.mirrorTop-r)+"px, 0px)",visibility:e.visibility,height:e.boxHeight,width:e.boxWidth}),this.$s.css({transform:"translate3d("+e.offsetLeft+"px, "+e.offsetTop+"px, 0px)",position:"absolute",height:e.imageHeight,width:e.imageWidth,maxWidth:"none"}),"function"==typeof e.afterRender&&e.afterRender(this)}},{key:"destroy",value:function(){if(this.$m&&this.$m.remove(),this.$s){for(var e=0;e<t.iList.length;e++)t.iList[e]===this&&t.iList.splice(e,1);this.o.formerParent&&(this.$s.prop("style",this.o.formerStyles),this.o.formerParent.append(this.$s))}0===t.iList.length&&((0,a.default)(window).off("scroll.px.parallax resize.px.parallax load.px.parallax"),t.isSet=!1),"function"==typeof this.o.afterDestroy&&this.o.afterDestroy(this)}}],[{key:"init",value:function(){function e(){t.wH=r.height(),t.wW=r.width(),t.dH=i[0].scrollHeight||i.height(),t.dW=i[0].scrollWidth||i.width()}function o(){var e=n.scrollTop(),o=t.dH-t.wH,i=t.dW-t.wW;t.sT=Math.max(0,Math.min(o,e)),t.sL=Math.max(0,Math.min(i,n.scrollLeft())),t.overScroll=Math.max(e-o,Math.min(e,0))}if(!t.isSet){var i=(0,a.default)(t.scrollingElement||document),r=(0,a.default)(window),n=(0,a.default)(t.scrollingElement||window);r.on("resize.px.parallax load.px.parallax",function(){e(),t.update(!0)}),e(),t.isSet=!0;var s=-1;!function e(){var i=n.scrollTop();s!==i&&(s=i,o(),t.update()),window.requestAnimationFrame(e)}()}}},{key:"update",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&a.default.each(t.iList,function(){this.refresh()}),a.default.each(t.iList,function(){this.render()})}}]),t}();d.DEFAULTS={src:null,speed:.2,bleed:0,zIndex:-100,posX:"center",posY:"center",overScrollFix:!1,excludeAgents:/(iPod|iPhone|iPad|Android)/,aspectRatio:null,sliderSelector:">.parallax-slider",mirrorSelector:"body",scrollingSelector:null,afterRefresh:null,afterRender:null,afterSetup:null,afterDestroy:null},d.AUTOINIT=!0,d.sT=0,d.sL=0,d.wH=0,d.wW=0,d.dH=1<<30,d.dW=1<<30,d.iList=[],d.isSet=!1,(0,a.default)(function(){d.AUTOINIT&&(0,a.default)("[data-parallax]").parallax()}),(0,l.default)("parallax",d)},function(t,e,o){"use strict";function i(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="__"+t,n=s.default.fn[t];s.default.fn[t]=function(t){return this.each(function(){var o=(0,s.default)(this),n=o.data(i);if(n||"destroy"===t)"function"==typeof n.configure&&n.configure(options);else{var a=s.default.extend({},e.DEFAULTS,o.data(),"object"===(void 0===t?"undefined":r(t))&&t);o.data(i,n=new e(this,a))}"string"==typeof t&&("destroy"===t?(n.destroy(),o.data(i,!1)):n[t]())})},o&&(s.default[t]=function(e){return(0,s.default)({})[t](e)}),s.default.fn[t].noConflict=function(){return s.default.fn[t]=n}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=i;var n=o(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n)}]);

/*!
handlebars v1.3.0
Copyright (C) 2011 by Yehuda Katz
MIT Licence
*/
var Handlebars=function(){var e=function(){"use strict";function t(e){this.string=e}var e;t.prototype.toString=function(){return""+this.string};e=t;return e}();var t=function(e){"use strict";function o(e){return r[e]||"&"}function u(e,t){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}function c(e){if(e instanceof n){return e.toString()}else if(!e&&e!==0){return""}e=""+e;if(!s.test(e)){return e}return e.replace(i,o)}function h(e){if(!e&&e!==0){return true}else if(l(e)&&e.length===0){return true}else{return false}}var t={};var n=e;var r={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var i=/[&<>"'`]/g;var s=/[&<>"'`]/;t.extend=u;var a=Object.prototype.toString;t.toString=a;var f=function(e){return typeof e==="function"};if(f(/x/)){f=function(e){return typeof e==="function"&&a.call(e)==="[object Function]"}}var f;t.isFunction=f;var l=Array.isArray||function(e){return e&&typeof e==="object"?a.call(e)==="[object Array]":false};t.isArray=l;t.escapeExpression=c;t.isEmpty=h;return t}(e);var n=function(){"use strict";function n(e,n){var r;if(n&&n.firstLine){r=n.firstLine;e+=" - "+r+":"+n.firstColumn}var i=Error.prototype.constructor.call(this,e);for(var s=0;s<t.length;s++){this[t[s]]=i[t[s]]}if(r){this.lineNumber=r;this.column=n.firstColumn}}var e;var t=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error;e=n;return e}();var r=function(e,t){"use strict";function h(e,t){this.helpers=e||{};this.partials=t||{};p(this)}function p(e){e.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new i("Missing helper: '"+e+"'")}});e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse||function(){},i=n.fn;if(f(t)){t=t.call(this)}if(t===true){return i(this)}else if(t===false||t==null){return r(this)}else if(a(t)){if(t.length>0){return e.helpers.each(t,n)}else{return r(this)}}else{return i(t)}});e.registerHelper("each",function(e,t){var n=t.fn,r=t.inverse;var i=0,s="",o;if(f(e)){e=e.call(this)}if(t.data){o=m(t.data)}if(e&&typeof e==="object"){if(a(e)){for(var u=e.length;i<u;i++){if(o){o.index=i;o.first=i===0;o.last=i===e.length-1}s=s+n(e[i],{data:o})}}else{for(var l in e){if(e.hasOwnProperty(l)){if(o){o.key=l;o.index=i;o.first=i===0}s=s+n(e[l],{data:o});i++}}}}if(i===0){s=r(this)}return s});e.registerHelper("if",function(e,t){if(f(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||r.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}});e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})});e.registerHelper("with",function(e,t){if(f(e)){e=e.call(this)}if(!r.isEmpty(e))return t.fn(e)});e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})}function v(e,t){d.log(e,t)}var n={};var r=e;var i=t;var s="1.3.0";n.VERSION=s;var o=4;n.COMPILER_REVISION=o;var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=u;var a=r.isArray,f=r.isFunction,l=r.toString,c="[object Object]";n.HandlebarsEnvironment=h;h.prototype={constructor:h,logger:d,log:v,registerHelper:function(e,t,n){if(l.call(e)===c){if(n||t){throw new i("Arg not supported with multiple helpers")}r.extend(this.helpers,e)}else{if(n){t.not=n}this.helpers[e]=t}},registerPartial:function(e,t){if(l.call(e)===c){r.extend(this.partials,e)}else{this.partials[e]=t}}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var n=d.methodMap[e];if(typeof console!=="undefined"&&console[n]){console[n].call(console,t)}}}};n.logger=d;n.log=v;var m=function(e){var t={};r.extend(t,e);return t};n.createFrame=m;return n}(t,n);var i=function(e,t,n){"use strict";function a(e){var t=e&&e[0]||1,n=o;if(t!==n){if(t<n){var r=u[n],i=u[t];throw new s("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else{throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function f(e,t){if(!t){throw new s("No environment passed to template")}var n=function(e,n,r,i,o,u){var a=t.VM.invokePartial.apply(this,arguments);if(a!=null){return a}if(t.compile){var f={helpers:i,partials:o,data:u};o[n]=t.compile(e,{data:u!==undefined},t);return o[n](r,f)}else{throw new s("The partial "+n+" could not be compiled when running in runtime-only mode")}};var r={escapeExpression:i.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e];if(n){r=c(e,t,n)}else if(!r){r=this.programs[e]=c(e,t)}return r},merge:function(e,t){var n=e||t;if(e&&t&&e!==t){n={};i.extend(n,t);i.extend(n,e)}return n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var s=i.partial?i:t,o,u;if(!i.partial){o=i.helpers;u=i.partials}var a=e.call(r,s,n,o,u,i.data);if(!i.partial){t.VM.checkRevision(r.compilerInfo)}return a}}function l(e,t,n){var r=Array.prototype.slice.call(arguments,3);var i=function(e,i){i=i||{};return t.apply(this,[e,i.data||n].concat(r))};i.program=e;i.depth=r.length;return i}function c(e,t,n){var r=function(e,r){r=r||{};return t(e,r.data||n)};r.program=e;r.depth=0;return r}function h(e,t,n,r,i,o){var u={partial:true,helpers:r,partials:i,data:o};if(e===undefined){throw new s("The partial "+t+" could not be found")}else if(e instanceof Function){return e(n,u)}}function p(){return""}var r={};var i=e;var s=t;var o=n.COMPILER_REVISION;var u=n.REVISION_CHANGES;r.checkRevision=a;r.template=f;r.programWithDepth=l;r.program=c;r.invokePartial=h;r.noop=p;return r}(t,n,r);var s=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n;var f=r;var l=i;var c=function(){var e=new o.HandlebarsEnvironment;f.extend(e,o);e.SafeString=u;e.Exception=a;e.Utils=f;e.VM=l;e.template=function(t){return l.template(t,e)};return e};var h=c();h.create=c;s=h;return s}(r,e,n,t,i);var o=function(e){"use strict";function r(e){e=e||{};this.firstLine=e.first_line;this.firstColumn=e.first_column;this.lastColumn=e.last_column;this.lastLine=e.last_line}var t;var n=e;var i={ProgramNode:function(e,t,n,s){var o,u;if(arguments.length===3){s=n;n=null}else if(arguments.length===2){s=t;t=null}r.call(this,s);this.type="program";this.statements=e;this.strip={};if(n){u=n[0];if(u){o={first_line:u.firstLine,last_line:u.lastLine,last_column:u.lastColumn,first_column:u.firstColumn};this.inverse=new i.ProgramNode(n,t,o)}else{this.inverse=new i.ProgramNode(n,t)}this.strip.right=t.left}else if(t){this.strip.left=t.right}},MustacheNode:function(e,t,n,s,o){r.call(this,o);this.type="mustache";this.strip=s;if(n!=null&&n.charAt){var u=n.charAt(3)||n.charAt(2);this.escaped=u!=="{"&&u!=="&"}else{this.escaped=!!n}if(e instanceof i.SexprNode){this.sexpr=e}else{this.sexpr=new i.SexprNode(e,t)}this.sexpr.isRoot=true;this.id=this.sexpr.id;this.params=this.sexpr.params;this.hash=this.sexpr.hash;this.eligibleHelper=this.sexpr.eligibleHelper;this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){r.call(this,n);this.type="sexpr";this.hash=t;var i=this.id=e[0];var s=this.params=e.slice(1);var o=this.eligibleHelper=i.isSimple;this.isHelper=o&&(s.length||t)},PartialNode:function(e,t,n,i){r.call(this,i);this.type="partial";this.partialName=e;this.context=t;this.strip=n},BlockNode:function(e,t,i,s,o){r.call(this,o);if(e.sexpr.id.original!==s.path.original){throw new n(e.sexpr.id.original+" doesn't match "+s.path.original,this)}this.type="block";this.mustache=e;this.program=t;this.inverse=i;this.strip={left:e.strip.left,right:s.strip.right};(t||i).strip.left=e.strip.right;(i||t).strip.right=s.strip.left;if(i&&!t){this.isInverse=true}},ContentNode:function(e,t){r.call(this,t);this.type="content";this.string=e},HashNode:function(e,t){r.call(this,t);this.type="hash";this.pairs=e},IdNode:function(e,t){r.call(this,t);this.type="ID";var i="",s=[],o=0;for(var u=0,a=e.length;u<a;u++){var f=e[u].part;i+=(e[u].separator||"")+f;if(f===".."||f==="."||f==="this"){if(s.length>0){throw new n("Invalid path: "+i,this)}else if(f===".."){o++}else{this.isScoped=true}}else{s.push(f)}}this.original=i;this.parts=s;this.string=s.join(".");this.depth=o;this.isSimple=e.length===1&&!this.isScoped&&o===0;this.stringModeValue=this.string},PartialNameNode:function(e,t){r.call(this,t);this.type="PARTIAL_NAME";this.name=e.original},DataNode:function(e,t){r.call(this,t);this.type="DATA";this.id=e},StringNode:function(e,t){r.call(this,t);this.type="STRING";this.original=this.string=this.stringModeValue=e},IntegerNode:function(e,t){r.call(this,t);this.type="INTEGER";this.original=this.integer=e;this.stringModeValue=Number(e)},BooleanNode:function(e,t){r.call(this,t);this.type="BOOLEAN";this.bool=e;this.stringModeValue=e==="true"},CommentNode:function(e,t){r.call(this,t);this.type="comment";this.comment=e}};t=i;return t}(n);var u=function(){"use strict";var e;var t=function(){function t(e,t){return{left:e.charAt(2)==="~",right:t.charAt(0)==="~"||t.charAt(1)==="~"}}function r(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(n,r,i,s,o,u,a){var f=u.length-1;switch(o){case 1:return new s.ProgramNode(u[f-1],this._$);break;case 2:return new s.ProgramNode([],this._$);break;case 3:this.$=new s.ProgramNode([],u[f-1],u[f],this._$);break;case 4:this.$=new s.ProgramNode(u[f-2],u[f-1],u[f],this._$);break;case 5:this.$=new s.ProgramNode(u[f-1],u[f],[],this._$);break;case 6:this.$=new s.ProgramNode(u[f],this._$);break;case 7:this.$=new s.ProgramNode([],this._$);break;case 8:this.$=new s.ProgramNode([],this._$);break;case 9:this.$=[u[f]];break;case 10:u[f-1].push(u[f]);this.$=u[f-1];break;case 11:this.$=new s.BlockNode(u[f-2],u[f-1].inverse,u[f-1],u[f],this._$);break;case 12:this.$=new s.BlockNode(u[f-2],u[f-1],u[f-1].inverse,u[f],this._$);break;case 13:this.$=u[f];break;case 14:this.$=u[f];break;case 15:this.$=new s.ContentNode(u[f],this._$);break;case 16:this.$=new s.CommentNode(u[f],this._$);break;case 17:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 18:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 19:this.$={path:u[f-1],strip:t(u[f-2],u[f])};break;case 20:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 21:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 22:this.$=new s.PartialNode(u[f-2],u[f-1],t(u[f-3],u[f]),this._$);break;case 23:this.$=t(u[f-1],u[f]);break;case 24:this.$=new s.SexprNode([u[f-2]].concat(u[f-1]),u[f],this._$);break;case 25:this.$=new s.SexprNode([u[f]],null,this._$);break;case 26:this.$=u[f];break;case 27:this.$=new s.StringNode(u[f],this._$);break;case 28:this.$=new s.IntegerNode(u[f],this._$);break;case 29:this.$=new s.BooleanNode(u[f],this._$);break;case 30:this.$=u[f];break;case 31:u[f-1].isHelper=true;this.$=u[f-1];break;case 32:this.$=new s.HashNode(u[f],this._$);break;case 33:this.$=[u[f-2],u[f]];break;case 34:this.$=new s.PartialNameNode(u[f],this._$);break;case 35:this.$=new s.PartialNameNode(new s.StringNode(u[f],this._$),this._$);break;case 36:this.$=new s.PartialNameNode(new s.IntegerNode(u[f],this._$));break;case 37:this.$=new s.DataNode(u[f],this._$);break;case 38:this.$=new s.IdNode(u[f],this._$);break;case 39:u[f-2].push({part:u[f],separator:u[f-1]});this.$=u[f-2];break;case 40:this.$=[{part:u[f]}];break;case 43:this.$=[];break;case 44:u[f-1].push(u[f]);break;case 47:this.$=[u[f]];break;case 48:u[f-1].push(u[f]);break}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(t,n){throw new Error(t)},parse:function(t){function v(e){r.length=r.length-2*e;i.length=i.length-e;s.length=s.length-e}function m(){var e;e=n.lexer.lex()||1;if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var p=this.lexer.yylloc;s.push(p);var d=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;var g,y,b,w,E,S,x={},T,N,C,k;while(true){b=r[r.length-1];if(this.defaultActions[b]){w=this.defaultActions[b]}else{if(g===null||typeof g=="undefined"){g=m()}w=o[b]&&o[b][g]}if(typeof w==="undefined"||!w.length||!w[0]){var L="";if(!l){k=[];for(T in o[b])if(this.terminals_[T]&&T>2){k.push("'"+this.terminals_[T]+"'")}if(this.lexer.showPosition){L="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{L="Parse error on line "+(a+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(L,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:p,expected:k})}}if(w[0]instanceof Array&&w.length>1){throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g)}switch(w[0]){case 1:r.push(g);i.push(this.lexer.yytext);s.push(this.lexer.yylloc);r.push(w[1]);g=null;if(!y){f=this.lexer.yyleng;u=this.lexer.yytext;a=this.lexer.yylineno;p=this.lexer.yylloc;if(l>0)l--}else{g=y;y=null}break;case 2:N=this.productions_[w[1]][1];x.$=i[i.length-N];x._$={first_line:s[s.length-(N||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(N||1)].first_column,last_column:s[s.length-1].last_column};if(d){x._$.range=[s[s.length-(N||1)].range[0],s[s.length-1].range[1]]}S=this.performAction.call(x,u,f,a,this.yy,w[1],i,s);if(typeof S!=="undefined"){return S}if(N){r=r.slice(0,-1*N*2);i=i.slice(0,-1*N);s=s.slice(0,-1*N)}r.push(this.productions_[w[1]][0]);i.push(x.$);s.push(x._$);C=o[r[r.length-2]][r[r.length-1]];r.push(C);break;case 3:return true}}return true}};var n=function(){var e={EOF:1,parseError:function(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e){this._input=e;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function(){var e=this._input[0];this.yytext+=e;this.yyleng++;this.offset++;this.match+=e;this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);if(t){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return e},unput:function(e){var t=e.length;var n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-t-1);this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(n.length-1)this.yylineno-=n.length-1;var i=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t};if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}return this},more:function(){this._more=true;return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput();var t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true;var e,t,n,r,i,s;if(!this._more){this.yytext="";this.match=""}var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n;r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/(?:\r\n?|\n).*/g);if(s)this.yylineno+=s.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length};this.yytext+=t[0];this.match+=t[0];this.matches=t;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(t[0].length);this.matched+=t[0];e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(e)return e;else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function(){var t=this.next();if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};e.options={};e.performAction=function(t,n,r,i){function s(e,t){return n.yytext=n.yytext.substr(e,n.yyleng-t)}var o=i;switch(r){case 0:if(n.yytext.slice(-2)==="\\\\"){s(0,1);this.begin("mu")}else if(n.yytext.slice(-1)==="\\"){s(0,1);this.begin("emu")}else{this.begin("mu")}if(n.yytext)return 14;break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:s(0,4);this.popState();return 15;break;case 4:return 35;break;case 5:return 36;break;case 6:return 25;break;case 7:return 16;break;case 8:return 20;break;case 9:return 19;break;case 10:return 19;break;case 11:return 23;break;case 12:return 22;break;case 13:this.popState();this.begin("com");break;case 14:s(3,5);this.popState();return 15;break;case 15:return 22;break;case 16:return 41;break;case 17:return 40;break;case 18:return 40;break;case 19:return 44;break;case 20:break;case 21:this.popState();return 24;break;case 22:this.popState();return 18;break;case 23:n.yytext=s(1,2).replace(/\\"/g,'"');return 32;break;case 24:n.yytext=s(1,2).replace(/\\'/g,"'");return 32;break;case 25:return 42;break;case 26:return 34;break;case 27:return 34;break;case 28:return 33;break;case 29:return 40;break;case 30:n.yytext=s(1,2);return 40;break;case 31:return"INVALID";break;case 32:return 5;break}};e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];e.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};return e}();e.lexer=n;r.prototype=e;e.Parser=r;return new r}();e=t;return e}();var a=function(e,t){"use strict";function s(e){if(e.constructor===i.ProgramNode){return e}r.yy=i;return r.parse(e)}var n={};var r=e;var i=t;n.parser=r;n.parse=s;return n}(u,o);var f=function(e){"use strict";function r(){}function i(e,t,r){if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i=r.parse(e);var s=(new r.Compiler).compile(i,t);return(new r.JavaScriptCompiler).compile(s,t)}function s(e,t,r){function s(){var n=r.parse(e);var i=(new r.Compiler).compile(n,t);var s=(new r.JavaScriptCompiler).compile(i,t,undefined,true);return r.template(s)}if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i;return function(e,t){if(!i){i=s()}return i.call(this,e,t)}}var t={};var n=e;t.Compiler=r;r.prototype={compiler:r,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE"){n.push("DECLARE "+t.name+"="+t.value)}else{r=[];for(var u=0;u<t.args.length;u++){i=t.args[u];if(typeof i==="string"){i='"'+i.replace("\n","\\n")+'"'}r.push(i)}n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t){return false}for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||r.args.length!==i.args.length){return false}for(var s=0;s<r.args.length;s++){if(r.args[s]!==i.args[s]){return false}}}t=this.children.length;if(e.children.length!==t){return false}for(n=0;n<t;n++){if(!this.children[n].equals(e.children[n])){return false}}return true},guid:0,compile:function(e,t){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(n){for(var r in n){this.options.knownHelpers[r]=n[r]}}return this.accept(e)},accept:function(e){var t=e.strip||{},n;if(t.left){this.opcode("strip")}n=this[e.type](e);if(t.right){this.opcode("strip")}return n},program:function(e){var t=e.statements;for(var n=0,r=t.length;n<r;n++){this.accept(t[n])}this.isSimple=r===1;this.depths.list=this.depths.list.sort(function(e,t){return e-t});return this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options);var n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial;this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2){continue}else{this.addDepth(r-1)}}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;if(n){n=this.compileProgram(n)}if(r){r=this.compileProgram(r)}var i=t.sexpr;var s=this.classifySexpr(i);if(s==="helper"){this.helperSexpr(i,n,r)}else if(s==="simple"){this.simpleSexpr(i);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("blockValue")}else{this.ambiguousSexpr(i,n,r);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("ambiguousBlockValue")}this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("pushHash");for(var i=0,s=t.length;i<s;i++){n=t[i];r=n[1];if(this.options.stringParams){if(r.depth){this.addDepth(r.depth)}this.opcode("getContext",r.depth||0);this.opcode("pushStringParam",r.stringModeValue,r.type);if(r.type==="sexpr"){this.sexpr(r)}}else{this.accept(r)}this.opcode("assignToHash",n[0])}this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=true;if(e.context){this.ID(e.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",t.name);this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr);if(e.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ambiguousSexpr:function(e,t,n){var r=e.id,i=r.parts[0],s=t!=null||n!=null;this.opcode("getContext",r.depth);this.opcode("pushProgram",t);this.opcode("pushProgram",n);this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.id;if(t.type==="DATA"){this.DATA(t)}else if(t.parts.length){this.ID(t)}else{this.addDepth(t.depth);this.opcode("getContext",t.depth);this.opcode("pushContext")}this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var i=this.setupFullMustacheParams(e,t,r),s=e.id.parts[0];if(this.options.knownHelpers[s]){this.opcode("invokeKnownHelper",i.length,s)}else if(this.options.knownHelpersOnly){throw new n("You specified knownHelpersOnly, but used the unknown helper "+s,e)}else{this.opcode("invokeHelper",i.length,s,e.isRoot)}},sexpr:function(e){var t=this.classifySexpr(e);if(t==="simple"){this.simpleSexpr(e)}else if(t==="helper"){this.helperSexpr(e)}else{this.ambiguousSexpr(e)}},ID:function(e){this.addDepth(e.depth);this.opcode("getContext",e.depth);var t=e.parts[0];if(!t){this.opcode("pushContext")}else{this.opcode("lookupOnContext",e.parts[0])}for(var n=1,r=e.parts.length;n<r;n++){this.opcode("lookup",e.parts[n])}},DATA:function(e){this.options.data=true;if(e.id.isScoped||e.id.depth){throw new n("Scoped data references are not supported: "+e.original,e)}this.opcode("lookupData");var t=e.id.parts;for(var r=0,i=t.length;r<i;r++){this.opcode("lookup",t[r])}},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(e===0){return}if(!this.depths[e]){this.depths[e]=true;this.depths.list.push(e)}},classifySexpr:function(e){var t=e.isHelper;var n=e.eligibleHelper;var r=this.options;if(n&&!t){var i=e.id.parts[0];if(r.knownHelpers[i]){t=true}else if(r.knownHelpersOnly){n=false}}if(t){return"helper"}else if(n){return"ambiguous"}else{return"simple"}},pushParams:function(e){var t=e.length,n;while(t--){n=e[t];if(this.options.stringParams){if(n.depth){this.addDepth(n.depth)}this.opcode("getContext",n.depth||0);this.opcode("pushStringParam",n.stringModeValue,n.type);if(n.type==="sexpr"){this.sexpr(n)}}else{this[n.type](n)}}},setupFullMustacheParams:function(e,t,n){var r=e.params;this.pushParams(r);this.opcode("pushProgram",t);this.opcode("pushProgram",n);if(e.hash){this.hash(e.hash)}else{this.opcode("emptyHash")}return r}};t.precompile=i;t.compile=s;return t}(n);var l=function(e,t){"use strict";function u(e){this.value=e}function a(){}var n;var r=e.COMPILER_REVISION;var i=e.REVISION_CHANGES;var s=e.log;var o=t;a.prototype={nameLookup:function(e,t){var n,r;if(e.indexOf("depth")===0){n=true}if(/^[0-9]+$/.test(t)){r=e+"["+t+"]"}else if(a.isValidJavaScriptVariableName(t)){r=e+"."+t}else{r=e+"['"+t+"']"}if(n){return"("+e+" && "+r+")"}else{return r}},compilerInfo:function(){var e=r,t=i[e];return"this.compilerInfo = ["+e+",'"+t+"'];\n"},appendToBuffer:function(e){if(this.environment.isSimple){return"return "+e+";"}else{return{appendToBuffer:true,content:e,toString:function(){return"buffer += "+e+";"}}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,r){this.environment=e;this.options=t||{};s("debug",this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!n;this.context=n||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.compileChildren(e,t);var i=e.opcodes,u;this.i=0;for(var a=i.length;this.i<a;this.i++){u=i[this.i];if(u.opcode==="DECLARE"){this[u.name]=u.value}else{this[u.opcode].apply(this,u.args)}if(u.opcode!==this.stripNext){this.stripNext=false}}this.pushSource("");if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new o("Compile completed with content left on stack")}return this.createFunctionContext(r)},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace;var n="helpers = this.merge(helpers, "+t+".helpers);";if(this.environment.usePartial){n=n+" partials = this.merge(partials, "+t+".partials);"}if(this.options.data){n=n+" data = data || {};"}e.push(n)}else{e.push("")}if(!this.environment.isSimple){e.push(", buffer = "+this.initializeBuffer())}else{e.push("")}this.lastContext=0;this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);if(t.length>0){this.source[1]=this.source[1]+", "+t.join(", ")}if(!this.isChild){for(var n in this.context.aliases){if(this.context.aliases.hasOwnProperty(n)){this.source[1]=this.source[1]+", "+n+"="+this.context.aliases[n]}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.pushSource("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var i=0,o=this.environment.depths.list.length;i<o;i++){r.push("depth"+this.environment.depths.list[i])}var u=this.mergeSource();if(!this.isChild){u=this.compilerInfo()+u}if(e){r.push(u);return Function.apply(this,r)}else{var a="function "+(this.name||"")+"("+r.join(",")+") {\n  "+u+"}";s("debug",a+"\n\n");return a}},mergeSource:function(){var e="",t;for(var n=0,r=this.source.length;n<r;n++){var i=this.source[n];if(i.appendToBuffer){if(t){t=t+"\n    + "+i.content}else{t=i.content}}else{if(t){e+="buffer += "+t+";\n  ";t=undefined}e+=i+"\n  "}}return e},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);this.replaceStack(function(t){e.splice(1,0,t);return"blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t);this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){if(this.pendingContent){e=this.pendingContent+e}if(this.stripNext){e=e.replace(/^\s+/,"")}this.pendingContent=e},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")}this.stripNext="strip"},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }");if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){if(this.lastContext!==e){this.lastContext=e}},lookupOnContext:function(e){this.push(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+".apply(depth0) : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(e,t){this.pushStackLiteral("depth"+this.lastContext);this.pushString(t);if(t!=="sexpr"){if(typeof e==="string"){this.pushString(e)}else{this.pushStackLiteral(e)}}},emptyHash:function(){this.pushStackLiteral("{}");if(this.options.stringParams){this.push("{}");this.push("{}")}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop();if(this.options.stringParams){this.push("{"+e.contexts.join(",")+"}");this.push("{"+e.types.join(",")+"}")}this.push("{\n    "+e.values.join(",\n    ")+"\n  }")},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.inlineStack.push(e);return e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){if(e!=null){this.pushStackLiteral(this.programExpression(e))}else{this.pushStackLiteral(null)}},invokeHelper:function(e,t,n){this.context.aliases.helperMissing="helpers.helperMissing";this.useRegister("helper");var r=this.lastHelper=this.setupHelper(e,t,true);var i=this.nameLookup("depth"+this.lastContext,t,"context");var s="helper = "+r.name+" || "+i;if(r.paramsInit){s+=","+r.paramsInit}this.push("("+s+",helper "+"? helper.call("+r.callParams+") "+": helperMissing.call("+r.helperMissingParams+"))");if(!n){this.flushInline()}},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.context.aliases.functionType='"function"';this.useRegister("helper");this.emptyHash();var n=this.setupHelper(0,e,t);var r=this.lastHelper=this.nameLookup("helpers",e,"helper");var i=this.nameLookup("depth"+this.lastContext,e,"context");var s=this.nextStack();if(n.paramsInit){this.pushSource(n.paramsInit)}this.pushSource("if (helper = "+r+") { "+s+" = helper.call("+n.callParams+"); }");this.pushSource("else { helper = "+i+"; "+s+" = typeof helper === functionType ? helper.call("+n.callParams+") : helper; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];if(this.options.data){t.push("data")}this.context.aliases.self="this";this.push("self.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,r;if(this.options.stringParams){r=this.popStack();n=this.popStack()}var i=this.hash;if(n){i.contexts.push("'"+e+"': "+n)}if(r){i.types.push("'"+e+"': "+r)}i.values.push("'"+e+"': ("+t+")")},compiler:a,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s];i=new this.compiler;var u=this.matchExistingProgram(r);if(u==null){this.context.programs.push("");u=this.context.programs.length;r.index=u;r.name="program"+u;this.context.programs[u]=i.compile(r,t,this.context);this.context.environments[u]=r}else{r.index=u;r.name="program"+u}}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e)){return t}}},programExpression:function(e){this.context.aliases.self="this";if(e==null){return"self.noop"}var t=this.environment.children[e],n=t.depths.list,r;var i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++){r=n[s];if(r===1){i.push("depth0")}else{i.push("depth"+(r-1))}}return(n.length===0?"self.program(":"self.programWithDepth(")+i.join(", ")+")"},register:function(e,t){this.useRegister(e);this.pushSource(e+" = "+t+";")},useRegister:function(e){if(!this.registers[e]){this.registers[e]=true;this.registers.list.push(e)}},pushStackLiteral:function(e){return this.push(new u(e))},pushSource:function(e){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));this.pendingContent=undefined}if(e){this.source.push(e)}},pushStack:function(e){this.flushInline();var t=this.incrStack();if(e){this.pushSource(t+" = "+e+";")}this.compileStack.push(t);return t},replaceStack:function(e){var t="",n=this.isInline(),r,i,s;if(n){var o=this.popStack(true);if(o instanceof u){r=o.value;s=true}else{i=!this.stackSlot;var a=!i?this.topStackName():this.incrStack();t="("+this.push(a)+" = "+o+"),";r=this.topStack()}}else{r=this.topStack()}var f=e.call(this,r);if(n){if(!s){this.popStack()}if(i){this.stackSlot--}this.push("("+t+f+")")}else{if(!/^stack/.test(r)){r=this.nextStack()}this.pushSource(r+" = ("+t+f+");")}return r},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof u){this.compileStack.push(r)}else{this.pushStack(r)}}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof u){return n.value}else{if(!t){if(!this.stackSlot){throw new o("Invalid stack pop")}this.stackSlot--}return n}},topStack:function(e){var t=this.isInline()?this.inlineStack:this.compileStack,n=t[t.length-1];if(!e&&n instanceof u){return n.value}else{return n}},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(e,t,n){var r=[],i=this.setupParams(e,r,n);var s=this.nameLookup("helpers",t,"helper");return{params:r,paramsInit:i,name:s,callParams:["depth0"].concat(r).join(", "),helperMissingParams:n&&["depth0",this.quotedString(t)].concat(r).join(", ")}},setupOptions:function(e,t){var n=[],r=[],i=[],s,o,u;n.push("hash:"+this.popStack());if(this.options.stringParams){n.push("hashTypes:"+this.popStack());n.push("hashContexts:"+this.popStack())}o=this.popStack();u=this.popStack();if(u||o){if(!u){this.context.aliases.self="this";u="self.noop"}if(!o){this.context.aliases.self="this";o="self.noop"}n.push("inverse:"+o);n.push("fn:"+u)}for(var a=0;a<e;a++){s=this.popStack();t.push(s);if(this.options.stringParams){i.push(this.popStack());r.push(this.popStack())}}if(this.options.stringParams){n.push("contexts:["+r.join(",")+"]");n.push("types:["+i.join(",")+"]")}if(this.options.data){n.push("data:data")}return n},setupParams:function(e,t,n){var r="{"+this.setupOptions(e,t).join(",")+"}";if(n){this.useRegister("options");t.push("options");return"options="+r}else{t.push(r);return""}}};var f=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield").split(" ");var l=a.RESERVED_WORDS={};for(var c=0,h=f.length;c<h;c++){l[f[c]]=true}a.isValidJavaScriptVariableName=function(e){if(!a.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)){return true}return false};n=a;return n}(r,n);var c=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n.parser;var f=n.parse;var l=r.Compiler;var c=r.compile;var h=r.precompile;var p=i;var d=o.create;var v=function(){var e=d();e.compile=function(t,n){return c(t,n,e)};e.precompile=function(t,n){return h(t,n,e)};e.AST=u;e.Compiler=l;e.JavaScriptCompiler=p;e.Parser=a;e.parse=f;return e};o=v();o.create=v;s=o;return s}(s,o,a,f,l);return c}();

/*!
* imagesLoaded PACKAGED v4.1.1
* JavaScript is all like "You images are done yet or what?"
* MIT License
*/
!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/*!
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.enquire=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){this.query=a,this.isUnconditional=b,this.handlers=[],this.mql=window.matchMedia(a);var c=this;this.listener=function(a){c.mql=a.currentTarget||a,c.assess()},this.mql.addListener(this.listener)}var e=a(3),f=a(4).each;d.prototype={constuctor:d,addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var b=this.handlers;f(b,function(c,d){if(c.equals(a))return c.destroy(),!b.splice(d,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){f(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";f(this.handlers,function(b){b[a]()})}},b.exports=d},{3:3,4:4}],2:[function(a,b,c){function d(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var e=a(1),f=a(4),g=f.each,h=f.isFunction,i=f.isArray;d.prototype={constructor:d,register:function(a,b,c){var d=this.queries,f=c&&this.browserIsIncapable;return d[a]||(d[a]=new e(a,f)),h(b)&&(b={match:b}),i(b)||(b=[b]),g(b,function(b){h(b)&&(b={match:b}),d[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},b.exports=d},{1:1,4:4}],3:[function(a,b,c){function d(a){this.options=a,!a.deferSetup&&this.setup()}d.prototype={constructor:d,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},b.exports=d},{}],4:[function(a,b,c){function d(a,b){var c=0,d=a.length;for(c;c<d&&b(a[c],c)!==!1;c++);}function e(a){return"[object Array]"===Object.prototype.toString.apply(a)}function f(a){return"function"==typeof a}b.exports={isFunction:f,isArray:e,each:d}},{}],5:[function(a,b,c){var d=a(2);b.exports=new d},{2:2}]},{},[5])(5)});

/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery throttle / debounce: Sometimes, less is more!
//
// *Version: 1.1, Last updated: 3/7/2010*
//
// Project Home - http://benalman.com/projects/jquery-throttle-debounce-plugin/
// GitHub       - http://github.com/cowboy/jquery-throttle-debounce/
// Source       - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.js
// (Minified)   - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.min.js (0.7kb)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// Throttle - http://benalman.com/code/projects/jquery-throttle-debounce/examples/throttle/
// Debounce - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - none, 1.3.2, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-throttle-debounce/unit/
//
// About: Release History
//
// 1.1 - (3/7/2010) Fixed a bug in <jQuery.throttle> where trailing callbacks
//       executed later than they should. Reworked a fair amount of internal
//       logic as well.
// 1.0 - (3/6/2010) Initial release as a stand-alone project. Migrated over
//       from jquery-misc repo v0.4 to jquery-throttle repo v1.0, added the
//       no_trailing throttle parameter and debounce functionality.
//
// Topic: Note for non-jQuery users
//
// jQuery isn't actually required for this plugin, because nothing internal
// uses any jQuery methods or properties. jQuery is just used as a namespace
// under which these methods can exist.
//
// Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
// when this plugin is loaded, the method described below will be created in
// the `Cowboy` namespace. Usage will be exactly the same, but instead of
// $.method() or jQuery.method(), you'll need to use Cowboy.method().

(function(window,undefined){
  '$:nomunge'; // Used by YUI compressor.

  // Since jQuery really isn't required for this plugin, use `jQuery` as the
  // namespace only if it already exists, otherwise use the `Cowboy` namespace,
  // creating it if necessary.
  var $ = window.jQuery || window.Cowboy || ( window.Cowboy = {} ),

    // Internal method reference.
    jq_throttle;

  // Method: jQuery.throttle
  //
  // Throttle execution of a function. Especially useful for rate limiting
  // execution of handlers on events like resize and scroll. If you want to
  // rate-limit execution of a function to a single time, see the
  // <jQuery.debounce> method.
  //
  // In this visualization, | is a throttled-function call and X is the actual
  // callback execution:
  //
  // > Throttled with `no_trailing` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X    X        X    X    X    X    X    X
  // >
  // > Throttled with `no_trailing` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X             X    X    X    X    X
  //
  // Usage:
  //
  // > var throttled = jQuery.throttle( delay, [ no_trailing, ] callback );
  // >
  // > jQuery('selector').bind( 'someevent', throttled );
  // > jQuery('selector').unbind( 'someevent', throttled );
  //
  // This also works in jQuery 1.4+:
  //
  // > jQuery('selector').bind( 'someevent', jQuery.throttle( delay, [ no_trailing, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  //
  // Arguments:
  //
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  no_trailing - (Boolean) Optional, defaults to false. If no_trailing is
  //    true, callback will only execute every `delay` milliseconds while the
  //    throttled-function is being called. If no_trailing is false or
  //    unspecified, callback will be executed one final time after the last
  //    throttled-function call. (After the throttled-function has not been
  //    called for `delay` milliseconds, the internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the throttled-function is executed.
  //
  // Returns:
  //
  //  (Function) A new, throttled, function.

  $.throttle = jq_throttle = function( delay, no_trailing, callback, debounce_mode ) {
    // After wrapper has stopped being called, this timeout ensures that
    // `callback` is executed at the proper times in `throttle` and `end`
    // debounce modes.
    var timeout_id,

      // Keep track of the last time `callback` was executed.
      last_exec = 0;

    // `no_trailing` defaults to falsy.
    if ( typeof no_trailing !== 'boolean' ) {
      debounce_mode = callback;
      callback = no_trailing;
      no_trailing = undefined;
    }

    // The `wrapper` function encapsulates all of the throttling / debouncing
    // functionality and when executed will limit the rate at which `callback`
    // is executed.
    function wrapper() {
      var that = this,
        elapsed = +new Date() - last_exec,
        args = arguments;

      // Execute `callback` and update the `last_exec` timestamp.
      function exec() {
        last_exec = +new Date();
        callback.apply( that, args );
      };

      // If `debounce_mode` is true (at_begin) this is used to clear the flag
      // to allow future `callback` executions.
      function clear() {
        timeout_id = undefined;
      };

      if ( debounce_mode && !timeout_id ) {
        // Since `wrapper` is being called for the first time and
        // `debounce_mode` is true (at_begin), execute `callback`.
        exec();
      }

      // Clear any existing timeout.
      timeout_id && clearTimeout( timeout_id );

      if ( debounce_mode === undefined && elapsed > delay ) {
        // In throttle mode, if `delay` time has been exceeded, execute
        // `callback`.
        exec();

      } else if ( no_trailing !== true ) {
        // In trailing throttle mode, since `delay` time has not been
        // exceeded, schedule `callback` to execute `delay` ms after most
        // recent execution.
        //
        // If `debounce_mode` is true (at_begin), schedule `clear` to execute
        // after `delay` ms.
        //
        // If `debounce_mode` is false (at end), schedule `callback` to
        // execute after `delay` ms.
        timeout_id = setTimeout( debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay );
      }
    };

    // Set the guid of `wrapper` function to the same of original callback, so
    // it can be removed in jQuery 1.4+ .unbind or .die by using the original
    // callback as a reference.
    if ( $.guid ) {
      wrapper.guid = callback.guid = callback.guid || $.guid++;
    }

    // Return the wrapper function.
    return wrapper;
  };

  // Method: jQuery.debounce
  //
  // Debounce execution of a function. Debouncing, unlike throttling,
  // guarantees that a function is only executed a single time, either at the
  // very beginning of a series of calls, or at the very end. If you want to
  // simply rate-limit execution of a function, see the <jQuery.throttle>
  // method.
  //
  // In this visualization, | is a debounced-function call and X is the actual
  // callback execution:
  //
  // > Debounced with `at_begin` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // >                          X                                 X
  // >
  // > Debounced with `at_begin` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X                                 X
  //
  // Usage:
  //
  // > var debounced = jQuery.debounce( delay, [ at_begin, ] callback );
  // >
  // > jQuery('selector').bind( 'someevent', debounced );
  // > jQuery('selector').unbind( 'someevent', debounced );
  //
  // This also works in jQuery 1.4+:
  //
  // > jQuery('selector').bind( 'someevent', jQuery.debounce( delay, [ at_begin, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  //
  // Arguments:
  //
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  at_begin - (Boolean) Optional, defaults to false. If at_begin is false or
  //    unspecified, callback will only be executed `delay` milliseconds after
  //    the last debounced-function call. If at_begin is true, callback will be
  //    executed only at the first debounced-function call. (After the
  //    throttled-function has not been called for `delay` milliseconds, the
  //    internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the debounced-function is executed.
  //
  // Returns:
  //
  //  (Function) A new, debounced, function.

  $.debounce = function( delay, at_begin, callback ) {
    return callback === undefined
      ? jq_throttle( delay, at_begin, false )
      : jq_throttle( delay, callback, at_begin !== false );
  };

})(this);

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map


/*================ Slate ================*/
/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {

  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element.first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element.first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on('click', function(evt) {
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/**
 * Cart Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Cart template.
 *
 * @namespace cart
 */

slate.cart = {
  
  /**
   * Browser cookies are required to use the cart. This function checks if
   * cookies are enabled in the browser.
   */
  cookiesEnabled: function() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled){
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
    }
    return cookieEnabled;
  }
};

/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {

  /**
   * Return an object from an array of objects that matches the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  findInstance: function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  },

  /**
   * Remove an object from an array of objects by matching the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  removeInstance: function(array, key, value) {
    var i = array.length;
    while(i--) {
      if (array[i][key] === value) {
        array.splice(i, 1);
        break;
      }
    }

    return array;
  },

  /**
   * _.compact from lodash
   * Remove empty/false items from array
   * Source: https://github.com/lodash/lodash/blob/master/compact.js
   *
   * @param {array} array
   */
  compact: function(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  },

  /**
   * _.defaultTo from lodash
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
   *
   * @param {*} value - Value to check
   * @param {*} defaultValue - Default value
   * @returns {*} - Returns the resolved value
   */
  defaultTo: function(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value
  }
};

/**
 * Rich Text Editor
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace rte
 */

slate.rte = {

  wrapTable: function() {
    $('.rte table').wrap('<div class="rte__table-wrapper"></div>');
  },

  iframeReset: function() {
    var $iframeVideo = $('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]');
    var $iframeReset = $iframeVideo.add('.rte iframe#admin_bar_iframe');

    $iframeVideo.each(function() {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="rte__video-wrapper"></div>');
    });

    $iframeReset.each(function() {
      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};

slate.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:section:reorder', this._onReorder.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = $.extend(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (!instance) {
      return;
    }

    if (typeof instance.onUnload === 'function') {
      instance.onUnload(evt);
    }

    this.instances = slate.utils.removeInstance(this.instances, 'id', evt.detail.sectionId);
  },

  _onSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onSelect === 'function') {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onDeselect === 'function') {
      instance.onDeselect(evt);
    }
  },

  _onReorder: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onReorder === 'function') {
      instance.onReorder(evt);
    }
  },

  _onBlockSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockSelect === 'function') {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockDeselect === 'function') {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

slate.Currency = (function() {
  var moneyFormat = '${{amount}}';

  /**
   * Format money values based on your shop currency settings
   * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
   * or 3.00 dollars
   * @param  {String} format - shop money_format setting
   * @return {String} value - formatted value
   */
  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = slate.utils.defaultTo(precision, 2);
      thousands = slate.utils.defaultTo(thousands, ',');
      decimal = slate.utils.defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

slate.Image = (function() {

  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  /**
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {

  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = $.extend({}, Variants.prototype, {

    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');

          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = slate.utils.compact(currentOptions);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = false;

      variants.forEach(function(variant) {
        var satisfied = true;

        selectedValues.forEach(function(option) {
          if (satisfied) {
            satisfied = (option.value === variant[option.index]);
          }
        });

        if (satisfied) {
          found = variant;
        }
      });

      return found || null;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container)[0].value = variant.id;
    }
  });

  return Variants;
})();


/*================ Shopify ================*/
timber.cacheSelectors = function () {
  timber.cache = {
    // General
    $html                    : $('html'),
    $body                    : $('body'),

    // Navigation
    $navigation              : $('.accessibleNav'),

    // Collection Pages
    $changeView              : $('.change-view'),
    $collectionFilters       : $('#collectionFilters'),
    $toggleFilterBtn         : $('#toggleFilters'),

    // Customer Pages
    $recoverPasswordLink     : $('#RecoverPassword'),
    $hideRecoverPasswordLink : $('#HideRecoverPasswordLink'),
    $recoverPasswordForm     : $('#RecoverPasswordForm'),
    $customerLoginForm       : $('#CustomerLoginForm'),
    $passwordResetSuccess    : $('#ResetSuccess')
  }
};

timber.init = function () {
  timber.cacheSelectors();
  timber.accessibleNav();
  timber.toggleFilters();
  timber.collectionViews();
  timber.loginForms();
  timber.preloadHover();
};


timber.accessibleNav = function () {
  var $nav = timber.cache.$navigation,
      $allLinks = $nav.find('a'),
      $topLevel = $nav.children('li').find('a'),
      $parents = $nav.find('.site-nav--has-dropdown'),
      $subMenuLinks = $nav.find('.site-nav__dropdown').find('a'),
      activeClass = 'nav-hover',
      focusClass = 'nav-focus';

  // Mouseenter
  $parents.on('mouseenter touchstart', function(evt) {
    var $el = $(this);

    if (!$el.hasClass(activeClass)) {
      evt.preventDefault();
    }

    showDropdown($el);
  });

  // Mouseout
  $parents.on('mouseleave', function() {
    hideDropdown($(this));
  });

  $subMenuLinks.on('touchstart', function(evt) {
    // Prevent touchstart on body from firing instead of link
    evt.stopImmediatePropagation();
  });

  $allLinks.focus(function() {
    handleFocus($(this));
  });

  $allLinks.blur(function() {
    removeFocus($topLevel);
  });

  // accessibleNav private methods
  function handleFocus ($el) {
    var $subMenu = $el.next('ul'),
        hasSubMenu = $subMenu.hasClass('sub-nav') ? true : false,
        isSubItem = $('.site-nav__dropdown').has($el).length,
        $newFocus = null;

    // Add focus class for top level items, or keep menu shown
    if (!isSubItem) {
      removeFocus($topLevel);
      addFocus($el);
    } else {
      $newFocus = $el.closest('.site-nav--has-dropdown').find('a');
      addFocus($newFocus);
    }
  }

  function showDropdown ($el) {
    $el.addClass(activeClass);

    setTimeout(function() {
      timber.cache.$body.on('touchstart', function() {
        hideDropdown($el);
      });
    }, 250);
  }

  function hideDropdown ($el) {
    $el.removeClass(activeClass);
    timber.cache.$body.off('touchstart');
  }

  function addFocus ($el) {
    $el.addClass(focusClass);
  }

  function removeFocus ($el) {
    $el.removeClass(focusClass);
  }
};

timber.getHash = function () {
  return window.location.hash;
};

timber.updateHash = function (hash) {
  window.location.hash = '#' + hash;
  $('#' + hash).attr('tabindex', -1).focus();
};

timber.switchZoom = function (src, imgObject, el) {
  // Make sure element is a jquery object
  var $el = $(el);
  $el.attr('data-zoom-image', src);
};

timber.toggleFilters = function () {
  if ( timber.cache.$collectionFilters.length ) {
    timber.cache.$toggleFilterBtn.on('click', function() {
      timber.cache.$toggleFilterBtn.toggleClass('is-active');
      timber.cache.$collectionFilters.slideToggle(200);
    });
  };
  var mediaQuerySmall = 'screen and (max-width: 768px)';
  enquire.register(mediaQuerySmall, {
    match: function() {
      timber.cache.$collectionFilters.hide();
    },
    unmatch: function() {
      timber.cache.$collectionFilters.show();
    }
  });

  $('.collection-nav--grouped').each(function(){
    var visibleChildren = $(this).children().filter('.link--add, .link--remove');
    if ( visibleChildren.length == 0 ){
      $(this).hide();
      $(this).prev( '.sidebar__heading' ).hide();
    }
  });

  $('#toggleFilters--desktop').on('click', function() {
    if ( $('[data-sidebar-toggle]').hasClass('sidebar--hidden') ){
      $( '.collection-content' ).css('width', '');
      setTimeout(function() {
        $('[data-sidebar-toggle]').removeClass('sidebar--hidden--load');
        $( '.collection-filters' ).fadeIn(300);
      }, 500);

    }else{
      $( '.collection-filters' ).fadeOut(300);
      setTimeout(function() {
        $( '.collection-content' ).css('width', '100%');
      }, 500);
    }
    $('[data-sidebar-toggle]').toggleClass('sidebar--hidden');
  });
}

timber.preloadHover = function () {
  $('.supports-no-touch .collection__image__bottom').addClass('lazypreload');
};

// Helper function
function replaceUrlParam(url, paramName, paramValue) {
 var pattern = new RegExp('('+paramName+'=).*?(&|$)'),
     newUrl = url;
 if (url.search(pattern) >= 0) {
   newUrl = url.replace(pattern,'$1' + paramValue + '$2');
 } else {
   newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
 }
 return newUrl;
}

timber.collectionViews = function () {
  if (timber.cache.$changeView.length) {
    timber.cache.$changeView.on('click', function() {
      var view = $(this).data('view'),
          url = document.URL,
          hasParams = url.indexOf('?') > -1;

      if (hasParams) {
        window.location = replaceUrlParam(url, 'view', view);
      } else {
        window.location = url + '?view=' + view;
      }
    });
  }
};

timber.loginForms = function() {
  function showRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.show();
    timber.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.hide();
    timber.cache.$customerLoginForm.show();
  }

  timber.cache.$recoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });

  timber.cache.$hideRecoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  });

  // Allow deep linking to recover password form
  if (timber.getHash() == '#recover') {
    showRecoverPasswordForm();
  }
};

timber.resetPasswordSuccess = function() {
  timber.cache.$passwordResetSuccess.show();
};

// Initialize Timber's JS on docready
$(timber.init);

window.isYoutubeAPILoaded = false;
function loadYouTubeLibrary() {
  if (window.isYoutubeAPILoaded) {
    return;
  } else {
    // Load Youtube API script
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}
function onYouTubeIframeAPIReady() {
  window.isYoutubeAPILoaded = true;
  $('body').trigger('youtubeAPIReady');
}

window.isPlyrLoaded = false;
function loadPlyr() {
  if (window.isPlyrLoaded) {
    return;
  } else {
    // Load Youtube API script
    try {
      window.Shopify.loadFeatures([{
          name: 'video-ui',
          version: '1.0',
					onLoad: handleShopifyXRLoadError
        }],
        plyrLoaded);
    } catch (error) {
      console.log('An error occured while loading the Shopify Video interface');
      throw error;
    }
  }
}
function plyrLoaded() {
  window.isPlyrLoaded = true;
  $('body').trigger('plyrReady');
}

function handleShopifyXRLoadError(error) {
  if (error) {
    throw error;
  }
}


theme.TouchDetect = (function() {
  var touchDevice = false;

  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch
  };
})();

/**
 * Media
 * ------------------------------------------------------------------------------
 * This object powers both the product templates and the quick-view
 *
 * @namespace Media
 */
theme.mediaInstances = {};
theme.Media = (function() {
  var selectors = {
    productSlideshow: '[data-product-slideshow]',
    productThumbs: '[data-product-thumbs]',
    productImage: '[data-product-image]',
    videoPlayer: '[data-video]',
    modelViewer: '[data-model]',
    zoomWrapper: '[data-zoom-wrapper]'
  };

  var thumbIcons = {
  'model': '<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-media-model" viewBox="0 0 26 26"><path d="M1 25h24V1H1z"/><path class="icon-media-model-outline" d="M.5 25v.5h25V.5H.5z" fill="none"/><path class="icon-media-model-element" d="M19.13 8.28L14 5.32a2 2 0 0 0-2 0l-5.12 3a2 2 0 0 0-1 1.76V16a2 2 0 0 0 1 1.76l5.12 3a2 2 0 0 0 2 0l5.12-3a2 2 0 0 0 1-1.76v-6a2 2 0 0 0-.99-1.72zm-6.4 11.1l-5.12-3a.53.53 0 0 1-.26-.38v-6a.53.53 0 0 1 .27-.46l5.12-3a.53.53 0 0 1 .53 0l5.12 3-4.72 2.68a1.33 1.33 0 0 0-.67 1.2v6a.53.53 0 0 1-.26 0z" opacity=".6" style="isolation:isolate"/></svg>',
  'video': '<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-media-video" viewBox="0 0 26 26"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 25h24V1H1v24z"/><path class="icon-media-video-outline" d="M.5 25v.5h25V.5H.5V25z"/><path class="icon-media-video-element" fill-rule="evenodd" clip-rule="evenodd" d="M9.718 6.72a1 1 0 0 0-1.518.855v10.736a1 1 0 0 0 1.562.827l8.35-5.677a1 1 0 0 0-.044-1.682l-8.35-5.06z" opacity=".6"/></svg>',
  'external_video': '<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-media-video" viewBox="0 0 26 26"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 25h24V1H1v24z"/><path class="icon-media-video-outline" d="M.5 25v.5h25V.5H.5V25z"/><path class="icon-media-video-element" fill-rule="evenodd" clip-rule="evenodd" d="M9.718 6.72a1 1 0 0 0-1.518.855v10.736a1 1 0 0 0 1.562.827l8.35-5.677a1 1 0 0 0-.044-1.682l-8.35-5.06z" opacity=".6"/></svg>'
  };

  function Media(container) {
    this.container = container;
    this.$container = $(container);
    this.id = this.$container.attr('data-section-id');
    this.tallLayout = this.$container.data('tall-layout');
    this.players = {};
    this.selectors = selectors;
  }

  Media.prototype = $.extend({}, Media.prototype, {
    init: function() {
      this.detectVideo();
      this.detect3d();
      this.launch3d();
      this.initZoom();
      this.createSlider();
    },
    createSlider: function() {
      var instance = this;
      $(selectors.productSlideshow, this.$container)
        .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          var $currentMedia = $(slick.$slides[currentSlide]),
              $newMedia = $(slick.$slides[nextSlide]);
          $currentMedia.trigger( 'mediaHidden' );
          $newMedia.removeClass( 'media--hidden' );
        })
        .on('afterChange', function(event, slick, currentSlide) {
          var $currentMedia = $(slick.$slides[currentSlide]),
              $otherMedia = $currentMedia.siblings(),
              mediaType = $(slick.$slides[currentSlide]).attr('data-type'),
              isFocusEnabled = $( 'body' ).hasClass( 'focus-enabled' ) ;

          $otherMedia.addClass( 'media--hidden' );
          $currentMedia.trigger( 'mediaVisible' );
          // disable swipe on 3d models and videos
          if (mediaType === 'model' || mediaType === 'video' || mediaType === 'external_video') {
            // fisrt boolean sets value, second option false to prevent refresh
            slick.slickSetOption('swipe', false, false);
          } else {
            slick.slickSetOption('swipe', true, false);
          }

          setTimeout(function() {
            $('.slick-dots li').attr('aria-hidden', false);
          }, 100);

          if ( isFocusEnabled ) {
            $currentMedia.focus();
          }
        });

      // if the first element is a model or video, disable swipe
      $(selectors.productSlideshow, this.$container)
        .on('init', function(event, slick) {
          var firstType = $(slick.$slides[0]).attr('data-type');
          var $productThumbImages = instance.$container.find( '[data-thumbnail]' );

          $productThumbImages
            .on( 'click', function(e) {
              e.preventDefault();
            })
            .on( 'keyup', function(e) {
              // On keypress Enter move the focus to the first focusable element in the related slide
              if ( e.keyCode === 13 ) {
                var mediaId = $(this).data( 'media-id' );
                $(slick.$slides).filter( '[data-media-id="' + mediaId + '"]' ).find( 'model-viewer, video, iframe, button, [href], input, [tabindex]:not([tabindex="-1"])' ).eq(0).focus().select();
              }
            });

          if (firstType === 'model' || firstType === 'video' || firstType === 'external_video') {
            slick.slickSetOption('swipe', false, false);
            slick.slickSetOption('accessibility', false, false);
          }

          setTimeout(function() {
            $('.slick-dots li').attr('aria-hidden', false);
          }, 100);
      });

      $(selectors.productSlideshow, this.$container).slick({
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        accessibility: false,
        fade: true,
        swipe: true,
        // eslint-disable-next-line
        appendDots: $(selectors.productThumbs, this.$container),
        customPaging: function(slider, i) {
          var type = $(slider.$slides[i]).data('type');
          var mediaId = $(slider.$slides[i]).data('media-id');
          var thumb = $(slider.$slides[i]).data('thumb');
          var thumbAlt = $(slider.$slides[i]).find('[aria-label]').attr('aria-label');
          var thumbIcon = thumbIcons[type] ? thumbIcons[type] : '';
          if (thumbAlt === undefined) {
            thumbAlt = $(slider.$slides[i]).attr('aria-label');
          }

          return '<a href="' + thumb + '" class="thumb--' + type + '" data-thumbnail data-media-id="' + mediaId + '"><img alt="' + thumbAlt + '" src="' + thumb + '">' + thumbIcon + '</a>';
        }
      });
    },
    detect3d: function() {
      var $modelViewerElements = $(selectors.modelViewer, this.$container);
      if ($modelViewerElements.length) {
        theme.ProductModel.init($modelViewerElements, this.id);
      }
    },
    launch3d: function() {
      var instance = this;
      $(document).on('shopify_xr_launch', function() {
        var $currentMedia = $( instance.selectors.modelViewer + ':not(.media--hidden)', instance.$container );

        $currentMedia.trigger('xrLaunch');
      });
    },
    detectVideo: function() {
      var playerElements = this.container.querySelectorAll(selectors.videoPlayer);
      var hasYouTube = false;
      var hasNative = false;

      for (var i = 0; i < playerElements.length; i++) {
        var newPlayerID = playerElements[i].getAttribute('id');
        var newPlayerType = playerElements[i].getAttribute('data-type');
        var newPlayerMediaId = playerElements[i].getAttribute('data-media-id');

        this.players[newPlayerID] = {};
        this.players[newPlayerID].id = newPlayerID;
        this.players[newPlayerID].type = newPlayerType;
        this.players[newPlayerID].mediaId = newPlayerMediaId;
        this.players[newPlayerID].container = playerElements[i];
        this.players[newPlayerID].element = playerElements[i].querySelector('iframe, video');

        if ( !this.players[newPlayerID].element ) return;

        if (newPlayerType === 'external_video') {
          var youtubeID = playerElements[i].getAttribute('data-youtube-id');
          this.players[newPlayerID].externalID = youtubeID;
          hasYouTube = true;
        } else if (newPlayerType === 'video') {
          hasNative = true;
        }
      }

      if (hasNative) {
        if (window.isPlyrLoaded) {
          this.nativeInitCallback();
        } else {
          // Load Plyr
          window.loadPlyr();
          $('body').on('plyrReady', this.nativeInitCallback.bind(this));
        }
      }

      if (hasYouTube) {
        if (window.isYoutubeAPILoaded) {
          this.youTubeInitCallback();
        } else {
          // Load Youtube API
          window.loadYouTubeLibrary();
          $('body').on('youtubeAPIReady', this.youTubeInitCallback.bind(this));
        }
      }
    },
    youTubeInitCallback: function() {
      var self = this;
      for (var currentPlayerID in this.players) {
        if (this.players[currentPlayerID].type === 'external_video') {
          var currentPlayer = this.players[currentPlayerID],
              enableLooping = (this.players[currentPlayerID].container.getAttribute( 'data-video-looping' ) === 'true');
          this.players[currentPlayerID].player = new YT.Player(currentPlayer.element, {
            videoId: currentPlayer.externalID,
            playerVars: {
              cc_load_policy: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1,
              autohide: 0,
              controls: 1,
              branding: 0,
              showinfo: 0,
              rel: 0,
              fs: 0,
              wmode: 'opaque'
            },
            events: {
              onStateChange: function( e ) {
                if (e.data === 0 && enableLooping) e.target.seekTo(0);
                var currentMediaId = $(e.target.a).closest('[data-media-id]').attr('data-media-id');
                if (e.data === 1 ) self.pauseOtherMedia( currentMediaId );
              }
            }
          });

          $(this.players[currentPlayerID].container).on('mediaHidden xrLaunch', function(event) {
            if (typeof event.target.dataset.playerId === "undefined") return;
            var newID = event.target.dataset.playerId;
            var sectionID = event.target.dataset.mediaKey;
            var newPlayer = window.theme.mediaInstances[sectionID].players[newID];
            if ( newPlayer.player && newPlayer.player.pauseVideo ) {
              newPlayer.player.pauseVideo();
            }
          });

          $(this.players[currentPlayerID].container).on('mediaVisible', function(event) {
            if (theme.TouchDetect.isTouch()) return;
            if (typeof event.target.dataset.playerId === "undefined") return;
            var newID = event.target.dataset.playerId;
            var sectionID = event.target.dataset.mediaKey;
            var newPlayer = window.theme.mediaInstances[sectionID].players[newID];
            if (newPlayer.player && newPlayer.player.playVideo) {
              newPlayer.player.playVideo();
            }
          });
        }
      }
    },
    nativeInitCallback: function() {
      var self = this;
      for (var currentPlayerID in this.players) {

        if (this.players[currentPlayerID].type === 'video') {
          var currentPlayer = this.players[currentPlayerID],
              enableLooping = (this.players[currentPlayerID].container.getAttribute('data-video-looping') === 'true');

          this.players[currentPlayerID].player = new Shopify.Plyr(currentPlayer.element, {
            loop: { active: enableLooping }
          });
          this.players[currentPlayerID].player.on( 'play', function(event) {
            var currentMediaId = $(event.target).closest('[data-media-id]').attr('data-media-id');
            if (currentMediaId) {
              self.pauseOtherMedia(currentMediaId);
            };
          });

          $(this.players[currentPlayerID].container).on('mediaHidden xrLaunch', function(event) {
            if (typeof event.target.dataset.playerId === "undefined") return;
            var newID = event.target.dataset.playerId;
            var sectionID = event.target.dataset.mediaKey;
            var newPlayer = window.theme.mediaInstances[sectionID].players[newID];
            if (newPlayer.player && newPlayer.player.pause) {
              newPlayer.player.pause();
            }
          });

          $(this.players[currentPlayerID].container).on('mediaVisible', function(event) {
            if (theme.TouchDetect.isTouch()) return;
            if (typeof event.target.dataset.playerId === "undefined") return;
            var newID = event.target.dataset.playerId;
            var sectionID = event.target.dataset.mediaKey;
            var newPlayer = window.theme.mediaInstances[sectionID].players[newID];
            if (newPlayer.player && newPlayer.player.play) {
              newPlayer.player.play();
            }
          });
        }
      }
    },

    pauseOtherMedia: function( mediaId ) {
      var $currentMedia = $( '[data-product-single-media-wrapper]' + '[data-media-id="' + mediaId + '"]' ),
          $otherMedia = $( '[data-product-single-media-wrapper]' ).not( $currentMedia );

      $currentMedia.removeClass( 'media--hidden' );
      $otherMedia.trigger( 'mediaHidden' ).addClass( 'media--hidden' );
    },

    initZoom: function() {
      var zoomEnable = this.$container.data('image-zoom-enable');
      if (zoomEnable) {
        $(this.selectors.productImage).magnificPopup({
          type: 'image',
          mainClass: 'mfp-fade',
          closeOnBgClick: true,
          closeBtnInside: false,
          closeOnContentClick: true,
          tLoading: '',
          removalDelay: 200,
          zoom: {
            enabled: false
          }
        });
      }
    },

    removeSectionVideos: function(sectionId) {
      for (var key in videos) {
        if (videos.hasOwnProperty(key)) {
          var video = videos[key];

          if (video.sectionId === sectionId) {
            if (video.player) video.player.destroy();
            delete videos[key];
          }
        }
      }

      delete theme.mediaInstances[sectionId];
    },

    onUnload: function() {
      this.$container.off(this.namespace);
      this.removeSectionVideos(this.id);
    }
  });

  return Media;
})();

theme.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};
  var selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]'
  };

  function init(modelViewerContainers, sectionId) {

    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.each(function(index) {
      var $modelViewerContainer = $(this);
      var mediaId = $modelViewerContainer.data('media-id');
      var $modelViewerElement = $(
        $modelViewerContainer.find('model-viewer')[0]
      );

      var modelId = $modelViewerElement.data('model-id');

      if (index === 0) {
        var $xrButton = $modelViewerContainer.closest('[data-product-wrapper]').find('[data-shopify-xr]');

        xrButtons[sectionId] = {
          $element: $xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        mediaId: mediaId,
        sectionId: sectionId,
        $container: $modelViewerContainer,
        $element: $modelViewerElement
      };
    });

    window.Shopify.loadFeatures([{
      name: 'shopify-xr',
      version: '1.0',
      onLoad: setupShopifyXr
    },
    {
      name: 'model-viewer-ui',
      version: '1.0',
      onLoad: setupModelViewerUi
    }]);
  }

  function setupShopifyXr(errors) {
    if (errors) {
      console.warn(errors);
      return;
    }
    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', function() {
        setupShopifyXr();
      });
      return;
    }

    for (var sectionId in modelJsonSections) {
      if (modelJsonSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJsonSections[sectionId];
        if (modelSection.loaded) continue;

        var $modelJson = $('#ModelJson-' + sectionId);
        if ( $modelJson.length ) {
          window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
          modelSection.loaded = true;
        }
      }
    }
    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) {
      console.warn(errors);
      return;
    }

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.$element);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];

    model.$container
      .on('mediaVisible', function(event) {
        var newModel = event.target.dataset.modelId || xrButton.defaultId;
        xrButton.$element.attr('data-shopify-model3d-id', newModel);

        pauseOtherMedia( model.mediaId );

        if (theme.TouchDetect.isTouch()) return;
        model.modelViewerUi.play();
      })
      .on('mediaHidden', function() {
        model.modelViewerUi.pause();
      })
      .on('xrLaunch', function() {
        model.modelViewerUi.pause();
      });

    model.$element.on( 'shopify_model_viewer_ui_toggle_play', function() {
      pauseOtherMedia( model.mediaId );
    });
  }

  function pauseOtherMedia( mediaId ) {
    var $currentMedia = $( '[data-product-single-media-wrapper]' + '[data-media-id="' + mediaId + '"]' ),
        $otherMedia = $( '[data-product-single-media-wrapper]' ).not( $currentMedia );

    $currentMedia.removeClass( 'media--hidden' );
    $otherMedia.trigger( 'mediaHidden' ).addClass( 'media--hidden' );
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];
        if (model.sectionId === sectionId) {
          delete models[key];
        }
      }
    }
    delete modelJsonSections[sectionId];
    delete theme.mediaInstances[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

theme.Popout = (function() {
  var selectors = {
    popoutList: "[data-popout-list]",
    popoutToggle: "[data-popout-toggle]",
    popoutInput: "[data-popout-input]",
    popoutOptions: "[data-popout-option]"
  };

  var classes = {
    listVisible: "popout-list--visible"
  };

  function Popout($popout) {
    this.$container = $popout;
    this.$popoutList = this.$container.find(selectors.popoutList);
    this.$popoutToggle = this.$container.find(selectors.popoutToggle);
    this.$popoutInput = this.$container.find(selectors.popoutInput);
    this.$popoutOptions = this.$container.find(selectors.popoutOptions);
    this._connectOptions();
    this._connectToggle();
    this._onFocusOut();
  }

  Popout.prototype = $.extend({}, Popout.prototype, {
    _connectToggle: function() {
      this.$popoutToggle.on(
        "click",
        function(evt) {
          var ariaExpanded =
            $(evt.currentTarget).attr("aria-expanded") === "true";
          $(evt.currentTarget).attr("aria-expanded", !ariaExpanded);

          this.$popoutList.toggleClass(classes.listVisible);
        }.bind(this)
      );
    },

    _connectOptions: function() {
      this.$popoutOptions.on(
        "click",
        function(evt) {
          var $link = $(evt.target).closest('[data-popout-option]');
          if ($link[0].attributes.href.value === '#'){
            evt.preventDefault();
            this._submitForm($(evt.currentTarget).data("value"));
          }
        }.bind(this)
      );
    },

    _onFocusOut: function() {
      this.$popoutToggle.on(
        "focusout",
        function(evt) {
          var popoutLostFocus =
            this.$container.has(evt.relatedTarget).length === 0;

          if (popoutLostFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.$popoutList.on(
        "focusout",
        function(evt) {
          var childInFocus =
            $(evt.currentTarget).has(evt.relatedTarget).length > 0;
          var isVisible = this.$popoutList.hasClass(classes.listVisible);

          if (isVisible && !childInFocus) {
            this._hideList();
          }
        }.bind(this)
      );

      this.$container.on(
        "keyup",
        function(evt) {
          if (evt.which !== slate.utils.keyboardKeys.ESCAPE) return;
          this._hideList();
          this.$popoutToggle.focus();
        }.bind(this)
      );

      $("body").on(
        "click",
        function(evt) {
          var isOption = this.$container.has(evt.target).length > 0;
          var isVisible = this.$popoutList.hasClass(classes.listVisible);

          if (isVisible && !isOption) {
            this._hideList();
          }
        }.bind(this)
      );
    },

    _submitForm: function(value) {
      this.$popoutInput.val(value);
      this.$container.parents("form").submit();
    },

    _hideList: function() {
      this.$popoutList.removeClass(classes.listVisible);
      this.$popoutToggle.attr("aria-expanded", false);
    },

    unload: function() {
      this.$popoutOptions.off();
      this.$popoutToggle.off();
      this.$popoutList.off();
      this.$container.off();
    }
  });

  return Popout;
})();


/*================ Templates ================*/


theme.equalHeight = function() {
  var $columns = $('.equalHeightColumn');
  $columns.height('initial');
  var height = 0;
  $columns.each(function () {
    if ($(this).height() > height) {
      height = $(this).height();
    }
  });
  $columns.height(height);
};

theme.navClick = function() {
  $('.nav--mobile .accessibleNav .grandparent > a.nav-carat, .nav--mobile .accessibleNav .parent > a.nav-carat, .nav--mobile .accessibleNav .grandparent > a[href="#"], .nav--mobile .accessibleNav .parent > a[href="#"]').on('click', function(event){
    event.preventDefault();
    var $dropdownLi = $(this).closest('li');
    var $dropdownCarat = $dropdownLi.children( '.nav-carat' );
    $dropdownLi.toggleClass('main-menu--expanded');
    $dropdownCarat.attr('aria-expanded', $dropdownCarat.attr('aria-expanded')=='false' ? 'true' : 'false');
  });
  $('.menuToggle').off().on('click', function(event){
    event.preventDefault();
    $('.header-menu').toggleClass('main-menu--expanded');
    $('.header-search').toggleClass('main-menu--expanded');
    $target = $(event.target);
    $target.attr('aria-expanded', $target.attr('aria-expanded')=='false' ? 'true' : 'false');
  });
};

theme.delayNav = function( selector ) {
  var hoverTimeout;
  var $agingGrandparent;
  $(selector).hover(function() {
    if(typeof $agingGrandparent != 'undefined') {
      $agingGrandparent.removeClass('hover');
      $agingGrandparent.find( '.nav-link' ).attr('aria-expanded','false');
    }
    window.clearTimeout(hoverTimeout);
    var $grandparent = $(this);
    $grandparent.addClass('hover');
    $grandparent.find( '.nav-link' ).attr('aria-expanded','true');

  },function() {
    $agingGrandparent = $(this);
    hoverTimeout = window.setTimeout(function() {
      $agingGrandparent.removeClass('hover');
      $agingGrandparent.find( '.nav-link' ).attr('aria-expanded','false');
    },250);
  });
};

theme.ariaHover = function() {
  $('.accessibleNav > li').on('focusin', function() {
    $('.accessibleNav > li').removeClass('hover');
    $(this).addClass('hover');
    $(this).children('.nav-link').attr('aria-expanded','true');
  });
};

theme.lazyImage = function() {
  document.addEventListener('lazyloaded', function(e){
    $(e.target).parent('.lazy-image').css( "background-image", "none" );
  });
};

theme.transparentLogoNoImage = function() {
  var findImage = $( document ).find('.homepage-image');
  var hasImage = Boolean(findImage.length);
  var isTransparent = $('[data-header-transparent]').data('header-transparent');
  var hasClass = $('[data-header-transparent]').hasClass('header--transparent');
  if ( !hasImage ){
    $('[data-header-transparent]').removeClass('header--absolute');
    $('.main-content').css('padding-top', '');
    $(window).resize();
  } else if ( isTransparent && !hasClass ){
    $('[data-header-transparent]').addClass('header--transparent');
  }
};



theme.tabletMenu = function() {
  if (Modernizr.touch){
    $('.nav--desktop .grandparent > a.nav-link, .nav--desktop .main-menu > .parent > a.nav-link').on( 'click', function(event){
      if ( $(this).parent().hasClass('hover') ){
        $(this).parent().removeClass('hover');
        $(this).attr('aria-expanded','false');
      } else{
        event.preventDefault();
        $('.grandparent, .parent').removeClass('hover');
        $(this).parent().addClass('hover');
        $(this).attr('aria-expanded','true');
      }
    });
  }
};

theme.smoothScroll = function() {
  $('a[href*="#"]:not([href="#"])').click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         event.preventDefault();
         $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
};

theme.detectNav = function(){
  var navWidth = $('.nav--desktop .main-menu').outerWidth();
  var logoWidth = $('.logo-wrapper').outerWidth();
  var widthLimit = $('.site-header .wrapper').width();
  var totalWidth = navWidth + logoWidth;
  if ( 1024 < widthLimit){
    $('.site-header, .info-bar').addClass('showDesktop');
    $('.site-header, .info-bar').removeClass('showMobile');
  }
  else {
    $('.site-header, .info-bar').addClass('showMobile');
    $('.site-header, .info-bar').removeClass('showDesktop');
  }
};

theme.fullHeight = function(){
  var windowHeight = $(window).height();
  var navHeight = ($('.header__wrapper').height());
  var heroHeight = windowHeight - navHeight;
  $('.index-sections > .shopify-section:first-child > .use_screen_full').height(heroHeight).css('min-height', 'initial');
  $('.index-sections > .shopify-section:first-child > .use_screen_full.homepage-slideshow .slideshow__slide').height(heroHeight);
  $('.index-sections > .shopify-section:first-child > .use_screen_full.homepage-double .double__block').height(heroHeight);
};

theme.videoPopupGeneric = function(){
  $('[data-video-popup]').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    closeBtnInside: false,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      patterns: {
        youtube: {
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
        }
      }
    }
  });
};

theme.contentOverflow = function(){
  $('.preventOverflow').css('min-height', function() {
    var contentHeight = $(this).find('.preventOverflowContent').height();
    return (contentHeight + 30);
  });
};

theme.showTitle = function(){
  if ( $('.sectionTitle').length ){
    $('.templateTitle').remove();
  } else{
    $('.templateTitle').show();
    $('.templateTitle').css('opacity','1');
  }
};

theme.heightOverride = function(){
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $( '.use_screen_full, .use_screen_three_quarters, .use_screen_two_thirds, .use_screen_one_half, .use_screen_one_third, .use_screen_one_fifth').css('height', function() {
      return $(this).css('height');
    }, 'important');
    $( '.use_screen_full .slideshow__slide, .use_screen_three_quarters .slideshow__slide, .use_screen_two_thirds .slideshow__slide, .use_screen_one_half .slideshow__slide, .use_screen_one_third .slideshow__slide').css('height', function() {
      return $(this).css('height');
    }, 'important');

    $( '.use_screen_full .double__block, .use_screen_three_quarters .double__block, .use_screen_two_thirds .double__block, .use_screen_one_half .double__block, .use_screen_one_third .double__block, .use_screen_one_fifth .double__block').css('height', function() {
      return $(this).css('height');
    }, 'important');
  }
};

theme.matchHeight = function(){
  $('.equalOverflowHeight').css('min-height', function() {
    var blockHeights = $('.preventOverflowContent', $(this) ).map(function() {
      return $(this).height();
    }).get();
    var tallest = Math.max.apply(null, blockHeights);
    return (tallest + 30);
  });
};

theme.moveTags = function(){
  $('.homepage--white:not(.homepage-image)').parent().addClass('adjust--white');
  $('.homepage--light:not(.homepage-image)').parent().addClass('adjust--light');
  $('.homepage--splash:not(.homepage-image)').parent().addClass('adjust--splash');
  $('.homepage--dark:not(.homepage-image)').parent().addClass('adjust--dark');
};

theme.$body = $('body');
theme.bodyHeight = theme.$body.height();
theme.watchBodyHeight = function(){
  if ( theme.bodyHeight != theme.$body.height() )
    {
        $(window).resize();
        theme.bodyHeight = theme.$body.height();
    }
    setTimeout(theme.watchBodyHeight, 10000);
}

theme.init = function () {
  theme.ariaHover();
  theme.lazyImage();
  theme.equalHeight();
  theme.matchHeight();
  theme.navClick();
  theme.delayNav('.nav--desktop .parent');
  theme.delayNav('.nav--desktop .grandparent');
  theme.smoothScroll();
  theme.detectNav();
  theme.tabletMenu();
  theme.fullHeight();
  theme.contentOverflow();
  theme.moveTags();
  theme.heightOverride();
  theme.showTitle();
  theme.transparentLogoNoImage();
  theme.watchBodyHeight();
};

$(window).resize(function() {
  theme.detectNav();
  theme.contentOverflow();
  theme.equalHeight();
  theme.matchHeight();
  theme.fullHeight();
  theme.heightOverride();
}).resize();

$('.logo-image').imagesLoaded(function() {
  $(window).resize();
});

$(window).load(function(){
  $(window).resize();
});



$(theme.init);


/*================ Sections ================*/
theme.Header = (function() {
  function Header(container) {
    this.init();
    this.stickyHeader();
  }

  Header.prototype = _.assignIn({}, Header.prototype, {
    init: function() {
      theme.transparentLogoNoImage();
    },
    stickyHeader: function() {
      var $header = $('.header__wrapper');
      var $header_nav = $('.header__wrapper .site-header');
      var $main_content = $('.main-content');
      var stickyString = $('[data-header-sticky]').data('header-sticky');
      var simpleSticky = Boolean(stickyString.match(/sticky/));
      var scrollSticky = Boolean(stickyString.match(/scroll/));
      var static = (!simpleSticky && !scrollSticky);
      var infoHeight = $('.info-bar').outerHeight();
      var navHeight = $header_nav.outerHeight();

      if (scrollSticky || simpleSticky){

        if( !$header.hasClass('header--transparent') ){
          $header.addClass('header--absolute')
          $main_content.css('padding-top', navHeight);
          $(window).resize();
        }

        var previousScrollPosition = 0;
        var lastUpScroll = 0;
        var beenStuck = false;
        checkScrollSticky();
        $( window ).on( 'scroll', $.throttle(20, checkScrollSticky))
                   .on( 'load', checkScrollSticky);
        function checkScrollSticky() {
          var scrollPosition = $( window ).scrollTop();
          
          if ( scrollPosition > infoHeight ) {
            if( scrollPosition < previousScrollPosition && scrollSticky ) {
              // scrolling up
              lastUpScroll = scrollPosition;
              $header.addClass( 'header--sticky' );
              $header.removeClass( 'header--stuck' );
              $header_nav.css('top', '0');
              beenStuck = true;
            } else if (beenStuck && scrollSticky) {
              // scrolling down
              $header.addClass( 'header--stuck' );
              $header.removeClass( 'header--sticky' );
              $header_nav.css('top', lastUpScroll);
              beenStuck = false;
            } else if (simpleSticky) {
              // scrolling down simple
              $header.addClass( 'header--sticky' );
              $header.removeClass( 'header--stuck' );
              $header_nav.css('top', '0');
              beenStuck = true;
            }
          }  else{
            // at top
            $header.removeClass( 'header--sticky' );
            $header.removeClass( 'header--stuck' );
            $header_nav.css('top', '');
            beenStuck = false;
          }

          previousScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
        }
      }
    },

    onUnload: function() {},
    onBlockSelect: function(evt) {}
  });
  return Header;

})();

theme.Video = (function() {
  function Video(container) {
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');
    var $featuredImage = this.$featuredImage = $('#FeaturedImage-'+id);
    var featuredImageSelector = this.featuredImageSelector = '#FeaturedImage-'+id;
    var parallaxSliderSelector = this.parallaxSliderSelector = '#FeaturedImage-'+id + " .parallax-slider";
    var $autoplay = this.$autoplay = this.$container.find('[data-video-autoplay]');
    var $youtubeWrapper = this.$youtubeWrapper = this.$container.find('[data-youtube-wrapper]');
    var playerID = this.playerID = $youtubeWrapper.attr('id');
    theme.playersArray = [];

    var $currentVideo = $container.find('.popupVideo');
    $currentVideo.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      closeBtnInside: false,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        patterns: {
          youtube: {
            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
          }
        }
      }
    });

    function LoadYoutubeVideo(){
      theme.playersArray[playerID] = new YT.Player(playerID, {
        videoId: videoID,
        playerVars: {
          cc_load_policy: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          autohide: 0,
          controls: 0,
          branding: 0,
          showinfo: 0,
          rel: 0,
          fs: 0,
          wmode: 'opaque'
        },
        events: {
          'onReady': onVideoReady,
          'onStateChange': onVideoStateChange
        }
      });
    }

    function onVideoReady(e) {
      e.target.mute();
      e.target.playVideo();
      $($currentVideo).on('mfpOpen', function() {
          e.target.pauseVideo();
      });
      $($currentVideo).on('mfpClose', function() {
          e.target.playVideo();
      });
    }

    function onVideoStateChange(e) {
      if (e.data == 0) {
        // video is over, replay
        e.target.playVideo();
      }
      if (e.data == 1) {
        // video is playing
        $autoplay.css('opacity', '1');
      }
    }

    if ( $autoplay.length ) {
      var videoID = $autoplay.attr('data-video-id');
      var videoType = $autoplay.attr('data-video-type');

      if ( videoType == 'vimeo'){
        var oembed_url = 'https://vimeo.com/api/oembed.json'
        var vimeo_url = 'https://vimeo.com/' + videoID;

        var params = {
          url: vimeo_url,
          background: true,
          muted: true,
          autoplay: true
        }
        $.getJSON(oembed_url, params, function(data) {
          $autoplay.html(data.html);
        })
      }
      else if ( videoType == 'youtube'){
        $autoplay.css('opacity', '0');
        window.loadYouTubeLibrary();

        var player;
        if(window.isYoutubeAPILoaded){
          LoadYoutubeVideo()
        }
        else{
          $('body').on('youtubeAPIReady', LoadYoutubeVideo)
        }
      }
    }

    if ($featuredImage.attr('data-parallax-src')) {
      $featuredImage.parallax({
        src: $featuredImage.data('parallax-src'),
        parallax: 'scroll',
        excludeAgents: /(none)/,
        mirrorSelector: featuredImageSelector
      });
      $.each( $(featuredImageSelector).data(), function(key,val){
        if (key == 'widths' ){
         val = "[" + val + "]"
        }
        var kebabKey = "data-" + key;
        kebabKey = kebabKey.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
        $(parallaxSliderSelector).attr( kebabKey,val);
      });
      $(parallaxSliderSelector).addClass('lazyload');

      var loadCount = 0;
      $(parallaxSliderSelector).on('load', function(){
        loadCount++;
        if (loadCount > 1){
          $featuredImage.css("background-image", '');
        }
      });
      setTimeout(function() {
        $featuredImage.css("background-image", '');
      }, 5000);
    }
  }


  Video.prototype = _.assignIn({}, Video.prototype, {
    onUnload: function() {
      if (this.$container.attr('data-img-src')) {
        this.$container.parallax('destroy');
      }
      var magnificObject = this.$container.find('.popupVideo')
      magnificObject.off('click.magnificpopup');
      magnificObject.removeData('magnificPopup');

      theme.playersArray[this.playerID].destroy();
    }
  });

  return Video;
})();

theme.Parallax = (function() {
  function Parallax(container) {
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');
    var $featuredImage = this.$featuredImage = $('#FeaturedImage-'+id);
    var featuredImageSelector = this.featuredImageSelector = '#FeaturedImage-'+id;
    var parallaxSliderSelector = this.parallaxSliderSelector = '#FeaturedImage-'+id + " .parallax-slider";

    if ($featuredImage.attr('data-parallax-src')) {

      $featuredImage.parallax({
        src: $featuredImage.data('parallax-src'),
        parallax: 'scroll',
        excludeAgents: /(none)/,
        mirrorSelector: featuredImageSelector
      });

      $.each( $(featuredImageSelector).data(), function(key,val){
        if (key == 'widths' ){
         val = "[" + val + "]"
        }
        var kebabKey = "data-" + key;
        kebabKey = kebabKey.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
        $(parallaxSliderSelector).attr( kebabKey,val);
      });

      var parllaxAlt = $featuredImage.data('alt');
      $(parallaxSliderSelector).attr('alt', parllaxAlt);

      $(parallaxSliderSelector).addClass('lazyload');

      var loadCount = 0;
      $(parallaxSliderSelector).on('load', function(){
        loadCount++;
        if (loadCount > 1){
          $featuredImage.css("background-image", '');
        }
      });
      setTimeout(function() {
        $featuredImage.css("background-image", '');
      }, 5000);
    }
    theme.transparentLogoNoImage();
  }

  Parallax.prototype = _.assignIn({}, Parallax.prototype, {
    init: function() {
      theme.transparentLogoNoImage();
    },
    onUnload: function() {
      if (this.$featuredImage.attr('data-img-src')) {
        this.$featuredImage.parallax('destroy');
      }
    }
  });

  return Parallax;
})();

theme.Footer = (function() {
  var selectors = {
    popoutLocale: '[data-popout-locale]',
    popoutCurrency: '[data-popout-currency]'
  };
  function Footer(container) {
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');

    this.$popoutLocale = $(selectors.popoutLocale, this.$container);
    this.popoutLocale = {}

    this.$popoutCurrency = $(selectors.popoutCurrency, this.$container);
    this.popoutCurrency = {}

    this.init();
  }
  Footer.prototype =  $.extend({}, Footer.prototype, {
    init: function(){
      if (this.$popoutLocale.length){
        this.popoutLocale = new theme.Popout(this.$popoutLocale);
      }
      if (this.$popoutCurrency.length){
        this.popoutCurrency = new theme.Popout(this.$popoutCurrency);
      }
    }
  });
  return Footer;
})();

theme.Slideshow = (function() {
  function Slideshow(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#slideshow-'+sectionId;
    var $slideshow = this.$slideshow = $(this.slideshow);

    this.init();
  }

  Slideshow.prototype = _.assignIn({}, Slideshow.prototype, {
    init: function() {
      this.$slideshow.on('init', function(event, slick){
        var $slider = slick.$slider;
        var $currentSlide = $slider.find('.slick-current');
        slick.$prevArrow.addClass($currentSlide.data("color"));
        slick.$nextArrow.addClass($currentSlide.data("color"));
      })
      this.$slideshow.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $slider = slick.$slider;
        var $currentSlide = $slider.find('.slick-current');
        var $nextSlide = $slider.find('.slideshow__slide[data-slick-index="' + nextSlide + '"]');

        slick.$prevArrow.removeClass('homepage--white homepage--light homepage--splash homepage--dark');
        slick.$prevArrow.addClass($nextSlide.data("color"));

        slick.$nextArrow.removeClass('homepage--white homepage--light homepage--splash homepage--dark');
        slick.$nextArrow.addClass($nextSlide.data("color"));
      });
      this.$slideshow.slick({
        autoplay: this.$slideshow.data('autoplay'),
        autoplaySpeed: this.$slideshow.data('speed'),
        adaptiveHeight: false,
        dots: false
      });
    },
    onUnload: function() {
      delete theme.slideshows[this.slideshow];
    },
    onBlockSelect: function(evt) {
      var $slideshow = $(this.slideshow);

      // Ignore the cloned version
      var $slide = $('.slideshow__slide--' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause autoplay
      $slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
    }
  });
  return Slideshow;
})();

theme.Product = (function() {
  function Product(container) {
    this.container = container;
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    this.id = sectionId;

    this.settings = {
      sectionId: sectionId,
      enableHistoryState: true,
      namespace: '.product-single'
    }

    this.selectors = {
      productSection: '#ProductSection-'+sectionId,
      productImage: '[data-product-image]',
      productSlideshow: '[data-product-slideshow]',
      originalSelectorId: '#ProductSelect-' + sectionId,
      singleOptionSelector: '.single-option-selector-' + sectionId,
      addToCart: '#AddToCart-'+sectionId,
      productPrice: '#ProductPrice-'+sectionId,
      buttonPrice: '#ButtonPrice-'+sectionId,
      comparePrice: '#ComparePrice-'+sectionId,
      comparePriceWrapper: '#ComparePriceWrapper'+sectionId,
      addToCartText: '#AddToCartText-'+sectionId,
      quantityInput:    '#Quantity-'+sectionId+' .quantity__input',
      variantDropdown: '#ProductSelect-'+sectionId,
      popupButton: '#toggleProductModal-'+sectionId,
      image: '.ProductImg-'+sectionId,
      addDrawerWrapper: '#CartDrawerWrapper--'+sectionId,
      addDrawerTemplate: '#CartDrawerTemplate--'+sectionId
    }

    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    if (!$('#ProductJson-' + sectionId).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);
    this.zoomEnable = $container.data('image-zoom-enable');

    this.init();

    this.stringOverrides();
    this.initProductVariant();
    this.quantityCallback();
    this.pageModal();
    this.quantitySelectors();
    this.tabs();
    this.accordion();
    this.tabsSpaceCheck();
    this.tabsAboveParallax();
    this.initAdd();

    theme.videoPopupGeneric();


    var currentScope = this;
    $(window).resize(function() {
      currentScope.tabsSpaceCheck();
    }).resize();

  }
  Product.prototype = _.assignIn({}, Product.prototype, {
    init: function() {
      theme.mediaInstances[this.id] = new theme.Media(this.container);
      theme.mediaInstances[this.id].init();
    },
    initAdd: function() {
      var $drawer = $(this.selectors.addDrawerWrapper),
          source = $(this.selectors.addDrawerTemplate).html(),
          template = Handlebars.compile(source),
          globalTimer;

      $('[data-add-to-cart]').on('click', function(e) {
        var isFocusEnabled = $('body').hasClass('focus-enabled') ;
        if (isFocusEnabled) {
          return;
        }
        e.preventDefault();
        var form = $(this).closest('form'),
            form_serialized = form.serializeArray();
        if (form.find('[type="file"]').length){
          return;
        }
        var form_object = {};
        $.map(form_serialized, function(val, i){
          form_object[val.name] = val.value;
        });
        ajaxAddItem(form_object);
      });
      var ajaxAddItem = function(data) {
        $.ajax({
          type: 'POST',
          url: '/cart/add.js',
          dataType: 'json',
          data: data,
          error: addError,
          success: addSuccess,
          complete: updateHeaderTotal
        });
      }
      var updateHeaderTotal = function() {
        $.getJSON('/cart.js')
         .done(function(cart) {
           var newTotal = slate.Currency.formatMoney(cart.total_price, theme.moneyFormat);
           $('.cartCost').html("(<span class='money'>" + newTotal + "</span>)").removeClass('hidden-count');
          $('.header-cart__bubble_p').text(cart.item_count);
          $('.header-cart__bubble_p').removeClass('hidden-count');
        });
      }
      var addError = function(object, status) {
        var errors = '<div class="errors">' + object.responseJSON.description + '</div>';
        $drawer.empty();
        $drawer.append( errors );
        $drawer.addClass('has-errors is-visible');
        popdown();
      }
      var addSuccess = function(product){
        productObject = {
          product_title: product.product_title,
          product_image: product.image,
          variant: product.variant_title == 'Default Title' ? false : product.variant_title,
          quantity: product.quantity,
          price: slate.Currency.formatMoney(product.price, theme.moneyFormat)
        }
        $drawer.empty()
        $drawer.append(template(productObject));

        // Popover should be just below header
        var topPosition =  $('.site-header').outerHeight() + $('.info-bar').outerHeight();
        $drawer.attr('style','');

        // If it is sticky, just put it at the header height with position: fixed
        if ( $('.header__wrapper').hasClass('header--sticky') ) {
          var topPosition =  $('.site-header ').outerHeight();
          $drawer.css( 'top', topPosition );
        } else if ( $(window).scrollTop() > topPosition ){
          // header is not visible pin to top
          $drawer.css( 'top', 0 );
          $drawer.css( 'z-index', '2000' );
        }
        else {
        // otherwise positon: absolute below header
        // or at top if scrolled below header
          topPosition = Math.max( $(window).scrollTop() , topPosition);
          $drawer.css( 'position', 'absolute' );
          $drawer.css( 'top', topPosition );
        }

        $drawer.addClass( 'is-visible' );
        popdown();
      }
      var popdown = function() {
        clearTimeout(globalTimer);
        globalTimer = setTimeout(function(){
          $drawer.removeClass( 'is-visible' ).removeClass( 'has-errors' );
        }, 5000);
      }
      $drawer.on( 'click', '.close', function() {
        $drawer.removeClass( 'is-visible' ).removeClass( 'has-errors' );
      });
    },
    initProductVariant: function() {
      var options = {
        $container: this.$container,
        enableHistoryState: this.settings.enableHistoryState,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject
      }
      this.variants = new slate.Variants(options);
      this.$container.on('variantChange' + this.settings.namespace, this.updateAllVariants.bind(this));
      this.$container.on('variantImageChange' + this.settings.namespace, this.updateImages.bind(this));
      this.updateAllVariants({variant: this.variants.currentVariant});
      this.updateImages({variant: this.variants.currentVariant});
    },
    updateAllVariants: function(evt) {
      var variant = evt.variant;
      var moneyFormat = theme.moneyFormat,
          membershipProduct = document.getElementById('MembershipJson-' + this.settings.sectionId);

      if (variant) {

        // Select a valid variant if available
        if (variant.available) {
          // Available, enable the submit button, change text, show quantity elements
          $(this.selectors.addToCart).removeClass('disabled').prop('disabled', false);
          $(this.selectors.addToCartText).html(theme.strings.addToCart);
          this.$container.removeClass( "variant--soldout variant--unavailabe" );
        } else {
          // Sold out, disable the submit button, change text, hide quantity elements
          $(this.selectors.addToCart).addClass('disabled').prop('disabled', true);
          $(this.selectors.addToCartText).html(theme.strings.soldOut);
          this.$container.removeClass( "variant--unavailabe" ).addClass( "variant--soldout" );
        }
        // Regardless of stock, update the product price
        if(membershipProduct) {
          chargeRabbitOptions = JSON.parse(document.getElementById('MembershipJson-' + this.settings.sectionId).innerHTML);

          $(this.selectors.productPrice).html("<span class='money'>" + slate.Currency.formatMoney(chargeRabbitOptions[variant.id].amount, moneyFormat) + "</span>" + chargeRabbitOptions[variant.id].interval );
          $(this.selectors.buttonPrice).html("<span class='money'>" + slate.Currency.formatMoney(chargeRabbitOptions[variant.id].amount, moneyFormat) + "</span>" + chargeRabbitOptions[variant.id].interval );
          $(this.selectors.addToCartText).html(theme.strings.join);
        }
        else {
          $(this.selectors.productPrice).html("<span class='money'>" + slate.Currency.formatMoney(variant.price, moneyFormat) + "</span>");

          var quantity,
          quantityLabel = "";
          if( $(this.selectors.quantityInput).length ){
            quantity = $(this.selectors.quantityInput).val();
          } else {
            quantity = 1;
          }

          if(quantity > 1)
            quantityLabel = "(" + quantity + ")";
          $(this.selectors.buttonPrice).attr('data-item-price', variant.price);
          $(this.selectors.buttonPrice).attr('data-item-quantity', quantity);
          $(this.selectors.buttonPrice).html("<span class='money'>" + slate.Currency.formatMoney(variant.price * quantity, moneyFormat) + "</span>&nbsp;" + quantityLabel);
        }

        // Also update and show the product's compare price if necessary
        if (variant.compare_at_price > variant.price) {
          $(this.selectors.comparePrice).html("<span class='money'>" + slate.Currency.formatMoney(variant.compare_at_price, moneyFormat) + "</span");
          $(this.selectors.comparePrice).closest('.compare-at').show();
          $(this.selectors.productPrice).closest('.product__price').addClass('on-sale');
        } else {
          $(this.selectors.comparePrice).closest('.compare-at').hide();
          $(this.selectors.productPrice).closest('.product__price').removeClass('on-sale');
        }

      } else {
        // The variant doesn't exist, disable submit button.
        // This may be an error or notice that a specific variant is not available.
        // To only show available variants, implement linked product options:
        //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
        $(this.selectors.addToCart).addClass('disabled').prop('disabled', true);
        $(this.selectors.addToCartText).html(theme.strings.unavailable);
        this.$container.removeClass( "variant--soldout" ).addClass( "variant--unavailabe" );
      }
    },
    updateImages: function(evt) {
      var variant = evt.variant;

      if (variant) {

        // Update variant image, if one is set
        if (variant.featured_media) {
          var newImg = $(this.selectors.productImage+'[data-image-id="'+ variant.featured_media.id +'"]', this.$container);
          var newPosition = newImg.closest('.product__photo').attr('data-slick-index');

          // Slider not loaded
          if (newPosition === undefined) {
            ;
          }else {
             $(this.selectors.productSlideshow).slick('slickGoTo', newPosition);
          }
        }
      }
    },
    quantitySelectors: function() {
      // Setup listeners to add/subtract from the input
      $('.js-qty__adjust').off().on('click', function() {
        var el = $(this),
            id = el.data('id'),
            qtySelector = el.siblings('.js-qty__num'),
            qty = parseInt(qtySelector.val().replace(/\D/g, '')),
            submit = qtySelector.data('submit');

              // Make sure we have a valid integer
              if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
                // We have a number!
              } else {
                // Not a number. Default to 1.
                qty = 1;
              }


        // Add or subtract from the current quantity
        if (el.hasClass('js-qty__adjust--plus')) {
          qty = qty + 1;
        } else {
          qty = qty - 1;
          if (qty <= 1) qty = 1;
        }

        // Update the input's number
        qtySelector.val(qty).trigger('change');
        if(submit){
          qtySelector.parents('form').submit();
        }
      });
    },
    quantityCallback: function() {
      $(document).on('change', this.selectors.quantityInput, function(){

        var moneyFormat = theme.moneyFormat,
        $buttonPrice = $(this).parents('.product-page').find('.buttonPrice'),
        itemPrice = $buttonPrice.attr('data-item-price'),
        quantity = $(this).val(),
        quantityLabel = "";

        if(quantity > 1){
          quantityLabel = "(" + quantity + ")";
        }

        $buttonPrice.attr('data-item-quantity', quantity);
        $buttonPrice.html("<span class='money'>" + slate.Currency.formatMoney(itemPrice * quantity, moneyFormat) + "</span>&nbsp;" + quantityLabel);
      });
    },
    stringOverrides: function() {
      // Override defaults in theme.strings with membership overrides
      theme.productStrings = theme.productStrings || {};
      $.extend(theme.strings, theme.productStrings);
    },
    pageModal: function(){
      $(this.selectors.popupButton).magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        closeBtnInside: true,
        closeOnContentClick: false,
        tClose: 'x',
        removalDelay: 500,
      });
    },
    tabs: function(){
      $(this.selectors.productSection + ' .tab-content-0').addClass('current');
      $(this.selectors.productSection + ' .tab-link-0').addClass('current');
      var sectionSelector = this.selectors.productSection;
      $(this.selectors.productSection + ' ul.tabs > li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $(sectionSelector + ' ul.tabs > li').removeClass('current');
        $(sectionSelector + ' .tab-content').removeClass('current');
        $(this).addClass('current');
        $(sectionSelector + ' .tab-content-' + tab_id).addClass('current');
      })
    },
    accordion:  function(){
      // mobile accordion for tabs content
      $(this.selectors.productSection + ' .accordion-toggle').click(function() {
        if($(this).next('div').is(':visible')){
          $(this).next('div').slideUp('fast');
          $(this).find('i').removeClass('icon-minus');
          $(this).find('i').addClass('icon-plus');
        } else {
          $(this).next('div').slideDown('fast');
          $(this).find('i').removeClass('icon-plus');
          $(this).find('i').addClass('icon-minus');
        }
      });
    },
    tabsSpaceCheck: function(){
      var tabsWidth = $(this.selectors.productSection + ' .tabs').width();
      var tabsWrapper = $(this.selectors.productSection + ' .productTabsWrapper').width()-31;
      if (tabsWidth >= tabsWrapper){
        $(this.selectors.productSection + ' .product-tabs').css({
           'position' : 'absolute',
           'left' : '-9999px',
           'display': 'table'
        });
        $(this.selectors.productSection + ' .product-accordion').show();
      } else {
        $(this.selectors.productSection + ' .product-tabs').removeAttr( 'style' );
        $(this.selectors.productSection + ' .product-accordion').hide();
      }
    },
    tabsAboveParallax: function(){
      var nextParralax = $('.homepage-product'+this.selectors.productSection).has('.product-tabs').parent().nextAll().find('.homepage-image[data-img-src]');
      if( nextParralax.length > 0 ){
        $(this.selectors.productSection + ' ul.tabs > li').click(function(){
          $(window).resize();
        });
        $(this.selectors.productSection + ' .accordion-toggle').click(function(){
          setTimeout(function() {
            $(window).resize();
          }, 200);
        });
      }
    },
    onBlockSelect: function(evt) {
      $('*[data-block-id="' + evt.detail.blockId + '"]').click();
    },
    onBlockDeselect: function(evt) {
      $('*[data-block-id="' + evt.detail.blockId + '"]').click();
    }
  });

  return Product;
})();

theme.Maps = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];

  function Map(container) {
    theme.$currentMapContainer = this.$container = $(container);
    var style = this.style = this.$container.data('style');
    var zoom = this.zoom = this.$container.data('zoom');
    var key = this.$container.data('api-key');

    if (typeof key !== 'string' || key === '') {
      return;
    }

    if (apiStatus === 'loaded') {
      var self = this;

      // Check if the script has previously been loaded with this key
      var $script = $('script[src*="' + key + '&"]');
      if ($script.length === 0) {
        $.getScript(
          'https://maps.googleapis.com/maps/api/js?key=' + key
        ).then(function() {
          apiStatus = 'loaded';
          self.createMap();
        });
      } else {
        this.createMap();
      }
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({ address: address }, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = _.assignIn({}, Map.prototype, {
    createMap: function() {
      var $map = this.$container.find('.map-section__container');

      var basic = [];
      var light = [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":"64"},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f0f0f0"},{"visibility":"simplified"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"lightness":"100"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"saturation":"-41"},{"color":"#e8ede7"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road","elementType":"labels","stylers":[{"lightness":"25"},{"gamma":"1.06"},{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"gamma":"10.00"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"weight":"0.01"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"weight":"0.8"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"weight":"0.01"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"gamma":"10.00"},{"lightness":"100"},{"weight":"0.4"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"},{"weight":"0.01"},{"lightness":"39"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"weight":"0.50"},{"gamma":"10.00"},{"lightness":"100"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#cfe5ee"},{"visibility":"on"}]}]

      var light_blank =
      [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"},{"lightness":"64"},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f0f0f0"},{"visibility":"simplified"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"lightness":"100"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"saturation":"-41"},{"color":"#e8ede7"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road","elementType":"labels","stylers":[{"lightness":"25"},{"gamma":"1.06"},{"saturation":"-100"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"gamma":"10.00"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"weight":"0.01"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"weight":"0.8"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"weight":"0.01"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"gamma":"10.00"},{"lightness":"100"},{"weight":"0.4"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"},{"weight":"0.01"},{"lightness":"39"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"weight":"0.50"},{"gamma":"10.00"},{"lightness":"100"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#cfe5ee"},{"visibility":"on"}]}]

      var white_blank =
      [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"weight":"0"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e4e4e4"},{"visibility":"on"}]}]

      var white_label =
      [{"featureType":"all","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"gamma":"3.86"},{"lightness":"100"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#cccccc"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"weight":"0"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e4e4e4"},{"visibility":"on"}]}]

      var dark_blank =
      [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17},{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":"0.01"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]

      var dark_label =
      [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"-82"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"invert_lightness":true},{"weight":"7.15"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17},{"weight":"0.8"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":"0.01"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]

      var styles = '';
      if (this.style == 'light'){
        styles = light;
      } else if (this.style == 'light_blank'){
        styles = light_blank;
      } else if (this.style == 'white_blank'){
        styles = white_blank;
      } else if (this.style == 'white_label'){
        styles = white_label;
      } else if (this.style == 'dark_blank'){
        styles = dark_blank;
      } else if (this.style == 'dark_label'){
        styles = dark_label;
      } else {
        styles = basic;
      }

      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: this.zoom,
              styles: styles,
              center: results[0].geometry.location,
              draggable: true,
              clickableIcons: false,
              scrollwheel: false,
              zoomControl: false,
              disableDefaultUI: true
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: center
            });

            google.maps.event.addDomListener(window, 'resize', function() {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
            });
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = theme.strings.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = theme.strings.addressQueryLimit;
              break;
            default:
              errorMessage = theme.strings.addressError;
              break;
          }

          // Only show error in the theme editor
          if (Shopify.designMode) {
            var $mapContainer = $map.parents('.map-section');

            $mapContainer.addClass('page-width map-section--load-error');
            $mapContainer
              .find('.map-section__wrapper')
              .html(
                '<div class="errors text-center">' + errorMessage + '</div>'
              );
          }
        });
    },

    onUnload: function() {
      if (typeof window.google !== 'undefined') {
        google.maps.event.clearListeners(this.map, 'resize');
      }
    }
  });

  return Map;
})();

// Global function called by Google on auth errors.
// Show an auto error message on all map instances.
// eslint-disable-next-line camelcase, no-unused-vars
function gm_authFailure() {
  if (!Shopify.designMode) return;

  theme.$currentMapContainer.addClass('page-width map-section--load-error');
  theme.$currentMapContainer
    .find('.map-section__wrapper')
    .html(
      '<div class="errors text-center">' + theme.strings.authError + '</div>'
    );
}

theme.Columns = (function() {
  function Columns(container) {
    theme.videoPopupGeneric();
  }
  return Columns;
})();

theme.Related = (function() {
  function Related(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    this.init();
  }
  Related.prototype = $.extend({}, Related.prototype, {
    init: function() {
      var $relatedSection = $('[data-related-section]');
      var productId = $relatedSection.data('product-id');
      var limit = $relatedSection.data('limit');

      var requestRoute = window.theme.routes.product_recommendations_url || "/recommendations/products/";
      var requestUrl = requestRoute+"?section_id=related&limit="+limit+"&product_id="+productId;

      $.get(requestUrl)
        .done(function(data) {
          var inner = $(data).find('[data-related-section]').html()
          $relatedSection.hide().html(inner).slideDown('slow');
        });
    }
  });
  return Related;
})();

theme.Cart = (function() {
  function Cart(container) {
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');
    var ajaxEnabled = this.ajaxEnabled=  $container.attr('data-ajax-enable');
    this.init();
  }
  Cart.prototype = _.assignIn({}, Cart.prototype, {
    init: function(){
      if ( this.ajaxEnabled == 'true' ){
        this.initQuantity();
        this.initNotes();
      } else {
        this.initNoAjax();
      }

    },
    initQuantity: function() {
      var instance = this;
      $('.js-qty__adjust').off().on('click', function() {

        var $element = $(this);

        $element.prop('disabled', true)
          .parents('.js-qty').addClass('qty--disabled')
          .end()
          .siblings().prop('disabled', true);

        $element.closest('.cart__row').find('.item--loadbar').show();

        if ($element.hasClass('js-qty__adjust--plus')){
          var addVariant = $element.data('variant');
          // we use the add endpoint because it returns stockout errors
          instance.changeQuantity('/cart/add.js', 1, addVariant);
        } else {
          var newQuantity = parseInt($element.data('new-quantity'));
          var itemKey = $element.data('line-key');
          // stockout is not an issue for decrease so we use change with the item key
          instance.changeQuantity('/cart/change.js', newQuantity, itemKey);
        }
      });
    },
    changeQuantity: function(endpoint, quantity, id) {
      var instance = this;
      var data = {
        quantity: quantity,
        id: id
      }
      var params = {
        type: 'POST',
        url: endpoint,
        data: data,
        dataType: 'json',
        error: function(XMLHttpRequest, textStatus) {
          var $errors = $('[data-form-errors]');
          $errors.slideUp('fast');
          $errors.empty().html(XMLHttpRequest.responseJSON.description).slideDown('fast');
        },
        complete: function(jqxhr, text) {
          $.get('/cart?view=ajax')
           .done(function(data) {
             // data-cart-additional -- we move the section-settings generated
             // markup around because it cannot be included in our ajax request
             $('[data-cart-form-wrapper]').empty().html(data);

             instance.init();
          });
          $.getJSON('/cart.js')
           .done(function(cart) {
             var newTotal = slate.Currency.formatMoney(cart.total_price, theme.moneyFormat);
             $('.cartCost').html("(<span class='money'>" + newTotal + "</span>)").removeClass('hidden-count');
            $('.header-cart__bubble_p').text(cart.item_count);
             $('.header-cart__bubble_p').removeClass('hidden-count');
          });
        }
      }
      jQuery.ajax(params);
    },
    initNotes: function() {
      var instance = this;
      var $notes = $('[data-cart-note]');

      $notes.off().on('change', function() {
        var noteValue = $notes.val().toString() || '';
        instance.saveNotes(noteValue);
      });
    },
    saveNotes: function(newNote) {
      var params = {
        type: 'POST',
        url: '/cart/update.js',
        data: 'note=' + newNote,
        dataType: 'json',
        error: function(XMLHttpRequest, textStatus) {
          var $errors = $('[data-form-errors]');
          $errors.slideUp('fast');
          $errors.empty().html(XMLHttpRequest.responseJSON.description).slideDown('fast');
        }
      }
      jQuery.ajax(params);
    },
    initNoAjax: function() {
      $('.js-qty__adjust').off().on('click', function() {
        var el = $(this),
            id = el.data('no-ajax-key'),
            qtySelector = el.siblings('.js-qty__num'),
            qty = parseInt(qtySelector.val().replace(/\D/g, ''))

        // Make sure we have a valid integer
        if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
          // We have a number!
        } else {
          // Not a number. Default to 1.
          qty = 1;
        }

        // Add or subtract from the current quantity
        if (el.hasClass('js-qty__adjust--plus')) {
          qty = qty + 1;
        } else {
          qty = qty - 1;
          if (qty <= 0) qty = 0;
        }

        // Update the input's number
        qtySelector.val(qty).trigger('change');

        $('[data-update]').addClass('cart--dirty');
        $('[data-update]').addClass('heartBeat');
        setTimeout(function() {
          $('[data-update]').removeClass('heartBeat');
        }, 1300);


      });
    }

  });
  return Cart;
})();


theme.Default = (function() {
  function Default(container) {}
  return Default;
})();

$(document).on('shopify:section:load', theme.moveTags);

$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('header', theme.Header);
  sections.register('parallax', theme.Parallax);
  sections.register('video', theme.Video);
  sections.register('product', theme.Product);
  sections.register('footer', theme.Footer);
  sections.register('slideshow', theme.Slideshow);
  sections.register('index-map', theme.Maps);
  sections.register('index-columns', theme.Columns);
  sections.register('related', theme.Related);
  sections.register('cart', theme.Cart);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Wrap videos in div to force responsive layout.
  slate.rte.wrapTable();
  slate.rte.iframeReset();

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }

  // Animate on scroll
  var showAnimations = $('body').data('animations');
  if( showAnimations &&  window.AOS ) {
    AOS.init({ once: true });
    $('body').addClass('aos-initialized');
  }

  // Detect keyboard interaction
  $(document).on( 'mousedown', function(event) {
    $('body').removeClass( 'focus-enabled' );
  }).keyup(function(event) {
    // on TAB key press
    if ( event.keyCode === 9 ) {
      $('body').addClass( 'focus-enabled' );
    }
  });

  $(document).one('touchstart', function() {
    theme.TouchDetect.setTouch();
  });

});

$(document).ajaxComplete(function() {
  $(window).resize();
});

//Custom Action By Ismail

//These functions are for social fadeIn & fadeOut
$(document).on('mouseover','.grid-uniform .grid__item', function(){
  	$(this).find(".article_social_toggle img").css({opacity:1});
    var style = {
      "opacity": "1",
      "transform": "translateX(0)",
      "transition": "all .5s",
      "z-index": "0", 
      "margin-left": "0px"
    };
  	$(this).find('.article_social_content').css(style);
});

$(document).on('mouseover','.blog_article_list_view .blog__article', function(){
  	$(this).find(".article_social_toggle img").css({opacity:1});
    var style = {
      "opacity": "1",
      "transform": "translateX(0)",
      "transition": "all .5s",
      "z-index": "0", 
      "margin-left": "0px"
    };
  	$(this).find('.article_social_content').css(style);
});

$(document).on('mouseleave','.grid-uniform .grid__item', function(){
 	$(this).find(".article_social_toggle img").css({opacity:0.5});
  	var style = {
      "opacity": "0",
      "transform": "translateX(0)",
      "transition": "all 0.5s",
      "z-index": "-1",
      "margin-left": "-60px"
    };
  	$(this).find('.article_social_content').css(style);
});

$(document).on('mouseleave','.blog_article_list_view .blog__article', function(){
  	$(this).find(".article_social_toggle img").css({opacity:0.5});
  	var style = {
      "opacity": "0",
      "transform": "translateX(0)",
      "transition": "all 0.5s",
      "z-index": "-1",
      "margin-left": "-60px"
    };
  	$(this).find('.article_social_content').css(style);
});



//fuctions for Blog sorting.
function sortUsingNestedText_asc(parent, childSelector) {
    var items = parent.children(childSelector).sort(function(a, b) {
        var vA = $(a).find("h5").text();
        var vB = $(b).find("h5").text();
        return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
    });
    parent.append(items);
}

function sortUsingNestedText_desc(parent, childSelector) {
    var items = parent.children(childSelector).sort(function(a, b) {
        var vA = $(a).find("h5").text();
        var vB = $(b).find("h5").text();
        return (vA < vB) ? 1 : (vA > vB) ? -1 : 0;
    });
    parent.append(items);
}

function sortUsingNestedDate_asc(parent, childSelector) {
    var items = parent.children(childSelector).sort(function(a, b) {
        var vA = $(a).find(".blog_article_date").text();
        var vB = $(b).find(".blog_article_date").text();
        return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
    });
    parent.append(items);
}

function sortUsingNestedDate_desc(parent, childSelector) {
    var items = parent.children(childSelector).sort(function(a, b) {
        var vA = $(a).find(".blog_article_date").text();
        var vB = $(b).find(".blog_article_date").text();
        return (vA < vB) ? 1 : (vA > vB) ? -1 : 0;
    });
    parent.append(items);
}


//social toggle for mobile view
$(document).on('mouseover','.list_uniform .mail', function(){
  var parent = $(this).parent();
  parent.find('.mail').attr('src', 'https://cdn.shopify.com/s/files/1/0342/0720/3459/files/mail2.png?v=1599046843');
});

$(document).on('mouseleave','.list_uniform .mail', function(){
  var parent = $(this).parent();
  parent.find('.mail').attr('src', 'https://cdn.shopify.com/s/files/1/0342/0720/3459/files/mail_1c470538-1bec-42c9-81c5-c5676f845bd1.png?v=1599043945');
});

$(document).on('mouseover','.grid-uniform .mail', function(){
  var parent = $(this).parent();
  parent.find('.mail').attr('src', 'https://cdn.shopify.com/s/files/1/0342/0720/3459/files/mail2.png?v=1599046843');
});

$(document).on('mouseleave','.grid-uniform .mail', function(){
  var parent = $(this).parent();
  parent.find('.mail').attr('src', 'https://cdn.shopify.com/s/files/1/0342/0720/3459/files/mail_1c470538-1bec-42c9-81c5-c5676f845bd1.png?v=1599043945');
});

$(document).on('mouseover','.blog__article .article_page_social_p .email_link .mail', function(){
  var parent = $(this).parent();
  parent.find('.mail').attr('src', 'https://cdn.shopify.com/s/files/1/0342/0720/3459/files/mail2.png?v=1599046843');
});

$(document).on('mouseleave','.blog__article .article_page_social_p .email_link .mail', function(){
  var parent = $(this).parent();
  parent.find('.mail').attr('src', 'https://cdn.shopify.com/s/files/1/0342/0720/3459/files/mail3.png?v=1599046878');
});

//Article image hover effect 
$(document).on('mouseover','.grid-uniform .blog_article_image_wrap', function(){
  var parent = $(this).parent();
  var style = {
    "transform": "translateX(0)",
    "transition": "all .2s",
    "margin-top": "-207px"
  };
  var style1 = {
    "transition": "transform 1.1s ease-out",
    "transform": "scale(1.05)"
  }
  parent.find('.blog_article_title_container_wrap_p_desktop').css(style);
  parent.find('.blog_article_image_container').css(style1);
});

$(document).on('mouseleave','.grid-uniform .blog_article_image_wrap', function(){
  var parent = $(this).parent();
  var style = {
    "transform": "translateX(0)",
    "transition": "all .2s",
    "margin-top": "-197px"
  };
  var style1 = {
    "transition": "transform 1.1s ease-out",
    "transform": "scale(1)"
  }
  parent.find('.blog_article_title_container_wrap_p_desktop').css(style);
  parent.find('.blog_article_image_container').css(style1);
});

$(document).on('mouseover','.grid-uniform .blog_article_title_container_wrap_p_desktop', function(){
  var parent = $(this).parent();
  var style = {
    "transform": "translateX(0)",
    "transition": "all .2s",
    "margin-top": "-207px"
  };
  var style1 = {
    "transition": "transform 1.1s ease-out",
    "transform": "scale(1.05)"
  }
  parent.find('.blog_article_title_container_wrap_p_desktop').css(style);
  parent.find('.blog_article_image_container').css(style1);
});

$(document).on('mouseleave','.grid-uniform .blog_article_title_container_wrap_p_desktop', function(){
  var parent = $(this).parent();
  var style = {
    "transform": 'translateX(0)',
    "transition": 'all .2s',
    "margin-top": '-197px'
  };
  var style1 = {
    "transition": 'transform 1.1s ease-out',
    "transform": 'scale(1)'
  }
  parent.find('.blog_article_title_container_wrap_p_desktop').css(style);
  parent.find('.blog_article_image_container').css(style1);
});

//For Reaction when scroll
$(document).ready(function() {
  var currLoc = $(location).attr('href');
  $(window).scroll(function() {
    var str1= "brand";
    var curPos = $(document).scrollTop();
    if (curPos > 500) {
      var navi = {
        "opacity": "1",
        "transform": "translateY(0)",
        "transition": "all .5s",
        "z-index": "0", 
        "bottom": "15%"
      };
  	  $('.navigation').css(navi);
    }
    else {
      var navi1 = {
        "opacity": "0",
        "transform": "translateY(0)",
        "transition": "all .5s",
        "z-index": "0", 
        "bottom": "5%"
      };
  	  $('.navigation').css(navi1);
    }

    var tmp = 140;
    if ($(window).width() < 420) 
      tmp = 60;
    if (currLoc.indexOf(str1) != -1) {
      var array = [];
      var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'];
      for (var i = 0; i < 27; i ++) {
        var ddd = '#brand_container_alphabets_p_' + letter[i];
        array[i] = $(ddd).offset().top - tmp;
      }
      var style={
        'color': 'black',
        'border-bottom': '1px solid #bb0e1e'
      };
      var style1={
        'color': 'grey',
        'border-bottom': 'none'
      };

      for (i = 0; i < 26; i ++) {
        if (curPos > array[i] && curPos < array[i + 1]) {
          $('.brand_alphabet').css(style1);
          var dd = '.brand_alphabet.' + letter[i];
          $(dd).css(style);
        }
      }
    }
  });
});

$('.blog_news_tooltip_content').on('click', function(e) {
  e.preventDefault();
});

/*Dropdown Menu*/
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});

$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});

$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

//For Blog filter on desktop
$('.blog_filter_p .dropdown-menu.filter li').click(function () {
  var input = $(this).parents('.dropdown').find('input').val();
  var for_grid = $(".blog_article_grid_view .large--one-third");
  var for_list = $(".blog_article_list_view .blog__article");
  var view_mode = $('.blog_view_p .dropdown-menu.viewmode').parents('.dropdown').find('input').val();
  if (input == 'm_ac') {
    if (view_mode != "m_list") {
      for_grid.fadeOut();
      for_grid.fadeIn();
    }
    else {
      for_list.fadeOut();
      for_list.fadeIn();
    }
  }
  else if (input == 'm_cc') {
    if (view_mode != "m_list") {
      for_grid.fadeOut();
  	  $(".large--one-third.CC").fadeIn();
    }
    else {
      for_list.fadeOut();
      $(".blog_article_list_view .CC").fadeIn();
    }
  }
  else if (input == "m_vc") {
    if (view_mode != "m_list") {
      for_grid.fadeOut();
 	  $(".large--one-third.VC").fadeIn();
    }
    else {
      for_list.fadeOut();
      $(".blog_article_list_view .VC").fadeIn();
    }
  }
}); 

//For Blog filter on mobile
$('.container.filter .dropdown-menu.filter li').click(function () {
  var input = $(this).parents('.dropdown').find('input').val();
  var for_grid = $(".blog_article_grid_view .large--one-third");
  var for_list = $(".blog_article_list_view .blog__article");
  var view_mode = $('.blog_view_sort_wrap_p_mobile .dropdown-menu.viewmode').parents('.dropdown').find('input').val();
  if (input == 'm_ac') {
    if (view_mode != "m_list") {
      for_grid.fadeOut();
      for_grid.fadeIn();
    }
    else {
      for_list.fadeOut();
      for_list.fadeIn();
    }
  }
  else if (input == 'm_cc') {
    if (view_mode != "m_list") {
      for_grid.fadeOut();
  	  $(".large--one-third.CC").fadeIn();
    }
    else {
      for_list.fadeOut();
      $(".blog_article_list_view .CC").fadeIn();
    }
  }
  else if (input == "m_vc") {
    if (view_mode != "m_list") {
      for_grid.fadeOut();
 	  $(".large--one-third.VC").fadeIn();
    }
    else {
      for_list.fadeOut();
      $(".blog_article_list_view .VC").fadeIn();
    }
  }
}); 


//For Blog View on mobile
$('.dropdown-menu.viewmode li').click(function () {
  var input = $(this).parents('.dropdown').find('input').val();
  if (input === "m_grid")
  {
    $(".blog_article_list_view").fadeOut();
    $(".blog_article_grid_view").fadeIn(2000);
  }
  if (input === "m_list")
  {
    $(".blog_article_grid_view").fadeOut();
    $(".blog_article_list_view").fadeIn(2000);
  }
});

//For Blog Sort on desktop
$('.blog_sort_p .dropdown-menu.sortmode li').click(function () {
  var input = $(this).parents('.dropdown').find('input').val();
  var for_grid = $('.blog_article_grid_view .grid-uniform');
  var for_grid_str = ".blog_article_grid_view .large--one-third";
  var for_list = $('.blog_article_list_view .list_uniform');
  var for_list_str = ".blog_article_list_view .blog__article";
  var view_mode = $('.blog_view_p .dropdown-menu.viewmode').parents('.dropdown').find('input').val();
  if (view_mode != "m_list") {
    if (input == "m_atz")
      sortUsingNestedText_asc(for_grid, for_grid_str);
    else if (input == "m_zta")
      sortUsingNestedText_desc(for_grid, for_grid_str);
    else if (input == "m_nto")
      sortUsingNestedDate_asc(for_grid, for_grid_str);
    else if (input == "m_otn")
      sortUsingNestedDate_desc(for_grid, for_grid_str);
  }
  else {
    if (input == "m_atz")
      sortUsingNestedText_asc(for_list, for_list_str);
    else if (input == "m_zta")
      sortUsingNestedText_desc(for_list, for_list_str);
    else if (input == "m_nto")
      sortUsingNestedDate_asc(for_list, for_list_str);
    else if (input == "m_otn")
      sortUsingNestedDate_desc(for_list, for_list_str);
  }
});

//For Blog Sort on mobile
$('.blog_view_sort_wrap_p_mobile .dropdown-menu.sortmode li').click(function () {
  var input = $(this).parents('.dropdown').find('input').val();
  var for_grid = $('.blog_article_grid_view .grid-uniform');
  var for_grid_str = ".blog_article_grid_view .large--one-third";
  var for_list = $('.blog_article_list_view .list_uniform');
  var for_list_str = ".blog_article_list_view .blog__article";
  var view_mode = $('.blog_view_sort_wrap_p_mobile .dropdown-menu.viewmode').parents('.dropdown').find('input').val();
  if (view_mode != "m_list") {
    if (input == "m_atz")
      sortUsingNestedText_asc(for_grid, for_grid_str);
    else if (input == "m_zta")
      sortUsingNestedText_desc(for_grid, for_grid_str);
    else if (input == "m_nto")
      sortUsingNestedDate_asc(for_grid, for_grid_str);
    else if (input == "m_otn")
      sortUsingNestedDate_desc(for_grid, for_grid_str);
  }
  else {
    if (input == "m_atz")
      sortUsingNestedText_asc(for_list, for_list_str);
    else if (input == "m_zta")
      sortUsingNestedText_desc(for_list, for_list_str);
    else if (input == "m_nto")
      sortUsingNestedDate_asc(for_list, for_list_str);
    else if (input == "m_otn")
      sortUsingNestedDate_desc(for_list, for_list_str);
  }
});


//Filter on brand pages
$('input:radio[name=radio]').change(function() {
  if (this.value == 'all') {
    $('.brand_container_alphabet_p .brand_p').fadeOut();
    $('.brand_container_alphabet_p .brand_p').fadeIn();
    $('label[for=radio-1]').css('color', 'black');
    $('label[for=radio-2]').css('color', 'grey');
    $('label[for=radio-3]').css('color', 'grey');
  }
  else if (this.value == 'uk') {
    $('.brand_container_alphabet_p .brand_p').fadeOut();
    $('.brand_container_alphabet_p .brand_p.UK').fadeIn();
    $('label[for=radio-1]').css('color', 'grey');
    $('label[for=radio-2]').css('color', 'black');
    $('label[for=radio-3]').css('color', 'grey');
  }
  else {
    $('.brand_container_alphabet_p .brand_p').fadeOut();
    $('.brand_container_alphabet_p .brand_p.Inter').fadeIn();
    $('label[for=radio-1]').css('color', 'grey');
    $('label[for=radio-2]').css('color', 'grey');
    $('label[for=radio-3]').css('color', 'black');
  }
});

//Brand Alphabetical Navigation
$('.brand_alphabet.A').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_A').offset().top - tmp;
	          $("html, body").animate( 
                { scrollTop: pos }, 500); 
//   window.scroll({
//     top: pos, 
//     left: 0, 
//     behavior: 'smooth'
// 	});
});
$('.brand_alphabet.B').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_B').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.C').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_C').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.D').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_D').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.E').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_E').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.F').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_F').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.G').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_G').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.H').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_H').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.I').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_I').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.J').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_J').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.K').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_K').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.L').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_L').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.M').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_M').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.N').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_N').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.O').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_O').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.P').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_P').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.Q').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_Q').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.R').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_R').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.S').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_S').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.T').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_T').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.U').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_U').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.V').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_V').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.W').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_W').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.X').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_X').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.Y').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_Y').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.Z').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_Z').offset().top - tmp;
  window.scroll({
  top: pos, 
  left: 0, 
  behavior: 'smooth'
});
});
$('.brand_alphabet.0-9').click(function() {
  var style={
    'color': 'black',
    'border-bottom': '1px solid #bb0e1e'
  };
  var style1={
    'color': 'grey',
    'border-bottom': 'none'
  };
  $('.brand_alphabet').css(style1);
  $(this).css(style);
  var tmp = 100;
  if ($(window).width() < 420) {
    tmp = 20;
  }
  var pos = $('#brand_container_alphabets_p_0-9').offset().top - tmp;
  window.scroll({
    top: pos, 
    left: 0, 
    behavior: 'smooth'
  });
});

//Arrow navigation
$('.navigation').click(function() {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
});

//product type filter on brand pages
$('.brand_top_level_product_type_filter_p').on('change', function () {
  var str = $(this).val();
  $(this).css('color', 'black');
  str = str.replace(/ /g,'');
  if (str == 'all') {
    $('.brand_p').fadeOut();
    $('.brand_p').fadeIn();
  }
  else {
    $('.brand_p').fadeOut();
    $('.' + str).fadeIn();
  }
});

$('.collection_brand_product_type_select_p').on('change', function () {
  var str = $(this).val();
  str = str.replace(/ /g,'');
  $(this).css('color', 'black');
  if (str == 'all') {
    $('.grid-uniform .grid__item').fadeOut();
    $('.grid-uniform .grid__item').fadeIn();
  }
  else {
    $('.grid-uniform .grid__item').fadeOut();
    $('.' + str).fadeIn();
  }
});

$(document).ready(function() {
  //text-slider-left & right div width
  var wsize = $(window).width();
  if (wsize > 768) {
    var tmp = 0;
    var tt = (wsize - 60) * 0.3424 + 30;
    if (wsize >= 1180) {
      tmp = ( wsize - 1180) / 2;
      tt = 413.5;
    }
    var tmp1 = tmp + tt;
    var tmp2 = $(window).width() - tmp1;
    $('.slider-d-p_container').css('padding-left', tmp);
    $('.abcdefg').css('width', tmp1);
    $('.abcdef').css('width', tmp2);
    $('.abcde').css('width', tmp1);
    $('.abcd').css('width', tmp2);
    var img_width = (tmp2 - wsize * 0.0669) / 4;
    var img_height = (img_width + 80) * 5 / 4;
    $('.collection-text-slider-right .large--two-thirds .multiple-items .slider-b-slide').css('height', img_height);
    $('.collection-text-slider-left .large--two-thirds .multiple-items .slider-b-slide').css('height', img_height);
    $('.collection-text-slider-right .grid .arrow-hold').css('top', img_height - 10);
    $('.collection-text-slider-left .grid .arrow-hold').css('top', img_height - 10);
    $('.collection-text-slider-right .grid .arrow-hold_p').css('top', img_height - 10);
    $('.collection-text-slider-left .grid .arrow-hold_p').css('top', img_height - 10);
  }
  
  var mob_height = window.innerHeight - 56;
  if (wsize < 431) {
    $('.homepage-image-container').height(mob_height);
    $('.homepage-image.homepage--white').height(mob_height);
  }
  
  //text-slider-left & right arrow action
  var scrollStep = 200,
      parent_right = $(".abcdef"),
      parent_left = $(".abcd"), 
      parent_featured = $(".featured-category-slider .featured_carousel_p"),
      parent_featured_m = $(".featured-category-slider .mobile-section");
  parent_left.scrollLeft(10000);
  parent_featured_m.scrollLeft(10000);
  //Start the scrolling process
  $(".panner_right").on("click", function () {
    var data = $(this).data('scrollModifier'),
        direction = parseInt(data, 10);
	var newOffset = parent_right.scrollLeft() + (scrollStep * direction);
    $(".collection-text-slider-right .arrow-hold_p").css("opacity", "1");
	parent_right.animate({ scrollLeft: newOffset }, 500);
  });
  $(".panner_left").on("click", function () {
    var data = $(this).data('scrollModifier'),
        direction = parseInt(data, 10);
	var newOffset = parent_left.scrollLeft() + (scrollStep * direction);
    $(".collection-text-slider-left .arrow-hold_p").css("opacity", "1");
	parent_left.animate({ scrollLeft: newOffset }, 500);
  });
  $(".panner_left_p").on("click", function () {
    var data = $(this).data('scrollModifier'),
        direction = parseInt(data, 10);
	var newOffset = parent_right.scrollLeft() + (scrollStep * direction);
	parent_right.animate({ scrollLeft: newOffset }, 500);
  });
    $(".panner_right_p").on("click", function () {
    var data = $(this).data('scrollModifier'),
        direction = parseInt(data, 10);
	var newOffset = parent_left.scrollLeft() + (scrollStep * direction);
	parent_left.animate({ scrollLeft: newOffset }, 500);
  });
  $(".featured-category-slider .arrow-hold").on("click", function () {
    var data = $(this).children().data('scrollModifier'),
        direction = parseInt(data, 10),
        tmp = parent_featured.width() / 4;
	var newOffset = parent_featured.scrollLeft() + (tmp * direction);
	parent_featured.animate({ scrollLeft: newOffset }, 500);
  });
  $(".featured-category-slider .arrow-hold_p").on("click", function () {
    var data = $(this).children().data('scrollModifier'),
        direction = parseInt(data, 10),
        tmp = parent_featured.width() / 4;
	var newOffset = parent_featured.scrollLeft() + (tmp * direction);
	parent_featured.animate({ scrollLeft: newOffset }, 500);
  });
  $(".featured-category-slider .featured_carousel_p").scroll(function() {
    if (parent_featured.scrollLeft() > 0) {
      $(".featured-category-slider .arrow-hold_p").css("opacity", "1");
    }
    else if (parent_featured.scrollLeft() == 0) {
      $(".featured-category-slider .arrow-hold_p").css("opacity", "0");
    }
  });
  
  $(".collection-text-slider-right .large--two-thirds").scroll(function() {
    if (parent_right.scrollLeft() > 0) {
      $(".collection-text-slider-right .arrow-hold_p").css("opacity", "1");
    }
    else if (parent_right.scrollLeft() == 0) {
      $(".collection-text-slider-right .arrow-hold_p").css("opacity", "0");
    }
  });
  $(".collection-text-slider-left .large--two-thirds").scroll(function() {
    var t = $(this).width() * 40 * 7 / 100;
    if (parent_left.scrollLeft() < t) {
      $(".collection-text-slider-left .arrow-hold_p").css("opacity", "1");
    }
    else if (parent_left.scrollLeft() > t) {
      $(".collection-text-slider-left .arrow-hold_p").css("opacity", "0");
    }
  });
  
  
  $('.fixed_header_p .main-menu>li').on('mouseenter', function() {
    $('.fixed_header_p .header_overlay_p').css('opacity', '.3');
  });
  $('.fixed_header_p .main-menu>li').on('mouseleave', function() {
    $('.fixed_header_p .header_overlay_p').css('opacity', '0');
  });
	
  

  //Pavel's js for New product page design
  $('.photo_container_p').height($('.photo_container_p .product-single__photos').width());
  var product_image_selector = $('.product-page .grid__item.large--two-thirds .product__thumbs--square');
  
  if ($(product_image_selector).height() >= $('.product-page .grid__item.large--two-thirds .product__thumbs--square ul').height()) {
    $('.overflow_arrow_p').css('display', 'none');
  }

  
  // When any accordion title is clicked...
  $(".accordion__title_p").click(function() {
    const $accordion_wrapper = $(this).parent();
    const $accordion_content = $(this).parent().find(".accordion__content_p");
    const $accordion_open = "accordion--open";

    // If this accordion is already open
    if ($accordion_wrapper.hasClass($accordion_open)) {
      $accordion_content.slideUp();                     // Close the content.
      $accordion_wrapper.removeClass($accordion_open);  // Remove the accordionm--open class.
    }
    // If this accordion is not already open
    else {
      $accordion_content.slideDown();                 // Show this accordion's content.
      $accordion_wrapper.addClass($accordion_open);   // Add the accordion--open class.
    }
  });
  $('.social_mobile_real_p').css('display', 'none');
  $('.social_mobile_p').on('click', function() {
      $('.social_mobile_real_p').toggle();
    });

  
  $('.swatch-element input').change(function(){
    $('.selected_color_p').text(this.value);
  });
  
  //THE COLLECTIONS: EDITOR'S PICKS animation
  $('.homepage-blog .grid__item .blog__article').on('click', function() {
    var current = $(this);
    $('.homepage-blog .grid__item .blog__article').each(function(){
      if ($(this) != current) {
        $(this).removeClass('active');
        $(this).parent().find('.behind_animation_p').css('opacity', '0');
        $(this).find('.blog_article_title_container_desktop').removeClass('active');
        $(this).find('.blog-tagname').css({'opacity': '1', 'transition':'opacity .3s .8s'});
        $(this).find('.blog_article_overlay').css('background-color', 'unset');
      }
    });
    current.addClass('active');
    current.find('.blog_article_title_container_desktop').addClass('active');
    current.find('.blog-tagname').css({'opacity': '0', 'transition':'opacity .3s'});
    current.find('.blog_article_overlay').css('background-color', 'black');
    current.parent().find('.behind_animation_p').css('opacity', '1');
  });
  
  //THE COLLECTIONS: EDITOR'S PICKS animation mobile
  $('.mobile-feature-slider .blog__article').on('click', function() {
    var current = $(this);
    $('.mobile-feature-slider .blog__article').each(function(){
      if ($(this) != current) {
        $(this).removeClass('active');
        $(this).find('.blog_article_title_container_desktop').removeClass('active');
        $(this).parent().find('.behind_animation_p').css('opacity', '0');
        $(this).find('.blog_article_overlay').css('background-color', 'unset');
        $(this).find('.plus_icon_container').removeClass('active');
      }
    });
    current.find('.plus_icon_container').addClass('active');
    current.addClass('active');
    current.find('.blog_article_title_container_desktop').addClass('active');
    current.find('.blog_article_overlay').css("background-color", "black");
    current.parent().find('.behind_animation_p').css('opacity', '1');
  });

  //FEATURED CATEGORIES Animation
  $('.featured-category-slider .fcs-slide_container_p .fcs-slide').on('click', function() {
    var current = $(this);
    $('.featured-category-slider .fcs-slide_container_p .fcs-slide').each(function(){
      if ($(this) != current) {
        $(this).removeClass('active');
        $(this).parent().find('.behind_animation_p').css('opacity', '0');
        $(this).find('.fcs-title').removeClass('active');
        $(this).find('.fcs-overlay').css('background-color', 'unset');
      }
    });
    current.addClass('active');
    current.parent().find('.behind_animation_p').css('opacity', '1');
    current.find('.fcs-title').addClass('active');
    current.find('.fcs-overlay').css('background-color', 'black');
  });

  //FEATURED CATEGORIES Animation Mobile
  $('.featured-category-slider .mobile-section .fcs-slide').on('click', function(event) {
    var current = $(this);
    var curpos = $(window).scrollTop();
    $('.featured-category-slider .mobile-section .fcs-slide').each(function(){
      if ($(this) != current) {
        $(this).removeClass('active');
        $(this).siblings('.behind_animation_p').removeClass('active');
        $(this).find('.fcs-title').removeClass('active');
        $(this).find('.fcs-button').removeClass('active');
        $(this).find('.fcs-overlay').css('background-color', 'rgba(0,0,0,0.5)');
      }
    });
    current.addClass('active');
    current.siblings('.behind_animation_p').addClass('active');
    
    setTimeout(function(){       
      var tt = current.siblings('.behind_animation_p').offset().top - 60;
      window.scroll({
        top: tt, 
        left: 0, 
        behavior: 'smooth'
      });
    }, 1200);
    current.find('.fcs-title').addClass('active');
    current.find('.fcs-button').addClass('active');
    current.find('.fcs-overlay').css({'background-color':'black', 'opacity':'1'});
  });  
  
  $(document).mouseup(function(e) {
    var container = $(".homepage-blog .blog__article");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      container.removeClass('active');
      container.parent().find('.behind_animation_p').css('opacity', '0');
      container.find('.blog_article_title_container_desktop').removeClass('active');
      container.find('.blog-tagname').css({'opacity': '1', 'transition':'opacity .3s .8s'});
      container.find('.blog_article_overlay').css('background-color', 'unset');
    }

    var container_fea = $(".featured-category-slider .fcs-slide_container_p .fcs-slide");
    if (!container_fea.is(e.target) && container_fea.has(e.target).length === 0) {
      container_fea.removeClass('active');
      container_fea.parent().find('.behind_animation_p').css('opacity', '0');
      container_fea.find('.fcs-title').removeClass('active');
      container_fea.find('.fcs-overlay').css('background-color', 'unset');
    }
    
    var container_fea_mob = $(".featured-category-slider .mobile-section .fcs-slide");
    if (!container_fea_mob.is(e.target) && container_fea_mob.has(e.target).length === 0) {
      container_fea_mob.removeClass('active');
      container_fea_mob.siblings('.behind_animation_p').removeClass('active');
      container_fea_mob.find('.fcs-title').removeClass('active');
      container_fea_mob.find('.fcs-button').removeClass('active');
      container_fea_mob.find('.fcs-overlay').css('background-color', 'rgba(0,0,0,0.5)');
    }    

    var container_mob = $(".mobile-feature-slider .blog__article");
    if (!container_mob.is(e.target) && container_mob.has(e.target).length === 0) {
      container_mob.removeClass('active');
      container_mob.parent().find('.behind_animation_p').css('opacity', '0');
      container_mob.find('.blog_article_overlay').css('background-color', 'unset');
      container_mob.find('.plus_icon_container').removeClass('active');
    }
    
    var container_search = $(".header__wrapper .nav--mobile .search-bar");
    if (!container_search.is(e.target) && container_search.has(e.target).length === 0) {
      container_search.parents('.header-search__wrapper').siblings('.logo-wrapper').find('img').css('opacity', '1');  
    }
    
    var filter_sorter = $(".boost-pfs-filter-top-sorting-wrapper");
    if (!filter_sorter.is(e.target) && filter_sorter.has(e.target).length === 0) {
      filter_sorter.siblings('.boost-pfs-filter-filter-dropdown').css('display', 'none');
      filter_sorter.parent().removeClass('boost-pfs-filter-sort-active');
    }
  });

  //Mobile header search button animation 
  $('.header__wrapper .nav--mobile .search-bar').on('click', function() {
    if ($(window).width() < 768) {
    var current = $(this);

      current.parents('.header-search__wrapper').siblings('.logo-wrapper').find('img').css('opacity', '0');
    }
  });
  $('.header__wrapper .nav--mobile .search-bar').on('focus', function() {
    if ($(window).width() < 768) {
    var current = $(this);

      current.parents('.header-search__wrapper').siblings('.logo-wrapper').find('img').css('opacity', '0');
    }
  });       
    $('.overflow_arrow_p').click(function() {
    var newOffset = product_image_selector.scrollTop() + 100;
    product_image_selector.animate({ scrollTop: newOffset }, 500);
  });
  $(window).resize(function(){
    $('.photo_container_p').height($('.photo_container_p .product-single__photos').width());
  });

  $('.plus_sign_link svg').on('mouseenter', function() {
    $(this).addClass('active');
    $(this).siblings('span').addClass('active');
  });
  
  $('.plus_sign_link').on('mouseleave', function() {
    $(this).children('svg').removeClass('active');
    $(this).children('span').removeClass('active');
  });
  
});

/* swatch code by Shopify for Pipeline */
jQuery(function() {
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  });
});
/* - end additional swatch code - */