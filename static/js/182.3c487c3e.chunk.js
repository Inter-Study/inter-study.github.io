(self.webpackChunkinter_study=self.webpackChunkinter_study||[]).push([[182,41,651,209,925,298,999],{6741:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=6741,t.exports=e},5193:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var i=n(5671),r=n(3144),o=n(136),a=n(9388),s=n(7313),c=n(6135),u=n(4651),l=n(4041),f=n(6287),m=n(4209),p=n(5192);function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function b(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=w(t);if(e){var r=w(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return b(this,n)}}function x(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var i=n.match(/(.*?)([0-9]+)(.*)/),r=i?i[1]:"",o=i?i[3]:"",a=i?i[2]:n,s=a.length>=e?a:(x(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(r).concat(s).concat(o)}var C={daysInHours:!1,zeroPadTime:2};function _(t,e){var n=t.days,i=t.hours,r=t.minutes,o=t.seconds,a=Object.assign(Object.assign({},C),e),s=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,l=void 0===u?c:u,f=Math.min(2,c),m=s?S(i+24*n,c):S(i,f);return{days:s?"":S(n,l),hours:m,minutes:S(r,f),seconds:S(o,f)}}var k=function(t){g(n,t);var e=T(n);function n(){var t;return d(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return v(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,s.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(s.Component);k.propTypes={count:p.number,children:p.element,onComplete:p.func};var E=function(t){g(n,t);var e=T(n);function n(t){var i;if(d(this,n),(i=e.call(this,t)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=(0,s.createRef)(),i.tick=function(){var t=i.calcTimeDelta(),e=t.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(t,void 0,e)},i.start=function(){if(!i.isStarted()){var t=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=t?i.calcOffsetStartTimestamp()-t:0;var e=i.calcTimeDelta();i.setTimeDeltaState(e,"STARTED",i.props.onStart),i.props.controlled||e.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},t.date){var r=i.calcTimeDelta();i.state={timeDelta:r,status:r.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return v(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,i=t.precision,r=t.controlled,o=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.now,r=void 0===i?Date.now:i,o=n.precision,a=void 0===o?0:o,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var f=s?e:e-r(),m=Math.min(20,Math.max(0,a)),p=Math.round(1e3*parseFloat(((l?f:Math.max(0,f))/1e3).toFixed(m))),d=Math.abs(p)/1e3;return{total:p,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:p<=0}}(e,{now:n,precision:i,controlled:r,offsetTime:this.offsetTime,overtime:o})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var i=this;if(this.mounted){var r=t.completed&&!this.state.timeDelta.completed,o=t.completed&&"STARTED"===e;r&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var r=e||n.status;return t.completed&&!i.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(i.state.timeDelta),i.props.onComplete&&(r||o)&&i.props.onComplete(t,o)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,i=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:_(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:i})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,i=t.onComplete;return(0,s.createElement)(k,{ref:this.legacyCountdownRef,count:e,onComplete:i},n)}var r=this.props,o=r.className,a=r.overtime,c=r.children,u=r.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!a)return(0,s.cloneElement)(c,{countdown:l});var f=l.formatted,m=f.days,p=f.hours,d=f.minutes,h=f.seconds;return(0,s.createElement)("span",{className:o},l.total<0?"-":"",m,m?":":"",p,":",d,":",h)}}]),n}(s.Component);E.defaultProps=Object.assign(Object.assign({},C),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),E.propTypes={date:(0,p.oneOfType)([(0,p.instanceOf)(Date),p.string,p.number]),daysInHours:p.bool,zeroPadTime:p.number,zeroPadDays:p.number,controlled:p.bool,intervalDelay:p.number,precision:p.number,autoStart:p.bool,overtime:p.bool,className:p.string,children:p.element,renderer:p.func,now:p.func,onMount:p.func,onStart:p.func,onPause:p.func,onStop:p.func,onTick:p.func,onComplete:p.func};var O=E,P=n(4791),j=n(9384),M=n(1298),A=n(6417),I=function(t){(0,o.Z)(n,t);var e=(0,a.Z)(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).setPulse=function(t){r.props.bluethDevice&&!r.state.isInPulse&&(r.setState({isInPulse:!0,pulseCount:r.state.pulseCount+1}),(0,m.toastAlert)("\u63d0\u793a","\u76d1\u6d4b\u5230".concat(t,"\uff0c\u7535\u51fb\u5f00\u59cb\uff0c\u6301\u7eed ").concat(r.state.pulseTime/1e3," \u79d2"),"warning",r.state.pulseTime),r.props.bluethDevice.characteristic.writeValueWithoutResponse(new TextEncoder("utf-8").encode("1\r\n")),setTimeout((function(){r.setState({isInPulse:!1}),(0,m.toastAlert)("\u63d0\u793a","\u7535\u51fb\u7ed3\u675f\uff0c\u8bf7\u63d0\u9ad8\u4e13\u6ce8\u529b","warning",r.state.pulseTime/2),r.props.bluethDevice.characteristic.writeValueWithoutResponse(new TextEncoder("utf-8").encode("0\r\n"))}),r.state.pulseTime))},r.state={entryTime:Date.now(),durationEnd:!1,isInPulse:!1,pulseTime:1e4,pulseCount:0,eventTrigger:["blur","visibilitychange","focus"],webcamWidth:640,webcamHeight:480,webcamRef:(0,s.createRef)(),faceApiModels:"./models",faceApiTimer:null,faceApiInterval:1e3,faceApiCounter:[0,0],faceApiThreshold:10},r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.bluethDevice&&(this.state.eventTrigger.map((function(e){return document.addEventListener(e,(function(e){return t.setPulse("\u5207\u5c4f\u64cd\u4f5c")}))})),(0,P.default)(this.state.faceApiModels).then((function(){(0,M.default)("webcam"),t.setState({faceApiTimer:setInterval((function(){(0,j.default)(t.state.webcamRef).then((function(e){t.setState({faceApiCounter:[t.state.faceApiCounter[0]>59?0:t.state.faceApiCounter[0]+1,0===e.length&&t.state.faceApiCounter[0]<59?t.state.faceApiCounter[1]+1:0]}),t.state.faceApiCounter[1]>t.state.faceApiThreshold&&!t.state.isInPulse&&t.setPulse("\u4eba\u50cf\u4e0d\u5728\u8303\u56f4\u5185")}))}),t.state.faceApiInterval)})})))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.faceApiTimer)}},{key:"render",value:function(){var t=this;return this.props.bluethDevice?(0,A.jsx)("div",{children:(0,A.jsxs)("div",{className:"flex flex-col h-screen bg-gradient-to-br bg-indigo-800 from-indigo-600 via-indigo-800 to-indigo-900",children:[(0,A.jsx)(u.default,{title:f.default.site.title,logo:f.default.site.logo,list:f.EntryConfig.menu}),(0,A.jsxs)("div",{className:"overflow-hidden text-center mx-auto max-w-2xl py-16 text-gray-200 lg:text-3xl text-2xl",children:[(0,A.jsx)(O,{className:"m-5",date:this.state.entryTime+6e4*this.props.focusDuration,renderer:function(e){var n=e.hours,i=e.minutes,r=e.seconds;return e.completed?(t.setState({durationEnd:!0}),"\u76ee\u6807\u8fbe\u6210\uff01"):(n=n.toString().padStart(2,"0"),i=i.toString().padStart(2,"0"),r=r.toString().padStart(2,"0"),(0,A.jsxs)("span",{children:["\u5269\u4f59 ".concat(n,":").concat(i,":").concat(r," \u8fbe\u6210\u76ee\u6807"),(0,A.jsx)("br",{}),"\u8bf7\u52ff\u5237\u65b0\u9875\u9762\u6216\u4e2d\u9014\u79bb\u5f00"]}))}}),this.state.durationEnd?(0,A.jsxs)("span",{className:"text-4xl",children:["\u5728\u8fd9 ".concat(this.props.focusDuration," \u5206\u949f\u91cc"),(0,A.jsx)("br",{}),"\u4f60\u88ab\u7535\u51fb\u63d0\u9192\u4e86 ".concat(this.state.pulseCount," \u6b21")]}):(0,A.jsx)(A.Fragment,{children:(0,A.jsx)("video",{id:"webcam",className:"rounded-sm mt-8",autoPlay:!0,playsInline:!0,width:this.state.webcamWidth,height:this.state.webcamHeight,ref:this.state.webcamRef})})]})]})}):(0,A.jsx)(l.default,{})}}]),n}(s.Component),Z=(0,c.$j)((function(t){return{bluethDevice:t.bluethDevice,focusDuration:t.focusDuration}}))(I)},4041:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var i=n(5671),r=n(3144),o=n(136),a=n(9388),s=n(7313),c=n(8694),u=n(6417),l=function(t){(0,o.Z)(n,t);var e=(0,a.Z)(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).state={countDown:5,countDownTimer:null},r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({countDownTimer:setInterval((function(){t.setState({countDown:t.state.countDown-1}),1===t.state.countDown&&clearInterval(t.state.countDownTimer)}),1e3)})}},{key:"render",value:function(){return(0,u.jsxs)("div",{className:"page-primary bg-gradient-to-br text-white bg-indigo-800 from-indigo-600 via-indigo-800 to-indigo-900 flex flex-col items-center justify-center",children:[(0,u.jsx)("svg",{className:"py-2 w-16 h-16 animate-bounce fill-gray-200",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,u.jsx)("h2",{className:"py-2 text-center text-xl font-bold",children:"403 - \u975e\u6cd5\u8bbf\u95ee"}),0===this.state.countDown?(0,u.jsx)(c.default,{to:"/",replace:!0}):(0,u.jsxs)("i",{className:"px-14 text-center",children:["\u5269\u4f59 ",this.state.countDown," \u79d2\u540e\u8fd4\u56de\u9996\u9875"]})]})}}]),n}(s.Component)},4651:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var i=n(5671),r=n(3144),o=n(136),a=n(9388),s=n(7313),c=n(2135),u=n(6417),l=function(t){(0,o.Z)(n,t);var e=(0,a.Z)(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).state={title:r.props.title,logo:r.props.logo,list:r.props.list},r}return(0,r.Z)(n,[{key:"render",value:function(){var t=this;return(0,u.jsx)("nav",{className:"bg-indigo-800 bg-gradient-to-br from-indigo-600 via-indigo-800 to-indigo-900",children:(0,u.jsx)("div",{className:"container px-6 py-4 mx-auto",children:(0,u.jsxs)("div",{className:"lg:flex lg:items-center lg:justify-between",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between",children:[this.state.logo?(0,u.jsx)("img",{className:"ml-4 h-10",src:this.state.logo,alt:this.state.title}):(0,u.jsx)("button",{type:"button",className:"text-gray-400 hover:text-gray-200",onClick:function(){window.history.back()},children:(0,u.jsx)("svg",{className:"w-6 h-6 ",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",children:(0,u.jsx)("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})}),(0,u.jsx)("div",{className:"lg:hidden",children:(0,u.jsx)("button",{type:"button",className:"text-gray-400 hover:text-gray-200",onClick:function(){return t.setState({isOpen:!t.state.isOpen})},children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"".concat(this.state.isOpen?"M6 18L18 6M6 6l12 12":"M4 8h16M4 16h16")})})})})]}),(0,u.jsx)("div",{className:"bg-indigo-800 absolute inset-x-0 z-20 w-full px-6 mr-10 py-4 transition-all duration-300 ease-in-out shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 ".concat(this.state.isOpen?"":"opacity-0 -translate-x-full"),children:(0,u.jsx)("div",{className:"-mx-4 lg:flex lg:items-center text-gray-200",children:this.state.list.map((function(t,e){return(0,u.jsx)(c.rU,{className:"".concat("link"===t.type?"block mx-4 mt-4 capitalize lg:mt-0 hover:text-blue-600":"block w-full btn-primary px-4 py-2 mt-4 text-sm "),to:t.path,children:t.name},e)}))})})]})})})}}]),n}(s.Component)},4209:function(t,e,n){"use strict";n.r(e),n.d(e,{confirmAlert:function(){return f},errorAlert:function(){return c},infoAlert:function(){return l},inputAlert:function(){return h},selectAlert:function(){return d},successAlert:function(){return s},timerAlert:function(){return m},toastAlert:function(){return p},warningAlert:function(){return u}});var i=n(4165),r=n(5861),o=n(7114),a=n.n(o),s=function(t,e){return a().fire({title:t,html:e,icon:"success",confirmButtonText:"\u786e\u8ba4",allowOutsideClick:!1})},c=function(t,e){return a().fire({title:t,html:e,icon:"error",confirmButtonText:"\u786e\u8ba4",allowOutsideClick:!1})},u=function(t,e){return a().fire({title:t,html:e,icon:"warning",confirmButtonText:"\u786e\u8ba4",allowOutsideClick:!1})},l=function(t,e){return a().fire({title:t,html:e,icon:"info",confirmButtonText:"\u786e\u8ba4",allowOutsideClick:!1})},f=function(t,e,n,i,r){return a().fire({title:t,html:e,icon:"warning",showCancelButton:i.length>0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",allowOutsideClick:!1,cancelButtonText:i,confirmButtonText:n}).then((function(t){t.value&&r()}))},m=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n,r,o){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null,t.next=3,a().fire({title:e,html:n,timer:r,timerProgressBar:!0,allowOutsideClick:!1,didOpen:function(){a().showLoading()},willClose:function(){clearInterval(null)}});case 3:t.sent.dismiss===a().DismissReason.timer&&o();case 5:case"end":return t.stop()}}),t)})));return function(e,n,i,r){return t.apply(this,arguments)}}(),p=function(t,e,n,i){return a().mixin({toast:!0,position:"top-end",timer:i,timerProgressBar:!0,showConfirmButton:!1,didOpen:function(t){t.addEventListener("mouseenter",a().stopTimer),t.addEventListener("mouseleave",a().resumeTimer)}}).fire({icon:n,title:t,html:e})},d=function(t,e,n,i,r){return a().fire({title:t,html:e,input:n,inputOptions:i,inputPlaceholder:"\u8bf7\u9009\u62e9",showCancelButton:!1,allowOutsideClick:!1,inputValidator:function(t){if(!t)return"\u8bf7\u9009\u62e9"}}).then((function(t){t.value&&r(t.value)}))},h=function(t,e,n,i){return a().fire({title:t,html:e,input:n,inputAttributes:{autocapitalize:"off"},confirmButtonText:"\u786e\u8ba4",showCancelButton:!1,allowOutsideClick:!1,inputValidator:function(t){if(!t)return"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u503c"}}).then((function(t){t.value&&i(t.value)}))}},9384:function(t,e,n){"use strict";n.r(e);var i=n(4165),r=n(5861),o=n(8475),a=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.current){t.next=4;break}return t.next=3,o.Qr(e.current,new o.aK);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=a},1298:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var i=n(4165),r=n(5861),o=n(7762),a=n(5671),s=n(3144),c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,a.Z)(this,t),this._webcamElement=e,this._webcamElement.width=this._webcamElement.width||640,this._webcamElement.height=this._webcamElement.height||this._webcamElement.width*(3/4),this._facingMode=n,this._webcamList=[],this._streamList=[],this._selectedDeviceId="",this._canvasElement=i,this._snapSoundElement=r}return(0,s.Z)(t,[{key:"facingMode",get:function(){return this._facingMode},set:function(t){this._facingMode=t}},{key:"webcamList",get:function(){return this._webcamList}},{key:"webcamCount",get:function(){return this._webcamList.length}},{key:"selectedDeviceId",get:function(){return this._selectedDeviceId}},{key:"getVideoInputs",value:function(t){var e=this;return this._webcamList=[],t.forEach((function(t){"videoinput"===t.kind&&e._webcamList.push(t)})),1==this._webcamList.length&&(this._facingMode="user"),this._webcamList}},{key:"getMediaConstraints",value:function(){var t={};return""==this._selectedDeviceId?t.facingMode=this._facingMode:t.deviceId={exact:this._selectedDeviceId},{video:t,audio:!1}}},{key:"selectCamera",value:function(){var t,e=(0,o.Z)(this._webcamList);try{for(e.s();!(t=e.n()).done;){var n=t.value;if("user"==this._facingMode&&n.label.toLowerCase().includes("front")||"enviroment"==this._facingMode&&n.label.toLowerCase().includes("back")){this._selectedDeviceId=n.deviceId;break}}}catch(i){e.e(i)}finally{e.f()}}},{key:"flip",value:function(){this._facingMode="user"==this._facingMode?"enviroment":"user",this._webcamElement.style.transform="",this.selectCamera()}},{key:"start",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var e,n=this,r=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.abrupt("return",new Promise((function(t,i){n.stop(),navigator.mediaDevices.getUserMedia(n.getMediaConstraints()).then((function(r){n._streamList.push(r),n.info().then((function(r){n.selectCamera(),e?n.stream().then((function(e){t(n._facingMode)})).catch((function(t){i(t)})):t(n._selectedDeviceId)})).catch((function(t){i(t)}))})).catch((function(t){i(t)}))})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"info",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var e=this;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){navigator.mediaDevices.enumerateDevices().then((function(n){e.getVideoInputs(n),t(e._webcamList)})).catch((function(t){n(t)}))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"stream",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var e=this;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){navigator.mediaDevices.getUserMedia(e.getMediaConstraints()).then((function(n){e._streamList.push(n),e._webcamElement.srcObject=n,"user"==e._facingMode&&(e._webcamElement.style.transform="scale(-1,1)"),e._webcamElement.play(),t(e._facingMode)})).catch((function(t){console.log(t),n(t)}))})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"stop",value:function(){this._streamList.forEach((function(t){t.getTracks().forEach((function(t){t.stop()}))}))}},{key:"snap",value:function(){if(null!=this._canvasElement){null!=this._snapSoundElement&&this._snapSoundElement.play(),this._canvasElement.height=this._webcamElement.scrollHeight,this._canvasElement.width=this._webcamElement.scrollWidth;var t=this._canvasElement.getContext("2d");return"user"==this._facingMode&&(t.translate(this._canvasElement.width,0),t.scale(-1,1)),t.clearRect(0,0,this._canvasElement.width,this._canvasElement.height),t.drawImage(this._webcamElement,0,0,this._canvasElement.width,this._canvasElement.height),this._canvasElement.toDataURL("image/png")}throw"canvas element is missing"}}]),t}(),u=function(t){return new c(document.getElementById(t),"user").start()}},4791:function(t,e,n){"use strict";n.r(e);var i=n(4165),r=n(5861),o=n(8475),a=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all([o.qB.tinyFaceDetector.loadFromUri(e)]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=a},1729:function(t,e,n){"use strict";var i=n(9165);function r(){}function o(){}o.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,o,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},5192:function(t,e,n){t.exports=n(1729)()},9165:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);