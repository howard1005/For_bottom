module.exports = (sequelize, DataTypes) => {
    
    var perk_style_dto = sequelize.define(
      "perk_style_dto",
      {
        description: { type: DataTypes.STRING, allowNull: false },
        // selections: { type: DataTypes.RANGE(DataTypes.PerkStyleSelectionDto), allowNull: false },
        style: { type: DataTypes.INTEGER, allowNull: false },
      },
      { timestamps: false }
    );



    return perk_style_dto
  };
  