(function(t){function e(e){for(var i,o,l=e[0],r=e[1],c=e[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-todo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1100:function(t,e,s){t.exports=s.p+"img/background.84ee0ab6.jpg"},1190:function(t,e,s){"use strict";s("4e33")},"1f30":function(t,e,s){"use strict";s("9414")},2170:function(t,e,s){},"2a87":function(t,e,s){},"2d5f":function(t,e,s){"use strict";s("9eb3")},3243:function(t,e,s){"use strict";s("76ad")},"35f9":function(t,e,s){},"36c5":function(t,e,s){},"392a":function(t,e,s){"use strict";s("35f9")},"4e33":function(t,e,s){},5669:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},n=[],o=s("2877"),l={},r=Object(o["a"])(l,a,n,!1,null,null,null),c=r.exports,d=s("2f62"),u=s("ec26"),m={createTodo({commit:t},e){const s=Object(u["a"])(),i={title:e,list:[],id:s};t("ADD_TODO",i)},setStateList({commit:t},e){t("SET_STATE_LIST",e)},deleteTodo({commit:t},e){t("DELETE_TODO",e)},deleteTodoItem({commit:t,getters:e},s){const{list:i,id:a,title:n}=e.CURRENT_TODO,o=[...i];o.splice(s,1),t("CLEAN_OVER"),t("CURRENT_BAMP",{list:o,id:a,title:n}),t("REDO_EDIT")},addTodoItem({commit:t,getters:e},s){const{id:i,title:a,list:n}=e.CURRENT_TODO;t("CLEAN_OVER"),t("REDO_EDIT"),t("CURRENT_BAMP",{list:[...n,s],id:i,title:a})},changeTodoItem({commit:t,getters:e},s){const{id:i,title:a,list:n}=e.CURRENT_TODO;t("CLEAN_OVER"),t("REDO_EDIT"),t("CURRENT_BAMP",{id:i,title:a,list:[...n]}),t("CHANGE_TODO_ITEM",s)},nextStep({commit:t,state:e}){e.editHistory.current!==e.editHistory.list.length-1&&t("REDO_EDIT")},backStep({commit:t,state:e}){0!==e.editHistory.current&&t("UNDO_EDIT")},setEditing({commit:t,getters:e},s){const i=e.getTodoById(s);t("SET_EDITING",i)},cancelEdits({commit:t}){t("CANCEL_EDIT")},saveEdits({commit:t,state:e,getters:s},i){const a=s.getTodoIndexById(i);t("SAVE_EDIT",a),t("CANCEL_EDIT")}},p={ADD_TODO(t,e){t.list.push(e)},SET_STATE_LIST(t,e){t.list=e},DELETE_TODO(t,e){const s=t.list.findIndex(t=>t.id===e);t.list.splice(s,1)},CHANGE_TODO_ITEM(t,{updateComplete:e,updateName:s,updateTitle:i,index:a}){const{list:n,current:o}=t.editHistory,l=n[o];a>=0&&l.list.splice(a,1,{name:s,complete:e}),i&&(l.title=i)},SET_EDITING(t,e){t.editHistory.list.push(e)},CANCEL_EDIT(t){t.editHistory.current=0,t.editHistory.list=[]},REDO_EDIT(t){t.editHistory.current++},UNDO_EDIT(t){t.editHistory.current--},CURRENT_BAMP(t,e){t.editHistory.list.push(e)},SAVE_EDIT(t,e){t.list.splice(e,1,t.editHistory.list[t.editHistory.current])},CLEAN_OVER(t){t.editHistory.list.splice(t.editHistory.current+1)}},h={getTodoById:t=>e=>t.list.find(t=>t.id===e),CURRENT_TODO(t){return t.editHistory.list[t.editHistory.current]},getTodoIndexById:t=>e=>t.list.findIndex(t=>t.id===e),LIST:t=>t.list,ADDITIONAL_LIST(t){const e=[];return t.list.forEach(t=>{const{list:s,id:i,title:a}=t,n=s.slice(0,2),o=s.length-n.length;let l="";0===n.length&&(l="empty"),1===o&&(l="...1 item"),o>1&&(l=`...${o} items`),t.list.push(),e.push({id:i,title:a,list:[...n,{complete:!1,name:l}]})}),e}};const f=JSON.parse(localStorage.getItem("list"))||[];var v=function(){return{list:f,editHistory:{current:0,list:[]}}};i["a"].use(d["a"]);const C=new d["a"].Store({state:v,actions:m,mutations:p,getters:h});C.subscribe((t,e)=>{const s=JSON.stringify(e.list);localStorage.setItem("list",s)});var T=C,g=s("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout-default",[s("div",{staticClass:"todo-list"},[t.ADDITIONAL_LIST.length?t._l(t.ADDITIONAL_LIST,(function(e){return s("div",{key:e.id,staticClass:"todo"},[s("todo",{attrs:{todo:e}}),s("hr"),s("div",{staticClass:"button-group"},[s("router-link",{staticClass:"link button",attrs:{to:{name:"Edit",params:{id:e.id}}}},[t._v("Go to edit")]),s("tl-confirm",[s("button",{staticClass:"button button-warning"},[t._v("Delete")])])],1)],1)})):s("div",{staticClass:"nothingtodo"},[s("h2",[t._v("Nothing yet...")]),s("p",[t._v("You can add a new one by entering its name in the field below and clicking on the button")])])],2),s("form",{staticClass:"add-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],attrs:{type:"text",placeholder:"Enter todo name"},domProps:{value:t.newTodo},on:{input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),s("button",{staticClass:"button btn-primary button-add-todo",on:{click:t.addTodo}},[t._v("Add new Todo")])])])},b=[],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper-confirm"},[s("div",{staticClass:"slot",on:{click:function(e){t.visible=!0}}},[t._t("default")],2),t.visible?[s("transition",{attrs:{name:"confirm"}},[s("div",{staticClass:"confirm"},[s("div",{staticClass:"title"},[t._v(t._s(t.textTitle))]),s("div",{staticClass:"buttons"},[s("span",{staticClass:"button-no",attrs:{role:"button"},on:{click:t.cancel}},[t._v(t._s(t.textCancel))]),s("span",{staticClass:"button-ok",attrs:{role:"button"},on:{click:t.confirm}},[t._v(t._s(t.textConfirm))])])])])]:t._e()],2)},y=[],O={props:{textCancel:{type:String,default:"No"},textConfirm:{type:String,default:"Yes"},textTitle:{type:String,default:"Are you sure?"}},data(){return{visible:!1}},methods:{cancel(){this.$emit("cancel"),this.visible=!1},confirm(){this.$emit("confirm"),this.visible=!1},click(){console.log("children click")}}},w=O,D=(s("2d5f"),Object(o["a"])(w,E,y,!1,null,"658e6677",null)),k=D.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"wrapper",class:t.modalType},[s("div",{ref:"modal",staticClass:"inner"},[s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v(t._s(t.title))])]),s("div",{staticClass:"content"},[t._t("content")],2),s("div",{staticClass:"footer"},[t._t("footer")],2)])])])},x=[],M={props:{title:String,modalType:{type:String,default:"primary",validator(t){return["warning","primary"].includes(t)}}}},S=M,N=(s("3243"),Object(o["a"])(S,I,x,!1,null,"160ae5dc",null)),A=N.exports,$=function(){var t=this,e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"wrapper-container"},[i("header",[i("tl-header")],1),i("main",[e._t("default")],2)]),i("div",{staticClass:"chat-icon",on:{click:function(t){e.chat=!0}}},[i("i",{staticClass:"fas fa-comment-alt"}),i("div",{staticClass:"text"},[e._v("Chat")])]),i("tl-chat",{attrs:{chatList:e.chatList,currentChat:e.currentChat},on:{sendMessage:e.sendMessage,pickDialog:function(e){return t.currentChat=e}},model:{value:e.chat,callback:function(t){e.chat=t},expression:"chat"}})],1)},L=[],R=function(){var t=this,e=this,s=e.$createElement,i=e._self._c||s;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"chat-wrapper"},[i("div",{staticClass:"chat"},[i("transition",{attrs:{name:"menu"}},[i("tl-chat-menu",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"menu-chat",attrs:{content:e.chatList,currentChat:e.currentChat},on:{pickDialog:function(e){return t.$emit("pickDialog",e)},closeMenu:e.closeMenu}})],1),null!=e.currentChat?[i("tl-chat-messages",e._b({staticClass:"user-chat",on:{sendMessage:e.sendMessage,closeChat:function(t){return e.$emit("closeChat",!e.visible)},showMenu:function(t){e.showMenu=!0}}},"tl-chat-messages",e.chatList[e.currentChat].dialogData,!1))]:[i("div",{staticClass:"user-chat empty"},[e._v("Выберите пожалуйста диалог")])]],2)])])},j=[],H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header"},[i("div",{staticClass:"close",on:{click:t.close}},[i("i",{staticClass:"fas fa-chevron-left"})]),i("div",{staticClass:"title"},[t._v("Чаты")]),i("div",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputSearch,expression:"inputSearch"}],attrs:{placeholder:"Поиск..."},domProps:{value:t.inputSearch},on:{input:function(e){e.target.composing||(t.inputSearch=e.target.value)}}}),i("i",{staticClass:"fas fa-search search-icon"})])]),i("ul",{staticClass:"chat-list"},t._l(t.content,(function(e){return i("li",{key:e.id,staticClass:"list-item name-image",class:{active:e.id===t.currentChat},on:{click:function(s){t.$emit("pickDialog",e.id)&&t.close()}}},[i("div",{staticClass:"image"},[i("div",{staticClass:"wrap"},[i("img",{attrs:{src:s("1100"),alt:"",width:"100%",height:"100%"}}),i("div",{staticClass:"circle",class:{online:e.online}})])]),i("div",{staticClass:"center"},[i("div",{staticClass:"name"},[t._v(t._s(e.name))]),i("div",{staticClass:"underName"},[t._v(t._s(e.lastMessage))])]),i("div",{staticClass:"right"},[t._v(t._s(e.lastMessageDate))])])})),0)])},P=[],U={props:{content:Array,currentChat:Number},data(){return{inputSearch:""}},methods:{close(){window.innerWidth<=992&&this.$emit("closeMenu")}}},B=U,J=(s("1f30"),Object(o["a"])(B,H,P,!1,null,"bf536996",null)),V=J.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"name-image"},[i("div",{staticClass:"burger",on:{click:function(e){return t.$emit("showMenu")}}},[i("i",{staticClass:"fas fa-hamburger fa-2x"})]),i("div",{staticClass:"image"},[i("div",{staticClass:"wrap"},[i("img",{attrs:{src:s("1100"),alt:"",width:"100%",height:"100%"}}),i("div",{staticClass:"circle",class:{online:t.info.online}})])]),i("div",{staticClass:"center"},[i("div",{staticClass:"name"},[t._v(t._s(t.info.name))]),i("div",{staticClass:"underName"},[t.info.online?[t._v("Сейчас в сети")]:[t._v("Был(а) в сети "+t._s(t.info.lastOnline)+" назад")]],2)]),i("div",{staticClass:"right"},[t._m(0),i("div",{staticClass:"close",on:{click:function(e){return t.$emit("closeChat")}}},[i("i",{staticClass:"fas fa-times"})])])]),i("div",{ref:"messages",staticClass:"messages"},[i("div",{staticClass:"date"}),t._l(t.messages,(function(e,s){return i("div",{key:s,staticClass:"message",class:{left:!e.self,right:e.self}},[t._v(t._s(e.text))])}))],2),i("div",{staticClass:"input-field"},[t._m(1),t._m(2),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputMessage,expression:"inputMessage"}],ref:"textarea",staticClass:"input",attrs:{type:"text"},domProps:{value:t.inputMessage},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.sendMessage.apply(null,arguments))},input:function(e){e.target.composing||(t.inputMessage=e.target.value)}}}),i("div",{staticClass:"icon send",on:{click:t.sendMessage}},[i("i",{staticClass:"fas fa-comment"})])])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("i",{staticClass:"fas fa-ellipsis-v"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon smile"},[s("i",{staticClass:"fas fa-laugh-beam"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon upload"},[s("i",{staticClass:"fas fa-images"})])}],q={props:{info:{image:String,online:Boolean,name:String,lastOnline:String},messages:Array},data(){return{inputMessage:""}},mounted(){this.scrollToStart()},watch:{messages(){const t=this.$refs.messages;t.offsetHeight+t.scrollTop<=t.scrollHeight-10||this.scrollToStart()}},methods:{scrollToStart(){this.$nextTick(()=>{this.$refs.messages.scrollTo(0,this.$refs.messages.scrollHeight)})},sendMessage(t){t.shiftKey?this.inputMessage+="\n":this.inputMessage.trim()&&(this.$emit("sendMessage",this.inputMessage),this.inputMessage="",this.scrollToStart())}}},Y=q,K=(s("7cca"),Object(o["a"])(Y,G,W,!1,null,"4aad2452",null)),z=K.exports,F={model:{prop:"visible",event:"closeChat"},props:{visible:Boolean,chatList:Array,currentChat:Number},data(){return{showMenu:!0}},components:{"tl-chat-menu":V,"tl-chat-messages":z},methods:{sendMessage(t){this.$emit("sendMessage",t)},closeMenu(){null!=this.currentChat&&(this.showMenu=!1)}}},Q=F,X=(s("392a"),Object(o["a"])(Q,R,j,!1,null,"7d0df4e9",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper relative"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("span",{staticClass:"name"},[t._v(" TodoList")]),s("span",{staticClass:"author"},[t._v("by Sergey Belov")])])],1)},et=[],st={methods:{}},it=st,at=(s("903b"),Object(o["a"])(it,tt,et,!1,null,"12931721",null)),nt=at.exports;function ot(t){return new Array(t).fill().map(()=>String.fromCharCode(Math.round(25*Math.random()+97))).join("")}function lt(){return Math.round(100*Math.random())>50}var rt={components:{"tl-header":nt,"tl-chat":Z},data(){return{chat:!1,currentChat:null,chatList:new Array(12).fill().map((t,e)=>{const s=lt(),i=Math.round(60*Math.random())+" минут";return{id:e,image:"",name:"Jhon Wick "+e,lastMessageDate:"22:11",lastMessage:ot(7),online:s,item:t,dialogData:{info:{image:"",online:s,name:"Jhon Wick "+e,lastOnline:i},messages:new Array(23).fill().map(()=>{const t=Math.round(100*Math.random())>50,e=ot(10);return{text:e,self:t}})}}})}},methods:{sendMessage(t){this.chatList[this.currentChat].dialogData.messages.push({text:t,self:!0}),setTimeout(()=>{this.chatList[this.currentChat].dialogData.messages.push({text:ot(10),self:!1})},1e3)}}},ct=rt,dt=(s("e2b0"),Object(o["a"])(ct,$,L,!1,null,"21a186ac",null)),ut=dt.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.todo?s("div",{staticClass:"wrapper-todo"},[s("todo-title",{staticClass:"title",attrs:{title:t.todoTitle}}),s("hr"),s("ul",{staticClass:"list"},t._l(t.todoList,(function(t,e){return s("todo-item",{key:e,attrs:{item:t}})})),1)],1):t._e()},pt=[],ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper-todo-title"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"title"},[s("h2",{staticClass:"name"},[t._v(t._s(t.title))]),t.editable?s("button",{staticClass:"button button-primary",on:{click:function(e){return t.handleEditTitle(!0)}}},[t._v("Edit")]):t._e()]),t.editable?s("div",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"edit-title"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEditTitle,expression:"inputEditTitle"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.inputEditTitle},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEditTitle(!1)},input:function(e){e.target.composing||(t.inputEditTitle=e.target.value)}}}),s("button",{staticClass:"button button-primary",on:{click:function(e){return t.handleEditTitle(!1)}}},[t._v("Save")])]):t._e()])},ft=[],vt={props:{editable:{type:Boolean,default:!1},title:String},data(){return{inputEditTitle:"",editMode:!1}},methods:{handleEditTitle(t){t?(this.editMode=!0,this.inputEditTitle=this.title):(this.$emit("update:title",this.inputEditTitle),this.editMode=!1,this.editTitle="")}}},Ct=vt,Tt=(s("d38c"),Object(o["a"])(Ct,ht,ft,!1,null,"5261475c",null)),gt=Tt.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"item relative",class:{complete:t.item.complete}},[t.editable?s("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.item.complete},on:{change:function(e){return t.$emit("complete")}}}):t._e(),s("span",[t._v(t._s(t.item.name))])])},bt=[],Et={props:{editable:{type:Boolean,default:!1},item:{type:Object,required:!0}}},yt=Et,Ot=(s("a3a4"),Object(o["a"])(yt,_t,bt,!1,null,"3d2d2a1a",null)),wt=Ot.exports,Dt={components:{TodoTitle:gt,TodoItem:wt},props:{todo:{type:Object,require:!0}},computed:{todoList(){return this.todo.list},todoTitle(){return this.todo.title}}},kt=Dt,It=(s("1190"),Object(o["a"])(kt,mt,pt,!1,null,"54ffd6b9",null)),xt=It.exports,Mt={components:{"layout-default":ut,"tl-confirm":k,"tl-modal":A,todo:xt},data(){return{newTodo:"",modalAdd:!1}},methods:{...Object(d["b"])(["deleteTodo","createTodo"]),addTodo(){this.createTodo(this.newTodo),this.newTodo="",this.modalAdd=!1}},computed:{...Object(d["c"])(["ADDITIONAL_LIST"])},components:{"layout-default":ut,"tl-confirm":k,"tl-modal":A,todo:xt},data(){return{newTodo:"",modalAdd:!1}},methods:{...Object(d["b"])(["deleteTodo","createTodo"]),addTodo(){this.createTodo(this.newTodo),this.newTodo="",this.modalAdd=!1}},computed:{...Object(d["c"])(["ADDITIONAL_LIST"])}},St=Mt,Nt=(s("8a41"),Object(o["a"])(St,_,b,!1,null,"78ca6754",null)),At=Nt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout-default",{staticClass:"relative"},[t.CURRENT_TODO?s("div",{staticClass:"todo-info"},[s("div",{staticClass:"top-buttons"},[s("i",{staticClass:"fas fa-chevron-left back",on:{click:function(e){return t.$router.push("/")}}}),s("i",{staticClass:"fas fa-cog settings",on:{click:function(e){t.editTools=!t.editTools}}})]),s("todo-title",{staticClass:"todo-title",attrs:{title:t.CURRENT_TODO.title,editable:!0},on:{"update:title":function(e){return t.changeTodoItem({updateTitle:e})}}}),s("hr"),s("div",{staticClass:"list"},[s("ul",t._l(t.CURRENT_TODO.list,(function(e,i){return s("todo-item",{key:i,attrs:{item:e,editable:!0},on:{complete:function(s){return t.completeTodoItem(e,i)}}})})),1)])],1):t._e(),s("div",{staticClass:"add-todo"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.todoItem,expression:"todoItem"}],domProps:{value:t.todoItem},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem.apply(null,arguments)},input:function(e){e.target.composing||(t.todoItem=e.target.value)}}}),s("button",{staticClass:"button btn-primary",attrs:{type:"submit"},on:{click:t.addItem}},[t._v("Add")])]),s("transition",{attrs:{name:"edit"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.editTools,expression:"editTools"}],staticClass:"edit-todo"},[s("i",{staticClass:"fas fa-times-circle icon",attrs:{title:"Cancel"},on:{click:t.cancel}}),s("i",{staticClass:"fas fa-save icon",attrs:{title:"Save"},on:{click:t.save}}),s("i",{staticClass:"fas fa-undo icon",attrs:{title:"Undo"},on:{click:t.backStep}}),s("i",{staticClass:"fas fa-redo icon",attrs:{title:"Redo"},on:{click:t.nextStep}}),s("i",{staticClass:"fas fa-trash icon",attrs:{title:"Delete"},on:{click:t.handleDeleteTodo}})])])],1)},Lt=[],Rt={components:{"layout-default":ut,"tl-modal":A,"todo-title":gt,"todo-item":wt},props:["id"],data(){return{todoItem:"",modalDelete:!1,modalCancel:!1,modalEdit:!1,editTools:!1}},mounted(){this.setEditing(this.id)},methods:{...Object(d["b"])(["addTodoItem","setEditing","nextStep","backStep","saveEdits","cancelEdits","deleteTodo","changeTodoItem"]),addItem(){this.todoItem&&(this.addTodoItem({name:this.todoItem,complete:!1}),this.todoItem="")},save(){this.saveEdits(this.id),this.$router.push("/")},cancel(){this.$nextTick(()=>this.modalCancel=!0)},handleDeleteTodo(){this.$nextTick(()=>this.modalDelete=!0)},answerCancel(t){this.modalCancel=!1,t&&this.$nextTick(()=>{this.cancelEdits(),this.$router.push("/")})},answerDelete(t){this.modalDelete=!1,t&&this.$nextTick(()=>{this.deleteTodo(this.id),this.$router.push("/")})},completeTodoItem(t,e){this.changeTodoItem({updateComplete:!t.complete,updateName:t.name,index:e})}},computed:{...Object(d["c"])(["CURRENT_TODO"])},beforeDestroy(){this.cancelEdits()}},jt=Rt,Ht=(s("bee2"),Object(o["a"])(jt,$t,Lt,!1,null,"f0d95f36",null)),Pt=Ht.exports;i["a"].use(g["a"]);const Ut=new g["a"]({routes:[{path:"/",name:"Index",component:At},{path:"/:id",name:"Edit",component:Pt,props:!0}]});var Bt=Ut;s("5669"),s("e3d4");i["a"].config.productionTip=!1,new i["a"]({store:T,router:Bt,render:t=>t(c)}).$mount("#app")},"76ad":function(t,e,s){},7891:function(t,e,s){},"7cca":function(t,e,s){"use strict";s("9cb2")},"7f71":function(t,e,s){},"8a41":function(t,e,s){"use strict";s("7891")},"903b":function(t,e,s){"use strict";s("2170")},9414:function(t,e,s){},"9cb2":function(t,e,s){},"9eb3":function(t,e,s){},a3a4:function(t,e,s){"use strict";s("7f71")},bee2:function(t,e,s){"use strict";s("36c5")},d38c:function(t,e,s){"use strict";s("deab")},deab:function(t,e,s){},e2b0:function(t,e,s){"use strict";s("2a87")},e3d4:function(t,e,s){}});
//# sourceMappingURL=app.850b14ce.js.map