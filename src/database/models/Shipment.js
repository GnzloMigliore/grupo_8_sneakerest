module.exports = (sequelize, DataTypes) =>{
    let alias = 'shipments';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        }
    };
    
    const shipments = sequelize.define(alias,cols);
    
    // Esto es la relacion entre Product, shipments, Model y Gender
    /*shipments.associate = function (models){
        shipments.hasMany(
            models.adresses,
            {
                as: 'adresses',
                foreignKey: 'adress_id'
            }
            )
        }*/
        
        return shipments;
    }