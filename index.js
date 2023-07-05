const express = require("express")

const port = 3000
const app = express() 
app.use(express.json())

app.get("/order", (request, response) => {
    
    const { order, clientName, price, orderStatus } = request.body

    return response.json({ order, clientName, price, orderStatus })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})