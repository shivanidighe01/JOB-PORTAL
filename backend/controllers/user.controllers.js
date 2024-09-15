import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register= async(req,res)=>
{
    try {
        const {fullname,email,phoneNumber,password,role}=req.body;
        if(!fullname || !email || !phoneNumber || !password || !role)
        {
            return res.status(400).json({
                message:"something is missing",
                success:false
            });
        };
        const user=await User.findOne({email});
        if(user)
        {
            return res.status(400).json({
                message:"user already exist",
                success:false
            });
        }
        const hashPassword=await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashPassword,
            role
        });

        return res.status(200).json({
            message:"Account created",
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}

export const login= async(req,res)=>{
    try {
        const {email,password,role}=req.body;
    
        if( !email || !password || !role)
        {
            return res.status(400).json({
                message:"something is missing",
                success:false
            });
        };

        let user=await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false
            });
        }
        //check password
        const isPassMatch=await bcrypt.compare(password,user.password);

        if(!isPassMatch)
        {
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false
            });
        }

        //check for role
        if(role!=user.role)
        {
            return res.status(400).json({
                message:"Account doesnot exist with current role",
                success:false
            });
        }

        const tokenData ={
            userId:user._id
        }
        const token=await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
            message:`welcome back ${user.fullname}`,
            user,
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}

export const logout =async(req,res)=>
{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"logout succesfully",
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile= async(req,res)=>
{
    try {
        const {fullname,email,phoneNumber,bio,skills}=req.body;
        const file=req.file;
        // if(!fullname || !email || !phoneNumber || !bio || !skills)
        // {
        //     return res.status(400).json({
        //         message:"something is missing",
        //         success:false
        //     });
        // };


        //cloudinary setup for file storage

        let skillArray;
        if(skills)
        {
           skillArray=skills.split(",");
        }
       
        const userId=req._id;

        let user=await User.findOne({userId});
        if(!user)
        {
            return res.status(400).json({
                message:"User not found",
                success:false
            });
        }
        //updating data
        if(fullname) user.fullname=fullname;
        if(email) user.email=email;
        if(phoneNumber) user.phoneNumber=phoneNumber;
        if(bio) user.profile.bio=bio;
        if(skills) user.profile.skills=skillArray;
        
        //resume add karana hai

        await User.save;

        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).json({
            message:"profile updated successfully",
            user,
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}