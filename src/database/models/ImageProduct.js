module.exports = (sequelize, dataTypes) => {
    let alias = 'imageproducts';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    };

    const imageproducts = sequelize.define(alias, cols)
    imageproducts.associate = function(models) {
        imageproducts.belongsTo(
            models.products,
            {
                as : 'products',
                foreignKey: 'product_id'
            }
        )
        imageproducts.belongsTo(
            models.images,
            {
                as : 'images',
                foreignKey: 'image_id'
            }
        )
    };

    return imageproducts;
}