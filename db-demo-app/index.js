const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Use environment variables with fallback
const PORT = process.env.PORT || 3000;
const MONGO_HOST = process.env.MONGO_HOST || "127.0.0.1";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DB = "mydb";
const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

// Connect to MongoDB with retry logic
const connectMongoDB = async () => {
  let retries = 5;
  while (retries) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB connected successfully");
      return;
    } catch (err) {
      retries -= 1;
      console.log(
        `MongoDB connection attempt failed. Retries left: ${retries}`
      );
      console.error(err.message);
      if (retries === 0) {
        console.error("MongoDB connection failed after 5 attempts");
        process.exit(1);
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
};

connectMongoDB();

// Create a Mongoose model
const Email = mongoose.model("Email", { email: String });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add-email", async (req, res) => {
  const { email } = req.body;
  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error adding email:", error);
    res.status(500).send("Error adding email");
  }
});

app.get("/emails", async (req, res) => {
  try {
    const emails = await Email.find({});
    res.json(emails);
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).send("Error fetching emails");
  }
});

app.get("/exit", (req, res) => {
  res.send("Server stopped");
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
