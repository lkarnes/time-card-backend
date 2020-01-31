const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./models/registration-model.js')

router.post('/company', (req,res)=> {
    const {password, company_name} = req.body;
    const token = db.genToken(req.body);
    db.loginCompany({company_name}).then(company => {
        if(company && bcrypt.compareSync(password, company.password)){
            res.status(200).json({data: company, token: token}) 
        }else{
            res.status(404).json({message: 'company doesnt exist'})
        }
    }).catch(err => {
        res.status(500).json({message: 'internal server error in catch', error: err})
    })
})


router.post('/employee', (req,res)=> {
    const {name, password} = req.body;
    const token = db.genToken(req.body);
    db.loginEmployee({name}).then(employee => {
        if(employee && bcrypt.compareSync(password, employee.password)){
            res.status(200).json({data: employee, token: token})
        }else{
            res.status(404).json({message: 'employee doesnt exist'})
        }
    }).catch(err => {
        res.status(500).json({message: 'internal server error', error: err})
    })
})

module.exports = router;