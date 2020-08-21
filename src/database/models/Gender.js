module.exports = (sequelize, DataTypes) =>{
    let alias = 'genders';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    };
    
    const genders = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, Brand, Model y Gender
        return genders;
    }