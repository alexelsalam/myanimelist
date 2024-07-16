import { getAuthSession } from "@/libs/auth-libs";
import Image from "next/image";
import OptionsDashboard from "./OptionsDashboard";
import prisma from "@/libs/prisma";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const user = await getAuthSession();

  const wishlists = await prisma.wishlist.findMany({
    where: { user_mail: user.email },
  });
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-6">
        <header className="overflow-hidden border-4 rounded-lg border-slate-400">
          <Image
            src={user.image}
            alt="alexelsalam"
            height={150}
            width={150}
          />
        </header>
        <div>
          <h1 className="text-2xl font-bold text-slate-600">
            {user.name}
          </h1>
        </div>
      </div>
      <OptionsDashboard wishlists={wishlists} comments={comments} />
    </section>
  );
}
