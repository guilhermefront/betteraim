(this.webpackJsonpbetteraim=this.webpackJsonpbetteraim||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i,s=n(1),a=n(0),o=n.n(a),c=n(7),r=n.n(c),l=n(9);!function(e){e.setTour="SET_TOUR",e.setClick="SET_CLICK",e.setIsResizing="SET_RESIZING",e.setIsGaming="SET_GAMING",e.setTimer="SET_TIMER",e.setClickQuantity="SET_CLICK_QUANTITY",e.setBubbles="SET_BUBBLES",e.setPhase="SET_PHASE",e.setIsDragable="SET_DRAGABLE",e.setIsPaused="SET_PAUSED",e.setSituation="SET_SITUATION",e.setIsWindowFetched="SET_WINDOW_FETCHED",e.setIsFullScreen="SET_FULLSCREEN",e.setWindowData="SET_WINDOW_DATA",e.setIsDraging="SET_IS_DRAGING",e.setResetWindows="SET_RESET_WINDOWS"}(i||(i={}));var b,u=n(34),d=n(13),h=n(3),j=function(e){var t=e.gameWidth,n=e.bubbleSize;return Math.floor(Math.random()*(t-n)-t+1)+t+"px"},p=function(e){var t=e.gameHeight,n=e.bubbleSize;return Math.floor(Math.random()*(t-n)-t+1)+t+"px"},g=function(e,t,n){return{id:e,left:j({gameWidth:t.width,bubbleSize:n}),top:p({gameHeight:t.height,bubbleSize:n}),width:"".concat(n,"px"),height:"".concat(n,"px")}};!function(e){e.barOptionsDimensions="BAR_OPTIONS_DIMENSIONS",e.barOptionsPositioning="BAR_OPTIONS_POSITIONING",e.barGoalDimensions="BAR_GOAL_DIMENSIONS",e.barGoalPositioning="BAR_GOAL_POSITIONING",e.windowDimensions="WINDOW_DIMENSIONS",e.windowPositioning="WINDOW_POSITIONING",e.level="LEVEL"}(b||(b={}));var O=function(e){var t=e.localString,n=e.localObject;return localStorage.setItem(t,JSON.stringify(n))},m=function(e){var t=e.localString;return JSON.parse(localStorage.getItem(t))},w={windowDimensions:{x:0,y:0,width:0,height:0},barGoalDimensions:{x:0,y:0,width:0,height:0},barOptionsDimensions:{x:0,y:0,width:0,height:0},isWindowFetched:!1,resetWindows:!1,isTourOpen:!1,isResizing:!1,isDragable:!1,isDraging:!1,isGaming:!1,isPaused:!1,isFullScreen:!1,phase:0,points:0,meta:55,clickQuantity:0,timer:0,click:!1,bubbles:[],bubbleSize:40,bubblesQuantity:5,situation:""},f=function(e,t){t.type;var n=t.payload;switch(a){case i.setWindowData:var s=n.content,a=n.type;return Object(h.a)(Object(h.a)({},e),{},Object(d.a)({},a,Object(h.a)(Object(h.a)({},e[a]),s)));case i.setTour:return Object(h.a)(Object(h.a)({},e),{},{isTourOpen:n});case i.setIsDraging:return Object(h.a)(Object(h.a)({},e),{},{isDraging:n});case i.setClick:return Object(h.a)(Object(h.a)({},e),{},{points:e.points<=0?0:e.points-3});case i.setIsResizing:return Object(h.a)(Object(h.a)({},e),{},{isResizing:n});case i.setIsFullScreen:return n?Object(h.a)(Object(h.a)({},e),{},{isFullScreen:n}):Object(h.a)(Object(h.a)({},e),{},{isFullScreen:!e.isFullScreen});case i.setIsGaming:return"rejected"===n||"passed"===n?Object(h.a)(Object(h.a)({},e),{},{bubbles:[],points:0,isGaming:!1,situation:n}):"start"===n?Object(h.a)(Object(h.a)({},e),{},{bubbles:[],points:0,isGaming:!0,situation:n}):Object(h.a)(Object(h.a)({},e),{},{isGaming:n});case i.setTimer:return"decrease"===n?Object(h.a)(Object(h.a)({},e),{},{timer:e.timer-1}):Object(h.a)(Object(h.a)({},e),{},{timer:n});case i.setClickQuantity:return"increase"===n?Object(h.a)(Object(h.a)({},e),{},{points:e.points+5,clickQuantity:e.clickQuantity++}):"decrease"===n?Object(h.a)(Object(h.a)({},e),{},{points:e.points<=0?0:e.points-5,clickQuantity:e.clickQuantity++}):Object(h.a)(Object(h.a)({},e),{},{clickQuantity:n});case i.setBubbles:return"add"===n.type?Object(h.a)(Object(h.a)({},e),{},{bubbles:[].concat(Object(u.a)(e.bubbles),[n.content])}):"reset"===n.type?Object(h.a)(Object(h.a)({},e),{},{bubbles:[]}):"update-position"===n.type?Object(h.a)(Object(h.a)({},e),{},{bubbles:e.bubbles.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{left:j({gameWidth:e.windowDimensions.width,bubbleSize:e.bubbleSize}),top:p({gameHeight:e.windowDimensions.height,bubbleSize:e.bubbleSize})})}))}):"update-position-to"===n.type?Object(h.a)(Object(h.a)({},e),{},{bubbles:e.bubbles.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{left:j({gameWidth:n.content.width,bubbleSize:n.content.bubbleSize}),top:p({gameHeight:n.content.height,bubbleSize:n.content.bubbleSize})})}))}):"reset"===n.type?Object(h.a)(Object(h.a)({},e),{},{bubbles:[]}):"delete"===n.type?Object(h.a)(Object(h.a)({},e),{},{bubbles:e.bubbles.filter((function(e){return e.id!==n.content}))}):Object(h.a)(Object(h.a)({},e),{},{bubbles:e.bubbles.filter((function(e){return e.id!==n}))});case i.setPhase:return"increase"===n?Object(h.a)(Object(h.a)({},e),{},{phase:e.phase+1,meta:e.meta+20}):Object(h.a)(Object(h.a)({},e),{},{phase:n});case i.setIsDragable:return n?Object(h.a)(Object(h.a)({},e),{},{isDragable:n}):Object(h.a)(Object(h.a)({},e),{},{isDragable:!e.isDragable});case i.setIsPaused:return n?Object(h.a)(Object(h.a)({},e),{},{isPaused:n}):Object(h.a)(Object(h.a)({},e),{},{isPaused:!e.isPaused});case i.setSituation:return Object(h.a)(Object(h.a)({},e),{},{situation:n});case i.setIsWindowFetched:return Object(h.a)(Object(h.a)({},e),{},{isWindowFetched:n});case i.setResetWindows:return Object(h.a)(Object(h.a)({},e),{},{resetWindows:n});default:throw new Error("The action ".concat(a," isn't supported"))}},y=Object(a.createContext)(null),x=function(){var e=Object(a.useContext)(y);if(!e)throw new Error("useGame must be used inside a Provider");var t=Object(l.a)(e,2),n=t[0],s=t[1];return{state:n,setClick:function(e){return s({type:i.setClick,payload:e})},setIsResizing:function(e){return s({type:i.setIsResizing,payload:e})},setIsGaming:function(e){return s({type:i.setIsGaming,payload:e})},setTimer:function(e){s({type:i.setTimer,payload:e})},setClickQuantity:function(e){return s({type:i.setClickQuantity,payload:e})},setBubbles:function(e){var t=e.type,n=e.content;return s({type:i.setBubbles,payload:{type:t,content:n}})},setPhase:function(e){return s({type:i.setPhase,payload:e})},setIsDragable:function(e){return s({type:i.setIsDragable,payload:e})},setIsPaused:function(e){return s({type:i.setIsPaused,payload:e})},setSituation:function(e){return s({type:i.setSituation,payload:e})},setIsWindowFetched:function(e){return s({type:i.setIsWindowFetched,payload:e})},setIsFullScreen:function(e){return s({type:i.setIsFullScreen,payload:e})},setWindowData:function(e){var t=e.type,n=e.content;return s({type:i.setWindowData,payload:{type:t,content:n}})},setIsDraging:function(e){s({type:i.setIsDraging,payload:e})},setResetWindows:function(e){s({type:i.setResetWindows,payload:e})}}},S=function(){var e=Object(a.useContext)(y);if(!e)throw new Error("useGame must be used inside a Provider");var t=Object(l.a)(e,2),n=t[0],s=t[1];return{state:n,setTour:function(e){return s({type:i.setTour,payload:e})},dispatch:s}},D=function(e){var t=e.children,n=Object(a.useReducer)(f,w),i=Object(l.a)(n,2),o=i[0],c=i[1],r=Object(a.useMemo)((function(){return{state:o,dispatch:c}}),[o]).state;return Object(s.jsx)(y.Provider,{value:[r,c],children:t})},v=(n(42),function(){var e=S().setTour;return Object(s.jsx)("div",{className:"help-icon",onClick:function(){return e(!0)},children:"?"})}),I=(n(43),n(44),n.p+"static/media/bubbles-background.60773dd3.png"),A=function(){var e=x(),t=e.setIsGaming,n=e.setPhase,i=Object(a.useState)(!1),o=Object(l.a)(i,2),c=o[0],r=o[1];Object(a.useEffect)((function(){var e,t=(e="LEVEL",localStorage.getItem(e));t&&n(Number(t)),r(!0)}),[]);return Object(s.jsxs)("button",{className:"Home",onClick:function(){c&&t("start")},children:[Object(s.jsx)("img",{className:"Home__bubbles-background",alt:"bubbles",src:I}),Object(s.jsx)("div",{className:"Home__play",children:Object(s.jsx)("span",{className:"Home__text",children:"Play"})})]})},_=(n(45),n(16)),N=function(){var e=x(),t=e.setTimer,n=e.state,i=e.setClickQuantity,o=e.setBubbles,c=n.phase,r=n.windowDimensions,l=n.bubbleSize,b=n.isResizing,u=n.isPaused,d=n.bubblesQuantity,h=n.situation,j=n.isWindowFetched,p=n.isGaming,O=n.isDragable,m=n.bubbles,w=n.isDraging;Object(a.useEffect)((function(){if("start"===h&&j){t(1e3*c+4e4);var e=1e3,n=0,i=setTimeout((function t(){o({type:"add",content:g(Object(_.a)(),r,l)}),n++,e=1.5*e-100*c;var i=setTimeout(t,e);n===d&&clearInterval(i)}),e);return function(){return clearTimeout(i)}}}),[]);return Object(s.jsx)("ul",{"data-testid":"bubbles-list",className:"bubble-scheme",children:!b&&!w&&p&&m.map((function(e){return Object(s.jsx)("li",{"data-testid":"bubble-item",id:e.id,style:{left:e.left,top:e.top,width:e.width,height:e.width,animation:u?"bubblesAnimation 3s ease-in-out alternate forwards paused":"bubblesAnimation 3s ease-in-out alternate forwards"},className:"bubble-scheme__bubbles",onMouseDown:function(){return t=e.id,void(u||O||(i("increase"),o({type:"delete",content:t}),setTimeout((function(){o({type:"add",content:g(Object(_.a)(),r,l)})}),2e3)));var t},onAnimationEnd:function(){return t=e.id,b||i("decrease"),o({type:"delete",content:t}),void setTimeout((function(){o({type:"add",content:g(Object(_.a)(),r,l)})}),2e3);var t}},e.id)}))})},E=n(8),T=n(26),W=n.n(T),P=(n(52),n(53),function(){var e=x(),t=e.state,n=e.setIsGaming,i=t.isGaming,a=t.timer,o=t.isPaused;return Object(s.jsx)("div",{className:"time-bar",children:Object(s.jsx)("span",{className:"time-bar--reached time-bar--reached",onAnimationEnd:function(){return n("rejected")},style:o?{animation:"fill ".concat(a/1e3,"s linear PAUSED forwards")}:i?{animation:"fill ".concat(a/1e3,"s linear forwards")}:{animation:"initial"}})})}),G=n.p+"static/media/pauseicon.be711a01.svg",R=(n(54),function(){return x().state.isPaused?Object(s.jsx)("img",{alt:"paused",src:G,className:"pause-icon"}):null}),F=function(e){var t=e.label,n=void 0===t?"Try again":t,i=e.color,a=void 0===i?"#FF2323":i,o=x(),c=o.state,r=o.setIsGaming,l=o.setTimer,b=c.situation,u=c.phase;return Object(s.jsx)("div",{className:"handle-situation__button-container",children:Object(s.jsxs)("button",{onClick:function(){"passed"===b&&(r("start"),l(100*u+4e4)),"rejected"===b&&(r("start"),l(100*u+4e4))},className:"handle-situation__button",style:{backgroundColor:a},children:[Object(s.jsx)("img",{className:"handle-situation__button-img",alt:"refresh",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgBpVFRDcMgEIVmAupgOFgdrBIqYQ46B7MwB9QBEmphU9A6YA5uB3kfBwGyZi95oeXdu7zjtCqAiEY+Lsye+Wa+tNY7tHBnoSWmO9NTGSvTgBHSuIjC0MAxLUwSS2Lm8ynEGdFkY4NGCeJ84n8qzD+gxmTpotnh21Yeb6UKTqyPqFtUGTuY46NEo7M6iE79gU5EmtRRcNwHYm/5in4x9zASXrav1IWVDTXBiwQz7gx2bKH5VoON2nDN0Vi8Ib5MYpnXvPYLer2EbMIEEzEAAAAASUVORK5CYII="}),Object(s.jsx)("span",{className:"handle-situation__button-text",children:n})]})})},z=(n(55),function(){var e=x().state,t=e.situation,n=e.phase;return Object(s.jsx)("div",{className:"handle-situation",children:"passed"===t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"handle-situation__title",children:[Object(s.jsxs)("p",{className:"handle-situation__level",children:[Object(s.jsx)("span",{className:"handle-situation__level--lvl",children:"LVL:"}),Object(s.jsx)("span",{className:"handle-situation__level--number",children:n})]}),"Passed"]}),Object(s.jsx)(F,{color:"#00ae00",label:"Next level"})]}):"rejected"===t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"handle-situation__title",children:"Level not completed"}),Object(s.jsx)(F,{})]}):null})}),C=n(5),k=function(e,t,n,i,s,a,o,c){t&&e({type:"windowDimensions",content:{width:774,height:448}}),n&&e({type:"windowDimensions",content:{width:650,height:440}}),i&&e({type:"windowDimensions",content:{width:575,height:440}}),s&&e({type:"windowDimensions",content:{width:470,height:400}}),a&&e({type:"windowDimensions",content:{width:400,height:400}}),o&&e({type:"windowDimensions",content:{width:345,height:400}}),c&&e({type:"windowDimensions",content:{width:310,height:400}})},B=(n(56),function(){var e=x().state.phase;return Object(s.jsxs)("div",{className:"show-level",children:[Object(s.jsx)("span",{className:"show-level__level",children:"Level:"}),Object(s.jsx)("span",{className:"show-level__phase",children:e})]})}),Q=function(){var e=x(),t=e.setClick,n=e.setBubbles,i=e.state,o=e.setIsResizing,c=e.setIsWindowFetched,r=e.setIsFullScreen,l=e.setWindowData,u=e.setIsDraging,d=e.setResetWindows,h=i.windowDimensions,j=i.isDragable,p=i.situation,g=i.isWindowFetched,w=i.isFullScreen,f=i.resetWindows,y=Object(C.useMediaQuery)({minWidth:790}),S=Object(C.useMediaQuery)({maxWidth:790}),D=Object(C.useMediaQuery)({maxWidth:670}),v=Object(C.useMediaQuery)({maxWidth:585}),I=Object(C.useMediaQuery)({maxWidth:485}),A=Object(C.useMediaQuery)({maxWidth:415}),_=Object(C.useMediaQuery)({maxWidth:360});Object(a.useEffect)((function(){S&&g&&d(!0)}),[g]),Object(a.useEffect)((function(){var e=m({localString:b.windowPositioning});l(e?{type:"windowDimensions",content:e}:{type:"windowDimensions",content:{x:window.screen.width/2-h.width/2,y:window.screen.height/2-h.height/2-62}});var t=m({localString:b.windowDimensions});t?l({type:"windowDimensions",content:t}):k(l,y,S,D,v,I,A,_),c(!0),d(!1)}),[f,g]),Object(a.useEffect)((function(){n({type:"update-position"}),o(!0),o(!1)}),[h]);return Object(s.jsx)(E.a,{"data-testid":"game-window",minHeight:62,minWidth:63,className:"game-window",bounds:".App",disableDragging:!j,enableResizing:j,onClick:function(){return t(!1)},onResizeStart:function(){return o(!0)},onResizeStop:function(e,t,n,i,s){var a=n.offsetWidth,o=n.offsetHeight;l({type:"windowDimensions",content:{width:a,height:o}}),O({localString:b.windowDimensions,localObject:{width:a,height:o}});var c=s.x,r=s.y;l({type:"windowDimensions",content:{x:c,y:r}}),O({localString:b.windowPositioning,localObject:{x:c,y:r}})},style:{border:j?"1px dashed red":"initial",background:"start"===p?"linear-gradient(0deg, rgba(255, 255, 255, 0.41), rgba(255, 255, 255, 0.41)), #2d2d2d":"linear-gradient(129.44deg, rgba(255, 255, 255, 0.23) -18.63%, rgba(255, 255, 255, 0) 100.85%), #2D2D2D"},default:h,size:h,onDragStart:function(){u(!0)},onDragStop:function(e,t){u(!1);var n=t.x,i=t.y;l({type:"windowDimensions",content:{x:n,y:i}}),O({localString:b.windowPositioning,localObject:{x:n,y:i}})},position:{x:h.x,y:h.y},children:Object(s.jsx)(W.a,{enabled:w,onChange:function(e){if(e)l({type:"windowDimensions",content:{width:window.screen.height,height:window.screen.width}});else{r(!1);var t=m({localString:b.windowDimensions});if(t){var n=t.width,i=t.height;l({type:"windowDimensions",content:{width:n,height:i}})}else k(l,y,S,D,v,I,A,_)}},children:"rejected"===p||"passed"===p?Object(s.jsx)(z,{}):"start"===p&&g?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(P,{}),Object(s.jsx)(N,{}),Object(s.jsx)(R,{}),Object(s.jsx)(B,{})]}):Object(s.jsx)(s.Fragment,{})})})},H=n(33),M=function(){var e=S(),t=e.setTour,n=e.state.isTourOpen;return Object(s.jsx)(H.a,{accentColor:"#ff2323",steps:[{selector:".react-draggable",content:"Welcome to the tutorial. Let's go directly to the point, is in this window that you're tested. Hit the bubbles as fast as you can.",position:"top",style:{backgroundColor:"#383838",fontSize:"15px",color:"white",lineHeight:"140%",fontFamily:"Play"}},{selector:".time-bar",content:"This bar indicates how much time is left to end the round.",style:{backgroundColor:"#383838",fontSize:"15px",color:"white",lineHeight:"140%",fontFamily:"Play"},position:"left"},{selector:".bar__goal",content:"This bar indicates the goal to be achieved. As you hit those bubbles, it will fill, if you reached the required quantity, you passed to the next level.",position:"right",style:{backgroundColor:"#383838",fontSize:"15px",color:"white",lineHeight:"140%",fontFamily:"Play"}},{selector:".bar__options",content:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"These are the game options which you're capable of:"}),Object(s.jsx)("li",{children:"Resizing and moving all the windows in this game (hand icon)"}),Object(s.jsx)("li",{children:"Pause the game (pause icon)"}),Object(s.jsx)("li",{children:"Enter in fullscreen (\xedcone de fullscreen)"})]})},position:"right",style:{listStylePosition:"inside",backgroundColor:"#383838",fontSize:"15px",color:"white",lineHeight:"140%",fontFamily:"Play"}},{selector:".App",content:"This is it, we're done. Have fun!",position:"center",style:{backgroundColor:"#383838",fontSize:"15px",color:"white",lineHeight:"140%",fontFamily:"Play"}}],isOpen:n,onRequestClose:function(){return t(!1)},rounded:8})},L=(n(63),function(){var e=x(),t=e.state,n=e.setIsGaming,i=e.setPhase,o=e.setWindowData,c=t.meta,r=t.points,l=t.isDragable,u=t.windowDimensions,d=t.phase,h=t.barGoalDimensions,j=t.resetWindows,p=100*r/c;Object(a.useEffect)((function(){var e=m({localString:b.barGoalPositioning});o(e?{type:"barGoalDimensions",content:e}:{type:"barGoalDimensions",content:{x:(window.screen.width-u.width)/2,y:window.screen.height-(window.screen.height-u.height)/2+15-62}});var t=m({localString:b.barGoalDimensions});o(t?{type:"barGoalDimensions",content:t}:{type:"barGoalDimensions",content:{width:u.width-135,height:31}})}),[j]),Object(a.useEffect)((function(){p>=100&&(n("passed"),i("increase"))}),[p]),Object(a.useEffect)((function(){var e,t;e="LEVEL",t=d,localStorage.setItem(e,String(t))}),[d]);return Object(s.jsx)(E.a,{bounds:".App",disableDragging:!l,enableResizing:l,className:"bar__wrapper",onDragStop:function(e,t){var n=t.x,i=t.y;o({type:"barGoalDimensions",content:{x:n,y:i}}),O({localString:b.barGoalPositioning,localObject:{x:n,y:i}})},onResizeStop:function(e,t,n,i,s){var a=n.offsetWidth,c=n.offsetHeight;o({type:"barGoalDimensions",content:{width:a,height:c}}),O({localString:b.barGoalDimensions,localObject:{width:a,height:c}});var r=s.x,l=s.y;o({type:"barGoalDimensions",content:{x:r,y:l}}),O({localString:b.barGoalPositioning,localObject:{x:r,y:l}})},size:h,default:h,position:{x:h.x,y:h.y},children:Object(s.jsx)("div",{style:{border:l?"1px dashed red":"initial"},className:"bar__goal",children:Object(s.jsx)("span",{className:"bar__goal--fill",style:{width:"".concat(p>=100?100:p,"%"),backgroundColor:p>=100?"#00ae00":"#484848"}})})})}),U=n.p+"static/media/hand.b54fe62d.svg",Y=n.p+"static/media/pause.336952b5.svg",V=function(e){var t=e.setFunction,n=e.condition,i=e.icon,a=e.alt;return Object(s.jsx)("button",{className:"bar__options-item",onClick:function(){return t()},style:{filter:n?"brightness(180%)":"initial"},children:Object(s.jsx)("img",{alt:a,src:i})})},q=n.p+"static/media/fullscreen.cba4b444.svg",K=function(){var e=x(),t=e.state,n=e.setIsFullScreen,i=t.isFullScreen;return Object(s.jsx)("button",{className:"bar__options-item",onClick:function(){return n()},style:{filter:i?"brightness(180%)":"initial"},children:Object(s.jsx)("img",{alt:"fullscreen",src:q})})},X=(n(64),function(){var e=x(),t=e.state,n=e.setWindowData,i=e.setIsDragable,o=e.setIsPaused,c=t.windowDimensions,r=t.isDragable,l=t.barOptionsDimensions,u=t.isPaused,d=t.resetWindows;Object(a.useEffect)((function(){var e=m({localString:b.barOptionsPositioning});n(e?{type:"barOptionsDimensions",content:e}:{type:"barOptionsDimensions",content:{x:c.width-127+(window.screen.width-c.width)/2,y:window.screen.height-(window.screen.height-c.height)/2+15-62}});var t=m({localString:b.barOptionsDimensions});n(t?{type:"barOptionsDimensions",content:t}:{type:"barOptionsDimensions",content:{width:127,height:31}})}),[d]);var h=Object(C.useMediaQuery)({maxWidth:790});return Object(s.jsx)(E.a,{bounds:".App",className:"bar__options",minWidth:127,minHeight:31,default:l,disableDragging:!!h||!r,enableResizing:r,onResizeStop:function(e,t,i,s,a){var o=i.offsetWidth,c=i.offsetHeight;n({type:"barOptionsDimensions",content:{width:o,height:c}}),O({localString:b.barOptionsDimensions,localObject:{width:o,height:c}});var r=a.x,l=a.y;n({type:"barOptionsDimensions",content:{x:r,y:l}}),O({localString:b.barOptionsPositioning,localObject:{x:r,y:l}})},onDragStop:function(e,t){var i=t.x,s=t.y;n({type:"barOptionsDimensions",content:{x:i,y:s}}),O({localString:b.barOptionsPositioning,localObject:{x:i,y:s}})},size:l,position:{x:l.x,y:l.y},children:Object(s.jsx)("div",{style:{border:r?"1px dashed red":"initial"},className:"bar__options",children:Object(s.jsxs)("ul",{className:"bar__options-list",children:[Object(s.jsx)(V,{setFunction:i,condition:r,icon:U,alt:"edit windows"}),Object(s.jsx)(V,{setFunction:o,condition:u,icon:Y,alt:"pause"}),Object(s.jsx)(K,{})]})})})}),J=(n(65),function(){var e=x(),t=e.state,n=e.setResetWindows,i=t.isDragable,a=t.isResizing;return i||a?Object(s.jsx)("button",{className:"Reset",onClick:function(){localStorage.clear(),n(!0)},children:"Reset windows"}):null}),Z=function(){var e=x().state,t=e.situation,n=e.isWindowFetched;return Object(s.jsx)("div",{className:"App",children:""!==t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Q,{}),n?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(L,{}),Object(s.jsx)(X,{}),Object(s.jsx)(J,{})]}):null,Object(s.jsx)(M,{}),Object(s.jsx)(v,{})]}):Object(s.jsx)(A,{})})};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(D,{children:Object(s.jsx)(Z,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7f6c68ac.chunk.js.map