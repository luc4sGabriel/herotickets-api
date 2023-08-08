import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb+srv://lucas:123@herocode.sgrth2n.mongodb.net/hero-tickets')

        console.log('connected successfully');
    } catch (err) {
        console.log('error connecting');
    }
}