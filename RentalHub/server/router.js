const express = require("express");
const router = express.Router();
const homehotData = require("./data/home/homehot")
const homehotData2 = require("./data/home/homehot2")
const url = require("url");
const searchData = require("./data/search")
const detailData = require("./data/detail")
const commentData = require("./data/comment")
const orderData = require("./data/order")
const {User} = require("./models")
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

// Path to the local JSON file for storing user data
const userDataPath = path.join(__dirname, 'users.json');

// Helper function to read user data
function readUserData() {
  if (!fs.existsSync(userDataPath)) {
    fs.writeFileSync(userDataPath, JSON.stringify([])); // If the file doesn't exist, create it with an empty array
  }
  const data = fs.readFileSync(userDataPath);
  return JSON.parse(data);
}

// Helper function to write user data
function writeUserData(data) {
  fs.writeFileSync(userDataPath, JSON.stringify(data, null, 2));
}

// Accept parameters
router.get("/homehot1", (req, res) => {
    const city = url.parse(req.url, true).query.city;
    if (city === 'Slat Lake City') {
        res.send(homehotData2.hot1)
    } else {
        res.send(homehotData.hot1)
    }
})

router.get("/homehot2", (req, res) => {
    const city = url.parse(req.url, true).query.city;
    if (city === 'New York') {
        res.send(homehotData2.hot2)
    } else {
        res.send(homehotData.hot2)
    }
})

/**
 * Search interface
 */
router.get("/search", (req, res) => {
    // Content City Page number
    const { keywords, city, page } = url.parse(req.url, true).query;
    console.log("keywords=" + keywords, "city=" + city, "page=" + page);
    res.send(searchData);
})

/**
 * Detail interface
 */
router.get("/detail", (req, res) => {
    const { id } = url.parse(req.url, true).query;
    console.log("Product id:" + id);
    res.send(detailData);
})

/**
 * Comment
 */
router.get("/comment", (req, res) => {
    const { id } = url.parse(req.url, true).query;
    console.log("Product id:" + id);
    res.send(commentData)
})

/**
 * Order
 */
router.get("/order", (req, res) => {
    const { username } = url.parse(req.url, true).query;
    console.log("User:" + username);
    res.send(orderData)
})

router.post("/getcomment",(req,res) =>{
    const content = req.body.content;
    console.log(content);
    res.send({
        msg:true
    })
})

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const users = readUserData();

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).send({ message: 'Username is already taken.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword });
        writeUserData(users);

        res.status(201).send({ message: 'User successfully created.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating new user.', error: error.toString() });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const users = readUserData();

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).send({ message: 'User not found.' });
    }

    try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid credentials.' });
        }

        res.status(200).send({ message: 'User logged in successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error.', error: error.toString() });
    }
});

module.exports = router;
