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
        gender: dataTypes.STRING
    };

    const users = sequelize.define(alias, cols)
    //Relaciones entre Users y Address
    return users;
} 