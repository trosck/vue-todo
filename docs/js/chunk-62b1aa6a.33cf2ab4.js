(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b1aa6a"],{"04fe":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.todo?i("div",{staticClass:"wrapper-todo"},[i("div",{staticClass:"title"},[i("span",{staticClass:"name"},[t._v(t._s(t.todo.title))]),i("button",{staticClass:"button btn-primary",on:{click:function(e){return t.handleEditTitle()}}},[t._v("Edit")])]),i("hr"),i("ul",{staticClass:"list"},[t._l(t.todo.list,(function(e,n){return i("li",{key:n,staticClass:"item relative",class:e.complete?"complete":""},[i("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:e.complete},on:{change:function(e){return t.handleCompleteItem(n)}}}),i("span",[t._v(t._s(e.name))]),i("div",{staticClass:"tools relative"},[i("button",{staticClass:"button btn-primary",on:{click:function(e){return t.handleEdit(n)}}},[t._v("Edit")]),i("button",{staticClass:"button btn-warning",on:{click:function(e){return t.handleDelete(n)}}},[t._v("Delete")])])])})),t.modalEdit?i("vue-confirm",{attrs:{title:"Change todo",textButtonLeft:"Cancel",textButtonRight:"Apply"},on:{answer:t.answerEdit},scopedSlots:t._u([{key:"content",fn:function(){return[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEdit,expression:"inputEdit"}],ref:"inputEdit",domProps:{value:t.inputEdit},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.answerEdit(!0)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.answerEdit(!1)}],input:function(e){e.target.composing||(t.inputEdit=e.target.value)}}})]},proxy:!0}],null,!1,3686799527)}):t._e(),t.modalDelete?i("vue-confirm",{attrs:{modalType:"warning"},on:{answer:t.answerDelete}}):t._e()],2)]):t._e()},d=[],o=i("2f62"),s=(i("d17f"),{props:{todo:{type:Object,require:!0}},data(){return{modalEdit:!1,inputEdit:"",indexEdit:null,modalDelete:!1,indexDelete:null}},methods:{...Object(o["b"])(["deleteTodoItem","changeTodoItem"]),handleEdit(t){this.inputEdit=this.todo.list[t].name,this.indexEdit=t,this.modalEdit=!0,this.$nextTick(()=>this.$refs.inputEdit.focus())},handleEditTitle(){this.inputEdit=this.todo.title,this.modalEdit=!0,this.$nextTick(()=>this.$refs.inputEdit.focus())},handleCompleteItem(t){const{complete:e,name:i}=this.todo.list[t];this.changeTodoItem({updateComplete:!e,updateName:i,index:t})},handleDelete(t){this.indexDelete=t,this.modalDelete=!0},answerEdit(t,e){t&&(null!==this.indexEdit?this.changeTodoItem({index:this.indexEdit,updateName:this.inputEdit,updateComplete:this.todo.list[this.indexEdit].complete}):this.changeTodoItem({updateTitle:this.inputEdit})),this.modalEdit=!1,this.indexEdit=null},answerDelete(t){this.modalDelete=!1,this.indexDelete=null,t&&this.deleteTodoItem(this.indexDelete)}}}),l=s,a=(i("8d3d"),i("2877")),u=Object(a["a"])(l,n,d,!1,null,null,null);e["default"]=u.exports},"8d3d":function(t,e,i){"use strict";var n=i("c1c9"),d=i.n(n);d.a},c1c9:function(t,e,i){},d17f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-62b1aa6a.33cf2ab4.js.map