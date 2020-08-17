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
        description: dataTypes.STRING,
        image: dataTypes.STRING,
        stock: dataTypes.INTEGER,
    };
    /*let config = {
        tableName: 'Papachos',
        timestamps: false
    };*/
        
    
    const products = sequelize.define(alias, cols)
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    products.associate = function(models) {
        products.belongsTo(
            models.brands,
            {
                as : 'brands',
                foreignKey: 'brand_id'
            }
        ),
        products.belongsTo(
            models.examples,
            {
                as : 'examples',
                foreignKey: 'example_id'
            }
        ),
        products.belongsTo(
            models.genders,
            {
                as : 'genders',
                foreignKey: 'gender_id'
            }
        )
    };

    return products;
}