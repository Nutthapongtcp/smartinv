const path = require('path')

// Import Express
const express = require('express')

//Import Express Flash
const flash =require('express-flash')

//Import Express Session
const session =require('express-session')

// Import EJS Layout
const expressLayouts = require ('express-ejs-layouts')
// Import file frontend.js
const frontendRouter = require('./routes/frontend')
// Import file Backend.js
const backendRouter = require('./routes/backend')
const { Store } = require('express-session')


// Creat express object
const app = express()

// กำหนด Folder สำหรับบอกตัว express ว่า css , images อยู่ path ไหน
// app.use(express.static('assets'))
app.use(express.static(path.join(__dirname,'assets')))

//กำหนด Template Engine
app.use(expressLayouts)
app.set('layout','./layouts/frontend')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//เรียกใช้งาน Session
app.use(session({
    cookie: {maxAge:6000},
    Store : new session.MemoryStore,
    saveUninitialized: true,
    resave : 'true',
    secret : 'secret'
}))
// เรียกใช้งาน Flash
app.use(flash())
// เรียกใช้งาน Routes
app.use('', frontendRouter)
app.use('/backend', backendRouter)


//Run Express Server ที่ Port 5000
app.listen(5000), () => {
    console.log('Server run at port 5000')
}
