const { Router } = require("express");
const userRouter = Router();

    userRouter.post("/signup",function(req,res){
        res.json({
            message: "signup endPoint"
        })
    })

    userRouter.post("/signin",function(req,res){
        res.json({
            message: "signin endPoint"
        })
    })

    userRouter.post("/purchases",function(req,res){
        res.json({ 
            message: "purchases endPoint"
        })
    })


module.exports = {
    userRouter: userRouter
}
