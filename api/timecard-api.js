const express = require('express');
const router = express.Router();
const db = require('./models/timecard-model')

//employee add time
router.post('/employee', (req,res)=> {
    const {employee_id, company_id} = req.body;
    if(!employee_id || !company_id || !req.body){
        res.status(400).json({message: "please make sure to fill out all required fields"})
    }else{
        db.postTime(req.body).then(response => {
            res.status(201).json({message: "time successfully submitted"})
        }).catch(err => {
            res.status(500).json({error: err})
        })
    }
})
//edit employee time
router.put('/employee/:id', (req,res)=> {
    const id = req.params.id;
    const body = req.body;
    if(req.body){
        db.editTime(body, id).then(response => {
            res.status(201).json({message: "successful update"})
        }).catch(err => {
            res.status(500).json({err})
        })
    }else{
        res.status(401).json({message: "please pass body into request"})
    }
})
//get employee time by id
router.get('/employee/:id', (req,res)=> {
    const id = req.params.id;
    db.getHoursByEmployee(id).then(hours => {
        res.status(200).json(hours)
    })
})

//get all employees times
router.get('/all/employees/:companyId', (req,res) => {
    const id = req.params.companyId;
    db.getCompanyHours(id).then(hours => {
        res.status(200).json(hours)
    })
})

module.exports = router;
