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
    
    /*let config = {
        tableName : 'products',
        timestamps: false
    }*/
    
    const colors = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, colors, Model y Gender
    colors.associate = function (models){
        colors.hasMany(
            models.products,
            {
                as: 'colorProduct',
                foreignKey: 'color_id'
            }
            )
        }
        
        return colors;
    }