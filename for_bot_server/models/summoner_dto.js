module.exports = (sequelize, DataTypes) => {
    
    var summoner_dto = sequelize.define(
      "summoner_dto",
      {
        accountId: { type: DataTypes.STRING(10), allowNull: false },
        profileIconId: { type: DataTypes.INTEGER, allowNull: false },
        revisionDate: { type: DataTypes.LONG, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        id:	{ type: DataTypes.STRING, allowNull: false },
        puuid: { type: DataTypes.STRING, allowNull: false },
        summonerLevel: { type: DataTypes.LONG, allowNull: false },
      },
      { timestamps: false }
    );




    return summoner_dto
  };
  