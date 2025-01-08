const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.status(200).send("<h1>hello world</h1>")
});

app.use(express.json())
const routerclient = require("./routes/clients.js")
//const productsrouter = require("./routes/products")

app.use("/api/clients", routerclient)
//app.use("/products", productsrouter)



require("dotenv").config();
const port = process.env.PORT || 8000;
app.listen(port, () =>{
    console.log(`fut a szero ${port}`)
})