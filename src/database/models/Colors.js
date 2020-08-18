module.exports = (sequelize, DataTypes) =>{
    let alias = 'colors';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    };
    
    const colors = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, colors, Model y Gender
    /*colors.associate = function (models){
        colors.belongsToMany(
            models.products,
            {
                as: 'products',
                through: 'colorProduct',
                foreignKey: 'product_id',
                otherKey: 'color_id',
                timestamps: false 
            }
        )
        
        
    }*/
    return colors;
}