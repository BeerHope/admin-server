import CustomerServer from '../../server/CustomerServer/CustomerServer'

export default class CustomerController {
  constructor () {
    this.customerServer = new CustomerServer()
  }

  async customerList (ctx) {
    let customerList = await this.customerServer.customerList(ctx)
    ctx.response.body = ctx.parsebody({customerList})
  }

  async customerAdd (ctx) {
    let supplier = await this.customerServer.customerAdd(ctx)
    ctx.response.body = ctx.parsebody({supplier: supplier})
  }

  async customerDetail (ctx) {
    let customer = await this.customerServer.customerDetail(ctx)
    ctx.response.body = ctx.parsebody({customer})
  }

  async customerDel (ctx) {
    let customer = await this.customerServer.customerDel(ctx)
    ctx.response.body = ctx.parsebody({customer})
  }
}
