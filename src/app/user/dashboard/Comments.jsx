"use client";
import Link from "next/link";

export default function Comments({ comments }) {
  return (
    <section className="w-full px-4 mt-4 animate-fadeInRight">
      <div className="grid grid-cols-1 gap-4 py-4">
        {comments.map((comment) => {
          const formDate = new Date(comment.createdAt);

          const getDate = `${formDate.getDate()}/${
            formDate.getMonth() + 1
          }/ ${formDate.getFullYear()}`;
          // console.log(getDate);/

          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="relative max-w-sm p-4 rounded-t-lg rounded-br-lg bg-primary"
            >
              <div className="absolute bottom-0 w-5 h-5 -left-3 rounded-bl-md bg-gradient-to-tl from-primary from-0% via-primary via-50% to-transparent to-50%">
                {" "}
              </div>
              <div className="flex justify-between">
                <div className="">
                  <p className="text-sm ">{comment.anime_title}</p>
                  <p className="pt-3 pl-2">{comment.comment}</p>
                </div>
                <div>
                  <p className="text-sm italic">{getDate}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
