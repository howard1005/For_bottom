module.exports = (sequelize, DataTypes) => {
    
    var participant_dto = sequelize.define(
      "participant_dto",
      {
        assists: { type: DataTypes.INTEGER, allowNull: false },
        baronKills: { type: DataTypes.INTEGER, allowNull: false },
        bountyLevel: { type: DataTypes.INTEGER, allowNull: false },
        champExperience: { type: DataTypes.INTEGER, allowNull: false },
        
      },
      { timestamps: false }
    );



    return participant_dto
  };
  