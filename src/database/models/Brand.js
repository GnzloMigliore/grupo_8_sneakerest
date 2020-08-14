module.exports = (sequelize, DataTypes) =>{
    let alias = 'Brand';
    
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
    
    const Brand = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, Brand, Model y Gender
    /*Brand.associate = function (models){
        Brand.hasMany(
            models.Product,
            {
                as: "products",
                foreignKey: "brand_id"
            }
            )
        }*/
        
        return Brand;
    }