import express from 'express'
import connectDB from './config/database.js';

const app = express();
connectDB();

const PORT = process.env.PORT;
const Greet= (req,res)=>{
    res.send("Hello suraj");
};
app.get("/", Greet);

app.listen(PORT,()=>{
    console.log("Server is running on " + PORT);
});

