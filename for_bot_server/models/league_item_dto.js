module.exports = (sequelize, DataTypes) => {
    
    var league_item_dto = sequelize.define(
      "league_item_dto",
      {
        freshBlood: { type: DataTypes.BOOLEAN, allowNull: false },
        wins: { type: DataTypes.INTEGER, allowNull: false },
        summonerName: { type: DataTypes.STRING, allowNull: false },
        // miniSeries: { type: DataTypes.MiniSeriesDTO, allowNull: false },
        inactive: { type: DataTypes.BOOLEAN, allowNull: false },
        veteran: { type: DataTypes.BOOLEAN, allowNull: false },
      },
      { timestamps: false }
    );



    return league_item_dto
  };
  