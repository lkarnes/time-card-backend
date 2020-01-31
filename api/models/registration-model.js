const db = require('../../data/dbConfig.js');
const jwt = require('jsonwebtoken');

module.exports = {
    registerCompany,
    registerEmployee,
    loginCompany,
    loginEmployee,
    genToken
}

function registerCompany(company) {
    return db('company').insert(company);
}
function registerEmployee(employee) {
    return db('employee').insert(employee);
}
function loginCompany(filter) {
    console.log(filter)
    return db('company').where(filter).first();
}
function loginEmployee(filter) {
    console.log(filter)
    return db('employee').where(filter).first();
}

function genToken(user) {
    const payload = {
        subject: user.id,
        name: user.name
    }
    const secret = process.env.SECRET || 'blue' 
    const options = {
        expiresIn : '7d'
    }
    return jwt.sign(payload, secret, options);
}