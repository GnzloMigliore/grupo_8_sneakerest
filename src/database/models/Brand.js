module.exports = (sequelize, DataTypes) =>{
    let alias = 'brands';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    };
    
    /*let config = {
        tableName : 'products',
        timestamps: false
    }*/
    
    const brands = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, brands, Model y Gender
    brands.associate = function (models){
        brands.hasMany(
            models.products,
            {
                as: "products",
                foreignKey: "brand_id"
            }
            )
        }
        
        return brands;
    }