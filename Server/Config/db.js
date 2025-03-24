const mongoose=require('mongoose');

const connectDB=async()=>{
try {
    await mongoose.connect(process.env.DB_CONNECTIONSTRING)
    console.log("MongoDB connected successfully!");
} catch (error) {
    console.log("MongoDB connection Failed!" );
}
}

module.exports=connectDB