module.exports = (sequelize, DataTypes) => {
    
    var info_dto = sequelize.define(
      "info_dto",
      {
        gameCreation: { type: DataTypes.INTEGER, allowNull: false },
       //TODO
      },
      { timestamps: false }
    );



    return match_dto
  };
  