"use client";
import { Avatar, AvatarIcon, Textarea } from "@nextui-org/react";
import Trigger from "./Trigger";
import { useState } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const ParticelComments = ({
  id,
  userName,
  comment,
  image,
  user,
  email,
  userEmail,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newComment, setNewComment] = useState(comment);

  const router = useRouter();

  //make new comment
  const handleInput = (event) => {
    setNewComment(event.target.value);
  };

  //edit comment
  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      id,
      newComment,
      email,
    };

    const response = await fetch("/api/v1/comment", {
      method: "PUT",
      body: JSON.stringify(data),
    });
    const updateComment = await response.json();
    if (updateComment.isUpdated) {
      router.refresh();
    }
    setIsEdit(!isEdit);
  };
  //last function edit comment

  return (
    <>
      {isEdit ? (
        <div className="flex h-auto gap-5 mt-4 ml-4">
          <div>
            <Avatar src={image} icon={<AvatarIcon />} />
          </div>
          <div className="relative">
            <textarea
              value={newComment}
              onChange={handleInput}
              className="h-full transition border-b-2 outline-none resize-none w-96 focus:duration-250 border-text-slate-600 peer focus:border-b-2 focus:border-primary"
            />
            <button
              onClick={handleEdit}
              className="absolute right-0 bottom-2 text-slate-500 peer-focus:text-primary"
              tabIndex={0}
            >
              <PaperPlaneRight size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 p-4 bg-white group/item">
          <div>
            <Avatar src={image} icon={<AvatarIcon />} />
          </div>
          <div>
            <p className="font-medium text-primary">{userName}</p>
            <p className="pl-5 pt-7">{comment}</p>
          </div>
          {user && email === userEmail && (
            <Trigger
              email={userEmail}
              id={id}
              comment={comment}
              onClick={handleEdit}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ParticelComments;
