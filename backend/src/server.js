const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = require("./app");

// Load environment variables
dotenv.config();

// Connect to MongoDB

connectDB()
    .then(() => {
        app.on("error", () => {
            console.log("Error", error);
            throw error;
        })


        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch(() => {
        console.log("Error connecting to database");
        process.exit(1);
    });



