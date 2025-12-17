const express = require("express");
const ProductRoute = require("./routes/productRoute") 
const dotenv = require("dotenv");
const connectdb = require("./config/db"); 
const cors = require("cors");

dotenv.config();
connectdb(); 
const app = express();

const devAllowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3001',
    'http://127.0.0.1:5173',
];

if (process.env.NODE_ENV === 'production') {
    app.use(cors({ origin: devAllowedOrigins, credentials: true }));
} else {
    // In development allow requests from common localhost ports to simplify debugging
    app.use(cors());
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ProductRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});