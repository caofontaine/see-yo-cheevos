(this["webpackJsonpsee-yo-cheevos"]=this["webpackJsonpsee-yo-cheevos"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=(a(14),a(1)),i=a.n(s),u=a(2),m=a(5),l=a(6),h=a(8),g=a(7),d=(a(16),function(e){var t=e.setGamerTag,a=e.getAchievements;return r.a.createElement("div",null,r.a.createElement("input",{className:"searchBox",type:"search",placeholder:"search gamertag",onChange:t}),r.a.createElement("input",{className:"searchButton",type:"submit",value:"Search",onClick:a}))}),f=(a(17),function(e){var t=e.id,a=e.name,n=e.currentGS,c=e.maxGS,o=n/c*100;return r.a.createElement("div",{id:t,className:"game"},r.a.createElement("h2",null,a),r.a.createElement("h3",null,n,"/",c),r.a.createElement("hr",{style:{width:"".concat(o,"%")}}))}),v=function(e){var t=e.achievements;return r.a.createElement("div",{id:"achList"},t.map((function(e){return r.a.createElement(f,{key:e.titleId,id:e.titleId,name:e.name,currentGS:e.currentGamerscore,maxGS:e.totalGamerscore?e.totalGamerscore:e.maxGamerscore})})))},p=(a(18),function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).setGamerTag=function(t){e.setState({gamerTag:t.target.value})},e.getGamerTagId=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/v2/xuid/".concat(e.state.gamerTag),{method:"get",headers:{"X-AUTH":"3a5eb14d1a580dc2d1a0e9b10b31fa5cc5958616","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({gamerTagId:t})})).catch((function(e){console.log("Error getting gamertag id.")}));case 2:case"end":return t.stop()}}),t)}))),e.getAchievementData=function(){var t=Object(u.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/v2/".concat(e.state.gamerTagId,"/").concat(a,"games"),{method:"get",headers:{"X-AUTH":"3a5eb14d1a580dc2d1a0e9b10b31fa5cc5958616","Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.titles);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getAchievements=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.state.gamerTagId&&e.setState({gamerTagId:""}),a=[],t.next=4,e.getGamerTagId();case 4:if(!e.state.gamerTagId){t.next=13;break}return console.log("Gamertag found. Obtaining achievements..."),t.next=8,e.getAchievementData("xbox360").then((function(e){e.forEach((function(e){a.push(e)}))}));case 8:return t.next=10,e.getAchievementData("xboxone").then((function(e){e.forEach((function(e){a.push(e)}))}));case 10:e.setState({achievements:a}),t.next=14;break;case 13:console.log("Gamertag not found. No gamertag id to use.");case 14:case"end":return t.stop()}}),t)}))),e.state={gamerTag:"",gamerTagId:"",achievements:[]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.achievements.filter((function(e){return e.currentGamerscore>0}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"SEE YO CHEEVOS"),r.a.createElement(d,{setGamerTag:this.setGamerTag,getAchievements:this.getAchievements}),this.state.achievements.length>0?r.a.createElement(v,{achievements:e}):r.a.createElement("div",{id:"placeholder"}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1db0d848.chunk.js.map