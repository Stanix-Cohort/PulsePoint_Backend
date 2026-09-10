const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());



// Routes

// app.get("/api/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "PulsePoint API is running.",
//   });
// });

const authRoutes = require("./routes/authRoute");
const hospitalRoutes = require("./routes/hospitalRoute");
const donorRoutes = require("./routes/donorRoute");

app.use("/api/auth", authRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/donors", donorRoutes);


const error = require("./middleware/errorMiddleware");

app.use(error);

module.exports = app;
