module.exports = (sequelize, DataTypes) => {
    
    var participant_dto = sequelize.define(
      "participant_dto",
      {
        assists: { type: DataTypes.INTEGER, allowNull: false },
        baronKills: { type: DataTypes.INTEGER, allowNull: false },
        bountyLevel: { type: DataTypes.INTEGER, allowNull: false },
        champExperience: { type: DataTypes.INTEGER, allowNull: false },
        champLevel: { type: DataTypes.INTEGER, allowNull: false },
        championId: { type: DataTypes.INTEGER, allowNull: false },
        championName: { type: DataTypes.STRING, allowNull: false },
        championTransform: { type: DataTypes.INTEGER, allowNull: false },
        consumablesPurchased: { type: DataTypes.INTEGER, allowNull: false },
        damageDealtToBuildings: { type: DataTypes.INTEGER, allowNull: false },
        damageDealtToObjectives: { type: DataTypes.INTEGER, allowNull: false },
        damageDealtToTurrets: { type: DataTypes.INTEGER, allowNull: false },
        damageSelfMitigated: { type: DataTypes.INTEGER, allowNull: false },
        deaths: { type: DataTypes.INTEGER, allowNull: false },
        detectorWardsPlaced: { type: DataTypes.INTEGER, allowNull: false },
        doubleKills: { type: DataTypes.INTEGER, allowNull: false },
        dragonKills: { type: DataTypes.INTEGER, allowNull: false },


        
      },
      { timestamps: false }
    );



    return participant_dto
  };
  