import User from "@/models/User";
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"

async function handler(req,res){
    const {method} = req;
    await connect();
    if (method === "GET"){
        const url = new URL(req.url);
        const id = url.searchParams.get("id")
        if(id){
          try {
              const user = await User.findOne({_id:id})
              const userData = JSON.stringify(user)
              return new NextResponse(userData, {status: 200})
          } catch (error) {
              return new NextResponse('No User with That ID', {status: 404})
          }
        }
        const users = await  User.find()
        const allUsers = JSON.stringify(users)
        // console.log(allUsers)
        return new NextResponse(allUsers, {status: 200})
      }   
    
    if (method === "POST"){
        const body = await req.json()
        // All the three fields are required fields
        const {email, username, password, full_name, phone_number, referralCode} = body;
        const hashedPassword = await bcrypt.hash(password, 8)
        console.warn("Hashed Password: ", hashedPassword)
        const hashedUser = {
            email, username, password, full_name, phone_number, referralCode,
            password:hashedPassword
        }
        const existUsername = await User.findOne({username})
        const existEmail = await User.findOne({email})
        const existReferralCode = await User.findOne({referralCode})
        if(existUsername || existEmail || existReferralCode){
            return new NextResponse("Username, Referral Code or email Already Exists", {status: 422})
        }
      
        const newUser = new User(hashedUser)       
        try {
            await newUser.validate();
            const userDoc = await newUser.save();
            const user = JSON.stringify(userDoc)
            return new NextResponse(user, {status: 201})
        } catch (error) {
            console.log("User saving error!")
            return new NextResponse(error.message, {status: 422})
        }      
    }
    if (method === "PUT"){
        const body = await req.json()
        const {_id} = body;
        try {
            await User.findOneAndUpdate({_id}, {...body})
            console.log("Updated!")
            return new NextResponse("user has been Updated", {status: 200})
        } catch (error) {
            console.log("User Updating error!")
            return new NextResponse(error.message, {status: 422})
        }   
    }     
}

export { handler as GET, handler as POST, handler as PUT };