module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "champion",
      {
        champion_name: { type: DataTypes.STRING(10), allowNull: false },
        skill_name: { type: DataTypes.STRING(10), allowNull: false },
        skill_json_property: { type: DataTypes.STRING(100), allowNull: false },
        description : { type: DataTypes.STRING(10), allowNull: false },
      },
      { timestamps: false }
    );
  };
  