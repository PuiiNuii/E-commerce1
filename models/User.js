import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    _id:{ type : stringify, rquired:true},
    name: { type: String, required:true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required:true },
   imageUrl: { type: String, required:true  },
   cartItems: { type: Object, default: {}  }
}, { minimize: false })

const User = mongoose.models.user || mongoose.model('user',userschema)


export default User
