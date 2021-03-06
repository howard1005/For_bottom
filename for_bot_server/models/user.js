module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      useremail: {
        /* column 속성들 */ type: DataTypes.STRING(20),
        allowNull: false,
        unique: true /* 여기까지 */,
      },
      name: { type: DataTypes.STRING(10), allowNull: false },
    },
    { timestamps: false }
  );
};
