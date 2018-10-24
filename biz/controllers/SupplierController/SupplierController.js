import SupplierServer from '../../server/SupplierServer/SupplierServer'

export default class SupplierController {
  constructor () {
    this.supplierServer = new SupplierServer()
  }

  async supplierList (ctx) {
    let supplierList = await this.supplierServer.supplierList(ctx)
    ctx.response.body = ctx.parsebody({supplierList: supplierList})
  }

  async editSupplier (ctx) {
    let supplier = await this.supplierServer.editSupplier(ctx)
    ctx.response.body = ctx.parsebody({supplier: supplier})
  }

  async supplierDetail (ctx) {
    let supplier = await this.supplierServer.supplierDetail(ctx)
    ctx.response.body = ctx.parsebody({supplier})
  }

  async supplierDel (ctx) {
    let supplier = await this.supplierServer.supplierDel(ctx)
    ctx.response.body = ctx.parsebody({supplier})
  }
}
