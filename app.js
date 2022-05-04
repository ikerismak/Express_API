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

