module.exports = (sequelize, DataTypes) => {
    
    var metadata_dto = sequelize.define(
      "metadata_dto",
      {
        dataVersion: { type: DataTypes.STRING(10), allowNull: false },
        matchId: { type: DataTypes.STRING(10), allowNull: false },
        participants: { type: DataTypes.RANGE(DataTypes.UUID), allowNull: false },
      },
      { timestamps: false }
    );



    return metadata_dto
  };
  