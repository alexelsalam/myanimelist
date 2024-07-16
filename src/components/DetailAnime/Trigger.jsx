"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { DotsThree } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Trigger = ({ email, id, comment, onClick }) => {
  const router = useRouter();
  const handleDelete = async (e) => {
    e.preventDefault();

    if (!confirm("apa anda yakin mau menghapus?")) return;

    const data = {
      email,
      id,
      comment,
    };

    const response = await fetch("/api/v1/comment", {
      method: "DELETE",
      body: JSON.stringify(data),
    });
    const deleteComment = await response.json();
    if (deleteComment.isDeleted) {
      router.refresh();
    }
  };

  return (
    <div className="invisible group-hover/item:visible">
      <Dropdown>
        <DropdownTrigger>
          <DotsThree
            size={32}
            color="#000"
            className="rounded-full cursor-pointer bg-slate-100"
          />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
          <DropdownItem onClick={onClick}>Edit</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Trigger;
