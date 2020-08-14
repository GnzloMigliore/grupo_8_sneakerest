module.exports = (sequelize, DataTypes) =>{
    let alias = 'Product';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        price: DataTypes.DECIMAL,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        stock: DataTypes.INTEGER,
    };
    
    /*let config = {
        tableName : 'products',
        timestamps: false
    }*/
    
    const Product = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, Brand, Model y Gender
    /*Product.associate = models => {
        Product.belongsTo(
            models.Brand,
            {
                as: 'brands',
                foreingKey: 'brand_id'
            }
            )
        }*/
        
        return Product;
    }