(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{5285:function(e,n,t){"use strict";var r=t(5671),o=t(3144),c=t(7326),a=t(2531),u=t(245),i=t(1120),s=t(4942),l=t(7294),f=t(1664),p=t(7437),d=t.n(p),v=t(5893);function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,i.Z)(e);if(n){var o=(0,i.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,u.Z)(this,t)}}var y=function(e){(0,a.Z)(t,e);var n=h(t);function t(){var e;(0,r.Z)(this,t);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return e=n.call.apply(n,[this].concat(a)),(0,s.Z)((0,c.Z)(e),"state",{click:!0}),(0,s.Z)((0,c.Z)(e),"handleMenu",(function(){e.setState({click:!e.state.click})})),(0,s.Z)((0,c.Z)(e),"closeMenu",(function(n){e.setState({click:!0})})),e}return(0,o.Z)(t,[{key:"render",value:function(){var e=this;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("nav",{className:"navbar",children:(0,v.jsxs)("div",{className:"navbar-container",children:[(0,v.jsx)("a",{className:"navbar-logo",to:"/",onClick:function(){return e.closeMenu(1)},children:(0,v.jsx)("img",{src:"/img/logo.png",alt:""})}),(0,v.jsx)("div",{className:"menu-icon",onClick:this.handleMenu,children:(0,v.jsx)("label",{htmlFor:"",className:"menu-btn",children:(0,v.jsx)("i",{className:this.state.click?"fas fa-bars":"fas fa-times"})})}),(0,v.jsxs)("ul",{className:this.state.click?"nav-menu":"nav-menu active ".concat(d().removePadding),children:[(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(f.default,{href:"/",children:(0,v.jsx)("a",{className:1==this.props.page_no?"nav-links current-page":"nav-links",onClick:function(){return e.closeMenu(1)},children:"HOME"})})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(f.default,{href:"/teams",children:(0,v.jsx)("a",{className:4==this.props.page_no?"nav-links current-page":"nav-links",onClick:function(){return e.closeMenu(4)},children:"TEAMS"})})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)("a",{href:"https://projects.ce.pdn.ac.lk/",target:"_blank",rel:"noreferrer",className:"button",onClick:function(){return e.closeMenu(4)},children:"PROJECTS"})})]})]})})})}}]),t}(l.Component);n.Z=y},7942:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,c=(o=t(7294))&&o.__esModule?o:{default:o},a=t(4957),u=t(9898),i=t(639);var s={};function l(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),f=c.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?a.resolveHref(o,e.as):u||c}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=(n=c.default.Children.only(v))&&"object"===typeof n&&n.ref,_=i.useIntersection({rootMargin:"200px"}),j=r(_,2),k=j[0],Z=j[1],x=c.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);c.default.useEffect((function(){var e=Z&&t&&a.isLocalURL(p),n="undefined"!==typeof b?b:o&&o.locale,r=s[p+"%"+d+(n?"%"+n:"")];e&&!r&&l(o,p,d,{locale:n})}),[d,p,Z,b,t,o]);var w={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:u}))}(e,o,p,d,h,y,m,b)},onMouseEnter:function(e){a.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&a.getDomainLocale(d,E,o&&o.locales,o&&o.domainLocales);w.href=M||a.addBasePath(a.addLocale(d,E,o&&o.defaultLocale))}return c.default.cloneElement(n,w)};n.default=f},639:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,i=o.useRef(),s=o.useState(!1),l=r(s,2),f=l[0],p=l[1],d=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!a&&!f){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),c=t(6286),a="undefined"!==typeof IntersectionObserver;var u=new Map},5768:function(e,n,t){"use strict";t.r(n);var r=t(5671),o=t(3144),c=t(2531),a=t(245),u=t(1120),i=t(7294),s=t(5285),l=t(5893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var o=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}var p=function(e){(0,c.Z)(t,e);var n=f(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,o.Z)(t,[{key:"render",value:function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(s.Z,{page_no:2}),"Lates News"]})}}]),t}(i.Component);n.default=p},2588:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/latest",function(){return t(5768)}])},7437:function(e){e.exports={removePadding:"nav_removePadding__mwTu3"}},1664:function(e,n,t){e.exports=t(7942)},7326:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},5671:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},3144:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,{Z:function(){return o}})},1120:function(e,n,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.d(n,{Z:function(){return r}})},2531:function(e,n,t){"use strict";function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return o}})},245:function(e,n,t){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.d(n,{Z:function(){return c}});var o=t(7326);function c(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[774,888,179],(function(){return n=2588,e(e.s=n);var n}));var n=e.O();_N_E=n}]);