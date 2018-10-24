let config = {}
const checkConfig = (app) => {
  switch (app.env) {
    case 'development': {
      config = require('./dev-config')
      break
    }
    case 'production': {
      config = require('./prod-config')
      break
    }
  }
  return config.default
}
export default checkConfig
