import prisma from "@/libs/prisma";
import React from "react";
import { getAuthSession } from "@/libs/auth-libs";
import ParticelComments from "./ParticelComments";

const CommentBox = async ({ anime_mal_id, image }) => {
  const user = await getAuthSession();
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });

  return (
    <div className="w-full max-w-xl m-auto mt-24 mb-[100px]">
      <div className="border-b-[1.5px] border-primary">
        <span className="pl-2">Diskusi</span>
      </div>
      <div className="flex flex-col gap-4 mt-4 ">
        {comments.map((comment) => {
          return (
            <ParticelComments
              key={comment.id}
              id={comment.id}
              image={image}
              userName={comment.username}
              comment={comment.comment}
              user={user}
              email={user?.email}
              userEmail={comment.user_email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
