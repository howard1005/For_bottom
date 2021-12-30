module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "champion",
      {
        name: { type: DataTypes.STRING(10), allowNull: false },
        skills: { type: DataTypes.STRING(10), allowNull: false },
      },
      { timestamps: false }
    );
  };
  