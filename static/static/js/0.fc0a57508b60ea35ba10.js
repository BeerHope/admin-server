webpackJsonp([0],{"3E/6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{loginFrom:{from:[{value:"",label:"用户名：",prop:"userName",prefixIcon:"el-icon-service",placeholder:"请输入用户名",labelWidth:"80px",rules:{required:!0,message:"请输入用户名",trigger:"blur"}},{value:"",label:"手机号：",prop:"phone",prefixIcon:"el-icon-mobile-phone",placeholder:"请输入手机号",type:"number",labelWidth:"80px",rules:{required:!0,message:"请输入手机号",trigger:"blur"}},{value:"",label:"密码：",prop:"passWord",placeholder:"请输入密码",prefixIcon:"el-icon-view",labelWidth:"80px",type:"password",rules:{required:!0,message:"请输入密码",trigger:"blur"}}]},dataBut:[{text:"登陆",type:"primary",key:"commit"},{text:"注册",type:"primary",key:"regist"}]}},created:function(){this.getUUID()},methods:{login:function(e){var t=this;console.log(e,"---"),this.$Ajax.post(this.$Api.user.login,e,function(e){e.user?(t.$cacheUtils.localStorage("user").setObject("user",e.user),t.$router.push({name:"home"})):t.$message("登陆失败")})},getUUID:function(){var e=this;this.$Ajax.get(this.$Api.user.uuid,function(t){t.uuid&&e.$cacheUtils.localStorage("uuid").set("uuid",t.uuid)})},regist:function(e){var t=this;e.uuid=this.$cacheUtils.localStorage("uuid").get("uuid"),this.$Ajax.post(this.$Api.user.regist,e,function(e){e.user?t.$message("注册成功，请直接登录"):t.$message("该账号已注册，请登录")})}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8,offset:8}},[t("div",{staticClass:"title"},[this._v("后台管理系统")])])],1),this._v(" "),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8,offset:8}},[t("form-group",{attrs:{data:this.loginFrom,dataBut:this.dataBut},on:{commit:this.login,regist:this.regist}})],1)],1)],1)},staticRenderFns:[]};var a=r("VU/8")(i,s,!1,function(e){r("nUcX")},null,null);t.default=a.exports},nUcX:function(e,t){}});
//# sourceMappingURL=0.fc0a57508b60ea35ba10.js.map