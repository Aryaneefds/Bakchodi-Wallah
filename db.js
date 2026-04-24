import mongoose from 'mongoose';

const Schema = mongooose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {types: String, unique:true},
    password: String,
    firstname: String,
    lastName: String
});

const adminSchema = new Schema({
    email: {types: String, unique:true},
    password: String,
    firstname: String,
    lastName: String
})


const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})


const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("user",adminSchema);
const courseModel = mongoose.model("user",courseSchema);
const purchaseModel = mongoose.model("user",purchaseSchema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};