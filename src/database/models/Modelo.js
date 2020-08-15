module.exports = (sequelize, DataTypes) =>{
    let alias = 'examples';
    
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
    
    const examples = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, Brand, Model y Gender
    examples.associate = function (models){
        examples.hasMany(
            models.products,
            {
                as: "products",
                foreignKey: "example_id"
            }
            )
        }
        
        return examples;
    }