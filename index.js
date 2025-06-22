const express = require("express");
const {createUserRoutes} = require("./routes/user");
const {createCourseRouters} = require("./routes/course");
const app = express();


app.use("/user",userRouter);
app.use("/course",courseRouter);

createUserRoutes(app);
createCourseRouters(app);


app.listen(3000);