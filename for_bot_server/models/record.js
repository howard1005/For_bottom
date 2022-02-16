module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "record",
      {
        champion_name: { type: DataTypes.STRING(10), allowNull: false },
        win: { type: DataTypes.Boolean },
        earn_gold: { type: DataTypes.STRING(100), allowNull: false },
        game_type : { type: DataTypes.STRING(10), allowNull: false },
      },
      { timestamps: true }
    );
  };
  