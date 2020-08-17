module.exports = (sequelize, DataTypes) =>{
    let alias = 'methodPayment';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        method: DataTypes.STRING,
    };
    
    /*let config = {
        tableName : 'products',
        timestamps: false
    }*/
    
    const methodPayment = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, methodPayment, Model y Gender
    methodPayment.associate = function (models){
        methodPayment.hasMany(
            models.orders,
            {
                as: 'orders',
                foreignKey: 'payment_id'
            }
            )
        }
        
        return methodPayment;
    }