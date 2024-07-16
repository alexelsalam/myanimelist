import { getAuthSession } from "@/libs/auth-libs";
import DropdownApp from "../utilities/DropdownApp";
import Link from "next/link";
import { User } from "@phosphor-icons/react/dist/ssr";

const UserAvatar = async () => {
  const user = await getAuthSession();
  // const actionTitle = user ? "Sign Out" : "Sign In";
  // const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div>
      {user ? (
        <DropdownApp
          user={user}
          actionTitle={"Sign Out"}
          actionURL={"/signout"}
        />
      ) : (
        <Link href={"/signin"}>
          <User size={25} />
        </Link>
      )}
    </div>
  );
};
export default UserAvatar;
