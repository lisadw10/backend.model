import express from "express";
const app = express();
import {model} from "./model/model.js"

app.get('/about/:bahasa', (req,res)=> {
    const parameter = req.params.bahasa;
    res.send(model(parameter));
});
app.listen(5000, ()=>console.log("Server ON"));