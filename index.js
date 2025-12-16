const express = require("express");
const ProductRoute = require("./routes/productRoute") 
const dotenv = require("dotenv");
const connectdb = require("./config/db"); 
const cors = require("cors");

dotenv.config();
connectdb(); 
const app = express();

app.use(cors({
    origin: [ 'http://localhost:5173', 'http://localhost:5174' ],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ProductRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});