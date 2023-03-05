const { sequelize } = require('../connectDatabase')
const User = require('../models/user')

const rawQuery = async (req, res) => {
    const [users, meta] = await sequelize.query('SELECT * FROM users WHERE name IN (:name) ', {
        type: sequelize.QueryTypes.SELECT,
        raw: true,
        instance: User,
        // bind: { name: 'naba modak' }  // name = $name
        // replacements: { name: 'naba modak' }     // name = :name
        // replacements: ['naba modak']              // name = ?
        replacements: {
            name: ['naba modak', 'naba singh']
        }
    });
    res.status(200).json({ users, meta })
}

module.exports = rawQuery;