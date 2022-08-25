import mongoose from 'mongoose';

require('dotenv').config();

export async function connectDB() {
    console.log('Database Connecting')
    await mongoose.connect(<string>process.env['DB_CONN_STRING'])
        .then(() => console.log( 'Database Connected' ))
        .catch(err => console.log( err ));;
}
