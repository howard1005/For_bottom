module.exports = (sequelize, DataTypes) => {
    
    var objectives_dto = sequelize.define(
      "objective_dto",
      {
        first: { type: DataTypes.BOOLEAN, allowNull: false },
        kills: { type: DataTypes.INTEGER, allowNull: false },
      },
      { timestamps: false }
    );



    return objectives_dto
  };
  