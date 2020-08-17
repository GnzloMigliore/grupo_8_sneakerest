module.exports = (sequelize, DataTypes) =>{
    let alias = 'genders';
    
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
    
    const genders = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, Brand, Model y Gender
    genders.associate = function (models){
        genders.hasMany(
            models.products,
            {
                as: 'products',
                foreignKey: 'gender_id'
            }
            )
        }
        
        return genders;
    }