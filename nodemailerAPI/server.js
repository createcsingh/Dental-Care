// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post('/contact-form', (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// app.listen(4000, () => {
//     console.log(`Server is running on port 4000.`);
// });
const connectToMongo = require("./db");
const express = require("express");
const app = express();

connectToMongo();

app.use(express.json());

const port = 6000;
app.use("/api/auth", require("./routes/contact"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});