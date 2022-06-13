module.exports = (sequelize, DataTypes) => {
    
    var match_dto = sequelize.define(
      "match_dto",
      {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
      },
      { timestamps: false }
    );



    return match_dto
  };
  