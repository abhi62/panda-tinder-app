(this["webpackJsonpabhi-mern-tinder"]=this["webpackJsonpabhi-mern-tinder"]||[]).push([[0],{54:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){},63:function(e,n,t){},65:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),s=t(15),r=t.n(s),i=(t(54),t(55),t(56),t(36)),o=t.n(i),j=t(101),l=t(37),d=t.n(l),u=t(2);var b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(o.a,{fontSize:"large",className:"header__icon"})}),Object(u.jsx)("img",{className:"header__logo",src:"http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/panda-face.png",alt:"panda-logo"}),Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{fontSize:"large",className:"header__icon"})})]})},p=(t(63),t(38)),h=t.n(p),m=t(39),f=t.n(m),O=t(40),x=t.n(O),g=t(41),v=t.n(g),_=t(42),w=t.n(_);var N=function(){return Object(u.jsxs)("div",{className:"swipeButtons",children:[Object(u.jsx)(j.a,{className:"swipeButtons__repeat",children:Object(u.jsx)(h.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__left",children:Object(u.jsx)(f.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__star",children:Object(u.jsx)(x.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__right",children:Object(u.jsx)(v.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__lightning",children:Object(u.jsx)(w.a,{fontSize:"large"})})]})},S=t(25),z=t.n(S),B=t(43),C=t(46),k=(t(65),t(44)),y=t.n(k),F=t(45),L=t.n(F).a.create({baseURL:"https://panda-tinder-backend.herokuapp.com/"});var I=function(){var e=Object(a.useState)([]),n=Object(C.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(B.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/tinder/cards");case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"tinderCards",children:Object(u.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(u.jsx)(y.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing"+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n,"left the screen!");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url( ".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},e.name)}))})})};var E=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)(I,{}),Object(u.jsx)(N,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),J()}},[[87,1,2]]]);
//# sourceMappingURL=main.dfdc5ebe.chunk.js.map