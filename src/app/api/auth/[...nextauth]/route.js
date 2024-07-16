import prisma from "@/libs/prisma"
import { compare } from "bcrypt"
import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOption = {
  session:{
    strategy:"jwt"
  },
  pages:{
    signIn:'/signin',
    signOut:"/signout"
  },
  // Configure one or more authentication providers
  providers:[
    githubAuth({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
   
      name: 'Credentials',
  
      credentials: {
        email: { label: "email", type: "email", placeholder: "elsalm@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        
        if(!credentials?.email || !credentials.password){
          return null
        }


          const existingUser = await prisma.user.findUnique({
            where:{email: credentials?.email}
        })

        if(!existingUser){
          return null
        }


        const passwordMatch = await compare(credentials.password, existingUser.password)

          if(!passwordMatch){
            return null
          }

            return {
              id:existingUser.id,
              name:existingUser.username,
              email:existingUser.email,
            }


      }
    })
    // ...add more providers here
  ],
 

  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }