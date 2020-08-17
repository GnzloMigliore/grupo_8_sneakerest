module.exports = (sequelize, dataTypes) => {
    let alias = 'adresses';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: dataTypes.STRING,
        number: dataTypes.INTEGER,
        floor: dataTypes.INTEGER,
        apartment: dataTypes.STRING,
        city: dataTypes.STRING,
        province: dataTypes.STRING,
        postalCode: dataTypes.INTEGER
    };
    /*let config = {
        tableName: 'Papachos',
        timestamps: false
    };*/
        
    
    const adresses = sequelize.define(alias, cols)
    // Esto es la relacion entre Adress y User
    adresses.associate = function(models) {
        adresses.hasMany(
            models.users,
            {
                as : 'users',
                foreignKey: 'adress_id'
            }
        ),
        adresses.belongsTo(
            models.adressUser,
            {
                as : 'adressUser',
                foreignKey: 'adress_id'
            }
        )
    };

    return adresses;
}