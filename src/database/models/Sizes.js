module.exports = (sequelize, DataTypes) =>{
    let alias = 'sizes';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        number: DataTypes.DECIMAL
    };

    
    const sizes = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product y Size
    sizes.associate = function (models){
        sizes.belongsToMany(
            models.products,
            {
                as: 'products',
                through: 'productsize',
                foreignKey: 'size_id',
                otherKey: 'product_id'
            }
        )
    }
        
    return sizes;
    }