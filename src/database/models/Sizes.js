module.exports = (sequelize, DataTypes) =>{
    let alias = 'sizes';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    };

    
    const sizes = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product y Size
    /*sizes.associate = function (models){
        sizes.hasMany(
            models.products,
            {
                as: 'productSize',
                foreignKey: 'size_id'
            }
            )
        }*/
        
        return sizes;
    }