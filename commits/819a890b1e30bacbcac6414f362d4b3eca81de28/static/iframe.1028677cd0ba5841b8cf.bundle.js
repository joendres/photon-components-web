(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,n,t){"use strict";t.r(n),t.d(n,"Checkbox",function(){return d});var a=t(37),o=t.n(a),r=t(25),i=t.n(r),l=t(0),c=t.n(l),s=t(72),u=t.n(s),d=(t(518),function(e){var n=e.disabled,t=e.label,a=i()(e,["disabled","label"]),r=c.a.createElement("input",o()({className:u()("checkbox",{"checkbox--disabled":n}),disabled:n,type:"checkbox"},a));return t?c.a.createElement("label",{className:u()("checkbox__label",{"checkbox--disabled":n})},r,c.a.createElement("span",{className:u()("checkbox__label__text",{"checkbox--disabled__label__text":n})},t)):r});n.default=d,d.__docgenInfo={description:"",methods:[],displayName:"Checkbox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Checkbox/index.js"]={name:"Checkbox",docgenInfo:d.__docgenInfo,path:"components/Checkbox/index.js"})},14:function(e,n,t){"use strict";t.r(n),t.d(n,"Button",function(){return s});var a=t(37),o=t.n(a),r=t(25),i=t.n(r),l=t(0),c=t.n(l),s=(t(406),function(e){var n=e.type,t=e.size,a=e.children,r=i()(e,["type","size","children"]),l="button ";return n&&(l=l+="button--".concat(n," ")),t&&(l=l+="button--".concat(t," ")),c.a.createElement("button",o()({className:l},r),a)});n.default=s,s.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/index.js"]={name:"Button",docgenInfo:s.__docgenInfo,path:"components/Button/index.js"})},18:function(e,n,t){"use strict";t.d(n,"b",function(){return s}),t.d(n,"a",function(){return u});var a=t(25),o=t.n(a),r=t(0),i=t.n(r),l=t(106),c=t(182),s=function(e){return function(n){n.preventDefault(),Object(l.action)(e)(n)}},u=function(e){var n=e.children,t=o()(e,["children"]);return i.a.createElement(c.a,t,i.a.createElement("div",{className:"sample",onClick:s("clicked")},n))};u.__docgenInfo={description:"",methods:[],displayName:"Sample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["lib/stories-common.js"]={name:"Sample",docgenInfo:u.__docgenInfo,path:"lib/stories-common.js"})},181:function(e,n,t){"use strict";t.r(n),t.d(n,"Link",function(){return r});var a=t(0),o=t.n(a),r=(t(521),function(e){var n=e.href,t=e.children;return o.a.createElement("a",{href:n},t)});n.default=r,r.__docgenInfo={description:"",methods:[],displayName:"Link"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Link/index.js"]={name:"Link",docgenInfo:r.__docgenInfo,path:"components/Link/index.js"})},182:function(e,n,t){"use strict";t.d(n,"a",function(){return y});var a=t(4),o=t.n(a),r=t(5),i=t.n(r),l=t(11),c=t.n(l),s=t(12),u=t.n(s),d=t(13),m=t.n(d),p=t(0),b=t.n(p),h=t(489),f=t.n(h),v=t(24),g=t.n(v),y=function(e){function n(){return o()(this,n),c()(this,u()(n).apply(this,arguments))}return m()(n,e),i()(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=(e.notes,g.a.getChannel()),a=f.a.renderToStaticMarkup(n);return t.emit("lmorchard/codesample/add_code",a),n}}]),n}(b.a.Component);y.__docgenInfo={description:"",methods:[],displayName:"ExtractSource"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/code-sample/index.js"]={name:"ExtractSource",docgenInfo:y.__docgenInfo,path:".storybook/code-sample/index.js"})},406:function(e,n,t){var a=t(516);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(93)(a,o);a.locals&&(e.exports=a.locals)},407:function(e,n,t){var a=t(517);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(93)(a,o);a.locals&&(e.exports=a.locals)},492:function(e,n,t){t(185),t(493),e.exports=t(494)},494:function(e,n,t){"use strict";t.r(n),function(e){var n=t(38),a=t(488),o=(t(937),t(524));Object(n.addDecorator)(Object(a.withOptions)({name:"Photon Components"})),Object(n.configure)(function(){t(610),o.keys().forEach(function(e){return o(e)})},e)}.call(this,t(89)(e))},510:function(e,n,t){var a=t(511);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(93)(a,o);a.locals&&(e.exports=a.locals)},511:function(e,n,t){(e.exports=t(65)(!1)).push([e.i,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--grey-10);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    'helvetica neue',\n    helvetica,\n    ubuntu,\n    roboto,\n    noto,\n    'segoe ui',\n    arial,\n    sans-serif;\n}\n\n/* Typography */\n\n:root {\n  --body-10: 13px;\n  --body-20: calc(var(--body-10) * 1.15);\n  --body-30: calc(var(--body-20) * 1.15);\n\n  --title-10: var(--body-10);\n  --title-20: calc(var(--title-10) * 1.29);\n  --title-30: calc(var(--title-20) * 1.29);\n  --title-40: calc(var(--title-30) * 1.29);\n\n  --display-20: calc(var(--title-40) * 1.29);\n}\n\nhtml {\n  font-size: var(--body-10);\n  line-height: 1.4;\n}\n\nh1 {\n  font-size: var(--display-20);\n  font-weight: 200;\n}\n\nh2 {\n  font-size: var(--title-30);\n  font-weight: 300;\n}\n\nh3 {\n  font-size: var(--title-20);\n  font-weight: 500;\n}\n\ncode.hljs {\n  display: block;\n  font-size: var(--body-20);\n  padding: 1em;\n}\n",""])},512:function(e,n,t){var a=t(513);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(93)(a,o);a.locals&&(e.exports=a.locals)},513:function(e,n,t){(n=e.exports=t(65)(!1)).i(t(514),""),n.push([e.i,"\r\n",""])},514:function(e,n,t){(n=e.exports=t(65)(!1)).i(t(405),""),n.push([e.i,".shadow-10 {\r\n  box-shadow: 0 1px 4px var(--grey-90-a10);\r\n}\r\n\r\n.shadow-20 {\r\n  box-shadow: 0 2px 8px var(--grey-90-a10);\r\n}\r\n\r\n.shadow-30 {\r\n  box-shadow: 0 4px 16px var(--grey-90-a10);\r\n}\r\n",""])},515:function(e,n,t){var a={"./Button/index.js":14,"./Card/index.js":74,"./Checkbox/index.js":108,"./Link/index.js":181};function o(e){var n=r(e);return t(n)}function r(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=515},516:function(e,n,t){(e.exports=t(65)(!1)).push([e.i,"button,\na.button {\n  background-color: var(--grey-90-a10);\n  border: 0 none;\n  border-radius: 2px;\n  color: var(--grey-90);\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 400;\n  height: 32px;\n  justify-content: center;\n  min-width: 132px;\n  padding: 0 8px;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  width: auto;\n}\n\n/* Primary style */\n\nbutton.button--primary,\na.button.button--primary {\n  background-color: var(--blue-60);\n  color: #fff;\n  font-weight: 300;\n}\n\nbutton.button--primary:hover,\na.button.button--primary:hover {\n  background-color: var(--blue-70);\n}\n\nbutton.button--primary:active,\na.button.button--primary:active {\n  background-color: var(--blue-80);\n}\n\n/* Ghost style */\n\nbutton.button--ghost,\na.button.button--ghost {\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  color: var(--grey-90-a80);\n  height: 32px;\n  min-width: auto;\n  padding: 8px;\n  width: 32px;\n}\n\n/* Micro size */\n\nbutton.button--micro,\na.button.button--micro {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  padding: 0 8px;\n  min-width: auto;\n}\n\n/* Puffy size */\n\nbutton.button--puffy,\na.button.button--puffy {\n  border-radius: 4px;\n  font-size: 15px;\n  height: 48px;\n  min-width: auto;\n  padding: 0 16px;\n}\n\n/* Hover, Active states */\n\nbutton:hover,\na.button:hover {\n  background-color: var(--grey-90-a20);\n}\n\nbutton:active,\na.button:active {\n  background-color: var(--grey-90-a30);\n}\n\nbutton.button--ghost:hover,\na.button.button--ghost:hover {\n  background-color: var(--grey-90-a10);\n}\n\nbutton.button--ghost:active,\na.button.button--ghost:active {\n  background-color: var(--grey-90-a20);\n}\n\nbutton::-moz-focusring {\n  outline: none;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\nbutton:focus,\na.button:focus {\n  box-shadow:\n    0 0 0 1px var(--blue-50) inset,\n    0 0 0 1px var(--blue-50),\n    0 0 0 4px var(--blue-50-a30);\n}\n\nbutton[disabled],\na.button[aria-disabled],\na.button.button--disabled {\n  opacity: .4;\n  pointer-events: none;\n}\n",""])},517:function(e,n,t){(e.exports=t(65)(!1)).push([e.i,".card {\r\n  border-radius: 4px;\r\n  padding: 16px;\r\n}\r\n\r\n.card--size-large {\r\n  padding: 20px;\r\n}\r\n\r\n.card:hover {\r\n  border: 5px solid #d7d7db;\r\n}\r\n",""])},518:function(e,n,t){var a=t(519);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(93)(a,o);a.locals&&(e.exports=a.locals)},519:function(e,n,t){var a=t(408);(e.exports=t(65)(!1)).push([e.i,".checkbox {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: var(--grey-90-a10);\n  border-radius: 2px;\n  border: 1px solid var(--grey-90-a30);\n  height: 16px;\n  margin: -2px 4px;\n  width: 16px;\n}\n\n.checkbox:hover {\n  background-color: var(--grey-90-a20);\n}\n\n.checkbox:active {\n  background-color: var(--grey-90-a30);\n}\n\n.checkbox:focus {\n  border: none;\n  box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, .3);\n}\n\n.checkbox:checked {\n  background-color: var(--blue-60);\n\n  /* TODO: Replace this image with one from photon-icons once we have the\n   * proper fill color */\n  background-image: url("+a(t(520))+");\n\n  /* background-image: url(~photon-icons/icons/desktop/check-16.svg); */\n  background-position: center center;\n}\n\n.checkbox:checked:hover {\n  background-color: var(--blue-70);\n}\n\n.checkbox:checked:active {\n  background-color: var(--blue-80);\n}\n\n.checkbox:disabled {\n  opacity: .4;\n}\n\n.checkbox:disabled:hover {\n  background-color: var(--grey-90-a10);\n}\n\n.checkbox:disabled:checked:hover {\n  background-color: var(--blue-60);\n}\n\n.checkbox--disabled__label__text {\n  opacity: .4;\n}\n",""])},520:function(e,n){e.exports="\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath d='M6.52,12.5a1,1,0,0,1-.705-.291l-3.52-3.5a1,1,0,1,1,1.41-1.418l2.812,2.8,5.774-5.793a1,1,0,0,1,1.416,1.412l-6.479,6.5A1,1,0,0,1,6.52,12.5Z' fill='%23fff'/%3E %3C/svg%3E\""},521:function(e,n,t){var a=t(522);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(93)(a,o);a.locals&&(e.exports=a.locals)},522:function(e,n,t){var a=t(408);(e.exports=t(65)(!1)).push([e.i,'a {\n  color: #0a84ff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\na:visited {\n  color: #0060df;\n}\n\na:hover {\n  color: #0c0c0d;\n  text-decoration: underline;\n}\n\na:not([class])[href*="//"]::after {\n  background-image: url('+a(t(523))+');\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  content: "";\n  display: inline-block;\n  height: 16px;\n  margin: -.3rem .15rem 0 .25rem;\n  vertical-align: middle;\n  width: 16px;\n}\n',""])},523:function(e,n){e.exports="\"data:image/svg+xml,%3C!-- This Source Code Form is subject to the terms of the Mozilla Public - License, v. 2.0. If a copy of the MPL was not distributed with this - file, You can obtain one at http://mozilla.org/MPL/2.0/. --%3E %3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath fill='%230060df' d='M5,1 L4,1 C2.34314575,1 1,2.34314575 1,4 L1,12 C1,13.6568542 2.34314575,15 4,15 L12,15 C13.6568542,15 15,13.6568542 15,12 L15,11 C15,10.4477153 14.5522847,10 14,10 C13.4477153,10 13,10.4477153 13,11 L13,12 C13,12.5522847 12.5522847,13 12,13 L4,13 C3.44771525,13 3,12.5522847 3,12 L3,4 C3,3.44771525 3.44771525,3 4,3 L5,3 C5.55228475,3 6,2.55228475 6,2 C6,1.44771525 5.55228475,1 5,1 Z'/%3E %3Cpath fill='%230060df' d='M14.935313,1.618 C14.7808674,1.24435316 14.4166213,1.00047005 14.012313,1 L9.01231299,1 C8.46002824,1 8.01231299,1.44771525 8.01231299,2 C8.01231299,2.55228475 8.46002824,3 9.01231299,3 L11.598313,3 L8.30531299,6.293 C8.04535641,6.54407447 7.9411004,6.91587789 8.03261584,7.26550732 C8.12413128,7.61513676 8.39717624,7.88818172 8.74680567,7.97969716 C9.0964351,8.0712126 9.46823852,7.96695658 9.71931299,7.707 L13.012313,4.414 L13.012313,7 C13.012313,7.55228475 13.4600282,8 14.012313,8 C14.5645977,8 15.012313,7.55228475 15.012313,7 L15.012313,2 C15.0119445,1.86884934 14.9857812,1.73905202 14.935313,1.618 L14.935313,1.618 Z'/%3E %3C/svg%3E\""},524:function(e,n,t){var a={"./Button/stories.js":525,"./Card/stories.js":527,"./Checkbox/stories.js":528,"./Link/stories.js":609};function o(e){var n=r(e);return t(n)}function r(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=524},525:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),a=t.n(n),o=t(38),r=t(18),i=t(14),l=(t(406),t(64)),c=t.n(l);Object(o.storiesOf)("Button",e).add("Default",function(){return a.a.createElement(r.a,{notes:"This is a very simple Button and you can click on it."},a.a.createElement("a",{href:"#",className:"button"},"Anchor"),a.a.createElement(i.default,null,"Button"))}).add("Primary",function(){return a.a.createElement(r.a,null,a.a.createElement("a",{href:"#",className:"button button--primary"},"Anchor"),a.a.createElement(i.default,{type:"primary"},"Button"))}).add("Ghost",function(){return a.a.createElement(r.a,null,a.a.createElement("a",{href:"#",className:"button button--ghost","aria-label":"refresh",style:{backgroundImage:"url(".concat(c.a,")")}}),a.a.createElement(i.default,{type:"ghost","aria-label":"refresh",style:{backgroundImage:"url(".concat(c.a,")")}}))}).add("Micro",function(){return a.a.createElement(r.a,null,a.a.createElement("a",{href:"#",className:"button button--micro"},"Anchor"),a.a.createElement(i.default,{size:"micro"},"Button"),a.a.createElement("a",{href:"#",className:"button button--primary button--micro"},"Anchor"),a.a.createElement(i.default,{type:"primary",size:"micro"},"Button"))}).add("Puffy",function(){return a.a.createElement(r.a,null,a.a.createElement("a",{href:"#",className:"button button--puffy"},"Anchor"),a.a.createElement(i.default,{size:"puffy"},"Button"),a.a.createElement("button",{className:"button--puffy"},"Button"),a.a.createElement("a",{href:"#",className:"button button--primary button--puffy"},"Anchor"),a.a.createElement(i.default,{type:"primary",size:"puffy"},"Button"),a.a.createElement("button",{className:"button--primary button--puffy"},"Button"))}).add("Disabled",function(){return a.a.createElement(r.a,null,a.a.createElement("a",{href:"#",className:"button","aria-disabled":!0},"Anchor"),a.a.createElement(i.default,{disabled:!0},"Button"),a.a.createElement("a",{href:"#",className:"button button--primary","aria-disabled":!0},"Anchor"),a.a.createElement(i.default,{type:"primary",disabled:!0},"Button"),a.a.createElement("a",{href:"#",className:"button button--ghost","aria-label":"refresh","aria-disabled":!0,style:{backgroundImage:"url(".concat(c.a,")")}}),a.a.createElement(i.default,{type:"ghost","aria-label":"refresh",disabled:!0,style:{backgroundImage:"url(".concat(c.a,")")}}))}).add("Everything",function(){return a.a.createElement(r.a,null,a.a.createElement("a",{href:"#",className:"button"},"Anchor"),a.a.createElement("button",null,"Button"),a.a.createElement("a",{href:"#",className:"button button--primary"},"Anchor"),a.a.createElement(i.default,{type:"primary"},"Button"),a.a.createElement("a",{href:"#",className:"button button--ghost","aria-label":"refresh",style:{backgroundImage:"url(".concat(c.a,")")}}),a.a.createElement(i.default,{type:"ghost","aria-label":"refresh",style:{backgroundImage:"url(".concat(c.a,")")}}),a.a.createElement("a",{href:"#",className:"button button--micro"},"Anchor"),a.a.createElement(i.default,{size:"micro"},"Button"),a.a.createElement("a",{href:"#",className:"button button--primary button--micro"},"Anchor"),a.a.createElement(i.default,{type:"primary",size:"micro"},"Button"),a.a.createElement("a",{href:"#",className:"button button--puffy"},"Anchor"),a.a.createElement(i.default,{size:"puffy"},"Button"),a.a.createElement("a",{href:"#",className:"button button--primary button--puffy"},"Anchor"),a.a.createElement(i.default,{type:"primary",size:"puffy"},"Button"),a.a.createElement("a",{href:"#",className:"button","aria-disabled":!0},"Anchor"),a.a.createElement(i.default,{disabled:!0},"Button"),a.a.createElement("a",{href:"#",className:"button button--primary","aria-disabled":!0},"Anchor"),a.a.createElement(i.default,{type:"primary",disabled:!0},"Button"),a.a.createElement("a",{href:"#",className:"button button--ghost","aria-label":"refresh","aria-disabled":!0,style:{backgroundImage:"url(".concat(c.a,")")}}),a.a.createElement(i.default,{type:"ghost","aria-label":"refresh",disabled:!0,style:{backgroundImage:"url(".concat(c.a,")")}}))})}.call(this,t(89)(e))},527:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),a=t.n(n),o=t(38),r=t(18),i=t(74);t(407);Object(o.storiesOf)("Card",e).add("Default",function(){return a.a.createElement(r.a,{notes:"This is a very simple Card container."},a.a.createElement(i.default,null,a.a.createElement("p",null,"Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur. Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.")))}).add("Large",function(){return a.a.createElement(r.a,null,a.a.createElement(i.default,{isLarge:!0},a.a.createElement("p",null,"Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur. Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.")))}).add("With Shadow",function(){return a.a.createElement(r.a,null,a.a.createElement(i.default,{shadow:!0},a.a.createElement("p",null,"Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur. Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.")))}).add("Everything",function(){return a.a.createElement(r.a,null,a.a.createElement(i.default,null,a.a.createElement("p",null,"Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur. Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.")),a.a.createElement(i.default,{isLarge:!0},a.a.createElement("p",null,"Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur. Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.")),a.a.createElement(i.default,{shadow:!0},a.a.createElement("p",null,"Quod quia dolor omnis aut. Aspernatur a sit qui accusamus aperiam labore voluptatem. Velit assumenda aliquid voluptatem non consequatur. Quae mollitia eius perspiciatis error iure. Molestiae quo cumque et suscipit hic provident error. Corporis iure deleniti unde voluptatem commodi ipsam velit similique.")))})}.call(this,t(89)(e))},528:function(e,n,t){"use strict";t.r(n),function(e){var n=t(25),a=t.n(n),o=t(0),r=t.n(o),i=t(183),l=t.n(i),c=t(38),s=t(106),u=t(18),d=t(182),m=t(108),p=function(e){e.notes;var n=e.children,t=a()(e,["notes","children"]);return r.a.createElement(d.a,t,r.a.createElement("form",{onSubmit:Object(u.b)("submit")},n))};Object(c.storiesOf)("Checkbox",e).add("README",function(){return r.a.createElement(l.a,{source:t(608)})}).add("Everything",function(){return r.a.createElement(p,null,r.a.createElement("ul",{style:{listStyleType:"none",margin:0,width:"50%"}},r.a.createElement("li",null,r.a.createElement(m.default,null)),r.a.createElement("li",null,r.a.createElement(m.default,{label:"Example label"})),r.a.createElement("li",null,r.a.createElement(m.default,{onClick:Object(s.action)("Clicked me!"),label:"Click me!"})),r.a.createElement("li",null,r.a.createElement(m.default,{disabled:!0,label:"Disabled checkbox"})),r.a.createElement("li",null,r.a.createElement(m.default,{checked:!0,disabled:!0,label:"Disabled checked checkbox"}))))})}.call(this,t(89)(e))},608:function(e,n){e.exports='# photon-checkboxes\n\n## Styles\n\n### Without label\n\n```html\n<input type="checkbox" />\n```\n\n### Without label (disabled)\n\n```html\n<input type="checkbox" disabled />\n```\n\n### With label\n\n```html\n<label class="checkbox">\n  <input type="checkbox" class="checkbox__field" />\n  <span class="checkbox__label">Example label</span>\n</label>\n```\n\n### With label (disabled)\n\n```html\n<label class="checkbox checkbox--disabled">\n  <input type="checkbox" disabled class="checkbox__field" />\n  <span class="checkbox__label">Disabled checkbox</span>\n</label>\n```\n'},609:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),a=t.n(n),o=t(38),r=t(18),i=t(181);Object(o.storiesOf)("Link",e).add("Everything",function(){return a.a.createElement(r.a,{notes:"This is a very simple Link."},a.a.createElement("p",null,a.a.createElement(i.default,{href:"/"},"Learn more")),a.a.createElement("p",null,a.a.createElement(i.default,{href:"https://mozilla.org/"},"Mozilla.org")))})}.call(this,t(89)(e))},610:function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),a=t.n(n),o=t(38),r=t(183),i=t.n(r),l=t(611);Object(o.storiesOf)("Introduction",e).add("README",function(){return a.a.createElement("article",null,a.a.createElement("section",null,a.a.createElement(i.a,{source:l})))})}.call(this,t(89)(e))},611:function(e,n){e.exports='# photon-components-web\n\n[![CircleCI](https://circleci.com/gh/FirefoxUX/photon-components-web.svg?style=svg)](https://circleci.com/gh/FirefoxUX/photon-components-web)\n\nThis repository contains CSS styles and some React components to replicate the standard styles used in Firefox. The most recent style guidelines for Firefox are called "Photon" (hence the name of this repository).\n\nThese components are intended to be used anywhere where you want to make an HTML interface appear to be part of the browser itself. Examples where this might be useful include add-ons/extensions, UI directly in Firefox that is implemented in HTML, and some Mozilla properties like addons.mozilla.org.\n\nThis repository is not intended for a general audience. You do not have to use React to make use of the styles.\n\n## Preview & Download\n\nPreview the latest build from master here:\n* <https://firefoxux.github.io/photon-components-web/>\n\nDownload the latest build from master here:\n* <https://firefoxux.github.io/photon-components-web/dist.zip>\n\n## Development\n\nTo get started:\n\n```sh\nnpm install\n# To generate static CSS and images/ in dist/ :\nnpm run build:webpack\n# To generate a static Storybook in storybook/ :\nnpm run build:storybook\n# To run the demonstration site locally on http://localhost:9001/ :\nnpm start\n```\n\n## Conventions\n\nComponents are styled using the [BEM](http://getbem.com/) (Block-Element-Modifier) convention:\n\n* Top-level components are "blocks"\n  * e.g. `button`\n* Parts of components are "elements", and are namespaced by their block:\n  * e.g. `card__media` as a sub-element of `card`\n* `modifiers` are optional or stateful properties applied to the markup:\n  * Top-level modifiers are namespaced to their block, e.g. `button--primary`\n  * Element-level modifiers namespace to their element, e.g. `card__media--loading`\n'},64:function(e,n){e.exports="\"data:image/svg+xml,%3C!-- This Source Code Form is subject to the terms of the Mozilla Public - License, v. 2.0. If a copy of the MPL was not distributed with this - file, You can obtain one at http://mozilla.org/MPL/2.0/. --%3E %3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='context-fill' d='M14 1a1 1 0 0 0-1 1v1.146A6.948 6.948 0 0 0 1.227 6.307a1 1 0 1 0 1.94.484A4.983 4.983 0 0 1 8 3a4.919 4.919 0 0 1 3.967 2H10a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm.046 7.481a1 1 0 0 0-1.213.728A4.983 4.983 0 0 1 8 13a4.919 4.919 0 0 1-3.967-2H6a1 1 0 0 0 0-2H2a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.146a6.948 6.948 0 0 0 11.773-3.161 1 1 0 0 0-.727-1.212z'/%3E%3C/svg%3E\""},74:function(e,n,t){"use strict";t.r(n),t.d(n,"Card",function(){return d});var a=t(37),o=t.n(a),r=t(25),i=t.n(r),l=t(0),c=t.n(l),s=t(72),u=t.n(s),d=(t(407),function(e){var n=e.children,t=e.isLarge,a=e.shadow,r=i()(e,["children","isLarge","shadow"]),l=u()("card",{"shadow-10":a,"card--size-large":t});return c.a.createElement("div",o()({className:l},r),n)});n.default=d,d.__docgenInfo={description:"",methods:[],displayName:"Card"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Card/index.js"]={name:"Card",docgenInfo:d.__docgenInfo,path:"components/Card/index.js"})},937:function(e,n,t){"use strict";t(508),t(510),t(512);t(515)}},[[492,3,2]]]);
//# sourceMappingURL=iframe.1028677cd0ba5841b8cf.bundle.js.map