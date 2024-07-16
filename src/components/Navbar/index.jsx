import Link from "next/link";
import Search from "./inputSearch";
import UserActionButton from "./UserAvatar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import UserAvatar from "./UserAvatar";

export default function NavbarApp() {
  return (
    <Navbar isBordered maxWidth="xl">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="text-xl font-bold text-primary">
            Anime Please
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Search />
        <UserAvatar />
      </NavbarContent>
    </Navbar>
  );
}
