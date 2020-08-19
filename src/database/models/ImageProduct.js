module.exports = (sequelize, DataTypes) => {
    let alias = 'imageproducts';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        image_id: {
            type: DataTypes.INTEGER,
        },
        product_id: {
            type: DataTypes.INTEGER,
        }
            
    };
    let config = {
        tableName: 'imageproducts'
    }

    const imageproducts = sequelize.define(alias, cols, config)
    imageproducts.associate = function(models) {
        imageproducts.belongsTo(
            models.products,
            {
                as : 'products',
                foreignKey: 'product_id'
            }
        ),
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