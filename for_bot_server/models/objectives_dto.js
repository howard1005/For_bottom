module.exports = (sequelize, DataTypes) => {
    
    var objectives_dto = sequelize.define(
      "objectives_dto",
      {
        // baron: { type: DataTypes.ObjectiveDto, allowNull: false },
        // champion: { type: DataTypes.ObjectiveDto, allowNull: false },
        // dragon: { type: DataTypes.ObjectiveDto, allowNull: false },
        // inhibitor: { type: DataTypes.ObjectiveDto, allowNull: false },
        // riftHerald: { type: DataTypes.ObjectiveDto, allowNull: false },
        // tower: { type: DataTypes.ObjectiveDto, allowNull: false },
      },
      { timestamps: false }
    );



    return objectives_dto
  };
  