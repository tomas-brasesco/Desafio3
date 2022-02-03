const express=require("express");
const Contenedor=require("./contenedor.js")
const app=express();


const serviciosProducto=new Contenedor();


const server=app.listen(8080,()=>{
    console.log("listening on port 8080");
})

app.get('/productos',async (req,res)=>{
    res.send(await serviciosProducto.getAll())
})
app.get('/productoRandom',async (req,res)=>{
    const rest=await serviciosProducto.getAll()
    const aleatorio=Math.floor(Math.random() * rest.data.length );
    res.send(rest.data[aleatorio])
    
})
