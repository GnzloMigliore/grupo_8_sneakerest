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
        
    
    const adresses = sequelize.define(alias, cols)
    // Esto es la relacion entre Adress y User
    adresses.associate = function(models) {
        adresses.belongsToMany(
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
    return adresses;
}