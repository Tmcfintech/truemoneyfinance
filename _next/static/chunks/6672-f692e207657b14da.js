"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6672],{75476:function(n,e,t){t.d(e,{Z:function(){return Z}});var r=t(85893),o=(t(67294),t(19532)),i=t(23526),c=t(78491);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var u=function(n){return(0,r.jsx)(c.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}({viewBox:"0 0 24 25"},n,{children:(0,r.jsx)("path",{d:"M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"})}))},l=t(67602),s=t(14141),d=t(76505),f=t(47851);function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(){var n=p(["\n  width: 16px;\n"]);return h=function(){return n},n}function b(){var n=p(["\n  margin-left: 4px;\n  text-align: right;\n  color: ",";\n  white-space: nowrap;\n"]);return b=function(){return n},n}function g(){var n=p(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  padding: 8px 16px;\n"]);return g=function(){return n},n}function x(){var n=p(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ",";\n  border: none;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"]);return x=function(){return n},n}var m=(0,s.ZP)(f.Z).withConfig({componentId:"sc-e3b8048d-0"})(h()),y=(0,s.ZP)(l.Z).withConfig({componentId:"sc-e3b8048d-1"})(b(),(function(n){return n.theme.colors.textSubtle})),j=(0,s.ZP)(i.Z).withConfig({componentId:"sc-e3b8048d-2"})(g(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.colors.inputSecondary}),(function(n){var e=n.theme,t=n.isWarning;return e.shadows[t?"warning":"inset"]})),v=(0,s.ZP)(d.Z).withConfig({componentId:"sc-e3b8048d-3"})(x(),(function(n){var e=n.textAlign;return void 0===e?"right":e}),(function(n){return n.theme.colors.textSubtle}));function O(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){O(n,e,t[e])}))}return n}function P(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var Z=function(n){var e=n.value,t=n.placeholder,c=void 0===t?"0.0":t,a=n.onUserInput,s=n.currencyValue,d=n.inputProps,f=n.innerRef,p=n.isWarning,h=void 0!==p&&p,b=n.decimals,g=void 0===b?18:b,x=n.unit,O=n.switchEditingUnits,Z=P(n,["value","placeholder","onUserInput","currencyValue","inputProps","innerRef","isWarning","decimals","unit","switchEditingUnits"]);return(0,r.jsx)(j,w({isWarning:h},Z,{children:(0,r.jsxs)(o.Z,{justifyContent:"flex-end",children:[(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(o.Z,{alignItems:"center",children:[(0,r.jsx)(v,w({pattern:"^[0-9]*[.,]?[0-9]{0,".concat(g,"}$"),inputMode:"decimal",min:"0",value:e,onChange:function(n){n.currentTarget.validity.valid&&a(n.currentTarget.value.replace(/,/g,"."))},placeholder:c,ref:f},d)),x&&(0,r.jsx)(y,{children:x})]}),s&&(0,r.jsx)(l.Z,{fontSize:"12px",textAlign:"right",color:"textSubtle",children:s})]}),O&&(0,r.jsx)(o.Z,{alignItems:"center",pl:"12px",children:(0,r.jsx)(m,{scale:"sm",variant:"text",onClick:O,children:(0,r.jsx)(u,{color:"textSubtle"})})})]})}))}},45273:function(n,e,t){t.d(e,{L:function(){return l},N:function(){return u}});var r=t(85893),o=(t(67294),t(34380)),i=t(47442),c=t(31289),a=t(47851),u=function(n){var e=n.onClick,t=n.expanded,c=n.children;return(0,r.jsxs)(a.Z,{"aria-label":"Hide or show expandable content",onClick:e,children:[c,t?(0,r.jsx)(o.Z,{color:"invertedContrast"}):(0,r.jsx)(i.Z,{color:"invertedContrast"})]})};u.defaultProps={expanded:!1};var l=function(n){var e=n.onClick,t=n.expanded,a=n.children;return(0,r.jsx)(c.Z,{variant:"text","aria-label":"Hide or show expandable content",onClick:e,endIcon:t?(0,r.jsx)(o.Z,{color:"primary"}):(0,r.jsx)(i.Z,{color:"primary"}),children:a})};l.defaultProps={expanded:!1}},20506:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(14141),o="sm",i="md";function c(){var n,e,t=(n=["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ',";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return c=function(){return t},t}var a=function(n){return n.scale===o?"24px":"32px"},u=r.ZP.input.attrs({type:"checkbox"}).withConfig({componentId:"sc-11bd21f1-0"})(c(),a,a,(function(n){return n.theme.colors.input}),(function(n){return n.theme.shadows.inset}),(function(n){return n.theme.shadows.focus}),(function(n){return n.theme.shadows.focus}),(function(n){return n.theme.colors.success}));u.defaultProps={scale:i};var l=u},33786:function(n,e,t){var r=t(85893),o=t(67294),i=t(14141),c=t(96273),a=t(43952),u=t(9696);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function d(){var n,e,t=(n=["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return d=function(){return t},t}var f=i.ZP.img.withConfig({componentId:"sc-9e69b26f-0"})(d());e.Z=function(n){var e=n.src,t=n.alt,i=n.width,d=n.height,p=s(n,["src","alt","width","height"]),h=(0,o.useRef)(null),b=(0,o.useState)(!1),g=b[0],x=b[1];return(0,o.useEffect)((function(){var n;return h.current&&(n=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(x(!0),n.disconnect())}))}),c.Z)).observe(h.current),function(){n&&n.disconnect()}}),[e]),(0,r.jsx)(a.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){l(n,e,t[e])}))}return n}({ref:h,height:d,width:i},p,{children:g?(0,r.jsx)(f,{src:e,alt:t}):(0,r.jsx)(u.Z,{})}))}},52841:function(n,e,t){var r=t(14141),o=t(33786);function i(){var n,e,t=(n=['\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: "";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return i=function(){return t},t}var c=(0,r.ZP)(o.Z).withConfig({componentId:"sc-cc5dea0d-0"})(i());e.Z=c},24016:function(n,e,t){t.d(e,{Z:function(){return v}});var r,o=t(85893),i=(t(67294),"default"),c="inverted",a=t(14141),u=t(57247),l=t(52841);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function f(){var n=d(["\n  position: absolute;\n  width: ","; // 92, 82 are arbitrary numbers to fit the variant\n\n  ","\n"]);return f=function(){return n},n}function p(){var n=d(["\n  position: absolute;\n  width: 50%;\n\n  ","\n"]);return p=function(){return n},n}var h,b=(0,a.ZP)(l.Z).withConfig({componentId:"sc-d928f27a-0"})(f(),(function(n){return n.variant===i?"92%":"82%"}),(0,u.bU)({variants:(r={},s(r,i,{bottom:"auto",left:0,right:"auto",top:0,zIndex:5}),s(r,c,{bottom:0,left:"auto",right:0,top:"auto",zIndex:6}),r)})),g=(0,a.ZP)(l.Z).withConfig({componentId:"sc-d928f27a-1"})(p(),(0,u.bU)({variants:(h={},s(h,i,{bottom:0,left:"auto",right:0,top:"auto",zIndex:6}),s(h,c,{bottom:"auto",left:0,right:"auto",top:0,zIndex:5}),h)})),x=t(43952);function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){m(n,e,t[e])}))}return n}function j(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var v=function(n){var e=n.primarySrc,t=n.secondarySrc,r=n.width,c=n.height,a=n.variant,u=void 0===a?i:a,l=n.primaryImageProps,s=void 0===l?{}:l,d=n.secondaryImageProps,f=void 0===d?{}:d,p=j(n,["primarySrc","secondarySrc","width","height","variant","primaryImageProps","secondaryImageProps"]),h=Math.floor(r/2);return(0,o.jsxs)(x.Z,y({position:"relative",width:r,height:c},p,{children:[(0,o.jsx)(b,y({variant:u,src:e,width:r,height:c},s)),(0,o.jsx)(g,y({variant:u,src:t,width:h,height:h},f))]}))}},47708:function(n,e,t){var r=t(85893),o=(t(67294),t(78491));function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsx)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){i(n,e,t[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:(0,r.jsx)("path",{d:"M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"})}))}},59113:function(n,e,t){var r=t(85893),o=(t(67294),t(78491));function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsx)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){i(n,e,t[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:(0,r.jsx)("path",{d:"M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"})}))}},18205:function(n,e,t){var r=t(85893),o=(t(67294),t(78491));function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsxs)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){i(n,e,t[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:[(0,r.jsx)("path",{d:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"}),(0,r.jsx)("path",{d:"M11.25 7.72H6.25V9.22H11.25V7.72Z"}),(0,r.jsx)("path",{d:"M18 15.75H13V17.25H18V15.75Z"}),(0,r.jsx)("path",{d:"M18 13.25H13V14.75H18V13.25Z"}),(0,r.jsx)("path",{d:"M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"}),(0,r.jsx)("path",{d:"M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"})]}))}},6722:function(n,e,t){var r=t(85893),o=(t(67294),t(78491));function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsx)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){i(n,e,t[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:(0,r.jsx)("path",{d:"M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z"})}))}},34380:function(n,e,t){var r=t(85893),o=(t(67294),t(78491));function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsx)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){i(n,e,t[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:(0,r.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))}},98496:function(n,e,t){var r=t(14141),o=t(67602);function i(){var n,e,t=(n=["\n  text-decoration: ",";\n  text-underline-offset: 0.1em;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return i=function(){return t},t}var c=(0,r.ZP)(o.Z).withConfig({componentId:"sc-987d539-0"})(i(),(function(n){var e=n.theme;return"underline dotted ".concat(e.colors.textSubtle)}));e.Z=c},82805:function(n,e,t){t.d(e,{O:function(){return l}});var r=t(19532),o=t(14141);function i(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function c(){var n=i(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return n},n}function a(){var n=i(["\n  gap: ",";\n  row-gap: ",";\n  column-gap: ",";\n"]);return a=function(){return n},n}var u=o.ZP.div.withConfig({componentId:"sc-e479e0f6-0"})(c()),l=(0,o.ZP)(r.Z).withConfig({componentId:"sc-e479e0f6-1"})(a(),(function(n){return n.gap}),(function(n){return n.rowGap}),(function(n){return n.columnGap}));e.Z=u},93897:function(n,e,t){t.d(e,{Z:function(){return jn}});var r=t(85893),o=t(67294),i=t(14141),c=t(17796),a=t(84206),u=t(85970),l=t(19532),s=t(67602),d=t(75476),f=t(31289),p=t(31236),h=t(31114),b=t(20506),g=t(7867),x=t(16695),m=t(20316),y=t(45273),j=t(23526),v=t(16108),O=t(88788),w=t(58677);function P(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Z(){var n=P(["\n  width: 100%;\n  background: ",";\n"]);return Z=function(){return n},n}function C(){var n=P(["\n  list-style-type: none;\n  margin-top: 16px;\n  padding: 0;\n  li {\n    margin: 0;\n    padding: 0;\n  }\n  li::before {\n    content: '\u2022';\n    margin-right: 4px;\n    color: ",";\n  }\n  li::marker {\n    font-size: 12px;\n  }\n"]);return C=function(){return n},n}var S=(0,i.ZP)(l.Z).withConfig({componentId:"sc-c4f468d9-0"})(Z(),(function(n){return n.theme.colors.dropdown})),k=i.ZP.ul.withConfig({componentId:"sc-c4f468d9-1"})(C(),(function(n){return n.theme.colors.textSubtle})),I=function(n){var e=n.isFarm,t=n.apr,i=n.displayApr,c=n.autoCompoundFrequency,a=n.multiplier,d=n.linkLabel,f=n.linkHref,h=n.performanceFee,b=(0,o.useState)(!1),x=b[0],m=b[1],P=(0,g.$G)().t,Z=(0,u.Z)((0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{children:P("The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.")}),(0,r.jsx)(s.Z,{my:"24px",children:P("For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.")}),(0,r.jsx)(s.Z,{children:P("This amount is already included in all APR calculations for the farm.")})]}),{placement:"top-end",tooltipOffset:[20,10]}),C=Z.targetRef,I=Z.tooltip,D=Z.tooltipVisible,A=e?4:2,L=(100*(0,w.g5)(t,c>0?c:1,365,h)).toFixed(2);return(0,r.jsxs)(S,{p:"16px",flexDirection:"column",children:[(0,r.jsx)(y.L,{expanded:x,onClick:function(){return m((function(n){return!n}))},children:P(x?"Hide":"Details")}),x&&(0,r.jsxs)(j.Z,{px:"8px",children:[(0,r.jsxs)(v.Z,{gridTemplateColumns:"2.5fr 1fr",gridRowGap:"8px",gridTemplateRows:"repeat(".concat(A,", auto)"),children:[e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{color:"textSubtle",small:!0,children:P("APR (incl. LP rewards)")}),(0,r.jsxs)(s.Z,{small:!0,textAlign:"right",children:[i,"%"]})]}),(0,r.jsx)(s.Z,{color:"textSubtle",small:!0,children:P(e?"Base APR (CAKE yield only)":"APR")}),(0,r.jsxs)(s.Z,{small:!0,textAlign:"right",children:[t.toFixed(2),"%"]}),(0,r.jsx)(s.Z,{color:"textSubtle",small:!0,children:P("APY (%compoundTimes%x daily compound)",{compoundTimes:c>0?c:1})}),(0,r.jsxs)(s.Z,{small:!0,textAlign:"right",children:[L,"%"]}),e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{color:"textSubtle",small:!0,children:P("Farm Multiplier")}),(0,r.jsxs)(l.Z,{justifyContent:"flex-end",alignItems:"flex-end",children:[(0,r.jsx)(s.Z,{small:!0,textAlign:"right",mr:"4px",children:a}),(0,r.jsx)("span",{ref:C,children:(0,r.jsx)(p.Z,{color:"textSubtle",width:"16px",height:"16px"})}),D&&I]})]})]}),(0,r.jsxs)(k,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(s.Z,{fontSize:"12px",textAlign:"center",color:"textSubtle",display:"inline",children:P("Calculated based on current rates.")})}),e&&(0,r.jsx)("li",{children:(0,r.jsx)(s.Z,{fontSize:"12px",textAlign:"center",color:"textSubtle",display:"inline",children:P("LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.")})}),(0,r.jsx)("li",{children:(0,r.jsx)(s.Z,{fontSize:"12px",textAlign:"center",color:"textSubtle",display:"inline",children:P("All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.")})}),h>0&&(0,r.jsx)("li",{children:(0,r.jsx)(s.Z,{mt:"14px",fontSize:"12px",textAlign:"center",color:"textSubtle",display:"inline",children:P("All estimated rates take into account this pool\u2019s %fee%% performance fee",{fee:h})})})]}),(0,r.jsx)(l.Z,{justifyContent:"center",mt:"24px",children:(0,r.jsx)(O.Z,{href:f,children:d})})]})]})},D=t(76505),A=t(47851),L=t(6722),E=t(78491);function T(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var R=function(n){return(0,r.jsx)(E.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){T(n,e,t[e])}))}return n}({viewBox:"0 0 19 19"},n,{children:(0,r.jsx)("path",{d:"M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"})}))},F=t(70794);function N(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){N(n,e,t[e])}))}return n}var z,U,V={0:1,1:.142857142,2:.071428571,3:.033333333};!function(n){n[n.TOKEN=0]="TOKEN",n[n.USD=1]="USD"}(z||(z={})),function(n){n[n.ROI_BASED_ON_PRINCIPAL=0]="ROI_BASED_ON_PRINCIPAL",n[n.PRINCIPAL_BASED_ON_ROI=1]="PRINCIPAL_BASED_ON_ROI"}(U||(U={}));var B={controls:{compounding:!0,compoundingFrequency:1,activeCompoundingIndex:0,stakingDuration:3,mode:U.ROI_BASED_ON_PRINCIPAL,editingCurrency:z.USD},data:{principalAsToken:"0.00",principalAsUSD:"",roiUSD:0,roiTokens:0,roiPercentage:0}},M=function(n,e){switch(e.type){case"setStakingDuration":var t=_({},n.controls,{stakingDuration:e.payload});return _({},n,{controls:t});case"toggleCompounding":var r=!n.controls.compounding,o=_({},n.controls,{compounding:r});return _({},n,{controls:o});case"setCompoundingFrequency":var i=e.payload,c=i.index,a=i.autoCompoundFrequency;if(a)return _({},n,{controls:_({},n.controls,{compoundingFrequency:a})});var u=V[c],l=_({},n.controls,{compoundingFrequency:u,activeCompoundingIndex:c});return _({},n,{controls:l});case"setPrincipal":var s=e.payload,d=s.principalAsUSD,f=s.principalAsToken,p=_({},n.data,{principalAsUSD:d,principalAsToken:f});return{controls:_({},n.controls,{mode:U.ROI_BASED_ON_PRINCIPAL}),data:p};case"setPrincipalForTargetRoi":var h=e.payload,b=h.principalAsUSD,g=h.principalAsToken,x=h.roiPercentage,m=_({},n.data,{principalAsUSD:b,principalAsToken:g,roiPercentage:x});return _({},n,{data:m});case"setCalculatorMode":var y=e.payload,j=_({},n.controls,{mode:y});if(y===U.PRINCIPAL_BASED_ON_ROI){var v=parseFloat(n.data.roiUSD.toFixed(2));return{controls:j,data:_({},n.data,{roiUSD:v})}}return _({},n,{controls:j});case"setRoi":var O=_({},n.data,e.payload);return _({},n,{data:O});case"setTargetRoi":var w=e.payload,P=w.roiUSD,Z=w.roiTokens,C=_({},n.data,{roiUSD:P,roiTokens:Z});return{controls:_({},n.controls,{mode:U.PRINCIPAL_BASED_ON_ROI}),data:C};case"toggleEditingCurrency":var S=n.controls.editingCurrency===z.USD?z.TOKEN:z.USD,k=_({},n.controls,{editingCurrency:S});return _({},n,{controls:k});default:return n}},H=function(n,e,t,r,i){var c=(0,o.useReducer)(M,B),a=c[0],u=c[1],l=a.data,s=l.principalAsUSD,d=l.roiUSD,f=a.controls,p=f.compounding,h=f.compoundingFrequency,b=f.stakingDuration,g=f.mode;(0,o.useEffect)((function(){r>0&&u({type:"setCompoundingFrequency",payload:{autoCompoundFrequency:r}})}),[r]),(0,o.useEffect)((function(){if(g===U.ROI_BASED_ON_PRINCIPAL){var n=parseFloat(s),r=p?h:0,o=(0,w.A1)({principalInUSD:n,apr:t,earningTokenPrice:e,compoundFrequency:r,performanceFee:i}),c=!Number.isNaN(o[b]),a=c?o[b]:0,l=c?a*e:0,d=c?(0,w.Lu)({amountEarned:l,amountInvested:n}):0;u({type:"setRoi",payload:{roiUSD:l,roiTokens:a,roiPercentage:d}})}}),[s,t,b,e,i,p,h,g]),(0,o.useEffect)((function(){if(g===U.PRINCIPAL_BASED_ON_ROI){var e=(0,w._b)(d,t,p?h:0,i),r=Number.isNaN(e[b])?0:e[b],o=new F.Z(r).div(n),c=(0,w.Lu)({amountEarned:d,amountInvested:r});u({type:"setPrincipalForTargetRoi",payload:{principalAsUSD:r.toFixed(2),principalAsToken:o.toFixed(10),roiPercentage:c}})}}),[b,t,p,h,g,d,n,i]);return{state:a,setPrincipalFromUSDValue:function(e){var t=new F.Z(e).div(n),r=t.gt(0)?t.toFixed(10):"0.00";u({type:"setPrincipal",payload:{principalAsUSD:e,principalAsToken:r}})},setPrincipalFromTokenValue:(0,o.useCallback)((function(e){var t=new F.Z(e).times(n),r=t.gt(0)?t.toFixed(2):"0.00";u({type:"setPrincipal",payload:{principalAsUSD:r,principalAsToken:e}})}),[n]),setStakingDuration:function(n){u({type:"setStakingDuration",payload:n})},toggleCompounding:function(){u({type:"toggleCompounding"})},toggleEditingCurrency:function(){u({type:"toggleEditingCurrency"})},setCompoundingFrequency:function(n){u({type:"setCompoundingFrequency",payload:{index:n}})},setCalculatorMode:function(n){u({type:"setCalculatorMode",payload:n})},setTargetRoi:function(n){var t=new F.Z(n).div(e);u({type:"setTargetRoi",payload:{roiUSD:+n,roiTokens:t.isNaN()?0:t.toNumber()}})}}};function q(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function K(){var n=q(["\n  background: linear-gradient(180deg, #53dee9, #7645d9);\n  padding: 1px;\n  width: 100%;\n  border-radius: ",";\n"]);return K=function(){return n},n}function $(){var n=q(["\n  height: 120px;\n  padding: 24px;\n  border-radius: ",";\n  background: ",";\n"]);return $=function(){return n},n}function W(){var n=q(["\n  position: relative;\n  & > input {\n    padding-left: 28px;\n    max-width: 70%;\n  }\n  &:before {\n    position: absolute;\n    content: '$';\n    color: ",";\n    left: 16px;\n    top: 8px;\n  }\n"]);return W=function(){return n},n}function G(){var n=q(["\n  max-width: 82%;\n  margin-right: 8px;\n"]);return G=function(){return n},n}function Y(){var n=q(["\n  position: relative;\n  overflow-x: auto;\n  &::-webkit-scrollbar {\n    height: 0px;\n  }\n\n  ","\n"]);return Y=function(){return n},n}var Q=1e6,J=(0,i.ZP)(j.Z).withConfig({componentId:"sc-f7477d1e-0"})(K(),(function(n){return n.theme.radii.default})),X=(0,i.ZP)(j.Z).withConfig({componentId:"sc-f7477d1e-1"})($(),(function(n){return n.theme.radii.default}),(function(n){return n.theme.colors.gradients.bubblegum})),nn=(0,i.ZP)(j.Z).withConfig({componentId:"sc-f7477d1e-2"})(W(),(function(n){return n.theme.colors.textSubtle})),en=(0,i.ZP)(l.Z).withConfig({componentId:"sc-f7477d1e-3"})(G()),tn=(0,i.ZP)(s.Z).withConfig({componentId:"sc-f7477d1e-4"})(Y(),(function(n){var e=n.fadeOut,t=n.theme;return e&&"\n      &:after {\n        background: linear-gradient(\n          to right,\n          ".concat(t.colors.background,"00,\n          ").concat(t.colors.background,"E6\n        );\n        content: '';\n        height: 100%;\n        pointer-events: none;\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 40px;\n      }\n  ")})),rn=function(n){var e=n.earningTokenSymbol,t=n.calculatorState,i=n.setTargetRoi,c=n.setCalculatorMode,a=(0,o.useState)(""),u=a[0],d=a[1],f=(0,o.useRef)(null),p=t.data,h=p.roiUSD,b=p.roiTokens,x=p.roiPercentage,m=t.controls.mode,y=(0,g.$G)().t;(0,o.useEffect)((function(){m===U.PRINCIPAL_BASED_ON_ROI&&f.current&&f.current.focus()}),[m]);var j=function(){c(U.PRINCIPAL_BASED_ON_ROI),d(h.toLocaleString("en",{minimumFractionDigits:h>Q?0:2,maximumFractionDigits:h>Q?0:2}))};return(0,r.jsx)(J,{children:(0,r.jsxs)(X,{children:[(0,r.jsx)(s.Z,{fontSize:"12px",color:"secondary",bold:!0,textTransform:"uppercase",children:y("ROI at current rates")}),(0,r.jsx)(l.Z,{justifyContent:"space-between",mt:"4px",height:"36px",children:m===U.PRINCIPAL_BASED_ON_ROI?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nn,{children:(0,r.jsx)(D.Z,{ref:f,type:"text",inputMode:"decimal",pattern:"^[0-9]+[.,]?[0-9]*$",scale:"sm",value:u,placeholder:"0.0",onChange:function(n){if(n.currentTarget.validity.valid){var e=n.target.value.replace(/,/g,".");i(e),d(e)}}})}),(0,r.jsx)(A.Z,{scale:"sm",variant:"text",onClick:function(){c(U.ROI_BASED_ON_PRINCIPAL)},children:(0,r.jsx)(L.Z,{color:"primary"})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(en,{onClick:j,children:[(0,r.jsx)(s.Z,{fontSize:"24px",bold:!0,children:"$"}),(0,r.jsx)(tn,{fontSize:"24px",bold:!0,fadeOut:h>1e12,children:h.toLocaleString("en",{minimumFractionDigits:h>Q?0:2,maximumFractionDigits:h>Q?0:2})})]}),(0,r.jsx)(A.Z,{scale:"sm",variant:"text",onClick:j,children:(0,r.jsx)(R,{color:"primary"})})]})}),(0,r.jsxs)(s.Z,{fontSize:"12px",color:"textSubtle",children:["~ ",b," ",e," (",x.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}),"%)"]})]})})},on=t(47708),cn=t(59113);function an(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function un(){var n=an(["\n  0% {\n    transform: scale(1);\n    strokeWidth: 0;\n  }\n  50% {\n    transform: scale(1.3);\n    strokeWidth: 2;\n  }\n  100% {\n    transform: scale(1);\n    strokeWidth: 0;\n  }\n"]);return un=function(){return n},n}function ln(){var n=an(["\n  & > svg {\n    animation: 0.2s "," linear;\n    stroke: ",";\n    strokewidth: 0;\n  }\n"]);return ln=function(){return n},n}var sn=(0,i.F4)(un()),dn=(0,i.ZP)(l.Z).withConfig({componentId:"sc-139da722-0"})(ln(),sn,(function(n){var e=n.theme;return"".concat(e.colors.primary,"3D")})),fn=function(n){var e=n.calculatorState,t=(0,o.useState)("roiArrow-0"),i=t[0],c=t[1],a=e.controls.mode;return(0,o.useEffect)((function(){c((function(n){var e=parseInt(n.split("-")[1],10);return"roiArrow-".concat(e+1)}))}),[e]),(0,r.jsx)(dn,{justifyContent:"center",my:"24px",children:a===U.ROI_BASED_ON_PRINCIPAL?(0,r.jsx)(on.Z,{width:"24px",height:"24px",color:"textSubtle"}):(0,r.jsx)(cn.Z,{width:"24px",height:"24px",color:"textSubtle"})},i)};function pn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function hn(){var n=pn(["\n  width: 345px;\n  & > :nth-child(2) {\n    padding: 0;\n  }\n"]);return hn=function(){return n},n}function bn(){var n=pn(["\n  padding: 24px;\n  max-height: 500px;\n  overflow-y: auto;\n  "," {\n    max-height: none;\n  }\n"]);return bn=function(){return n},n}function gn(){var n=pn(["\n  width: 100%;\n\n  & > button {\n    width: 100%;\n  }\n\n  opacity: ",";\n"]);return gn=function(){return n},n}var xn=(0,i.ZP)(c.Z).withConfig({componentId:"sc-a4f1632d-0"})(hn()),mn=i.ZP.div.withConfig({componentId:"sc-a4f1632d-1"})(bn(),(function(n){return n.theme.mediaQueries.sm})),yn=(0,i.ZP)(a.Z).withConfig({componentId:"sc-a4f1632d-2"})(gn(),(function(n){return n.disabled?.5:1})),jn=function(n){var e=n.onDismiss,t=n.onBack,i=n.earningTokenPrice,c=n.apr,a=n.displayApr,y=n.linkLabel,j=n.linkHref,v=n.stakingTokenBalance,O=n.stakingTokenSymbol,w=n.stakingTokenPrice,P=n.multiplier,Z=n.initialValue,C=n.earningTokenSymbol,S=void 0===C?"CAKE":C,k=n.autoCompoundFrequency,D=void 0===k?0:k,A=n.performanceFee,L=void 0===A?0:A,E=n.isFarm,T=void 0!==E&&E,R=(0,g.$G)().t,F=(0,m.Z)().account,N=(0,o.useRef)(null),_=H(w,i,c,D,L),V=_.state,B=_.setPrincipalFromUSDValue,M=_.setPrincipalFromTokenValue,q=_.setStakingDuration,K=_.toggleCompounding,$=_.toggleEditingCurrency,W=_.setCompoundingFrequency,G=_.setCalculatorMode,Y=_.setTargetRoi,Q=V.controls,J=Q.compounding,X=Q.activeCompoundingIndex,nn=Q.stakingDuration,en=Q.editingCurrency,tn=V.data,on=tn.principalAsUSD,cn=tn.principalAsToken;(0,o.useEffect)((function(){N.current&&N.current.focus()}),[]),(0,o.useEffect)((function(){Z&&M(Z)}),[Z,M]);var an=(0,u.Z)(T?R("\u201cMy Balance\u201d here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm."):R("\u201cMy Balance\u201d here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.",{assetSymbol:O}),{placement:"top-end",tooltipOffset:[20,10]}),un=an.targetRef,ln=an.tooltip,sn=an.tooltipVisible,dn=en===z.TOKEN?O:"USD",pn=en===z.TOKEN?cn:on,hn=en===z.TOKEN?"USD":O,bn=en===z.TOKEN?on:cn,gn=en===z.TOKEN?M:B;return(0,r.jsxs)(xn,{title:R("ROI Calculator"),onDismiss:t||e,onBack:null!==t&&void 0!==t?t:null,headerBackground:"gradients.cardHeader",children:[(0,r.jsxs)(mn,{children:[(0,r.jsxs)(l.Z,{flexDirection:"column",mb:"8px",children:[(0,r.jsx)(s.Z,{color:"secondary",bold:!0,fontSize:"12px",textTransform:"uppercase",children:R("%asset% staked",{asset:O})}),(0,r.jsx)(d.Z,{currencyValue:"".concat(bn," ").concat(hn),innerRef:N,placeholder:"0.00",value:pn,unit:dn,onUserInput:gn,switchEditingUnits:$,onFocus:function(){G(U.ROI_BASED_ON_PRINCIPAL)}}),(0,r.jsxs)(l.Z,{justifyContent:"space-between",mt:"8px",children:[(0,r.jsx)(f.Z,{scale:"xs",p:"4px 16px",width:"68px",variant:"tertiary",onClick:function(){return B("100")},children:"$100"}),(0,r.jsx)(f.Z,{scale:"xs",p:"4px 16px",width:"68px",variant:"tertiary",onClick:function(){return B("1000")},children:"$1000"}),(0,r.jsx)(f.Z,{disabled:!v.isFinite()||v.lte(0)||!F,scale:"xs",p:"4px 16px",width:"128px",variant:"tertiary",onClick:function(){return B((0,x.mW)(v.times(w)).toString())},children:R("My Balance").toLocaleUpperCase()}),(0,r.jsx)("span",{ref:un,children:(0,r.jsx)(p.Z,{width:"16px",height:"16px",color:"textSubtle"})}),sn&&ln]}),(0,r.jsx)(s.Z,{mt:"24px",color:"secondary",bold:!0,fontSize:"12px",textTransform:"uppercase",children:R("Staked for")}),(0,r.jsxs)(yn,{activeIndex:nn,onItemClick:q,scale:"sm",children:[(0,r.jsx)(h.Z,{variant:"tertiary",children:R("1D")}),(0,r.jsx)(h.Z,{variant:"tertiary",children:R("7D")}),(0,r.jsx)(h.Z,{variant:"tertiary",children:R("30D")}),(0,r.jsx)(h.Z,{variant:"tertiary",children:R("1Y")}),(0,r.jsx)(h.Z,{variant:"tertiary",children:R("5Y")})]}),0===D&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{mt:"24px",color:"secondary",bold:!0,fontSize:"12px",textTransform:"uppercase",children:R("Compounding every")}),(0,r.jsxs)(l.Z,{alignItems:"center",children:[(0,r.jsx)(l.Z,{flex:"1",children:(0,r.jsx)(b.Z,{scale:"sm",checked:J,onChange:K})}),(0,r.jsx)(l.Z,{flex:"6",children:(0,r.jsxs)(yn,{disabled:!J,activeIndex:X,onItemClick:W,scale:"sm",children:[(0,r.jsx)(h.Z,{children:R("1D")}),(0,r.jsx)(h.Z,{children:R("7D")}),(0,r.jsx)(h.Z,{children:R("14D")}),(0,r.jsx)(h.Z,{children:R("30D")})]})})]})]})]}),(0,r.jsx)(fn,{calculatorState:V}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(rn,{earningTokenSymbol:S,calculatorState:V,setTargetRoi:Y,setCalculatorMode:G})})]}),(0,r.jsx)(I,{isFarm:T,apr:c,displayApr:a,autoCompoundFrequency:D,multiplier:P,linkLabel:y,linkHref:j,performanceFee:L})]})}},64894:function(n,e,t){t.d(e,{O:function(){return f},q:function(){return d}});var r=t(85893),o=t(24016),i=t(52841),c=t(52353);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=function(n){var e="BNB"===n.symbol?c.ZP.wbnb.address:n.address;return"/images/tokens/".concat(e,".svg")},d=function(n){var e=n.primaryToken,t=n.secondaryToken,i=l(n,["primaryToken","secondaryToken"]);return(0,r.jsx)(o.Z,u({primarySrc:s(e),secondarySrc:s(t)},i))},f=function(n){var e=n.token,t=l(n,["token"]);return(0,r.jsx)(i.Z,u({src:s(e)},t))}}}]);
//# sourceMappingURL=6672-f692e207657b14da.js.map