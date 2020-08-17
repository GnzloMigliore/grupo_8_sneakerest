module.exports = (sequelize, dataTypes) => {
    let alias = 'colorProduct';
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
        
    
    const colorProduct = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    colorProduct.associate = function(models) {
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
    };

    return colorProduct;
}