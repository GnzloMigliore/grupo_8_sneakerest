module.exports = (sequelize, dataTypes) => {
    let alias = 'users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: dataTypes.STRING,
        last_name: dataTypes.STRING,
        telephone: dataTypes.INTEGER,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        image: dataTypes.STRING,
        role: dataTypes.INTEGER,
    };

    const users = sequelize.define(alias, cols)
    //Relaciones entre Users y Address
    users.associate = function(models) {
        users.belongsTo(
            models.genders,
            {
                as : 'genders',
                foreignKey: 'gender_id'
            }
        )
        users.belongsToMany(
            models.adresses,
            {
                as : 'adresses',
                through: 'adressuser',
                foreignKey: 'user_id',
                otherKey: 'adress_id',
                timestamps: false
            }
        )
    }

    return users;
} 