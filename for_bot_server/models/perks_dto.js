module.exports = (sequelize, DataTypes) => {
    
    var perks_dto = sequelize.define(
      "perks_dto",
      {
        // statPerks: { type: PerkStatsDto, allowNull: false },
        // styles: { type: DataTypes.RANGE(PerkStatsDto), allowNull: false },
      },
      { timestamps: false }
    );



    return perks_dto
  };
  