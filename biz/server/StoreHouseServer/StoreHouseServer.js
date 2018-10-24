export default class StoreHouse {
  async storeHouseAdd (ctx) {
    let storeHouse = ctx.params.storeHouse
    let storeHouseModel = ctx.entity.storeHouse
    let storeHouseN = {}
    if (storeHouse.id) {
      let supplierDB = await ctx.findOne(storeHouseModel, {where: {id: storeHouse.id}, raw: false})
      supplierDB.storeName = storeHouse.storeName
      supplierDB.storeAddress = storeHouse.storeAddress
      await supplierDB.save({fields: ['storeName', 'storeAddress', 'phone', 'postalCode']})
      storeHouseN = supplierDB.toJSON()
    } else {
      storeHouseN = await ctx.create(storeHouseModel, storeHouse)
    }
    return storeHouseN
  }

  async storeHouseList (ctx) {
    let params = {}
    if (ctx.params.keyword) {
      Object.assign(params, {
        where: {
          storeName: {[ctx.op.like]: `%${ctx.params.keyword}%`}
        }
      })
    }
    let storeHouseList = await ctx.findAndCountAll('storeHouse', ctx.params.offset, ctx.params.limit, params)
    return storeHouseList
  }

  async storeHouseDetail (ctx) {
    let storeHouse = ctx.findOne('storeHouse', {where: {id: ctx.params.id}})
    return storeHouse
  }
  async storeHouseDel (ctx) {
    let storeHouse = await ctx.findOne('storeHouse', {where: {id: ctx.params.id}, raw: false})
    if (storeHouse) {
      storeHouse.status = 0
      storeHouse = await storeHouse.save({fields: ['status']})
      return storeHouse.toJSON()
    }
    return storeHouse
  }
}
