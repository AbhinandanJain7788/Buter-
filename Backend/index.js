// let express = require('express');
// let mongoose = require('mongoose');
// let cors = require('cors');
// const enquiryRouter = require('./App/routes/web/enquiryRoutes');
// const Bank = require('./App/models/Banks')
// require('dotenv').config();
// let app = express();
// app.use(cors())
// app.use(express.json())


// //Routes
// app.use('/butter',enquiryRouter)
 

// app.get('/' , async(req,res)=>{
//     try 
//     {
//         const banks = await Bank.find();
//         res.json(banks);
//       } catch(error) 
//       {
//         res.status(500).json({ message: error.message });
//       } 
// })
// // comment to mongo db

// mongoose.connect(process.env.DBURL).then(()=>
// {
//     console.log('connect to mongoDB');
//     app.listen(process.env.PORT || 3000,()=>{
//         console.log('server is ruuning on PORT 3000');
//     });
// }).catch((err)=> {console.log(err)})




let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
const Bank = require('./App/models/Banks');
const User = require('./App/models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const enquiryModel = require('./App/models/enquiry.model');
require('dotenv').config();

let app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/butter', enquiryRouter);

// Get all banks
app.get('/', async (req, res) => {
    try {
        const banks = await Bank.find();
        res.json(banks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login route
// app.post('/butter/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
//         res.status(200).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             token
//         });
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

app.post('/butter/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Request body:', req.body); // Check if email and password are coming through

  try {
      // Find user by email
      const user = await enquiryModel.findOne({ email });
      console.log('User found:', user); // Debug: check what user data is returned

      if (!user) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Check password (ensure passwords are hashed if using bcrypt)
      const isMatch = password === user.password; // Replace this with bcrypt if needed
      console.log('Password match:', isMatch);

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Respond with success
      res.status(200).json({ 
          _id: user._id, 
          name: user.name, 
          email: user.email, 
          message: 'Login successful'
      });
  } catch(err)
  {
      console.error('Login error:', err);
      res.status(500).json({ message: 'Server error' });
  }
});


// MongoDB connection
mongoose.connect(process.env.DBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running on PORT 3000');
    });
}).catch((err) => { console.log(err); });

