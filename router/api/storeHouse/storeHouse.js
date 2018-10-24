import StoreHouseController from '../../../biz/controllers/StoreHouseController/StoreHouseController'

const storeHouseController = new StoreHouseController()
let storeHouseAddFN = {
  type: 'POST',
  url: '/v1/storeHouse/storeHouseAdd',
  callback: async (ctx) => {
    await storeHouseController.storeHouseAdd(ctx)
  }
}

let storeHouseListFN = {
  type: 'GET',
  url: '/v1/storeHouse/storeHouseList',
  callback: async (ctx) => {
    await storeHouseController.storeHouseList(ctx)
  }
}

let supplierDetailFN = {
  type: 'GET',
  url: '/v1/storeHouse/storeHouseDetail',
  callback: async ctx => {
    await storeHouseController.storeHouseDetail(ctx)
  }
}
let storeHouseDelFN = {
  type: 'POST',
  url: '/v1/storeHouse/storeHouseDel',
  callback: async ctx => {
    await storeHouseController.storeHouseDel(ctx)
  }
}
export default {
  storeHouseAddFN,
  storeHouseListFN,
  supplierDetailFN,
  storeHouseDelFN
}
