"use strict";(self.webpackChunkinter_study=self.webpackChunkinter_study||[]).push([[41],{4041:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var o=n(5671),i=n(3144),a=n(136),r=n(7277),s=n(7313),c=n(8694),l=n(6417),u=function(t){(0,a.Z)(n,t);var e=(0,r.Z)(n);function n(t){var i;return(0,o.Z)(this,n),(i=e.call(this,t)).state={countDown:5,countDownTimer:null},i}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({countDownTimer:setInterval((function(){t.setState({countDown:t.state.countDown-1}),1===t.state.countDown&&clearInterval(t.state.countDownTimer)}),1e3)})}},{key:"render",value:function(){return(0,l.jsxs)("div",{className:"page-primary bg-gradient-to-br text-white bg-indigo-800 from-indigo-600 via-indigo-800 to-indigo-900 flex flex-col items-center justify-center",children:[(0,l.jsx)("svg",{className:"py-2 w-16 h-16 animate-bounce fill-gray-200",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,l.jsx)("h2",{className:"py-2 text-center text-xl font-bold",children:"403 - \u975e\u6cd5\u8bbf\u95ee"}),0===this.state.countDown?(0,l.jsx)(c.default,{to:"/",replace:!0}):(0,l.jsxs)("i",{className:"px-14 text-center",children:["\u5269\u4f59 ",this.state.countDown," \u79d2\u540e\u8fd4\u56de\u9996\u9875"]})]})}}]),n}(s.Component)}}]);