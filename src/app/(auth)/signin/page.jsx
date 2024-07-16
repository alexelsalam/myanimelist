"use client";
import { signIn } from "next-auth/react";
import { EyeSlashFilledIcon } from "@/assets/EyeSlashFilledIcon ";
import { EyeFilledIcon } from "@/assets/EyeFilledIcon";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GithubSvg } from "@/assets/GithubSvg";
import { GoogleSvg } from "@/assets/GoogleSvg";
import { UserCircleCheck } from "@phosphor-icons/react";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export default function LogInPage() {
  const router = useRouter();

  //state untuk mengatasi type password
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  //state untuk validasi success
  const [isSuccess, setIsSuccess] = useState(false);

  //state untuk validasi error
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    const signData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (signData.error) {
      console.log(signData.error);
      setIsError(true);
    } else {
      setIsSuccess(true);
      router.push("/");
      router.refresh();
    }

    if (setIsError) {
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-xl mx-auto min-h-[89vh] relative">
      {isSuccess && (
        <div className="text-[#34c560] h-14 w-60 bg-white shadow rounded-md flex justify-center items-center gap-1 absolute top-0 animate-fadeInTop">
          <UserCircleCheck size={32} />
          <p>SUCCESS</p>
        </div>
      )}

      <div className="h-auto shadow-2xl shadow-primary/50 bg-zinc-100 rounded-xl w-96">
        <h2 className="pt-10 text-2xl font-bold text-center text-primary">
          ANIME PLEASE
        </h2>
        <form
          action=""
          className="relative h-auto mx-auto mb-5 mt-14 w-72"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="block placeholder-transparent transition-all bg-transparent border-b-2 rounded outline-none border-primary/50 -h-9 w-72 focus:duration-250 border-text-slate-600 peer focus:border-b-2 focus:border-primary"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-rose-600">
                {errors.email.message}
              </p>
            )}
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 transition-all -top-6 peer-placeholder-shown:top-0 peer-focus:duration-100 peer-focus:text-gray-800 peer-focus:-top-6 peer-placeholder-shown:text-base peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <div className="relative my-14">
            <input
              id="password"
              type={isVisible ? "text" : "password"}
              placeholder="password"
              className="block placeholder-transparent transition-all bg-transparent border-b-2 rounded outline-none border-primary/50 -h-9 w-72 focus:duration-250 border-text-slate-600 peer focus:border-b-2 focus:border-primary"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs text-rose-600">
                {errors.password.message}
              </p>
            )}
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 transition-all -top-6 peer-placeholder-shown:top-0 peer-focus:duration-100 peer-focus:text-gray-800 peer-focus:-top-6 peer-placeholder-shown:text-base peer-focus:text-sm"
            >
              Password
            </label>
            <button
              className="absolute top-0 right-0"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
              ) : (
                <EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
              )}
            </button>
          </div>
          <button className="w-full h-[50px] bg-primary text-zinc-50 rounded-md mb-2 hover:bg-zinc-100 hover:border-1 hover:border-primary hover:text-primary transition duration-100">
            LOGIN
          </button>
        </form>
        <div className="relative w-full border-b-1 border-primary/50">
          <p className="absolute w-16 h-5 bg-zinc-100 -bottom-[0.6rem] right-40 text-center text-slate-800">
            OR
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-10 mb-10">
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            <GithubSvg />
          </button>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <GoogleSvg />
          </button>
        </div>
        <p className="pb-3 text-center">
          don't have account{" "}
          <a href={"/signup"} className="font-semibold text-primary">
            sign up
          </a>
        </p>
      </div>
      {isError && (
        <div className="flex justify-center items-center fixed bottom-[9px] right-[9px] text-center text-white rounded-md shadow w-72 h-14 bg-rose-600 animate-fadeInRight">
          <p>ⓘ ERROR : email or password invalid</p>
        </div>
      )}
    </div>
  );
}
