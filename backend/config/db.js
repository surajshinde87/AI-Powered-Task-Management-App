import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        conn.connection
        console.log('Mongo DB Connected ');
        
    } catch (error) {
       console.log(`Error: ${error} `);
       process.exit(1)
        
    }
}

export default connectDB