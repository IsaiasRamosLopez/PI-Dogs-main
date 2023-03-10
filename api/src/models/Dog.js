const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	sequelize.define(
		"dog",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			height_min: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			height_max: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			weight_min: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			weight_max: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			life_span: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdInDb: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
		}
	);
};
