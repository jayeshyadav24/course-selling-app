const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");

adminRouter.post("ad",function(req,res){
        adminRouter.post("/signup",function(req,res){
            res.json({
                message: "signup admin endPoint"
            })
        })

        adminRouter.post("/signin",function(req,res){
            res.json({
                message: "signin admin endPoint"
            })
        })

        adminRouter.post("/course",function(req,res){
            res.json({
                message: "course admin endPoint"
            })
        })

        adminRouter.put("/course",function(req,res){
            res.json({
                message: "course admin endPoint"
            })
        })

        adminRouter.get("/course/bulk",function(req,res){
            res.json({
                message: "course admin endPoint"
            })
        })
    }
)

module.exports ={
    adminRouter: adminRouter    
}