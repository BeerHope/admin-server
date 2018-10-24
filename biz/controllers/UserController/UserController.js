import UserServer from '../../server/UserServer/UserServer'

export default class User {
  constructor () {
    this.userServer = new UserServer()
  }

  async login (ctx) {
    // let user = ctx.entity.users
    // let count = ctx.query.count
    // console.log('请求的参数--', ctx.query)
    // console.log('post请求的参数--', ctx.request.body)
    // // 插入数据
    // let users = ''

    // 根据id查询数据  返回一个对象
    // users = await user.findById(0)

    // 按照属性查找 是匹配到的第一个 userName 为 '测试用户1'
    // users = await user.findOne({where: {userName: '测试用户9'}})
    // 对查找出来的结果进行过滤 意思是 只返回这两个字段 也可以改别名
    // users = await user.findOne({
    //   where: {userName: '测试用户1'},
    //   attributes: ['id', 'passWord']
    // })
    // 查找这个对象，若有，将之返回 否则 插入默认的值
    // 返回一个数组，数组中有两个值，第一个为查找或插入的对象，第二个值为Boolean true 插入的 false 查询出来的
    // users = await user.findOrCreate({
    //   where: {userName: '测试用户5'},
    //   defaults: {userName: 'sdepold' + count, passWord: '12345'}
    // })
    // 查找多个对象 分页使用  返回一个对象 对象中存放两个参数 count： 匹配的总数 rows: 匹配的分页的数据
    // users = await user.findAndCountAll({
    //   where: {userName: '测试用户5'},
    //   offset: 10,
    //   limit: 2
    // })
    // 返回一个数组
    // users = await user.findAll()
    // 返回一个数组
    // users = await user.all()
    // 条件查询 Op.or 代表的是或的意思 Op.gt 大于 查询userName为测试用户并且id等于1或者2或者大于4
    // const Sequelize = require('Sequelize')
    // users = await user.findAndCountAll({
    //   where: {
    //     passWord: '12345',
    //     [Sequelize.Op.or]: [
    //       {id: [1, 2]},
    //       {id: {[Sequelize.Op.gt]: 4}}
    //     ]
    //   },
    //   offset: 0,
    //   limit: 3
    // })
    // 查询总数
    // users = await user.count()
    // 返回表中特定属性最大值 min 最小值 sum 求和
    // users = await user.max('id')

    // 更新数据 返回一个数组 里面存放的是是否成功
    // users = await user.update({
    //   passWord: '654321'
    // }, {
    //   where: {
    //     userName: '测试用户1'
    //   }
    // })

    // users = await user.create({id: 103425, userName: '测试用户1', passWord: '12345', email: '12335643@qq.com'})
    let user = await this.userServer.login(ctx)
    ctx.response.body = ctx.parsebody({user: user})
    // ctx.response.body = 99
  }

  async regist (ctx) {
    ctx.response.body = ctx.parsebody(await this.userServer.regist(ctx))
  }

  async getUserInfo (ctx) {
    let user = await this.userServer.getUserInfo(ctx)
    ctx.response.body = ctx.parsebody(user)
  }

  async userSignFu (ctx) {
    let uuid = await this.userServer.userSignFu(ctx)
    ctx.response.body = ctx.parsebody({uuid})
  }
}
