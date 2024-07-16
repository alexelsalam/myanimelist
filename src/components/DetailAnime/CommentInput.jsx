"use client";

import { Avatar, AvatarIcon, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
  image,
}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();
    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
    };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
  };
  return (
    <div className="relative flex w-full max-w-xl gap-3 m-auto mt-24 mb-28">
      <div className="my-7">
        <Avatar src={image} icon={<AvatarIcon />} />
      </div>
      <Textarea
        size="lg"
        variant="underlined"
        label="Diskusi"
        labelPlacement="outside"
        placeholder="Masukan anda"
        onChange={handleInput}
        value={comment}
        minRows={3}
        disableAutosize
        color="primary"
      />
      <button
        onClick={handlePosting}
        className="absolute right-0 px-3 py-2 text-white rounded-md bg-primary top-28 w-52 bg-color-accent"
      >
        Posting Komentar
      </button>
    </div>
  );
};

export default CommentInput;
