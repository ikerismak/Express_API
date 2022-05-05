const express = require("express")

const app = express()

app.use(express.json())

const port = 3000



app.listen(port,()=>{
    console.log(`this app is litening by the port${port}`)
})

app.get("/v1/explorers",(req,res) => {

    console.log(`Api explorers get all request ${new Date()}`);
    const explorers1 = {id: 1, name: "carlo1"}
    const explorers2 = {id: 1, name: "carlo1"}
    const explorers3 = {id: 1, name: "carlo1"}
    const explorers4 = {id: 1, name: "carlo1"}
    const explorers5 = {id: 1, name: "carlo1"}

    const explorers = [explorers1,explorers2,explorers3,explorers4,explorers5]
    res.status(200).json(explorers)
})

app.get("/v1/explorers/:id",(req,res) =>{
    console.log(`Api get a request${new Date()}`);
    console.log(`getting explorers with id ${req.params.id}`);
    const explorer = {id: 1, name: "carlo"}
    res.status(200).json(explorer)
})

app.post("/v1/explorers",(req,res)=>{
    console.log(`Api explorers POST request ${new Date()}`);
    const requestBody = req.body
    res.status(201).json({message: "created"})
})


app.put("/v1/explorers/:id",(req,res)=>{
    console.log(`Api Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with ID ${req.params.id}`)
    const requestBody = req.body
    console.log(req.body);
    res.status(200).json({message: "updated"})
})

app.delete("v1/",(req,res)=>{
    console.log(`Api delete metod`);

})

