# MERN-stack-Products-application
CRUD operations performed using MongoDb, express.js, React.js, Node.js(Fetch products, Post Products, Update products, Delete Products)

## Pre-requisites
 Install latest version of Node.js
 Install mongodb
 Run mongodb instance on port 27017

## express-server

It has server side API's to perform all operations. 
Steps:
   1. npm install
   2. Default PORT is running on 3001
   3. npm start - shows a message 'App server Listening at 3001'

## react-redux-client
   1. npm install
   2. Create a new file .env
   3. Add PORT= {default port number of your choice} to .env file
        eg: PORT=7000
   4. npm start
   5. Goto http://localhost:7000/ 


## Models(Schema)

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  productName: String,
  productDescription: String
});