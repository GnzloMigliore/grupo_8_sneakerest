module.exports = (sequelize, dataTypes) => {
    let alias = 'colorProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    };
        
    
    const colorProduct = sequelize.define(alias, cols)
    /*colorProduct.associate = function(models) {
        colorProduct.belongsTo(
            models.color,
            {
                as : 'color',
                foreignKey: 'color_id'
            }
        ),
        colorProduct.belongsTo(
            models.product,
            {
                as : 'product',
                foreignKey: 'product_id'
            }
        )
    };*/

    return colorProduct;
}