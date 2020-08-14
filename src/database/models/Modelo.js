module.exports = (sequelize, DataTypes) =>{
    let alias = 'Model';
    
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
    
    const Model = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, Brand, Model y Gender
    /*Model.associate = function (models){
        Model.hasMany(
            models.Product,
            {
                as: "products",
                foreignKey: "model_id"
            }
            )
        }*/
        
        return Model;
    }