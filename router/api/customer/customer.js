import CustomerController from '../../../biz/controllers/CustomerController/CustomerController'

const customerController = new CustomerController()

let customerAddFN = {
  type: 'POST',
  url: '/v1/customer/customerAdd',
  callback: async (ctx) => {
    await customerController.customerAdd(ctx)
  }
}

let customerListFN = {
  type: 'GET',
  url: '/v1/customer/customerList',
  callback: async (ctx) => {
    await customerController.customerList(ctx)
  }
}

let customerDetailFN = {
  type: 'GET',
  url: '/v1/customer/customerDetail',
  callback: async ctx => {
    await customerController.customerDetail(ctx)
  }
}
let customerDelFN = {
  type: 'POST',
  url: '/v1/customer/customerDel',
  callback: async ctx => {
    await customerController.customerDel(ctx)
  }
}
export default {
  customerAddFN,
  customerListFN,
  customerDetailFN,
  customerDelFN
}
