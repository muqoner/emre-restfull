
const errorMiddleware = (err, req, res, next) => {


    console.log(err)
    if (err.code === 11000) {
        res.json({
            message: "bu userName baskası tarafından kullanılıyor",
            statusCode: err.statusCode
        })
    }

    res.json({
        statusCode: err.statusCode,
        message: err.message
    })


    // if(err.name ==="CastError"){
    //     res.status(404).json({
    //         message: "geçerli bir id giriniz"
    //     })
    // }else{
    //     res.status(err.statusCode).json({
    //         message:err.message,
    //         statusCode:err.statusCode
    //     })
    // }
}

module.exports = errorMiddleware