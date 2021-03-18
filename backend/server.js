import express  from 'express';
import dotenv  from 'dotenv';
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleWare.js'

const app = express();
app.use(express.json())
dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send('api is running')
});

app.use('/api/users', userRoutes);


app.use(notFound)

// Middleware for errorHandler
app.use(errorHandler)



const port = process.env.PORT || 5000

app.listen(port, console.log(`application is running on port ${port}`));