const express = require("express")
const port = 3000

const app = express() 

app.get("/order", (request, response) => {
    return response.send("Order")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})