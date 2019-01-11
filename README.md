# admin-server

项目介绍：
   一个后台管理系统，前后端分离，vue做前端，node写后台。
   这个项目是后台项目，使用的技术 koa + koa-router + sequelize。
   数据库使用的是mysql，项目启动时需要在 db/config/dev-config.js 文件中修改数据库的相关信息

   前端项目地址： https://github.com/fate66/web-admin
   前端自动化上线项目地址：https://github.com/fate66/admin-on-line

   路由注册于model注册皆是自动化注册。具体可以看rouer/index与models下面的index文件

   注册成功并自动登录功能：
   注册账号时，使用了事物（Transaction），注册账号同时生成token，若有一个失败，事物会自动进行回滚。
   注册成功会同时生成token可以实现前端在注册成功后自动登录，不需要用户再次登录。


   本项目做了单点登陆。
   一个账号同时只能在一台设备上登陆，用的方法是token认证。

   token生成规则：设备的唯一标示+用户ID+当前时间进行MD5以及base64加密

   单点登陆流程：在前端每次请求的时候都会在拦截器中校验账号是否登陆或者
   账号是否过期。如果过期或未登录，后台与前端约定了一种规则，后台会将未登录结果返回给前端同时拦截本次请求。

   前端项目在ajax请求以及路由跳转时也做了全局拦截。
   ajax接收到结果时，若接收到未登录或登录失效的信息时，前端项目自动跳转到登录页。
   在路由跳转时，项目也会去检测是否登录，未登录则跳转到登录页

   项目上线：
   node上线需要手动上线，前端项目上线时，我写了一个自动化上线项目，只需浏览器中访问 http://101.201.70.134:8081/v1/features/onLine
   这个接口即可

   文件上传与下载：
   项目做了文件上传与下载功能，上传的文件存储在static目录下，上传文件不能大于2 * 1024 * 1024。上传成功后，后台会将下载的URL直接返回给
   前端，后台不会进行存储。

   log日志：
   为了方便查找问题，每次请求都会生成唯一标示UUID，我会将整个请求流程写进log日志，查找问题时，可以通过UUID查看log日志

   性能优化：(时间只是一个相对的概念)

   压缩中间件（koa-compress）：开启后台gzip压缩功能，减小资源文件的体积。这个优化效果很显著，例如webpack打包生成的vendor.js文件未压缩
   为768K，压缩之后为190k,整体加载时间从9s降低到1.45s

   http缓存： http的响应头可以设置强缓存和协商缓存。对所有的js与css文件进行强缓存。
   因为使用webpack打包生成的文件是以文件的hash值命名的，当内容改变时，文件的名字也跟着改变，所以直接使用强缓存即可。
   经过本次优化，第一次进入首页整体加载时间没区别，但是第二次进入首页的加载时间降到了914ms。不过这里没必要对所有的js与css进行强缓存
   因为有些业务代码若经常变化，还不如直接服务器请求，根据具体的业务场景而定。

   页面优化：页面优化主要是在页面的解析过程中进行优化，HTML解析是从头到尾依次解析，当遇到外链的css与js文件时，便会先下载文件并且执行过后再
   进行解析。这部我们要做的优化就是将下载css与js文件的时间提前，并且不阻塞浏览器解析页面，Preload便可以实现这个功能。

   首页加载出来之后的优化可以是将"可能"用到的文件提前下载下来，Prefetch可以实现这个功能。（Preload与Prefetch的具体区别于用法可以自行谷歌）

   对于当前项目，webpack打包生成的的vendor、app、manifest这三个js文件是进入首页的时候必用的，所以可以给这三个文件加上Preload，webpack打包时可以借用
   preload-webpack-plugin这个插件实现。如果浏览器不支持这个Preload，会直接省略这个标签。不用担心兼容性问题

   <link rel="preload" as="script" href="/static/js/vendor.7218c39891e531c4a7c5.js">

   对vue-cli的优化：

   1:引入图片压缩插件image-webpack-loader

   2：关闭productionSourceMap，本项目关闭productionSourceMap后，js文件从3.9m降低到803k


   项目访问网址： http://101.201.70.134

## Build Setup

npm install

开发环境
npm run server

线上环境
npm run prod


页面示例：

1：登陆页面

  ![image](https://github.com/fate66/project-h5/raw/master/repositories/login.png)

2：首页

  ![image](https://github.com/fate66/project-h5/raw/master/repositories/home.png)

3：table表格页

  ![image](https://github.com/fate66/project-h5/raw/master/repositories/list.png)

4：上传文件页面

  ![image](https://github.com/fate66/project-h5/raw/master/repositories/upload.png)

5：自动化上线成功页面

  ![image](https://github.com/fate66/project-h5/raw/master/repositories/online.png)





