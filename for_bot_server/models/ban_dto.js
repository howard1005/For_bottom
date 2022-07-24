module.exports = (sequelize, DataTypes) => {
    
    var team_dto = sequelize.define(
      "team_dto",
      {
        championId: { type: DataTypes.INTEGER, allowNull: false },
        pickTurn: { type: DataTypes.INTEGER, allowNull: false },
      },
      { timestamps: false }
    );



    return team_dto
  };
  