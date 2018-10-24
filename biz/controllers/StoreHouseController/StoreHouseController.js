import StoreHouseServer from '../../server/StoreHouseServer/StoreHouseServer'
export default class StoreHouse {
  constructor () {
    this.storeHouseServer = new StoreHouseServer()
  }
  async storeHouseAdd (ctx) {
    let storeHouse = await this.storeHouseServer.storeHouseAdd(ctx)
    ctx.response.body = ctx.parsebody({storeHouse})
  }

  async storeHouseList (ctx) {
    let storeHouseList = await this.storeHouseServer.storeHouseList(ctx)
    ctx.response.body = ctx.parsebody({storeHouseList})
  }

  async storeHouseDetail (ctx) {
    let storeHouse = await this.storeHouseServer.storeHouseDetail(ctx)
    ctx.response.body = ctx.parsebody({storeHouse})
  }
  async storeHouseDel (ctx) {
    let storeHouse = await this.storeHouseServer.storeHouseDel(ctx)
    ctx.response.body = ctx.parsebody({storeHouse})
  }
}
