import prisma from "@/libs/prisma";

export async function POST (request){
    const { anime_mal_id, user_email,comment,username,anime_title} = await request.json()
    const data = {anime_mal_id, user_email,comment,username,anime_title}

    const addComment = await prisma.comment.create({data})
    if(!addComment)return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
    
}

export async function DELETE (request){
    const {email,id, comment} = await request.json()


    const deleteComment = await prisma.comment.delete({
        where: {
            id,
            user_email:email,
            comment
        }

    })
    if(!deleteComment)return Response.json({ status: 500, isDeleted: false })
    else return Response.json({ status: 200, isDeleted: true })
}

export async function PUT (request){
    const { id,
        newComment,
        email} = await request.json()
  

    const updateComment = await prisma.comment.update({
    where:{
        id,
        user_email:email,
    },
    data:{
        comment:newComment
    }
    })
    if(!updateComment)return Response.json({ status: 500, isUpdated: false })
    else return Response.json({ status: 200, isUpdated: true })
    
}
