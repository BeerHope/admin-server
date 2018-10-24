const uuid = require('node-uuid')
export default class UserServer {
  async regist (ctx) {
    let params = ctx.params
    let oldUser = await this.getUserInfo(ctx)
    if (oldUser) {
      return {message: '账号已被注册', user: ''}
    } else {
      let lastUser = await ctx.findOne('users', {order: [['id', 'DESC']], limit: 1})
      params.id = lastUser ? lastUser.id + 4 : 178424307
      let saveToken = ''
      let users = ''
      let FN = t => {
        let userEntity = ctx.entity.users
        return userEntity.create(params, {transaction: t})
          .then(user => {
            users = user.toJSON()
            let tokenEntity = ctx.entity.userToken
            let tokenVO = {
              userId: users.id,
              token: ctx.md5.b64MD5(`${ctx.params.uuid}+${users.id}+${new Date().getTime()}`)
            }
            return tokenEntity.create(tokenVO, {transaction: t})
              .then(token => {
                saveToken = token.toJSON()
              })
          })
      }
      let transaction = await ctx.transaction(FN)
      if (transaction) {
        return {user: '', message: '注册失败'}
      } else {
        users.token = saveToken.token
        return {user: users}
      }
    }
  }

  async createToken (ctx, userId) {
    let tokenEntity = ctx.entity.userToken
    let tokenVO = {userId: userId, token: ctx.md5.b64MD5(`${ctx.params.uuid}+${userId}+${new Date().getTime()}`)}
    let token = await ctx.create(tokenEntity, tokenVO)
    return token
  }

  async login (ctx) {
    let user = await ctx.findOne('users', {where: {phone: ctx.params.phone, passWord: ctx.params.passWord}})
    if (user) {
      let token = await ctx.findOne('userToken', {where: {userId: user.id}, raw: false})
      if (token) {
        token.token = ctx.md5.b64MD5(`${ctx.params.uuid}+${user.id}+${new Date().getTime()}`)
        await token.save({fields: ['token']})
        token = token.toJSON()
      } else {
        token = await this.createToken(ctx, user.id)
      }
      user.token = token.token
    }
    return user
  }

  async getUserInfo (ctx) {
    let user = await ctx.findOne('users', {where: {phone: ctx.params.phone}})
    return user
  }

  async userSignFu (ctx) {
    return uuid.v4()
  }
  async changeuserAuth(ctx){

  }
}
