(this.webpackJsonptheshackletons=this.webpackJsonptheshackletons||[]).push([[0],[,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(2),i=a(3),o=a(5),l=a(4),s=a(6),c=a(0),r=a.n(c),d=a(36),u=a(21),h=a.n(u),m=(a(33),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"processing-container"},r.a.createElement("div",{className:"loading-gif-container"},r.a.createElement("img",{src:h.a,alt:"loading..."})),r.a.createElement("h2",{className:"processing-message"},r.a.createElement(d.a,{id:this.props.message&&this.props.message.length?this.props.message:"processing.defaultMessage"})))}}]),t}(c.Component))},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/loading.88714a27.gif"},function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(17),l=a.n(o),s=(a(27),a(28),a(37)),c=a(8),r=a(13),d=a(2),u=a(3),h=a(5),m=a(4),b=a(6),f=a(36),p=(a(29),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"onHeaderLinkClick",value:function(e){this.props.handleHeaderLinkClick(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("header",null,i.a.createElement("div",{className:"header-links-container"},this.props.headerLinks.map((function(t){return i.a.createElement("a",{href:"#",className:"header-link link.key",onClick:function(){return e.onHeaderLinkClick(t.id)},key:t.id},i.a.createElement(f.a,{id:t.translationId}))}))))}}]),t}(n.Component)),g=(a(32),a(20)),y=a.n(g),v=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={initialized:!1,loading:!0},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.props.hidden||this.state.initialized||this.setState({initialized:!0})}},{key:"onModalClose",value:function(){this.props.handleOnModalClose()}},{key:"focusModal",value:function(){this.props.handleFocusModal()}},{key:"getRandomPosition",value:function(){var e={};return e.y=70*Math.random()-50,e.x=400*Math.random()-200,e}},{key:"render",value:function(){return i.a.createElement(y.a,{onMouseDown:this.focusModal.bind(this),handle:".modal-header",defaultPosition:this.getRandomPosition()},i.a.createElement("div",{className:"modal ".concat(this.props.hidden?"hidden":"visible"),style:{zIndex:this.props.zIndex,maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight}},i.a.createElement("div",{className:"modal-header"},i.a.createElement("div",{className:"modal-close",onClick:this.onModalClose.bind(this)},i.a.createElement("div",null,"\xd7")),i.a.createElement("div",{className:"modal-title"},i.a.createElement(f.a,{id:this.props.title})),i.a.createElement("div",{className:"modal-lines"},i.a.createElement("div",{className:"modal-line"}),i.a.createElement("div",{className:"modal-line"}),i.a.createElement("div",{className:"modal-line"}))),i.a.createElement("div",{className:"modal-body"},this.props.hidden&&!this.state.initialized?null:this.props.children),i.a.createElement("div",{className:"modal-overlay ".concat(this.props.inFocus?"hidden":"visible")})))}}]),t}(i.a.Component),k=[{translationId:"header.music.link.label",route:"/music",id:"music",colorPrimary:"#a800ff",colorSecondary:"#871335"},{translationId:"header.gigs.link.label",route:"/gigs",id:"gigs",colorPrimary:"#de00ff",colorSecondary:"#fff400"},{translationId:"header.about.link.label",route:"/about",id:"about",colorPrimary:"#ff2900",colorSecondary:"#3700ff"},{translationId:"header.contact.link.label",route:"/contact",id:"contact",colorPrimary:"#ff9a00",colorSecondary:"#8d1414"}],M=a(11);a(34);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,42))})),x=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,43))})),w=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,44))})),C=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,45))})),I=function(e){function t(e){var a;Object(d.a)(this,t);var n={hidden:!0,inFocus:!1,zIndex:9999};return(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={about:n,music:n,gigs:n,contact:n,bgColor:"",mouseY:0,wH:0,wW:0},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"_onMouseMove",value:function(e){var t=this.getColorFromMousePos(window.innerWidth,window.innerHeight,e.screenX,e.screenY);this.setState({bgColor:t})}},{key:"getColorFromMousePos",value:function(e,t,a,n){var i=this.normalize(0,e,a),o=70*this.normalize(t,0,n)+30;return"hsl(".concat(260*i+100,",").concat(o,"%,80%)")}},{key:"normalize",value:function(e,t,a){return((a-e)/(t-e)).toFixed(10)}},{key:"openModal",value:function(e){this.focusModal(e),this.updateModal(e,"hidden",!1)}},{key:"closeModal",value:function(e){this.updateModal(e,"hidden",!0)}},{key:"focusModal",value:function(e){var t=this,a=this;a.headerLinks=k,k.forEach((function(a){a.id!==e&&t.updateModal(a.id,"inFocus",!1)})),this.updateModal(e,"inFocus",!0,(function(){var t=Math.max.apply(Math,Object(r.a)(a.headerLinks.map((function(e){return a.state[e.id].zIndex}))));t++,a.setState(Object(c.a)({},e,E({},a.state[e],{zIndex:t})),(function(){return console.log(JSON.stringify(a.state,null,2))}))}))}},{key:"updateModal",value:function(e,t,a,n){this.setState((function(n){var i=E({},n[e]);return i[t]=a,Object(c.a)({},e,i)}),(function(){n&&n()}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"home",onMouseMove:this._onMouseMove.bind(this),style:{backgroundColor:this.state.bgColor}},i.a.createElement(p,{headerLinks:k,handleHeaderLinkClick:this.openModal.bind(this)}),i.a.createElement(v,{title:"music.header.title",hidden:this.state.music.hidden,inFocus:this.state.music.inFocus,zIndex:this.state.music.zIndex,handleOnModalClose:this.closeModal.bind(this,"music"),handleFocusModal:this.focusModal.bind(this,"music"),maxWidth:"700px",maxHeight:"820px"},i.a.createElement(n.Suspense,{fallback:i.a.createElement(M.a,null)},i.a.createElement(x,null))),i.a.createElement(v,{title:"gigs.header.title",hidden:this.state.gigs.hidden,inFocus:this.state.gigs.inFocus,zIndex:this.state.gigs.zIndex,handleOnModalClose:this.closeModal.bind(this,"gigs"),handleFocusModal:this.focusModal.bind(this,"gigs"),maxWidth:"820px",maxHeight:"650px"},i.a.createElement(n.Suspense,{fallback:i.a.createElement(M.a,null)},i.a.createElement(j,null))),i.a.createElement(v,{title:"about.header.title",hidden:this.state.about.hidden,inFocus:this.state.about.inFocus,zIndex:this.state.about.zIndex,handleOnModalClose:this.closeModal.bind(this,"about"),handleFocusModal:this.focusModal.bind(this,"about"),maxHeight:"400px"},i.a.createElement(n.Suspense,{fallback:i.a.createElement(M.a,null)},i.a.createElement(w,null))),i.a.createElement(v,{title:"contact.header.title",hidden:this.state.contact.hidden,inFocus:this.state.contact.inFocus,zIndex:this.state.contact.zIndex,handleOnModalClose:this.closeModal.bind(this,"contact"),handleFocusModal:this.focusModal.bind(this,"contact"),maxHeight:"200px",maxWidth:"500px"},i.a.createElement(n.Suspense,{fallback:i.a.createElement(M.a,null)},i.a.createElement(C,null))),i.a.createElement("div",{className:"background-image"}))}}]),t}(n.Component),z={"header.title":"The Shackletons","header.home.link.label":"Home","header.music.link.label":"Music","header.gigs.link.label":"Gigs","header.contact.link.label":"Contact","header.about.link.label":"About","about.body":"This is the about page. It is where you will write all about your band. If people don't like what you have to say about yourself, well frankly, they are bastards. It's a free country. I can say what I want about myself. If you want to say you own all of the hats in the entire world, well that's on you, buddy.","about.header.title":"About","contact.header.title":"Contact","music.header.title":"Music","gigs.header.title":"Gigs","processing.defaultMessage":"Loading..."};var F=function(){return i.a.createElement(s.a,{locale:"en",messages:z},i.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[22,1,2]]]);
//# sourceMappingURL=main.b0c2f5e8.chunk.js.map