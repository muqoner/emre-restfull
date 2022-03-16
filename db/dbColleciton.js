const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost/restfull_api",{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true })
    .then(()=>console.log("db baglantısı basarılı"))
    .catch(err=>console.log("db bağlantı hatası",err))