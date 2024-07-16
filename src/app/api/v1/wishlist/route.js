import prisma from "@/libs/prisma";

export async function POST (request){
    const { anime_mal_id, user_mail,anime_image, anime_title} = await request.json()
    const data = {anime_mal_id, user_mail,anime_image, anime_title}
    
    const addWishlist = await prisma.wishlist.create({data})
   
    if(!addWishlist)return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
    
}

export async function DELETE (request){
    const {user_mail,anime_mal_id} = await request.json()


    const deleteWishlist = await prisma.wishlist.delete({
        where: {
            anime_mal_id_user_mail: {
                anime_mal_id: anime_mal_id,
                user_mail: user_mail
            }
        }

    })
    if(!deleteWishlist)return Response.json({ status: 500, isDeleted: false })
    else return Response.json({ status: 200, isDeleted: true })
}