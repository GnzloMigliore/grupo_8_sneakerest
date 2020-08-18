module.exports = (sequelize, dataTypes) =>{
    let alias = 'carts';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        total: dataTypes.INTEGER
    };
    
    const carts = sequelize.define(alias, cols)
    
    // Esto es la relacion entre Product, cartss, Model y Gender
    /*carts.associate = function (models){ 
        carts.belongsTo(models.users, { as: 'users', foreignKey: 'user_id'})
    }*/
            
    return carts;
}