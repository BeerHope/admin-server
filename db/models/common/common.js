export default (Sequelize) => {
  return {
    supplier: {
      name: {type: Sequelize.STRING, allowNull: false},
      address: {type: Sequelize.STRING, allowNull: false},
      phone: {type: Sequelize.STRING, allowNull: false},
      postalCode: {type: Sequelize.STRING}
    },
    storeHouse: {
      storeName: {type: Sequelize.STRING, allowNull: false},
      storeAddress: {type: Sequelize.STRING, allowNull: false}
    },
    customer: {
      name: {type: Sequelize.STRING, allowNull: false},
      address: {type: Sequelize.STRING, allowNull: false},
      phone: {type: Sequelize.STRING, allowNull: false},
      postalCode: {type: Sequelize.STRING}
    }
  }
}
