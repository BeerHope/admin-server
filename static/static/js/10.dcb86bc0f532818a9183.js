webpackJsonp([10],{EYXu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{loginFrom:{from:[{value:"",label:"客户名：",prop:"name",prefixIcon:"el-icon-service",placeholder:"请输入客户名字",labelWidth:"100px",rules:{required:!0,message:"请输入内容",trigger:"blur"}},{value:"",label:"手机号：",prop:"phone",prefixIcon:"el-icon-mobile-phone",placeholder:"请输入手机号",type:"number",labelWidth:"100px",rules:{required:!0,message:"请输入手机号",trigger:"blur"}},{value:"",label:"地址：",prop:"address",placeholder:"请输入地址",prefixIcon:"el-icon-view",labelWidth:"100px",rules:{required:!0,message:"请输入内容",trigger:"blur"}},{value:"",label:"传真：",prop:"postalCode",placeholder:"请输入传真",prefixIcon:"el-icon-view",labelWidth:"100px"}]},dataBut:[{text:"确定",type:"primary",key:"save"}],id:""}},created:function(){this.id=this.$route.params.id,this.id&&this.customerDetail()},methods:{customerDetail:function(){var e=this;this.$Ajax.get(this.$Api.customer.customerDetail,{id:this.id},function(t){t.customer&&(e.setV(0,t.customer.name),e.setV(1,t.customer.phone),e.setV(2,t.customer.address),e.setV(3,t.customer.postalCode))})},setV:function(e,t){this.loginFrom.from[e].value=t},save:function(e){var t=this;e.id=this.id,console.log(e,"---"),this.$Ajax.post(this.$Api.customer.customerAdd,{customer:e},function(e){e.customer&&t.$message("保存成功")})}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"editForm"},[t("form-group",{attrs:{data:this.loginFrom,dataBut:this.dataBut},on:{save:this.save}}),this._v(" "),t("v-back")],1)])},staticRenderFns:[]};var o=r("VU/8")(i,s,!1,function(e){r("MQSP")},null,null);t.default=o.exports},MQSP:function(e,t){}});
//# sourceMappingURL=10.dcb86bc0f532818a9183.js.map