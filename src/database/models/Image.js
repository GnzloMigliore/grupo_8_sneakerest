module.exports = (sequelize, DataTypes) =>{
    let alias = 'images';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        filename: DataTypes.STRING,
    };

    
    const images = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, images, Model y Gender
    images.associate = function(models){
        images.belongsToMany(
            models.products,
            {
                as: 'products',
                through: 'imageproducts',
                foreignKey: 'image_id',
                otherKey: 'product_id'
            }
        )
    }
    
        
        return images;
    }