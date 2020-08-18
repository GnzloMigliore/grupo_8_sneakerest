module.exports = (sequelize, dataTypes) => {
    let alias = 'colorProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: dataTypes.INTEGER,
        subtotal: dataTypes.INTEGER
    };

    const colorProduct = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    /*colorProduct.associate = function(models) {
        colorProduct.belongsTo(
            models.product,
            {
                as : 'product',
                foreignKey: 'product_id'
            }
        ),
        colorProduct.belongsTo(
            models.carts,
            {
                as : 'carts',
                foreignKey: 'cart_id'
            }
        )
    };*/

    return colorProduct;
}