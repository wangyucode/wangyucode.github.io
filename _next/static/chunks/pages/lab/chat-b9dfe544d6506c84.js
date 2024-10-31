(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[245],{18405:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/chat",function(){return a(57184)}])},12044:function(e,t,a){"use strict";a.d(t,{Z:function(){return Modal}});var n=a(85893),r=a(44080),s=a(22644);function Modal(e){let{isOpen:t,setIsOpen:a,children:l,canClose:i=!0}=e;return(0,n.jsx)(r.u,{appear:!0,show:t,children:(0,n.jsx)(s.V,{onClose:()=>{i&&a(!1)},className:"fixed inset-0 bg-black/30 flex min-h-full items-center justify-center p-4 text-center",children:(0,n.jsx)(r.u.Child,{enter:"ease-out duration-300",enterFrom:"scale-50",enterTo:"scale-100",leave:"ease-in duration-200",leaveFrom:"scale-100",leaveTo:"scale-50",children:(0,n.jsx)(s.V.Panel,{className:"w-full max-w-md p-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-slate-800",children:l})})})})}},57184:function(e,t,a){"use strict";let n,r;a.r(t),a.d(t,{default:function(){return Chat}});var s,l,i=a(85893),o=a(67294),c=a(56673);let d=o.forwardRef(function({title:e,titleId:t,...a},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},a),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"}))}),u=o.forwardRef(function({title:e,titleId:t,...a},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},a),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"}))});var g=a(66761),m=a(13882),h=a(83946);function parseISO(e,t){(0,m.Z)(1,arguments);var a,n,r,s=(0,h.Z)(null!==(a=null==t?void 0:t.additionalDigits)&&void 0!==a?a:2);if(2!==s&&1!==s&&0!==s)throw RangeError("additionalDigits must be 0, 1 or 2");if(!("string"==typeof e||"[object String]"===Object.prototype.toString.call(e)))return new Date(NaN);var l=function(e){var t,a={},n=e.split(p.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?t=n[0]:(a.date=n[0],t=n[1],p.timeZoneDelimiter.test(a.date)&&(a.date=e.split(p.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var r=p.timezone.exec(t);r?(a.time=t.replace(r[1],""),a.timezone=r[1]):a.time=t}return a}(e);if(l.date){var i=function(e,t){var a=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:NaN,restDateString:""};var r=n[1]?parseInt(n[1]):null,s=n[2]?parseInt(n[2]):null;return{year:null===s?r:100*s,restDateString:e.slice((n[1]||n[2]).length)}}(l.date,s);n=function(e,t){if(null===t)return new Date(NaN);var a,n,r=e.match(x);if(!r)return new Date(NaN);var s=!!r[4],l=parseDateUnit(r[1]),i=parseDateUnit(r[2])-1,o=parseDateUnit(r[3]),c=parseDateUnit(r[4]),d=parseDateUnit(r[5])-1;if(s)return c>=1&&c<=53&&d>=0&&d<=6?((a=new Date(0)).setUTCFullYear(t,0,4),n=a.getUTCDay()||7,a.setUTCDate(a.getUTCDate()+((c-1)*7+d+1-n)),a):new Date(NaN);var u=new Date(0);return i>=0&&i<=11&&o>=1&&o<=(b[i]||(isLeapYearIndex(t)?29:28))&&l>=1&&l<=(isLeapYearIndex(t)?366:365)?(u.setUTCFullYear(t,i,Math.max(l,o)),u):new Date(NaN)}(i.restDateString,i.year)}if(!n||isNaN(n.getTime()))return new Date(NaN);var o=n.getTime(),c=0;if(l.time&&isNaN(c=function(e){var t=e.match(f);if(!t)return NaN;var a=parseTimeUnit(t[1]),n=parseTimeUnit(t[2]),r=parseTimeUnit(t[3]);return(24===a?0===n&&0===r:r>=0&&r<60&&n>=0&&n<60&&a>=0&&a<25)?36e5*a+6e4*n+1e3*r:NaN}(l.time)))return new Date(NaN);if(l.timezone){if(isNaN(r=function(e){if("Z"===e)return 0;var t=e.match(v);if(!t)return 0;var a="+"===t[1]?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return r>=0&&r<=59?a*(36e5*n+6e4*r):NaN}(l.timezone)))return new Date(NaN)}else{var d=new Date(o+c),u=new Date(0);return u.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),u.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),u}return new Date(o+c+r)}var p={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},x=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,f=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,v=/^([+-])(\d{2})(?::?(\d{2}))?$/;function parseDateUnit(e){return e?parseInt(e):1}function parseTimeUnit(e){return e&&parseFloat(e.replace(",","."))||0}var b=[31,null,31,30,31,30,31,31,30,31,30,31];function isLeapYearIndex(e){return e%400==0||e%4==0&&e%100!=0}function Messages(e){let{messages:t}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e,a)=>(0,i.jsx)(Message,{message:e,lastMessage:t[a-1]},a))})}function Message(e){var t;let{message:a,lastMessage:n}=e,r="system"===a.sender,s=r?0:29*Number.parseInt(a.sender),l=(null===(t=parseISO(null==n?void 0:n.time))||void 0===t?void 0:t.getTime())||0,o=parseISO(a.time).getTime()-l>6e4?(0,g.Z)(parseISO(a.time),"HH:mm"):null;return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("p",{className:"text-center text-xs",children:o}),(0,i.jsxs)("div",{className:"flex gap-2 mt-2 ".concat(a.isSelf?"flex-row-reverse":"flex-row"),children:[(0,i.jsx)("div",{className:"h-8 w-8 shrink-0 p-1 rounded-lg bg-sky-600 text-center text-white",style:s?{backgroundColor:"hsl(".concat(s,", 60%, 40%)")}:{},children:r?(0,i.jsx)(u,{className:"h-full w-full"}):(0,i.jsx)("span",{className:"h-full w-full text-white font-bold",children:a.sender})}),(0,i.jsx)("p",{className:"px-2 py-1 break-all rounded-lg border border-slate-400/30",children:a.content}),(0,i.jsx)("div",{className:"w-8 shrink-0"})]})]})}(s=l||(l={})).TEXT="text",s.PING="ping",s.PONG="pong",s.JOIN="join",s.RECONNECT="reconnect",s.LEAVE="leave",s.OFFLINE="offline",s.ERROR="error",s.CREATED="created",s.WELCOME="welcome";var N=a(31415),w=a(12044);function JoinDialog(e){let{hasError:t,onJoin:a,onCreate:n}=e,[r,s]=(0,o.useState)(""),[l,c]=(0,o.useState)(!1);(0,o.useEffect)(()=>{t&&(c(!0),s(""),setTimeout(()=>{c(!1)},2e3))},[t]);let onClickJoin=()=>{a(r)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ul",{className:"text-left text-sm",children:[(0,i.jsx)("li",{children:"\uD83D\uDCA1 请输入房间号加入房间"}),(0,i.jsx)("li",{children:"\uD83D\uDD12 所有人退出房间后, 记录会被清理"})]}),(0,i.jsxs)("div",{className:"mt-2 flex gap-2",children:[(0,i.jsx)("input",{className:"".concat(l?"ring-red-500 ring-2 ":"","grow px-2 py-1 rounded border border-slate-400/30 focus-visible:outline-0 focus-visible:ring-2"),placeholder:"房间号",maxLength:4,value:r,onChange:e=>{s(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&onClickJoin()}}),(0,i.jsx)("button",{className:"px-2 py-1 rounded border border-slate-400/30 disabled:bg-slate-500 disabled:active:ring-0 text-slate-100 bg-sky-600 hover:bg-sky-500 active:ring-2",onClick:onClickJoin,children:"加入"})]}),(0,i.jsxs)("div",{className:"my-2 flex gap-2 items-center",children:[(0,i.jsx)("div",{className:"grow h-px border-slate-400/30"}),"或",(0,i.jsx)("div",{className:"grow h-px border-slate-400/30"})]}),(0,i.jsx)("button",{className:"w-full px-2 py-1 rounded border border-slate-400/30 disabled:bg-slate-500 disabled:active:ring-0 text-slate-100 bg-sky-600 hover:bg-sky-500 active:ring-2",onClick:n,children:"创建房间"})]})}function ReconnectDialog(e){let{onConnect:t,onCancel:a}=e,n=localStorage.getItem("chat-rid"),r=localStorage.getItem("chat-uid");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{className:"text-left text-sm",children:(0,i.jsxs)("li",{children:["\uD83D\uDCA1 你是 ",n," 号房间的 ",r," 号玩家，是否尝试重连？"]})}),(0,i.jsx)("button",{className:"w-full mt-2 px-2 py-1 rounded border border-slate-400/30 text-slate-100 bg-sky-600 hover:bg-sky-500 active:ring-2",onClick:t,children:"重连"}),(0,i.jsx)("button",{className:"w-full mt-2 px-2 py-1 rounded border border-slate-400/30 bg-slate-500/5 hover:bg-slate-500/20 active:ring-2",onClick:a,children:"取消"})]})}let j="wss://wycode.cn";function Chat(){let[e,t]=(0,o.useState)(!1),[a,s]=(0,o.useState)(!1),[u,g]=(0,o.useState)([]),[m,h]=(0,o.useState)(""),[p,x]=(0,o.useState)(""),[f,v]=(0,o.useState)(0),[b,D]=(0,o.useState)(0),[y,k]=(0,o.useState)(!1),C=(0,o.useRef)(null);(0,o.useEffect)(()=>(showDialog(),()=>{null==n||n.close(),clearInterval(r)}),[]);let showDialog=()=>{localStorage.getItem("chat-rid")&&localStorage.getItem("chat-uid")?(s(!0),t(!1)):(t(!0),s(!1))},setupListeners=()=>{n.onopen=()=>{r=setInterval(()=>{n.send(JSON.stringify({type:"ping"}))},2e4)},n.onmessage=e=>{let t=JSON.parse(e.data);switch(console.log(t),t.type){case l.PONG:return;case l.CREATED:x(t.content),localStorage.setItem("chat-rid",t.content);return;case l.WELCOME:v(t.content),localStorage.setItem("chat-uid",t.content);return;case l.JOIN:t.content="".concat(t.content,"号玩家 加入了房间"),D(e=>e+1);break;case l.RECONNECT:t.content="".concat(t.content,"号玩家 重新加入了房间");break;case l.LEAVE:t.content="".concat(t.content,"号玩家 离开了房间"),D(e=>e-1);break;case l.OFFLINE:t.content="".concat(t.content,"号玩家掉线被踢出房间"),D(e=>e-1);break;default:t.sender==localStorage.getItem("chat-uid")&&(t.isSelf=!0)}g(e=>[...e,t]),scrollToBottom()},n.onclose=()=>{console.log("disconnected"),clearInterval(r),k(!0),x(""),v(0),D(0),g([]),showDialog()}},scrollToBottom=()=>{let e=C.current;e&&e.scrollHeight-e.scrollTop===e.clientHeight&&setTimeout(()=>{e.scrollTop=e.scrollHeight},0)},cancel=()=>{localStorage.removeItem("chat-rid"),localStorage.removeItem("chat-uid"),showDialog()},send=()=>{m&&(n.send(JSON.stringify({type:l.TEXT,content:m})),h(""))};return(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)("div",{className:"flex flex-col p-4 mx-auto w-full max-w-3xl h-content gap-2",children:[(0,i.jsx)("div",{className:"flex gap-2 justify-between border-b pb-2 border-slate-400/30",children:p?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{children:["房间号：",p]}),(0,i.jsxs)("span",{children:["玩家数量：",b]}),(0,i.jsxs)("span",{children:["你是：",f,"号"]}),(0,i.jsx)("button",{className:"px-2 py-1 rounded border border-slate-400/30 text-slate-100 bg-sky-600 hover:bg-sky-500 active:ring-2",onClick:()=>{n.send(JSON.stringify({type:l.LEAVE})),cancel()},children:(0,i.jsx)(N.Z,{className:"w-6"})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"grow",children:"未加入房间"}),(0,i.jsx)("button",{className:"px-2 py-1 rounded border border-slate-400/30 text-slate-100 bg-sky-600 hover:bg-sky-500 active:ring-2",onClick:showDialog,children:"加入"})]})}),(0,i.jsx)("div",{className:"grow overflow-y-auto",ref:C,children:(0,i.jsx)(Messages,{messages:u})}),(0,i.jsxs)("div",{className:"relative w-full",children:[(0,i.jsx)("input",{className:"block w-full h-12 pl-3 pr-12 border bg-slate-500/5 rounded border-slate-400/30",value:m,onChange:e=>{h(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&send()}}),(0,i.jsx)("button",{className:"absolute right-3 bottom-3 hover:text-slate-800 dark:hover:text-white hover:scale-110 transition-transform",onClick:send,children:(0,i.jsx)(d,{className:"w-6"})})]})]}),(0,i.jsx)(w.Z,{isOpen:e,setIsOpen:t,children:(0,i.jsx)(JoinDialog,{onJoin:e=>{e&&(n=new WebSocket("".concat(j,"/api/v1/ws/join?type=1&rid=").concat(e)),setupListeners(),t(!1))},onCreate:()=>{n=new WebSocket("".concat(j,"/api/v1/ws/create?type=1")),setupListeners(),t(!1)},hasError:y})}),(0,i.jsx)(w.Z,{isOpen:a,setIsOpen:s,children:(0,i.jsx)(ReconnectDialog,{onConnect:()=>{let e=localStorage.getItem("chat-rid"),t=localStorage.getItem("chat-uid");n=new WebSocket("".concat(j,"/api/v1/ws/join?type=1&rid=").concat(e,"&uid=").concat(t)),setupListeners(),s(!1)},onCancel:cancel})})]})}}},function(e){e.O(0,[358,761,673,774,888,179],function(){return e(e.s=18405)}),_N_E=e.O()}]);