module.exports = (sequelize, dataTypes) => {
    let alias = 'colorproduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    };       
    
    const colorproduct = sequelize.define(alias, cols)
    /*colorproduct.associate = function(models) {
        colorproduct.belongsTo(
            models.colors,
            {
                as : 'colors',
                foreignKey: 'color_id'
            }
        ),
        colorproduct.belongsTo(
            models.products,
            {
                as : 'products',
                foreignKey: 'product_id'
            }
        )
    };*/
    return colorproduct;
}