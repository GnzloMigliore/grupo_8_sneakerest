module.exports = (sequelize, dataTypes) => {
    let alias = 'adressUser';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    };
    /*let config = {
        tableName: 'Papachos',
        timestamps: false
    };*/
        
    
    const adressUser = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    /*adressUser.associate = function(models) {
        adressUser.belongsTo(
            models.users,
            {
                as : 'users',
                foreignKey: 'user_id'
            }
        ),
        adressUser.belongsTo(
            models.adress,
            {
                as : 'adress',
                foreignKey: 'adress_id'
            }
        )
    };*/

    return adressUser;
}