"use client";

import { Input } from "@nextui-org/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Search() {
  const searchRef = useRef();
  const router = useRouter();

  const searchHandler = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() === "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <>
      <div className="relative">
        <Input
          type="search"
          ref={searchRef}
          onKeyDown={searchHandler}
          placeholder=" Cari film...."
          classNames={{
            inputWrapper: "h-10",
            innerWrapper: "pr-5",
          }}
        />
        <button type="button" onClick={searchHandler} className="absolute right-1 top-2 ">
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
}
