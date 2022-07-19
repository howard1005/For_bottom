module.exports = (sequelize, DataTypes) => {
    
    var perk_stats_dto = sequelize.define(
      "perk_stats_dto",
      {
        defense: { type: DataTypes.INTEGER, allowNull: false },
        flex: { type: DataTypes.INTEGER, allowNull: false },
        offense: { type: DataTypes.INTEGER, allowNull: false },
      },
      { timestamps: false }
    );



    return perk_stats_dto
  };
  