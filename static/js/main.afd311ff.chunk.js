(this.webpackJsonptodo_react_app=this.webpackJsonptodo_react_app||[]).push([[0],{14:function(e,t,o){e.exports=o.p+"static/media/tick_icon.745d6171.png"},15:function(e,t,o){e.exports=o.p+"static/media/red_tick.55a22606.png"},16:function(e,t,o){e.exports=o.p+"static/media/cut.17dfc335.png"},20:function(e,t,o){e.exports=o(33)},25:function(e,t,o){},26:function(e,t,o){},33:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(2),d=o.n(c),r=(o(25),o(3)),i=o(12),l=o(13),s=o(19),u=o(18),m=(o(11),o(26),o(14)),p=o.n(m),h=o(15),g=o.n(h),v=o(16),f=o.n(v);function T(e){return a.a.createElement("div",{className:"row todo"},a.a.createElement("div",{className:"col-2"},a.a.createElement("button",{className:"btn toggle_button",onClick:function(t){return e.toggleTodo(e.todo.id)}}," ",a.a.createElement("img",{src:e.todo.completed?g.a:p.a}))),a.a.createElement("div",{className:"col-8 todo_text ".concat(e.todo.completed?"done":"")},e.todo.text),a.a.createElement("div",{className:"col-2"},a.a.createElement("button",{onClick:function(t){return e.handleRemove(e.todo.id)}}," ",a.a.createElement("img",{src:f.a}))))}var E=o(4),O=0,b=function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(i.a)(this,o),(n=t.call(this,e)).toggleTodo=function(e){n.props.toggleTodo(e)},n.handleRemove=function(e){n.props.removeTodo(e)},n.handleInputChnage=function(e){n.setState({addTodoText:e.target.value})},n.handleSubmit=function(e){n.props.addTodo(n.state.addTodoText),n.setState({addTodoText:""})},n.state={todos:[],addTodoText:""},n.state.handleSubmit=n.handleSubmit,n.state.handleInputChnage=n.handleInputChnage,n.state.handleRemove=n.handleRemove,n.state.toggleTodo=n.toggleTodo,n}return Object(l.a)(o,[{key:"render",value:function(){var e=this,t=this.props.todos.map((function(t){return t&&void 0!=t.id&&a.a.createElement(T,{key:t.id,toggleTodo:e.toggleTodo,handleRemove:e.handleRemove,todo:t})}));return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"section_title"},a.a.createElement("h1",null,"Todo List")),a.a.createElement("div",{className:"todo_container"},t),a.a.createElement("div",{className:"row addTodo_Container"},a.a.createElement("div",{className:"add_input col-8"},a.a.createElement("input",{placeholder:"add a new Todo",value:this.state.addTodoText,onChange:this.handleInputChnage})),a.a.createElement("button",Object(r.a)({className:"col-4",onClick:this.handleSubmit},"className","btn btn-primary"),"Add Todo")))}}]),o}(n.Component),_=Object(E.b)((function(e){return{todos:e.todos}}),(function(e){return{addTodo:function(t){return e(function(e){return{type:"ADD_TODO",id:O++,text:e}}(t))},removeTodo:function(t){return e(function(e){return{type:"REMOVE_TODO",id:e}}(t))},toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}}))(b);var x=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=o(1),j=o(8),w=o(9),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(w.a)(e),[{id:t.id,text:t.text,completed:t.completed}]);case"REMOVE_TODO":return Object(w.a)(e.filter((function(e){return e.id!=t.id})));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):e}));default:return e}},C=Object(N.b)({todos:k}),D=Object(N.c)(C);d.a.render(a.a.createElement(E.a,{store:D},a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.afd311ff.chunk.js.map