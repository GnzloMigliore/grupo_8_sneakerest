module.exports = (sequelize, dataTypes) => {
    let alias = 'imageProduct';
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
        
    
    const imageProduct = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    imageProduct.associate = function(models) {
        imageProduct.belongsTo(
            models.image,
            {
                as : 'image',
                foreignKey: 'image_id'
            }
        ),
        imageProduct.belongsTo(
            models.product,
            {
                as : 'product',
                foreignKey: 'product_id'
            }
        )
    };

    return imageProduct;
}