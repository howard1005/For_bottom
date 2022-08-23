module.exports = (sequelize, DataTypes) => {
    
    var mini_series_dto = sequelize.define(
      "mini_series_dto",
      {
        losses: { type: DataTypes.INTEGER, allowNull: false },
        progress: { type: DataTypes.STRING, allowNull: false },
        target: { type: DataTypes.INTEGER, allowNull: false },
        wins: { type: DataTypes.INTEGER, allowNull: false },
      },
      { timestamps: false }
    );



    return mini_series_dto
  };
  