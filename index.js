const express = require("express")
const fs = require("fs")

const app = express()

const user = {
    "user3": {
        "name": "Peter",
        "profession": "designer",
        "id": 3
    }
}

app.get("/listUsers", (req, res) => {
    fs.readFile("./users.json", (err, data) => {
        console.log(data)
        res.end(data)
    })
})

app.post("/addUser", (req, res) => {
    fs.readFile("./users.json", (err, data) => {
        data = JSON.parse(data)
        data["user3"] = user["user3"]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})

app.get('/:id', (req, res) => {
    // First read existing users.
    fs.readFile("./users.json", 'utf8', (err, data) => {
        const users = JSON.parse(data);
        const user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

app.delete('/deleteUser', (req, res) => {
    // First read existing users.
    fs.readFile("/.users.json", 'utf8', (err, data) => {
        data = JSON.parse(data);
        delete data["user" + 2];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})


app.listen(3000, () => {
    console.log("server running")
})