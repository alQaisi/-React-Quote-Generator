(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{10:function(t,e,o){t.exports=o(23)},15:function(t,e,o){},17:function(t,e,o){},23:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),r=o(3),u=o.n(r),s=(o(15),o(1)),c=o.n(s),i=o(4),l=o(5),h=o(6),m=o(9),f=o(8),p=(o(17),o(7)),q=o.n(p),d=o(18),g=function(t){Object(m.a)(o,t);var e=Object(f.a)(o);function o(){var t;return Object(l.a)(this,o),(t=e.call(this)).fetchQuote=Object(i.a)(c.a.mark((function e(){var o,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({quoteText:"",quoteAuthor:""}),"https://salty-woodland-36841.herokuapp.com/","http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json",o={quoteText:"",quoteAuthor:""},e.prev=4,e.next=7,fetch("https://salty-woodland-36841.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json");case 7:return a=e.sent,e.next=10,a.json();case 10:n=e.sent,o.quoteText=n.quoteText,o.quoteAuthor=n.quoteAuthor,n.quoteText.length>100?t.setState({longQuoteClass:"long-quote"}):t.setState({longQuoteClass:"quote-text"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),t.fetchQuote();case 19:return e.prev=19,t.setState({isLoading:!1}),""===o.quoteAuthor?t.setState({quoteText:o.quoteText,quoteAuthor:"Unkown"}):t.setState({quoteText:o.quoteText,quoteAuthor:o.quoteAuthor}),e.finish(19);case 23:case"end":return e.stop()}}),e,null,[[4,16,19,23]])}))),t.tweetQuote=function(){var e=t.state.quoteText,o=t.state.quoteAuthor,a="https://twitter.com/intent/tweet?text=".concat(e,"-").concat(o);window.open(a,"_blank")},t.state={quoteText:"",quoteAuthor:"",longQuoteClass:"quote-text"},t}return Object(h.a)(o,[{key:"componentDidMount",value:function(){this.fetchQuote()}},{key:"render",value:function(){return""===this.state.quoteText?n.a.createElement("img",{src:q.a,alt:"loading"}):n.a.createElement("div",{className:"App quote-container"},n.a.createElement("div",{className:this.state.longQuoteClass},n.a.createElement("i",null,n.a.createElement(d,{className:"fas fa-quote-right",name:"quote-right",size:"5x",style:{fontSize:"3.5rem",marginRight:".75rem"}})),n.a.createElement("span",null,this.state.quoteText)),n.a.createElement("div",{className:"quote-author"},n.a.createElement("span",null,this.state.quoteAuthor)),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"twitter-button",onClick:this.tweetQuote},n.a.createElement(d,{className:"fab fa-twitter",name:"twitter",size:"2x",style:{fontSize:"1.70rem"}})),n.a.createElement("button",{id:"new-quote",onClick:this.fetchQuote},"New Quote")))}}]),o}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(22);u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,o){t.exports=o.p+"static/media/loader.f7f1e9fe.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.a0a800c3.chunk.js.map