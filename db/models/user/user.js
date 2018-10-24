export default (Sequelize) => {
  return {
    users: {
      id: {type: Sequelize.INTEGER, primaryKey: true},
      userName: {type: Sequelize.STRING, allowNull: false},
      passWord: {type: Sequelize.STRING, allowNull: false},
      phone: {type: Sequelize.STRING, allowNull: false},
      authority: {type: Sequelize.STRING}
    }
  }
}
