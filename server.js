
const express = require('express')
const app = express()
const port = 7000;


const DateMiddleWare = (req,res,next)=>{

   const date  = new Date()
   const day = date.getDay()
   const hours = date.getHours()
   if(day>=1 && day<=5 && hours>=9 && hours <=17){
    next()
   }
  else {
        res.send('we Are Closed')
    } 
}

app.use(DateMiddleWare)
 app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/home.html')
 })
 app.get('/Our_Services', (req,res)=>{
    res.sendFile(__dirname+'/Services.html')
 })
 app.get('/Contact_Us', (req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.listen(port, err=> err? console.log(err) : console.log(`the server is running on ${port}`))