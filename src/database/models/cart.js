module.exports = (sequelize, DataTypes) =>{
    let alias = 'carts';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        total: DataTypes.INTEGER,
    };
    
    /*let config = {
        tableName : 'products',
        timestamps: false
    }*/
    
    const carts = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, carts, Model y Gender
    /*carts.associate = function (models){
        carts.hasMany(
            models.cartProduct,
            {
                as: 'cartProduct',
                foreignKey: 'cart_id'
            },
            models.orders,
            {
                as: 'orders',
                foreignKey: 'cart_id'
            }
            ),
            users.belongsTo(
                models.users,
                {
                    as : 'users',
                    foreignKey: 'user_id'
                }
            )
        }*/
        
        return carts;
    }