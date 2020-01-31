const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./models/registration-model.js')

router.post('/company', (req,res)=> {
    const body = req.body;
    const hash = bcrypt.hashSync(body.password, 14);
    body.password = hash;
    const token = db.genToken(body);
    db.registerCompany(body).then(company => {
        res.status(201).json({message:'company created!', token: token})
    }).catch(err => {
        res.status(500).json({message: 'internal server error', error: err})
    })
})

router.post('/employee', (req,res)=> {
    console.log(req.body)
    const body = req.body;
    const hash = bcrypt.hashSync(body.password, 14);
    body.password = hash;
    const token = db.genToken(body);
    db.registerEmployee(body).then(() => {
        res.status(201).json({message:'employee created!', token: token})
    }).catch(err => {
        res.status(500).json({err})
    })
})

module.exports = router;
