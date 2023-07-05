const express = require("express")

const app = express() 

app.get("/order", (request, response) => {
    return response.send("Order")
})

app.listen(3000)