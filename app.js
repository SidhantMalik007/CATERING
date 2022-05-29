const express = require("express");
const app = express();
const cors = require("cors");
const mysql=require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "catering",
});
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:3000",
  }));
connection.query("select * from `checkout`",(err,data)=>console.log(data))
app.get("/", (req, res) => {
    console.log(req)
    res.write("hello")
  res.end();
});
app.post("/det",(req,res)=>{
    console.log(req.body)
    const id=String(Math.random()*10000000000);
    connection.query("INSERT INTO `checkout` VALUES(?,?,?,?)",[req.body.name,req.body.address,req.body.phoneNo,id])
    req.body.data.forEach(element => {
        connection.query("INSERT INTO `items` VALUES(?,?,?)",[element.name,element.desc,id])
    });
    res.write('"SUCCESSFUL"');
    res.end()
})
app.listen(6900, () => console.log("im listening"));
