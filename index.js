const express = require("express")
const uuid = require("uuid")

const port = 3000
const app = express() 
app.use(express.json())

const ordersTotal = []


app.get("/order", (request, response) => {
    return response.json(ordersTotal)
})

app.post("/order", (request, response) => {
    const { order, clienteName, price, orderStatus } = request.body
    
    const orders = { id: uuid.v4(), order, clienteName, price, orderStatus }

    ordersTotal.push(orders)
    
    return response.status(201).json(orders)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})