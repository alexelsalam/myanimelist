"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center max-w-xl mx-auto min-h-[89vh]">
      <div className="shadow bg-[#16cdbb] rounded-xl w-80 h-72">
        <div className="mt-[5.25rem]">
          <h2 className="text-2xl font-bold text-center text-shadow-lg text-zinc-50">
            ANIME PLEASE
          </h2>

          <p className="pl-6 tracking-tight text-white/70 ">
            <span className="text-lg font-semibold text-zinc-50 text-shadow-lg">
              Apa yakin anda ingin keluar?
            </span>
            <br />
            Jika anda keluar, anda masih bisa masuk kapan saja yang
            anda mau tanpa kehilangan akun
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-[5.25rem]">
          <button
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className="h-10 transition duration-100 hover:text-white hover:bg-primary border-[0.3px] border-black hover:border-none rounded-full w-72"
          >
            <p>Sign Out</p>
          </button>
          <button
            onClick={() => router.back()}
            className="h-10 transition duration-100 border border-black rounded-full hover:text-white hover:bg-primary hover:border-none w-72"
          >
            <p>Batalkan </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
