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
    /*let config = {
        tableName: 'Papachos',
        timestamps: false
    };*/
        
    
    const users = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    users.associate = function(models) {
        users.belongsTo(
            models.adresses,
            {
                as : 'adresses',
                foreignKey: 'adress_id'
            }
        )
    }

    return users;
}