const express = require("express");
const app = express();
const cors = require("cors"); // Import CORS package
const router = require("./router");
const debug = require("debug")("my-application");

// Enable all CORS requests
app.use(cors());

app.use(express.json()); // This replaces bodyParser.json()

app.use("/api", router);

app.listen(3200, () => {
    debug("Server running at port 3200");
});
