(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(3),o=n.n(i),s=n(4),d=n(5),b=n(6),l=n(8),j=n(7),u=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:t}),n]})},h=function(e){var t=e.feedback,n=e.onLeaveFeedback;return Object(a.jsx)("button",{type:"button","data-feedback":t,onClick:n,children:t})},v=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(a.jsx)(h,{feedback:e,onLeaveFeedback:n})}))};function O(e){var t=e.message;return Object(a.jsx)("div",{children:t})}var f=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,i=e.positivePercantage;return Object(a.jsxs)(a.Fragment,{children:[r>0&&Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["Good: ",t]}),Object(a.jsxs)("li",{children:["Neutral: ",n]}),Object(a.jsxs)("li",{children:["Bad: ",c]}),Object(a.jsxs)("li",{children:["Total: ",r]}),Object(a.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]}),0===r&&Object(a.jsx)(O,{message:"No feedback given"})]})},k=["good","neutral","bad"],x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.dataset.feedback;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositivePercantage=function(e,t){return(t/e*100).toFixed()},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,r=this.countTotalFeedback(),i=this.countPositivePercantage(r,this.state.good);return Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{title:"Please leave feedback",children:Object(a.jsx)(v,{options:k,onLeaveFeedback:this.handleFeedback})}),Object(a.jsx)(u,{title:"Statistics",children:Object(a.jsx)(f,{good:t,neutral:n,bad:c,total:r,positivePercantage:i})})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4971bce2.chunk.js.map