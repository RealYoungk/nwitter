(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),s=n(31),i=n.n(s),u=n(6),o=n.n(u),l=n(10),j=n(9),b=n(21),d=n(7),p=n(23);n(40),n(42),n(52);p.a.initializeApp({apiKey:"AIzaSyC26wqrVrVfo5ZEi2ZBwFUP1J5uAz5PSIw",authDomain:"nwitter-cda33.firebaseapp.com",databaseURL:"https://nwitter-cda33.firebaseio.com",projectId:"nwitter-cda33",storageBucket:"nwitter-cda33.appspot.com",messagingSenderId:"965584981726",appId:"1:965584981726:web:ba8a9ec6d825517e103c4f"});var f=p.a,h=p.a.auth(),O=p.a.firestore(),m=p.a.storage(),x=function(e){var t=e.userObj,n=e.refreshUser,c=Object(d.g)(),s=Object(r.useState)(t.displayName),i=Object(j.a)(s,2),u=i[0],b=i[1],p=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","desc").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){p()}),[]);var f=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:f,className:"profileForm",children:[Object(a.jsx)("input",{type:"text",placeholder:"\ub2c9\ub124\uc784",onChange:function(e){var t=e.target.value;b(t)},value:u,autoFocusclassName:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),c.push("/"),n()},children:"Log Out"})]})},v=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),u=i[0],b=i[1],d=Object(r.useState)(!0),p=Object(j.a)(d,2),f=p[0],O=p[1],m=Object(r.useState)(""),x=Object(j.a)(m,2),v=x[0],g=(x[1],function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&b(a)}),w=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:g,className:"authInput"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:g,className:"authInput"}),Object(a.jsx)("input",{type:"submit",value:f?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778",className:"authInput authSubmit"}),v&&Object(a.jsx)("span",{className:"authError",children:v})]}),Object(a.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:f?"\ub85c\uadf8\uc778":"\ud68c\uc6d0\uac00\uc785"})]})},g=n(11),w=n(22),y=function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===n&&(a=new f.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(v,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(g.a,{icon:w.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(g.a,{icon:w.a})]})]})]})},N=n(33),k=n(18),S=function(e){var t=e.nweetObj,n=e.isOwner,c=(e.attachmentUrl,Object(r.useState)(!1)),s=Object(j.a)(c,2),i=s[0],u=s[1],b=Object(r.useState)(t.text),d=Object(j.a)(b,2),p=d[0],f=d[1],h=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,m.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return u((function(e){return!e}))},v=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("nweets/".concat(t.id)).update({text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(a.jsx)("input",{type:"text",placeholder:"\ud2b8\uc717 \uc218\uc815",value:p,required:!0,onChange:function(e){var t=e.target.value;f(t)},autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(a.jsx)("img",{src:t.attachmentUrl,alt:"attachment"}),n&&Object(a.jsxs)("div",{class:"nweet__actions",children:[Object(a.jsx)("span",{onClick:h,children:Object(a.jsx)(g.a,{icon:k.d})}),Object(a.jsx)("span",{onClick:x,children:Object(a.jsx)(g.a,{icon:k.a})})]})]})})},I=n(54),C=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(j.a)(n,2),s=c[0],i=c[1],u=Object(r.useState)(""),b=Object(j.a)(u,2),d=b[0],p=b[1],f=function(){var e=Object(l.a)(o.a.mark((function e(n){var a,r,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===d){e.next=12;break}return r=m.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=8,r.putString(d,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,O.collection("nweets").add(u);case 15:i(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"\uc0ac\uc9c4 \ucca8\ubd80"}),Object(a.jsx)(g.a,{icon:k.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),d&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:d,style:{backgroundImage:d},alt:"attachment"}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(g.a,{icon:k.c})]})]})]})},F=function(e){var t=e.userObj,n=Object(r.useState)([]),c=Object(j.a)(n,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){O.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(C,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(g.a,{icon:w.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(b.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(g.a,{icon:k.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,r=e.userObj;return Object(a.jsxs)(b.a,{children:[n&&Object(a.jsx)(A,{userObj:r}),Object(a.jsx)(d.d,{children:n?Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(F,{userObj:r})}),Object(a.jsx)(d.b,{exact:!0,path:"/profile",children:Object(a.jsx)(x,{userObj:r,refreshUser:t})}),Object(a.jsx)(d.a,{from:"*",to:"/"})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(y,{})})})})]})};var B=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),i=Object(j.a)(s,2),u=i[0],b=i[1];return Object(r.useEffect)((function(){h.onAuthStateChanged(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,b({displayName:t.displayName,uid:t.uid,updateProfile:function(e){return t.updateProfile(e)}});case 3:e.next=6;break;case 5:b(null);case 6:c(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(U,{refreshUser:function(){var e=h.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};n(50);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9c894a11.chunk.js.map