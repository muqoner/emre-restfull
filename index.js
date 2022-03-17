const express = require("express");
require("./db/dbColleciton")
const userRouter = require("./routers/userRouter")
const errorMiddleware = require("./middleware/errorMiddleware")

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).json({"message:":"anasayfa"})
})

app.use("/api/users",userRouter)

app.get("/:id",(req,res)=>{
    res.status(200).send(req.query.sortBy)
})

app.post("/",(req,res)=>{
    res.status(200).json(req.body)
})

app.use(errorMiddleware)

app.listen(3000,()=>{
    console.log("3000 portu dinleniyor");
})