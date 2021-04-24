(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=(n(25),n(26),n(5)),o=n.n(i),u=n(7),l=n(2),b=n(9),d=n.n(b),j=(n(46),n(0)),h=["Easy","Medium","Hard"],f=function(e){var t=e.handleStart,n=Object(a.useState)({}),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),b=Object(l.a)(i,2),f=b[0],m=b[1],O=Object(a.useState)(""),p=Object(l.a)(O,2),x=p[0],g=p[1],y=Object(a.useState)(h[0]),v=Object(l.a)(y,2),w=v[0],S=v[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://opentdb.com/api_category.php");case 2:t=e.sent,n=t.data.trivia_categories,a={},c=new Set,n.forEach((function(e){e.name.includes(":")||(e.name="Miscellaneous: "+e.name);var t=e.name.split(":"),n=t[0],r=t[1].trim();a[r]={id:e.id,genre:n},c.add(n)})),s(a),m(Array.from(c)),g(Object.keys(a)[0]);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(e){var t=[];return Object.entries(r).forEach((function(n){var a=Object(l.a)(n,2),c=a[0],r=a[1];r.genre===e&&t.push({name:c,id:r.id})})),t};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:"Choose category..."}),Object(j.jsx)("select",{className:"custom-select shadow-sm",onChange:function(e){return g(e.target.value)},children:f.map((function(e){return Object(j.jsx)("optgroup",{label:" "+e,children:k(e).map((function(e){return Object(j.jsx)("option",{children:e.name},e.id)}))},e)}))}),Object(j.jsx)("h6",{className:"mt-3",children:"Choose difficulty..."}),Object(j.jsx)("select",{className:"custom-select shadow-sm",onChange:function(e){return S(e.target.value)},children:h.map((function(e,t){return Object(j.jsx)("option",{children:e},t)}))}),Object(j.jsx)("div",{className:"bg-white rounded-pill shadow-sm my-4",children:Object(j.jsx)("button",{type:"button",className:"btn btn-block btn-outline-primary rounded-pill",onClick:function(){return t(r[x].id,w)},children:"Start quiz"})}),Object(j.jsxs)("p",{className:"text-center bg-white text-dark rounded px-3 py-1",children:["Source code is\xa0",Object(j.jsx)("a",{href:"https://github.com/summersky1/react-quiz",target:"_blank",rel:"noreferrer",children:"here"}),", questions from\xa0",Object(j.jsx)("a",{href:"https://opentdb.com/",target:"_blank",rel:"noreferrer",children:"Open Trivia Database"})]})]})},m=n(20),O=n(4),p=function(e){var t=e.text,n=e.correct,c=e.handleSelectAnswer,r=e.showResult,s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(j.jsx)("div",{className:"bg-white rounded-pill shadow-sm my-3",children:Object(j.jsx)("button",{type:"button",className:"btn btn-block rounded-pill ".concat(function(){if(r){if(n)return"btn-success";if(o)return"btn-danger"}return"btn-outline-primary"}()),dangerouslySetInnerHTML:{__html:"".concat(t)},onClick:function(){r||(c(n),u(!0))},disabled:r&&!o})})},x=function(e){var t=e.questionDetails,n=e.getNextQuestion,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),b=u[0],d=u[1],h=function(e){e&&d(!0),i(!0)};return Object(j.jsxs)("div",{className:"question"+(s?"":" animate__animated animate__fadeIn animate__fast"),children:[Object(j.jsx)("h6",{children:"Question ".concat(t.index+1,":")}),Object(j.jsx)("p",{className:"bg-primary rounded py-2 px-3",dangerouslySetInnerHTML:{__html:"".concat(t.question)}}),t.shuffledAnswers.map((function(e){return Object(j.jsx)(p,{text:e.text,correct:e.text===t.correct_answer,handleSelectAnswer:h,showResult:s},e.key)})),s&&Object(j.jsx)("button",{type:"button",className:"btn btn-block btn-primary rounded-pill shadow-sm mb-2",onClick:function(){n(b),i(!1),d(!1)},children:t.index+1===t.total?"Show final score...":"Next question..."}),Object(j.jsxs)("p",{children:[t.category,", Difficulty: ",t.difficulty]})]})},g=function(e){var t=e.numberOfQuestions,n=e.numberCorrect,a=e.handlePlayAgain;return Object(j.jsxs)("div",{className:"text-center border rounded-lg my-4",children:[Object(j.jsx)("h4",{className:"my-3",children:"Thanks for playing!"}),Object(j.jsx)("h4",{children:"Final score:"}),Object(j.jsxs)("h1",{children:[n,"/",t]}),Object(j.jsx)("h4",{children:function(){var e=n/t*100;return e<40?"It's ok, you're just having a bad day.":e<70?"Not bad, you just need to brush up a bit.":e<100?"Well done! You've accumulated quite a bit of knowledge.":"Perfect! Perhaps try another category and aim for glory."}()}),Object(j.jsx)("div",{className:"bg-white rounded-pill shadow-sm mx-5 my-4",children:Object(j.jsx)("button",{type:"button",className:"btn btn-block btn-outline-primary rounded-pill",onClick:a,children:"Play again!"})})]})},y=function(e){var t=e.questions,n=e.handlePlayAgain,c=Object(a.useState)(Object(O.a)(Object(O.a)({},t[0]),{},{index:0,total:t.length})),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(0),u=Object(l.a)(o,2),b=u[0],d=u[1],h=Object(a.useState)(!1),f=Object(l.a)(h,2),p=f[0],y=f[1];return Object(j.jsxs)("div",{children:[!p&&Object(j.jsx)(x,{questionDetails:Object(O.a)(Object(O.a)({},s),{},{shuffledAnswers:function(){for(var e=[].concat(Object(m.a)(s.incorrect_answers),[s.correct_answer]),t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e=e.map((function(e){return{text:e,key:Math.floor(1e6*Math.random())}}))}()}),getNextQuestion:function(e){e&&d(b+1);var n=s.index+1;t.length===n?y(!0):i(Object(O.a)(Object(O.a)({},t[n]),{},{index:n,total:t.length}))}}),p&&Object(j.jsx)(g,{numberOfQuestions:t.length,numberCorrect:b,handlePlayAgain:n})]})};var v=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(l.a)(r,2),i=s[0],b=s[1],h=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://opentdb.com/api.php",{params:{amount:10,category:t,difficulty:n.toLowerCase()}});case 2:a=e.sent,(r=a.data.results).length>0?(b(r),c(!0)):alert("There are no questions for this category/difficulty combination, please choose another difficulty and/or category.");case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container py-4",children:[Object(j.jsx)("h2",{className:"text-center",children:"React Quiz"}),!n&&Object(j.jsx)(f,{handleStart:h}),n&&Object(j.jsx)(y,{questions:i,handlePlayAgain:function(){c(!1),b([])}})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.89593c81.chunk.js.map