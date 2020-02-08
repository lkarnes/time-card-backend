const db = require('../../data/dbConfig');

module.exports = {
    postTime,
    editTime,
    getHoursByEmployee,
    getCompanyHours
}

function postTime(data){
    return db('timecard').insert(data);
}

function editTime(body, id) {
    return db('timecard').where({id}).update(body)
}

function getHoursByEmployee(id) {
    return db('timecard').where({id});
}
function getCompanyHours(id) {
    return db('timecard').where("company_id", id);
}