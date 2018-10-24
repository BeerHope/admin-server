import SupplierController from '../../../biz/controllers/SupplierController/SupplierController'

const supplierController = new SupplierController()

let editSupplierFN = {
  type: 'POST',
  url: '/v1/supplier/editSupplier',
  callback: async (ctx) => {
    await supplierController.editSupplier(ctx)
  }
}

let supplierListFN = {
  type: 'GET',
  url: '/v1/supplier/supplierList',
  callback: async (ctx) => {
    await supplierController.supplierList(ctx)
  }
}

let supplierDetailFN = {
  type: 'GET',
  url: '/v1/supplier/supplierDetail',
  callback: async ctx => {
    await supplierController.supplierDetail(ctx)
  }
}
let supplierDelFN = {
  type: 'POST',
  url: '/v1/supplier/supplierDel',
  callback: async ctx => {
    await supplierController.supplierDel(ctx)
  }
}
export default {
  editSupplierFN,
  supplierListFN,
  supplierDetailFN,
  supplierDelFN
}
