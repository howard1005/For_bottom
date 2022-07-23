module.exports = (sequelize, DataTypes) => {
    
    var team_dto = sequelize.define(
      "team_dto",
      {
        // bans: { type: DataTypes.RANGE(BanDto), allowNull: false },
        // objectives: { type: ObjectivesDto, allowNull: false },
        teamId: { type: DataTypes.INTEGER, allowNull: false },
        win: { type: DataTypes.BOOLEAN, allowNull: false },
      },
      { timestamps: false }
    );



    return team_dto
  };
  