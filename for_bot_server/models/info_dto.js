module.exports = (sequelize, DataTypes) => {
    
    var info_dto = sequelize.define(
      "info_dto",
      {
        gameCreation: { type: DataTypes.INTEGER, allowNull: false },
        gameDuration: { type: DataTypes.INTEGER, allowNull: false },
        gameEndTimestamp: { type: DataTypes.INTEGER, allowNull: false },
        gameMode: { type: DataTypes.STRING, allowNull: false },
        gameName: { type: DataTypes.INTEGER, allowNull: false },
        gameStartTimestamp: { type: DataTypes.INTEGER, allowNull: false },
        gameType: { type: DataTypes.STRING, allowNull: false },
        gameVersion: { type: DataTypes.STRING, allowNull: false },
        mapId: { type: DataTypes.INTEGER, allowNull: false },
        //participants: { type: DataTypes.STRING, allowNull: false },
        platformId: { type: DataTypes.STRING, allowNull: false },
        queueId: { type: DataTypes.INTEGER, allowNull: false },
       //TODO
      },
      { timestamps: false }
    );



    return match_dto
  };
  