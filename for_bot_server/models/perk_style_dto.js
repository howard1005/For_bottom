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

    perk_style_dto.associate = models => {
      perk_style_dto.belongsToMany(models.perk_style_selection_dto, {through: "selections"})
    };



    return perk_style_dto
  };
  