const getEntity = (entity) => {
  let entitys = ''
  if (typeof entity === 'string') {
    entitys = global.entity[entity]
  } else {
    entitys = entity
  }

  if (!entitys) {
    global.errLog.error('获取model出错---', entity)
  }
  return entitys
}
const formatParams = params => {
  if (!params) {
    params = {where: {status: 1}}
  }
  if (!params.where && typeof params === 'object') {
    params.where = {status: 1}
  }
  if (params && params.where && !params.where.status) {
    params.where.status = 1
  }
  return params
}
export default {
  findOne: async (entity, params) => {
    params = formatParams(params)
    let entityData = await getEntity(entity).findOne(Object.assign({raw: true}, params))
    return entityData
  },

  findAndCountAll: async (entity, offset, limit, params) => {
    let param = {
      offset: offset,
      limit: limit
    }
    Object.assign(param, formatParams(params))
    let entityData = await getEntity(entity).findAndCountAll(param)
    return entityData
  },
  create: async (entity, params) => {
    let getEnt = await getEntity(entity).create(params)
    return getEnt.toJSON()
  },
  transaction: FN => {
    return global.db.transaction(FN)
      .then(res => {
        global.infoLog.info('事物处理成功--', res)
        return res
        // 事务已被提交
      }).catch(err => {
        global.infoLog.info('事物处理回滚--', err)
        return err
      })
  }

}
