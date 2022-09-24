import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    name:{type: String, require:true, unique: true},
    email: {type: String, require: true, unique:true},
    password: {type:String, require: true},
    amount:{type: String, require: true},
    phoneno:{type: String, require: true}
},{timestamps:true})