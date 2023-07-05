const express = require("express")
const port = 3000

const app = express() 

app.get("/order/:id", (request, response) => {

    const { id } = request.params        //destructuring assignment

    console.log(id)

    return response.json({id})
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})