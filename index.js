const express = require("express")
const uuid = require("uuid")

const port = 3000
const app = express()
app.use(express.json())

const ordersTotal = []

const checkId = (request, response, next) => {
    const { id } = request.params

    const index = ordersTotal.findIndex(element => element.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Not Found" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

const checkRequest = (request, response, next) => {
    const method = request.method

    const url = request.url

    console.log(`[${method}] - ${url} `)

    next()
}

app.get("/order", checkRequest, (request, response) => {
    return response.json(ordersTotal)
})

app.post("/order", checkRequest, (request, response) => {
    const { order, clientName, price, orderStatus } = request.body

    const createOrder = { id: uuid.v4(), order, clientName, price, orderStatus }

    ordersTotal.push(createOrder)

    return response.status(201).json(createOrder)
})

app.put("/order/:id", checkId, checkRequest, (request, response) => {
    const { order, clientName, price, orderStatus } = request.body
    const index = request.orderIndex
    const id = request.orderId

    const updateOrder = { id, order, clientName, price, orderStatus }

    ordersTotal[index] = updateOrder

    return response.json(updateOrder)
})

app.delete("/order/:id", checkId, checkRequest, (request, response) => {
    const index = request.orderIndex

    ordersTotal.splice(index, 1)

    return response.status(204).json()
})

app.get("/order/:id", checkId, checkRequest, (request, response) => {
    const index = request.orderIndex

    const specificOrder = ordersTotal[index] 

    return response.json(specificOrder)
})

app.patch("/order/:id", checkId, checkRequest, (request, response) => {
    const index = request.orderIndex

    ordersTotal[index].orderStatus = "Pronto"
    
    return response.json(ordersTotal[index])
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})