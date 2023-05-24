const express = require("express");
const app = express();
const port = 3042;
const axios = require("axios");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    axios
        .get("https://panorbit.in/api/users.json")
        .then((response) => {
            // Handle the response data
            const apiData = response.data;
            res.send(response.data);
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
            res.status(500).send("Some Server Error");
        });
});

app.get("/profile/:userId", (req, res) => {
    const { userId } = req.params;
    axios
        .get("https://panorbit.in/api/users.json")
        .then((response) => {
            // Handle the response data
            const apiData = response.data;
            // const requestedData = getUserInfo(userId, apiData);
            res.send(response.data);
            console.log("Data sent");
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
            res.status(500).send("Some Server Error");
        });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});

function getUserInfo(id, data) {
    let userInfo = data.users.filter((item) => {
        return item.id == id;
    });
    console.log(id);
    // console.log(userInfo[0]["username"], id);
    return userInfo[0];
}
