const {Router} = require("express");
const courseRouter = Router();

    courseRouter.post("/purchase",function(req,res){
        res.json({
            message: "purchase endPoint"
        })
    })

    courseRouter.post("/preview",function(req,res){
        res.json({
            message: "courses endPoint"
        })
    })

module.exports ={
    createCourseRouters: createCourseRouters
}