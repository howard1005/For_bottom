module.exports = (sequelize, DataTypes) => {
    
    var league_item_dto = sequelize.define(
      "league_item_dto",
      {
        freshBlood: { type: DataTypes.BOOLEAN, allowNull: false },
        wins: { type: DataTypes.INTEGER, allowNull: false },
        summonerName: { type: DataTypes.STRING, allowNull: false },
      },
      { timestamps: false }
    );



    return league_item_dto
  };
  