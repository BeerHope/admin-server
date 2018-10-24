export default class SupplierServer {
  async supplierList (ctx) {
    let params = {}
    if (ctx.params.keyword) {
      Object.assign(params, {
        where: {
          name: {[ctx.op.like]: `%${ctx.params.keyword}%`}
        }
      })
    }
    let supplierList = await ctx.findAndCountAll('supplier', ctx.params.offset, ctx.params.limit, params)
    return supplierList
  }

  async editSupplier (ctx) {
    let supplier = ctx.params.supplier
    let supplierModel = ctx.entity.supplier
    let supplierN = {}
    if (supplier.id) {
      let supplierDB = await ctx.findOne(supplierModel, {where: {id: supplier.id}, raw: false})
      supplierDB.name = supplier.name
      supplierDB.address = supplier.address
      supplierDB.phone = supplier.phone
      supplierDB.postalCode = supplier.postalCode
      await supplierDB.save({fields: ['name', 'address', 'phone', 'postalCode']})
      supplierN = supplierDB.toJSON()
    } else {
      supplierN = await ctx.create(supplierModel, supplier)
    }
    return supplierN
  }

  async supplierDetail (ctx) {
    let supplier = ctx.findOne('supplier', {where: {id: ctx.params.id}})
    return supplier
  }

  async supplierDel (ctx) {
    let supplier = await ctx.findOne('supplier', {where: {id: ctx.params.id}, raw: false})
    if (supplier) {
      supplier.status = 0
      supplier = await supplier.save({fields: ['status']})
      return supplier.toJSON()
    }
    return supplier
  }
}
