const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL].filter(Boolean),
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
const donorRoutes = require("./routes/donorRoute");
const hospitalRoutes = require("./routes/hospitalRoute");
const bloodRequestRoute = require("./routes/bloodRequestRoute");


app.use("/api/auth", authRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/requests", bloodRequestRoute);


const error = require("./middleware/errorMiddleware");

app.use(error);

module.exports = app;
