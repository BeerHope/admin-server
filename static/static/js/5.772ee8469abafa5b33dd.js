webpackJsonp([5],{U61m:function(t,e){},duwU:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"form"},[o("el-form",{ref:"search",attrs:{inline:!0}},[o("el-form-item",{attrs:{label:"供应商名称：",prop:"keyword"}},[o("el-input",{attrs:{placeholder:"供应商名字"},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增")])],1)],1)],1),t._v(" "),o("table-list",{attrs:{dataColumn:t.dataColumn,data:t.tableData},scopedSlots:t._u([{key:"operate",fn:function(e){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){t.edit(e.row)}}},[t._v("编辑")]),t._v(" "),o("el-button",{attrs:{type:"text"},on:{click:function(o){t.del(e.row)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]};var a=o("VU/8")({data:function(){return{dataColumn:[{prop:"id",label:"id"},{prop:"name",label:"客户名字"},{prop:"phone",label:"电话"},{prop:"address",label:"地址"},{prop:"postalCode",label:"传真"},{slot:"operate",label:"操作"}],tableData:{url:this.$Api.customer.customerList,key:"customerList",params:{}},total:0,form:{keyword:""}}},created:function(){},components:{},methods:{add:function(){this.$router.push({name:"customerAdd"})},search:function(){this.tableData.params.keyword=this.form.keyword,this.$bus.emit("table-list-date")},edit:function(t){this.$router.push({name:"customerAdd",params:{id:t.id}})},del:function(t){var e=this;this.$Ajax.post(this.$Api.customer.customerDel,{id:t.id},function(t){t.customer&&(e.$message("删除成功"),e.$bus.emit("table-list-date"))})}}},r,!1,function(t){o("U61m")},null,null);e.default=a.exports}});
//# sourceMappingURL=5.772ee8469abafa5b33dd.js.map