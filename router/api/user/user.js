import UserController from '../../../biz/controllers/UserController/UserController'

const user = new UserController()
let getLogin = {
  type: 'POST',
  url: '/v1/user/login',
  callback: async (ctx) => {
    await user.login(ctx)
  }
}

let postRegist = {
  type: 'POST',
  url: '/v1/user/regist',
  callback: async (ctx) => {
    await user.regist(ctx)
  }
}

let getUserInfo = {
  type: 'GET',
  url: '/v1/user/getUserInfo',
  callback: async (ctx) => {
    await user.getUserInfo(ctx)
  }
}

let userSignFu = {
  type: 'GET',
  url: '/v1/user/userSignFu',
  callback: async (ctx) => {
    await user.userSignFu(ctx)
  }
}
export default {
  getLogin,
  postRegist,
  getUserInfo,
  userSignFu
}
