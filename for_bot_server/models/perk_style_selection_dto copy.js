module.exports = (sequelize, DataTypes) => {
    
    var perk_style_selection_dto = sequelize.define(
      "perk_style_selection_dto",
      {
        perk: { type: DataTypes.INTEGER, allowNull: false },
        var1: { type: DataTypes.INTEGER, allowNull: false },
        var2: { type: DataTypes.INTEGER, allowNull: false },
        var3: { type: DataTypes.INTEGER, allowNull: false },
      },
      { timestamps: false }
    );



    return perk_style_selection_dto
  };
  