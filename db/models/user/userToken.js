export default (Sequelize) => {
  return {
    userToken: {
      userId: {type: Sequelize.INTEGER},
      token: {type: Sequelize.STRING}
    }
  }
}
