(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1794:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,v=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(v,a(a({ref:t},u),{},{components:n})):r.a.createElement(v,a({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},497:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(1794)),c=["components"],a={title:"Taro.getConnectedBluetoothDevices(OBJECT)",sidebar_label:"getConnectedBluetoothDevices"},l={unversionedId:"apis/device/bluetooth/getConnectedBluetoothDevices",id:"version-1.x/apis/device/bluetooth/getConnectedBluetoothDevices",isDocsHomePage:!1,title:"Taro.getConnectedBluetoothDevices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.getConnectedBluetoothDevices\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",slug:"/apis/device/bluetooth/getConnectedBluetoothDevices",permalink:"/taro/docs/1.x/apis/device/bluetooth/getConnectedBluetoothDevices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",version:"1.x",sidebar_label:"getConnectedBluetoothDevices",sidebar:"version-1.x/API",previous:{title:"Taro.getBluetoothDevices(OBJECT)",permalink:"/taro/docs/1.x/apis/device/bluetooth/getBluetoothDevices"},next:{title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",permalink:"/taro/docs/1.x/apis/device/bluetooth/onBluetoothAdapterStateChange"}},u=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedBluetoothDevices.html"},Object(i.b)("inlineCode",{parentName:"a"},"wx.getConnectedBluetoothDevices")),"\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.getConnectedBluetoothDevices(params).then(...)\n")))}p.isMDXComponent=!0}}]);