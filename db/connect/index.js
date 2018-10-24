import checkConfig from '../config'

const Sequelize = require('sequelize')

// 创建数据库连接池
let createSeqExample = (config) => {
  return new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: (res) => {
      global.infoLog.info('本次请求执行的sql----', res)
    },
    // 请参考 Querying - 查询 操作符 章节
    operatorsAliases: false
  })
}
const db = (app) => {
  let config = checkConfig(app)
  let blogSequelize = createSeqExample(config.blog)
  return {blogSequelize}
}

export default db
