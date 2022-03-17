const router = require("express").Router();
const User = require("../models/userModel")
const createError = require("http-errors")


router.get("/", async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (err) {
        console.log("kullanicilar getirilirken hata oluştu", err);
    }


    res.json({ message: "users sayfası görüntülenecek" })
})

router.post("/", async (req, res) => {
    try {
        const kullanici = new User(req.body)
        const sonuc = await kullanici.save()
        res.send(sonuc)
    } catch (err) {
        console.log("kullanici eklenirken hata oluştu", err);
    }
})

router.patch("/:id", async (req, res,next) => {
    try {
        const response = await User.findByIdAndUpdate({ _id: req.params.id }, (req.body), { new: true })
        if (response) {
            return res.json(response)
        } else {
            throw new createError(400,"kullanıcı veri tabanında bulunamadııııı")
            // return res.json({
            //     message: `veri tabanında ${req.params.id} idli kullanıcı bulunamadı`
            // })
        }
    } catch (err) {
        next(err)
    }

})
router.delete("/:id", async (req, res,next) => {
    try {
        const response = await User.findByIdAndDelete({ _id: req.params.id })
        if (response) {
            return res.json({
                message: `${req.params.id} idli kullanici silindi`
            })
        } else {
            // const error = new Error("kullanıcı veri tabanında bulunamadı")
            // error.statusCode="404"
            throw new createError(400,"kullanıcı veri tabanında bulunamadı")
            // return res.json({
            //     message: `${req.params.id} nolu id veri tabanında bulunamadı`
            // })
            
        }
    } catch (err) {
        // console.log("kullanici silinirken hata oluştu", err);
        next(err)
    }

})

module.exports = router