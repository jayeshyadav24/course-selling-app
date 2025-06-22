const { Router } = require("express");

const useRouter = Router();

    useRouter.post("/signup",function(req,res){
        res.json({
            message: "signup endPoint"
        })
    })

    useRouter.post("/signin",function(req,res){
        res.json({
            message: "signin endPoint"
        })
    })

    useRouter.post("/purchases",function(req,res){
        res.json({ 
            message: "purchases endPoint"
        })
    })


module.exports = {
    createUserRouters: createUserRouters
}
