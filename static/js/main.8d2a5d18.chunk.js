(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,r){},7:function(e,t,r){e.exports=r(8)},8:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(2),i=r(3),l=r(4),o=r(0),u=r.n(o),s=r(6),c=r.n(s),f=(r(13),function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this;return u.a.createElement("button",{className:"square",onClick:function(){e.props.onClick()},style:{float:"left",paddingRight:"5px",backgroundColor:this.props.thaydoimau}},this.props.value)}}]),r}(u.a.Component)),h=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).createTable=function(){for(var t=[],r=0;r<20;r++){for(var n=[],a=0;a<20;a++)n.push(e.renderSquare(r,a));t.push(u.a.createElement("div",{className:"board-row"},n))}return t},e}return Object(a.a)(r,[{key:"renderSquare",value:function(e,t){var r=this;return u.a.createElement(f,{value:this.props.squares[e][t],onClick:function(){return r.props.onClick(e,t)},thaydoimau:this.props.mycolor[e][t]})}},{key:"render",value:function(){return u.a.createElement("div",null,this.createTable())}}]),r}(u.a.Component),p=function(e){Object(l.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={history:[{squares:Array(20).fill(null).map((function(e){return new Array(20).fill(null)}))}],xIsNext:!0,mycolor:Array(20).fill("white").map((function(e){return new Array(20).fill("white")})),checkpeace:0,stepNumber:0,isHistorySortAscending:!0},a}return Object(a.a)(r,[{key:"handleClick",value:function(e,t){var r=this.state.history.slice(0,this.state.stepNumber+1),n=r[r.length-1].squares.map((function(e){return e.slice()}));if(!n[e][t]&&(n[e][t]=this.state.xIsNext?"X":"O",this.setState({history:r.concat([{squares:n}]),stepNumber:r.length,xIsNext:!this.state.xIsNext}),null!=g(n,e,t,n[e][t]))){var a=g(n,e,t,n[e][t]);this.state.mycolor=a}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"toggleHistorySort",value:function(){this.state.isHistorySortAscending=!this.state.isHistorySortAscending,this.setState(this.state)}},{key:"render",value:function(){var e,t=this,r=this.state,n=r.mycolor,a=r.xIsNext,i=r.history,l=r.isHistorySortAscending,o=i[this.state.stepNumber].squares.slice(),s=i.map((function(e,r){var n=r?"Go to move #"+r:"Go to game start";return u.a.createElement("li",{key:r},u.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},n))})),c=s;return l||(c=s.reverse()),e="Next player: "+(a?"X":"O"),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(h,{squares:o,onClick:function(e,r){return t.handleClick(e,r)},mycolor:n})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,e),u.a.createElement("button",{onClick:function(){t.toggleHistorySort()}},!0===l?"T\u0103ng D\u1ea7n":"Gi\u1ea3m D\u1ea7n"),u.a.createElement("ol",null,c)))}}]),r}(u.a.Component);function m(e,t){for(var r=0,n=0;n<=t.length-5;n++){var a=0;r=n;for(var i=n;i<=n+4;i++)if(t[i]===e&&a++,5===a)return r}return null}function v(e,t,r,n){for(var a,i=[],l=Array(20).fill("white").map((function(e){return new Array(20).fill("white")})),o=r-4<0?0:r-4;o<=(r+4>19?19:r+4);o++)i.push(e[t][o]);if(null!=m(n,i)){a=r-4<0?0:r-4,a+=m(n,i);for(var u=0;u<5;u++)l[t][a]="red",a+=1;return l}return null}function y(e,t,r,n){for(var a,i=[],l=Array(20).fill("white").map((function(e){return new Array(20).fill("white")})),o=t-4<0?0:t-4;o<=(t+4>19?19:t+4);o++)i.push(e[o][r]);if(null!=m(n,i)){a=t-4<0?0:t-4,a+=m(n,i);for(var u=0;u<5;u++)l[a][r]="red",a+=1;return l}return null}function d(e,t,r,n){var a=[],i=t,l=r,o=Array(20).fill("white").map((function(e){return new Array(20).fill("white")}));a.push(e[t][r]);for(var u=0;u<4&&0!==t&&0!==r;u++)t-=1,r-=1,a.push(e[t][r]);a.reverse();for(var s=0;s<4&&!(i>=19)&&!(l>=19);s++)i+=1,l+=1,a.push(e[i][l]);if(console.log("cheo Trai"+a),null!=m(n,a)){var c=m(n,a);t+=c,r+=c;for(var f=0;f<5;f++)o[t][r]="red",t+=1,r+=1;return o}return null}function b(e,t,r,n){var a=[],i=t,l=r,o=Array(20).fill("white").map((function(e){return new Array(20).fill("white")}));a.push(e[t][r]);for(var u=0;u<4&&0!==t&&!(r>=19);u++)1,t-=1,r+=1,a.push(e[t][r]);a.reverse();for(var s=0;s<4&&!(i>=19)&&0!==l;s++)1,i+=1,l-=1,a.push(e[i][l]);if(console.log("cheo phai: "+a),null!=m(n,a)){var c=m(n,a);t+=c,r-=c;for(var f=0;f<5;f++)o[t][r]="red",t+=1,r-=1;return o}return null}function g(e,t,r,n){Array(20).fill("white").map((function(e){return new Array(20).fill("white")}));return null!=v(e,t,r,n)?v(e,t,r,n):null!=y(e,t,r,n)?y(e,t,r,n):null!=d(e,t,r,n)?d(e,t,r,n):null!=b(e,t,r,n)?b(e,t,r,n):null}c.a.render(u.a.createElement(p,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.8d2a5d18.chunk.js.map