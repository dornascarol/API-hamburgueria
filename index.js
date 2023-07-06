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
    const { order, clientName, price, orderStatus } = request.body

    const createOrder = { id: uuid.v4(), order, clientName, price, orderStatus }

    ordersTotal.push(createOrder)

    return response.status(201).json(createOrder)
})

app.put("/order/:id", (request, response) => {
    const { id } = request.params
    const { order, clientName, price, orderStatus } = request.body

    const updateOrder = { id, order, clientName, price, orderStatus }

    const index = ordersTotal.findIndex(element => element.id === id)

    if (index < 0) {
        return response.status(404).json({message: "Not Found"})
    }

    ordersTotal[index] = updateOrder

    return response.json(updateOrder)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})