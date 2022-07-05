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
        firstBloodAssist: { type: DataTypes.BOOLEAN, allowNull: false },
        firstBloodKill: { type: DataTypes.BOOLEAN, allowNull: false },
        firstTowerAssist: { type: DataTypes.BOOLEAN, allowNull: false },
        firstTowerKill: { type: DataTypes.BOOLEAN, allowNull: false },
        gameEndedInEarlySurrender: { type: DataTypes.BOOLEAN, allowNull: false },
        gameEndedInSurrender: { type: DataTypes.BOOLEAN, allowNull: false },
        goldEarned: { type: DataTypes.INTEGER, allowNull: false },
        goldSpent: { type: DataTypes.INTEGER, allowNull: false },
        individualPosition: { type: DataTypes.STRING, allowNull: false },
        inhibitorKills: { type: DataTypes.INTEGER, allowNull: false },
        inhibitorTakedowns: { type: DataTypes.INTEGER, allowNull: false },
        inhibitorsLost: { type: DataTypes.INTEGER, allowNull: false },
        item0: { type: DataTypes.INTEGER, allowNull: false },
        item1: { type: DataTypes.INTEGER, allowNull: false },
        item2: { type: DataTypes.INTEGER, allowNull: false },
        item3: { type: DataTypes.INTEGER, allowNull: false },
        item4: { type: DataTypes.INTEGER, allowNull: false },
        item5: { type: DataTypes.INTEGER, allowNull: false },
        item6: { type: DataTypes.INTEGER, allowNull: false },
        itemsPurchased: { type: DataTypes.INTEGER, allowNull: false },
        killingSprees: { type: DataTypes.INTEGER, allowNull: false },
        kills: { type: DataTypes.INTEGER, allowNull: false },
        lane: { type: DataTypes.STRING, allowNull: false },
        largestCriticalStrike: { type: DataTypes.INTEGER, allowNull: false },
        largestKillingSpree: { type: DataTypes.INTEGER, allowNull: false },
        largestMultiKill: { type: DataTypes.INTEGER, allowNull: false },
        longestTimeSpentLiving: { type: DataTypes.INTEGER, allowNull: false },
        magicDamageDealt: { type: DataTypes.INTEGER, allowNull: false },
        magicDamageDealtToChampions: { type: DataTypes.INTEGER, allowNull: false },
        magicDamageTaken: { type: DataTypes.INTEGER, allowNull: false },
        neutralMinionsKilled: { type: DataTypes.INTEGER, allowNull: false },
        nexusKills: { type: DataTypes.INTEGER, allowNull: false },
        nexusTakedowns: { type: DataTypes.INTEGER, allowNull: false },
        nexusLost: { type: DataTypes.INTEGER, allowNull: false },
        objectivesStolen: { type: DataTypes.INTEGER, allowNull: false },
        objectivesStolenAssists: { type: DataTypes.INTEGER, allowNull: false },
        participantId: { type: DataTypes.INTEGER, allowNull: false },
        pentaKills: { type: DataTypes.INTEGER, allowNull: false },
        // perks: { type: DataTypes.INTEGER, allowNull: false },
        physicalDamageDealt: { type: DataTypes.INTEGER, allowNull: false },
        physicalDamageDealtToChampions: { type: DataTypes.INTEGER, allowNull: false },
        physicalDamageTaken: { type: DataTypes.INTEGER, allowNull: false },
        profileIcon: { type: DataTypes.INTEGER, allowNull: false },



        
      },
      { timestamps: false }
    );



    return participant_dto
  };
  