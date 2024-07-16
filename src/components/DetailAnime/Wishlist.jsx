"use client";

import { useRouter } from "next/navigation";

export default function Wishlist({
  anime_mal_id,
  user_mail,
  anime_image,
  anime_title,
  collection,
}) {
  const router = useRouter();

  const handleaAddWishlist = async (e) => {
    e.preventDefault();

    const data = {
      anime_mal_id,
      user_mail,
      anime_image,
      anime_title,
    };

    const response = await fetch("/api/v1/wishlist", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const wishlist = await response.json();
    if (wishlist.isCreated) {
      alert("message: berhasil ditambahkan");
      router.refresh();
    }
  };

  const handleDeleteWishlist = async (e) => {
    e.preventDefault();

    const data = {
      user_mail,
      anime_mal_id,
    };

    const response = await fetch("/api/v1/wishlist", {
      method: "DELETE",
      body: JSON.stringify(data),
    });

    const wishlist = await response.json();
    if (wishlist.isDeleted) {
      alert("message: data telah dihapus");
      router.refresh();
    }
  };

  return (
    <button
      onClick={collection ? handleDeleteWishlist : handleaAddWishlist}
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 256 256"
        >
          <path
            d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z"
            className={
              collection ? "fill-transparent" : "fill-primary"
            }
          />

          <path
            d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="7"
          />
        </svg>
        <p
          className={
            collection
              ? "absolute top-2 right-[1.33rem] font-bold text-2xl text-primary"
              : "absolute top-2 right-[1.18rem] font-bold text-2xl text-white"
          }
        >
          {collection ? "-" : "+"}
        </p>
      </div>
    </button>
  );
}
