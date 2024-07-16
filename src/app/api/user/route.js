import { NextResponse } from "next/server"
import{hash} from "bcrypt"
import prisma from "@/libs/prisma"
import {z} from "zod"


//validasi user with zod
const userSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters")
  })
  
export async function POST (request){
try {
    const body= await request.json()
    const {username, email, password} = userSchema.parse(body)
    

    //check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
        where:{email}
    })
    if(existingUserByEmail){
        return NextResponse.json({user:null, message:"user with this email already exist"},{status:409})
    }


    //check if username already exists 
    const existingUserByUsername = await prisma.user.findUnique({
        where:{username}
    })
    if(existingUserByUsername){
        return NextResponse.json({user:null, message:"user with this username already exist"},{status:409})
    }

    const hashPassword = await hash(password,10)
    const newUser = await prisma.user.create({
        data:
        {
            username,
            email,
            password:hashPassword
        }
    })
    const {password:newUserPassword,...rest} = newUser
    return NextResponse.json({user:rest, message:"user created successfully"},{status:201})
} catch (error) {
    return NextResponse.json({ message:error},{status:500})
}
}
