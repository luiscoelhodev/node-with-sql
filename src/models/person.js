const { Model, DataTypes } = require('sequelize');

class Person extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            ssn: DataTypes.STRING(9),
            birthdate: DataTypes.DATEONLY,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, { sequelize }
        )
    }
}

module.exports = Person;