const mongoose = require("mongoose");

const MongoUri = 'mongodb://localhost:27017/mini';

const connectToDB = async () =>{
        try {
          await mongoose.connect(MongoUri , {
            useNewUrlParser : true ,
            useUnifiedTopology : true,
          }),
          console.log("Connected to db Sir");
        } catch (error) {
          console.log("Failed to connect", error);
        }
}

module.exports = connectToDB;