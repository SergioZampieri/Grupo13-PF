const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('book', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    reservedDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hourDate:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    personQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    codeProm: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    priceTotal: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: true,
    },

  },{
    timestamps: false,
  });

};