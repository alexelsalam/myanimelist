"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";

const DropdownApp = ({ user, actionTitle, actionURL }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          src={user.image}
          className="cursor-pointer"
          isBordered
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="gap-2 h-14">
          <p className="font-semibold">{user.email}</p>
        </DropdownItem>
        <DropdownItem href="/user/dashboard" key="Dashboard">
          Dashboard
        </DropdownItem>
        {/* <DropdownItem
          href="/user/dashboard/wishlist"
          key="Collection"
        >
          Collection
        </DropdownItem>
        <DropdownItem href="/user/dashboard/comment" key="Comment">
          Comment
        </DropdownItem> */}
        <DropdownSection className="pt-2 border-t-2">
          <DropdownItem href={actionURL} key={actionTitle}>
            {actionTitle}
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownApp;
