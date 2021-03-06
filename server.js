const express = require("express");
const connectDB = require("./config/db");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//Connect DB
connectDB();

//INIT middleware
app.use(express.json());

app.get("/", (req, res) => res.send("API running"));
const PORT = process.env.PORT || 5000;

//Define Routes
app.use("/api/users", users);
app.use("/api/auth", auth);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
