import mongoose from "mongoose";

const companySchema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        description:
        {
            type:String,
            // required:true
        },
        website:
        {
            type:String,
            // required:true
        },
        logo:
        {
            type:String,
            // required:true
        },
        userId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },

    },{timestamps:true}
);

export default Company=mongoose.model('Company',companySchema);

