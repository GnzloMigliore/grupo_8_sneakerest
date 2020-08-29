module.exports = (sequelize, dataTypes) => {
    let alias = 'productsize';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        size_id: {
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: 'productsize'
    }
    
    const productsize = sequelize.define(alias, cols, config)
    productsize.associate = function(models) {
        productsize.belongsTo(
            models.sizes,
            {
                as : 'sizes',
                foreignKey: 'size_id'
            }
        ),
        productsize.belongsTo(
            models.products,
            {
                as : 'products',
                foreignKey: 'product_id'
            }
        )
    };

    return productsize;
}