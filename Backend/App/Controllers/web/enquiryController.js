// const enquiryModel = require("../../models/enquiry.model")


// let enquiryInsert =(req,res) =>
// {
//    let {name , email , phone , message,password} =req.body;
//    let enquiry = new enquiryModel({
//     name,
//     email,
//     phone,
//     message,
//     password
//    });
//    enquiry.save().then(()=>{
//     res.send({status:1, message:"Empty and successfull"});

//    }).catch((err)=>{
//     res.send({status:0,message:"Error while savinf enquiry",error:err});
//    })

    
// }


// module.exports={enquiryInsert};

// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let enquirySchema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String, unique: true, required: true },
//     message: { type: String, required: true },
//     password: { type: String, required: true }
// });

// const Enquiry = mongoose.model('Enquiry', enquirySchema); // Ensure correct model creation
// module.exports = Enquiry; // Ensure the correct export


const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert=async (req, res) => {
    try{
        const { name, email, phone, message, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !phone || !message || !password) {
            return res.status(400).json({ status: 0, message: "All fields are required" });
        }

        // Check if user already exists (optional)
        const existingUser = await enquiryModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ status: 0, message: "Email already registered" });
        }

        // Create a new enquiry
        const enquiry = new enquiryModel({
            name,
            email,
            phone,
            message,
            password
        });

        await enquiry.save();
        res.status(201).json({ status: 1, message: "Enquiry saved successfully" });

    } catch (err) {
        console.error("Error while saving enquiry:", err.message);
        res.status(500).json({ status: 0, message: "Error while saving enquiry", error: err.message });
    }
};

module.exports = { enquiryInsert };



