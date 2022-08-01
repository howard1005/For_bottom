module.exports = (sequelize, DataTypes) => {
    
    var league_list_dto = sequelize.define(
      "league_list_dto",
      {
        leagueId: { type: DataTypes.STRING, allowNull: false },
        // entries: { type: DataTypes.RANGE(LeagueItemDTO), allowNull: false },
        tier: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
      },
      { timestamps: false }
    );



    return league_list_dto
  };
  