const express = require("express");
const app = express();
const userRoute = require("./routes/user");

app.use(express.json());

app.use("/api/users",userRoute);

app.listen(8800,()=>{
    console.log("Backend Server is running at port 8800")
})