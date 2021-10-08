const {Sequelize , Model} = require('sequelize');
const {DataTypes} = require('sequelize')
const {sequelize} = require('./db.js')
class Student extends Model
{
    
}

Student.init(
    {
        Name:
        {
            type : DataTypes.STRING,
        },
        Email:
        {
           type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName : 'Student'
    }
)

module.exports = {Student}