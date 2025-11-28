// import express from 'express';
// import path from 'path';
// import fs from  'node:fs';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv'
// import cors from 'cors';

// const data = JSON.parse(fs.readFileSync("data.json","utf-8"));

// dotenv.config();

// const app = express()
// const port = 3000
// app.use(express.json()); 

// async function main() {
//   await mongoose.connect(process.env.mongoUrl);

//   console.log("Database connected successfully")
// }

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import UserRouter from './Routes/UserRoutes.mjs';

// Load environment variables first
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.mongoUrl);
    console.log("Database connected successfully");
    
    // Start server only after DB connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

// Basic route to test server
app.get('/', (req, res) => {
  res.json({ message: 'EventSphere Server is running!' });
});

// Start the application
app.use("/user",UserRouter);
main();
