const express = require("express");
const cors = require("cors");

const app = express();

<<<<<<< HEAD
var corsOptions = {
  origin: "https://bezkoder-list-frontend.onrender.com"
};
=======
// specifying link with direct access to backend
// var corsOptions = {
//   origin: "https://bezkoder-list-frontend.onrender.com"
// };
>>>>>>> eb3d1f3f17730d4839a490da294a5f4bf836e361

// allow access from any frontend host
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to TJ's bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
