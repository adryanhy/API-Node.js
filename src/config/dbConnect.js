import mongoose, { mongo } from "mongoose";

async function connectDB(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.eouvkpm.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
};

export default connectDB;

