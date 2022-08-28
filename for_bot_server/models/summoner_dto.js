module.exports = (sequelize, DataTypes) => {
    
    var summoner_dto = sequelize.define(
      "summoner_dto",
      {
        accountId: { type: DataTypes.STRING(80), allowNull: false, primaryKey: true },
        profileIconId: { type: DataTypes.INTEGER, allowNull: false },
        revisionDate: { type: DataTypes.BIGINT, allowNull: false },
        name: { type: DataTypes.STRING(80), allowNull: false },
        id:	{ type: DataTypes.STRING(80), allowNull: false, allowNull: false},
        puuid: { type: DataTypes.STRING(80), allowNull: false },
        summonerLevel: { type: DataTypes.BIGINT, allowNull: false },
      },
      { timestamps: false }
    );




    return summoner_dto
  };
  