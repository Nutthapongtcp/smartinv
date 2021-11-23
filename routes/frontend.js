// Import Express
const express = require('express')
const router = express.Router()

// สร้าง Method ในการทำงาน Server
router.get('',(req,res)=>{
    res.render('pages/frontend/index',{ title: 'Home'})
})

router.get('/about',(req,res)=>{
    res.render('pages/frontend/about',{ title: 'About'})
})

router.get('/login',(req,res)=>{
    res.render('pages/frontend/login',{ 
        title: 'Login', 
        layout:'./layouts/authen'
    })
})

router.get('/register',(req,res)=>{
    res.render('pages/frontend/register',{ 
        title: 'Register', 
        layout:'./layouts/authen'
    })
})

module.exports = router