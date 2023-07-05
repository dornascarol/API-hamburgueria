const express = require("express")
const port = 3000

const app = express() 

app.get("/order", (request, response) => {
    
    const { order, clienteName, price, orderStatus } = request.query  //destructuring assignment

    return response.json({order, clienteName, price, orderStatus})
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})