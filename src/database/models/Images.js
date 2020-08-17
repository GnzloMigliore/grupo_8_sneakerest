module.exports = (sequelize, DataTypes) =>{
    let alias = 'images';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        filename: DataTypes.STRING,
    };
    
    /*let config = {
        tableName : 'products',
        timestamps: false
    }*/
    
    const images = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, images, Model y Gender
    images.associate = function (models){
        images.hasMany(
            models.products,
            {
                as: 'products',
                foreignKey: 'image_id'
            }
            ),
            images.belongsTo(
                models.products,
                {
                    as : 'products',
                    foreignKey: 'product_id'
                }
            )
        }
        
        return images;
    }