(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/Logo.3aa9aef1.png"},20:function(e){e.exports={breakfast:[{icon:"coffee",id:1,nombre:"Caf\xe9 americano",precio:5},{icon:"coffee",id:2,nombre:"Caf\xe9 con Leche",precio:7},{icon:"cutlery",id:3,nombre:"Sanchiwch",precio:10},{icon:"leaf",id:4,nombre:"Jugo Natural",precio:7}],dinner:[{icon:"bars",id:5,nombre:"Hamburguesa S",precio:10},{icon:"bars",id:6,nombre:"Hamburguesa D",precio:15},{icon:"cog",id:7,nombre:"Papas Fritas",precio:5},{icon:"circle-o",id:8,nombre:"Onion Rigs",precio:5},{icon:"minus-square-o",id:9,nombre:"Agua CH",precio:5},{icon:"plus-square-o",id:10,nombre:"Agua G",precio:7},{icon:"minus-square",id:11,nombre:"Refresco CH",precio:7},{icon:"plus-square",id:12,nombre:"Refresco G",precio:10}],extra:[{icon:"ship",id:13,nombre:"Res",precio:0},{icon:"twitter",id:14,nombre:"Pollo",precio:0},{icon:"leaf",id:15,nombre:"Vegetariana",precio:0},{icon:"sticky-note",id:16,nombre:"Queso",precio:1},{icon:"shopping-basket",id:17,nombre:"Huevo",precio:1}]}},31:function(e,t,a){e.exports=a(68)},36:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(21),i=a.n(c),l=(a(36),a(5)),s=a(6),m=a(8),u=a(7),d=a(9),h=(a(38),a(72)),b=a(10),p=a.n(b),f=p.a.initializeApp({apiKey:"AIzaSyBkvp9ifqDeJNPNCH-0PK5QxZpNyZxxjrE",authDomain:"burguer-queen-b6057.firebaseapp.com",databaseURL:"https://burguer-queen-b6057.firebaseio.com",projectId:"burguer-queen-b6057",storageBucket:"burguer-queen-b6057.appspot.com",messagingSenderId:"393144218466"});p.a.firestore().enablePersistence().then(function(){n=p.a.firestore()}).catch(function(e){"failed-precondition"===e.code||e.code});var g=f,E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={user:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;g.auth().onAuthStateChanged(function(t){t?(e.setState({user:t}),e.props.history.push("/orders")):(e.setState({user:null}),e.props.history.replace("/login"))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"})}}]),t}(r.Component),v=Object(h.a)(E),k=a(14),y=a(18),O=a.n(y),C=a(2),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.state={email:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"resetPassword",value:function(e){e.preventDefault();var t=this.state.email;b.auth().sendPasswordResetEmail(t).then(function(){alert("Te enviamos un correo")}).catch(function(e){console.log(e)}),this.props.history.push("/login")}},{key:"render",value:function(){return o.a.createElement(C.Container,null,o.a.createElement(C.Row,{className:"row justify-content-md-center"},o.a.createElement(C.Col,{md:"10"},o.a.createElement("img",{src:O.a,className:"m-5 mx-auto d-block",alt:"logo"}),o.a.createElement("form",null,o.a.createElement("p",{className:"h5 text-center mb-4"},"Restaura tu contrase\xf1a"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(C.Input,{label:"Escribe tu email",icon:"envelope",group:!0,type:"email",name:"email",validate:!0,error:"wrong",success:"right",onChange:this.handleChange.bind(this)})),o.a.createElement("div",{className:"text-center mb-3"},o.a.createElement(C.Button,{color:"warning",className:"mb-3",size:"lg",onClick:this.resetPassword.bind(this)},"Enviar correo"))))))}}]),t}(r.Component),N=Object(h.a)(j),w=a(15),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).signIn=a.signIn.bind(Object(w.a)(Object(w.a)(a))),a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.state={email:"",password:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"signIn",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.email,r=a.password;p.a.auth().signInWithEmailAndPassword(n,r).then(function(e){return t.props.history.push("/orders")}).catch(function(e){console.log(e),"auth/invalid-email"===e.code?alert("Email no v\xe1lido, revisa la informaci\xf3n."):"auth/wrong-password"===e.code&&alert("Password no v\xe1lido, revisa la informaci\xf3n.")})}},{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"resetPassword",value:function(){this.props.history.push("/recover")}},{key:"render",value:function(){return o.a.createElement(C.Container,null,o.a.createElement(C.Row,{className:"row justify-content-md-center"},o.a.createElement(C.Col,{md:"10"},o.a.createElement("img",{src:O.a,className:"m-5 mx-auto d-block",alt:"logo"}),o.a.createElement("form",null,o.a.createElement("p",{className:"h5 text-center mb-5"},"Abrir Caja"),o.a.createElement("div",{className:"grey-text mb-4"},o.a.createElement(C.Input,{className:"mb-5",label:"Escribe tu email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email",onChange:this.handleChange}),o.a.createElement(C.Input,{className:"mb-5",label:"Escribe tu password",icon:"lock",group:!0,type:"password",validate:!0,name:"password",onChange:this.handleChange})),o.a.createElement("div",{className:"text-center mb-3"},o.a.createElement(C.Button,{color:"warning",className:"mb-5 rounded",size:"lg",onClick:this.signIn.bind(this)},"Entrar"))),o.a.createElement(C.ModalFooter,{className:"mx-5 pt-3 mt-4"},o.a.createElement(C.Button,{color:"lime",size:"lg",className:"mt-5 rounded",onClick:this.resetPassword.bind(this)},"Restaurar Contrase\xf1a ")))))}}]),t}(r.Component),R=Object(h.a)(x),S=a(71),B=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"order",value:function(){this.props.history.push("/orders")}},{key:"logout",value:function(){p.a.auth().signOut().then(function(){console.log("saliendo")}).catch(function(){console.log("error al cerrar sesi\xf3n")}),this.props.history.push("/login")}},{key:"render",value:function(){return o.a.createElement(S.a,null,o.a.createElement(C.Navbar,{color:"lime",dark:!0,expand:"md",scrolling:!0},o.a.createElement(C.NavbarBrand,{onClick:this.order.bind(this)},o.a.createElement("img",{src:O.a,alt:"logo",height:"80"})),o.a.createElement(C.NavbarNav,{right:!0},o.a.createElement(C.NavItem,null,o.a.createElement(C.Button,{color:"red darken-4",className:"rounded",onClick:this.logout.bind(this)},"Cerrar caja")))))}}]),t}(r.Component),z=Object(h.a)(B),D=a(22),F=a(29),A=Object(F.a)(function(e,t){return"ADD_TO_ORDER"===t.type?Object(D.a)({},e,{order:e.order.concat(t.product)}):"REMOVE_FROM_ORDER"===t.type?Object(D.a)({},e,{order:e.order.filter(function(e,a){return a!==t.i})}):e},{order:[]}),P=(a(58),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={order:[]},A.subscribe(function(){a.setState({order:A.getState().order}),console.log(a.state.order)}),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"removeFromOrder",value:function(e,t){A.dispatch({type:"REMOVE_FROM_ORDER",product:e,i:t})}},{key:"sendKitchen",value:function(){var e=this.props.name;n.collection("orders").add({order:this.state.order,status:"En cocina",name:e}).then(function(){}),this.props.history.push("/")}},{key:"render",value:function(){var e,t=this,a=0;return e=this.state.order.map(function(e,a){return console.log(e),o.a.createElement("tr",{key:a},o.a.createElement("td",{className:"text-center align-middle"},e.nombre),o.a.createElement("td",{className:"text-center align-middle"},e.precio),o.a.createElement("td",{className:"text-center align-middle"},o.a.createElement(C.Button,{size:"sm",color:"red darken-4 rounded",onClick:function(){return t.removeFromOrder(e,a)}},o.a.createElement(C.Fa,{icon:"trash",size:"1x"}),o.a.createElement("br",null))))}),this.state.order.forEach(function(e){a+=e.precio}),o.a.createElement("section",{className:"container"},o.a.createElement("div",{className:"row mt-5 "},o.a.createElement("div",{className:"col-7 margin-bottom"},o.a.createElement(C.Table,null,o.a.createElement(C.TableBody,null,e))),o.a.createElement("div",{className:"col-5 text-center "},o.a.createElement("p",{className:"display-4"},"Total",o.a.createElement("br",null),"$",a),o.a.createElement(C.Button,{color:"lime",onClick:this.sendKitchen.bind(this)},o.a.createElement(C.Fa,{icon:"paper-plane",size:"1x md"}),o.a.createElement("br",null),"Enviar a Cocina"))))}}]),t}(r.Component)),T=Object(h.a)(P),I=a(20),L=(a(60),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"orderList",value:function(){this.props.history.push("/report")}},{key:"render",value:function(){return o.a.createElement(C.Footer,{color:"warning-color",className:"font-small footer-bottom"},o.a.createElement(C.Container,{fluid:!0,className:"text-center text-md-right"},o.a.createElement(C.Row,null,o.a.createElement(C.Col,null,o.a.createElement(C.Button,{size:"lg",color:"red",onClick:this.orderList.bind(this)}," ",o.a.createElement(C.Fa,{icon:"list-alt",size:"1x"})," ",o.a.createElement("br",null)," Lista de Pedidos")))))}}]),t}(r.Component)),q=Object(h.a)(L),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={breakfast:!1,dinner:!1,extra:!1,client:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;p.a.auth().onAuthStateChanged(function(t){t||e.props.history.push("/login")})}},{key:"handleChangeName",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value.toUpperCase()))}},{key:"handleChangeBreakfast",value:function(){this.setState({breakfast:!0})}},{key:"handleChangeDinner",value:function(){this.setState({breakfast:!1,dinner:!0})}},{key:"handleChangeExtra",value:function(){this.setState({dinner:!1,extra:!0})}},{key:"render",value:function(){var e,t,a=this;return this.state.breakfast?e=I.breakfast.map(function(e,t){return o.a.createElement(C.Button,{key:t,color:"green",className:"mr-3 mb-3",name:e.nombre,value:e.precio,onClick:function(){return a.addToCart(e)}},o.a.createElement(C.Fa,{icon:e.icon,size:"3x md",className:"m-1"}),o.a.createElement("br",null),e.nombre)}):this.state.dinner?(t=o.a.createElement(C.Button,{className:"rounded",size:"lg",color:"amber lighten-5",onClick:this.handleChangeExtra.bind(this)},"Extra"),e=I.dinner.map(function(e,t){return o.a.createElement(C.Button,{key:t,color:"amber",className:"mr-2 mb-3",name:e.nombre,value:e.precio,onClick:function(){return a.addToCart(e)}},o.a.createElement(C.Fa,{icon:e.icon,size:"3x md",className:"m-1"}),o.a.createElement("br",null),e.nombre)})):this.state.extra&&(e=I.extra.map(function(e,t){return o.a.createElement(C.Button,{key:t,color:"amber lighten-5",className:"mr-5 mb-3",name:e.nombre,value:e.precio,onClick:function(){return a.addToCart(e)}},o.a.createElement(C.Fa,{icon:e.icon,size:"3x lg",className:"m-1"}),o.a.createElement("br",null),e.nombre)})),o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement("section",{className:"container mt-4"},o.a.createElement("label",{id:"exampleForm2"},"Nombre cliente"),o.a.createElement("input",{type:"text",id:"exampleForm2",className:"form-control col-8 mb-3",name:"client",onChange:this.handleChangeName.bind(this)}),o.a.createElement(C.Button,{className:"mr-4 rounded",size:"lg",color:"lime darken-4",onClick:this.handleChangeBreakfast.bind(this)},"Desayunos"),o.a.createElement(C.Button,{className:"rounded",size:"lg",color:"orange darken-4",onClick:this.handleChangeDinner.bind(this)},"Comida"),t,o.a.createElement("section",{className:"mt-4"},e)),o.a.createElement("div",null,o.a.createElement(T,{name:this.state.client})),o.a.createElement(q,null))}},{key:"addToCart",value:function(e){A.dispatch({type:"ADD_TO_ORDER",product:e})}}]),t}(r.Component),M=Object(h.a)(W),_=p.a.firestore(),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={orders:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.collection("orders").onSnapshot(function(t){var a=[];t.forEach(function(e){var t=e.data(),n={status:t.status,order:t.order,name:t.name,id:e.id};a.push(n)}),e.setState({orders:a})})}},{key:"status",value:function(e){return _.collection("orders").doc(e).update({status:"Entregada"})}},{key:"render",value:function(){var e,t=this,a=this.state.orders.map(function(a,n){e="En cocina"===a.status?o.a.createElement("label",{key:n,className:"bs-switch"},o.a.createElement("input",{size:"sm",type:"checkbox",onClick:function(){return t.status(a.id)}}),o.a.createElement("span",{className:"slider round"})):o.a.createElement("label",{key:n,className:"bs-switch"},o.a.createElement("input",{size:"sm",type:"checkbox",checked:!0}),o.a.createElement("span",{className:"slider round"}));var r=a.order.map(function(e,t){return o.a.createElement("p",{key:t},e.nombre)});return o.a.createElement("tr",{key:n},o.a.createElement("td",{className:"align-middle"},a.name),o.a.createElement("td",null,r),o.a.createElement("td",{className:"align-middle"},"En cocina ",e,"Entregado"))}).reverse();return o.a.createElement("section",null,o.a.createElement(z,null),o.a.createElement("article",{className:"container mt-5"},o.a.createElement("table",{className:"table container text-center"},o.a.createElement("thead",{className:"grey lighten-2 "},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},o.a.createElement("strong",null,"Nombre")),o.a.createElement("th",{scope:"col"},o.a.createElement("strong",null,"Pedido")),o.a.createElement("th",{scope:"col"},o.a.createElement("strong",null,"Status")))),o.a.createElement("tbody",null,a))))}}]),t}(r.Component),U=Object(h.a)(H),J=a(70),K=(a(62),a(64),a(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function V(e,t){navigator.serviceWorker.register(e).then(function(e){console.log("sw registrada"),e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(S.a,{basename:"/TalentFest-citibanamex"},o.a.createElement("div",null,o.a.createElement(J.a,{exact:!0,path:"/",component:v}),o.a.createElement(J.a,{path:"/login",component:R}),o.a.createElement(J.a,{path:"/recover",component:N}),o.a.createElement(J.a,{path:"/orders",component:M}),o.a.createElement(J.a,{path:"/report",component:U}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/TalentFest-citibanamex",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/TalentFest-citibanamex","/service-worker.js");K?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):V(t,e)})}else console.log("no registrarse sw Current env:","production")}()}},[[31,2,1]]]);
//# sourceMappingURL=main.31cf7538.chunk.js.map