import mongoose from 'mongoose'

const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log(`Mongodb connected ${connect.connection.host}`);
    }
    catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;