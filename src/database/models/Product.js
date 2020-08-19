module.exports = (sequelize, dataTypes) => {
    let alias = 'products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        price: dataTypes.DECIMAL,
        //discount: dataTypes.INTEGER,
        description: dataTypes.STRING,
        //image: dataTypes.STRING,
        stock: dataTypes.INTEGER,
    };

        
    
    const products = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    products.associate = function(models) {
        products.belongsTo(
            models.brands,
            {
                as : 'brands',
                foreignKey: 'brand_id'
            }
        )
        products.belongsTo(
            models.examples,
            {
                as : 'examples',
                foreignKey: 'example_id'
            }
        )
        products.belongsToMany(
            models.images,
            {
                as: 'images',
                through: 'imageproducts',
                foreignKey: 'product_id',
                otherKey: 'image_id'
            }
        )
    };

    return products
}