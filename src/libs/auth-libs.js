import { authOption } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export const getAuthSession = async ()=>{
    const session = await getServerSession(authOption)

    return session?.user
}
