module.exports = (sequelize, DataTypes) =>{
    let alias = 'orders';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        }
    };
    
    const orders = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, orders, Model y Gender
    /*orders.associate = function (models){
        orders.belongsTo(
            models.carts,
            {
                as : 'carts',
                foreignKey: 'cart_id'
            }
        ),
        orders.belongsTo(
            models.payments,
            {
                as : 'payments',
                foreignKey: 'payment_id'
            }
        ),
        orders.belongsTo(
            models.shipments,
            {
                as : 'shipments',
                foreignKey: 'shipment_id'
            }
        )
        }*/
        
        return orders;
    }