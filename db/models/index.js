const Sequelize = require('sequelize')
const fs = require('fs')

const FN = (db, name, attr) => {
  name = name.replace(/([A-Z])/g, '_$1').toLowerCase()
  for (let key in attr) {
    let attrV = attr[key]
    attrV.field = key.replace(/([A-Z])/g, '_$1').toLowerCase()
  }
  let attrs = {}
  // 附加公共字段
  if (!attrs.hasOwnProperty('id')) {
    attrs.id = {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    }
  }
  Object.assign(attrs, attr)
  attrs.create_time = {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: new Date().toLocaleString()
  }
  attrs.createAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.updateAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.version = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  // 状态：1表示有效，0表示无效.
  if (!attrs.hasOwnProperty('status')) {
    attrs.status = {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }

  // 调用seq的方法定义模型并返回
  return db.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: function (obj) {
        let now = Date.now()
        if (obj.isNewRecord) {
          obj.createAt = now
          obj.updateAt = now
          obj.version = 0
        } else {
          obj.updateAt = now
          ++obj.version
        }
      }
    }
  })
}

const defineModel = (app) => {
  let entity = {}
  let modelDir = fs.readdirSync(__dirname)
  modelDir = modelDir.filter(item => {
    if (!item.endsWith('.js')) {
      return item
    }
  })
  modelDir.forEach(item => {
    let fileList = fs.readdirSync(`${__dirname}/${item}`)
    fileList = fileList.filter(fileItem => {
      if (fileItem.endsWith('.js')) {
        return fileItem
      }
    })
    fileList.forEach(fileItem => {
      let modelTable = require(`${__dirname}/${item}/${fileItem}`).default(Sequelize)
      if (!Object.keys(modelTable).length) {
        app.context.errLog.error(`model定义出错！`)
        return
      }
      let name = ''
      let attrs = {}
      for (let key in modelTable) {
        name = key
        attrs = modelTable[key]
        entity[name] = FN(app.context.db, name, attrs)
        entity[name].sync().then(() => {
        }, (res) => {
          app.context.errLog.error(`${name}表创建出错！！！`)
        })
      }
    })
  })
  console.log(entity, 'entity')
  return entity
}
export default defineModel
