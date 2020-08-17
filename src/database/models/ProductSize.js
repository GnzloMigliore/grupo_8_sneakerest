module.exports = (sequelize, dataTypes) => {
    let alias = 'productSize';
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
        
    
    const productSize = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    productSize.associate = function(models) {
        productSize.belongsTo(
            models.size,
            {
                as : 'size',
                foreignKey: 'size_id'
            }
        ),
        productSize.belongsTo(
            models.product,
            {
                as : 'product',
                foreignKey: 'product_id'
            }
        )
    };

    return productSize;
}