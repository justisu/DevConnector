const mongoose = require('mongoose')
const config = require('config')
const db = process.env.NODE_ENV === "production" ? process.env.MONGO_DB_URI : config.get('mongoURI');

const connectDB = async() => {
  try {
    await mongoose.connect(db), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      AUTHENTICATION_DATABASE: null
    }
  } catch(error) {    
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;