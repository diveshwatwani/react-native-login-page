const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
//const User = require('./models/user');

const app= express();
app.use(express.json());
// app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommercedb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// .then(() => {
//     console.log("connected to mongodb");
// })
// .catch((err) => {
//     console.log(err);
// });

// Define a Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
  },
  password: {
      type: String,
      required: true,
  },
  createdAt:{
      type: Date,
      default: Date.now
  }
})

const User = mongoose.model('User', userSchema);

app.post('/register', (req, res) => {
  const { name, email, phone } = req.body;

  const newUser = new User({ name, email, phone });

  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error creating user' });
      // console.log(error)
    });
    //check if password is correct
    // if (user.password !== password) {
    //   return res.status(404).json({
    //     error: true,
    //     message: "password invalid",
    //   });
    // }
  
    // res.status(200).json({
    //   error: false,
    //   message: "user login successfully",
    //   data: user,
    // });
});
    


// setup server
app.listen(3000, () => {
    console.log("server is listening on port: 3000");
});