const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.use("/" , express.static(__dirname + "/dist"))

app.get("/get-profile", function(req, res) {

   const response = {
        name: "Essa",
        email: "essa98@gamil.com",
        intrests: "Cloud"
    }
    res.send(response)
} )


app.post("/update-profile", function(req, res) {

    const payload = req.body
    console.log(payload)

    res.send({info: "user profile data updated successfully"})

})

app.listen(3000, function(){

    console.log("app listening at port 3000")


})




