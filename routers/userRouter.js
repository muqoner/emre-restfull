const router = require("express").Router();
const User = require("../models/userModel")


router.get("/",async (req,res)=>{
    try{    
        const users = await User.find({})
        res.send(users)
    }catch(err){
        console.log("kullanicilar getirilirken hata oluştu",err);
    }
    

    res.json({message:"users sayfası görüntülenecek"})
})

router.post("/", async (req,res)=>{
    try{
        const kullanici = new User(req.body)
       const sonuc= await kullanici.save()
       res.send(sonuc)
    }catch(err){
        console.log("kullanici eklenirken hata oluştu",err);
    }
})

router.patch("/:id",(req,res)=>{
    res.status(200).json({
        "message":`idsi ${req.params.id} olan kullanicinin yeni bilgileri=${JSON.stringify(req.body)}`
    })
})
router.delete("/:id",(req,res)=>{
    res.status(200).json({
        message:`${req.params.id} idlikullanici silindi`
    })
})

module.exports = router