"use client";
import { EyeFilledIcon } from "@/assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/assets/EyeSlashFilledIcon ";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//validasi user with zod
const FormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z
      .string()
      .min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

const SignUp = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    if (response.ok) {
      router.push("/signin");
    } else {
      const regisUser = await response.json();
      alert(`Registration failed ${regisUser.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-xl mx-auto min-h-[89vh]">
      <div className="h-auto shadow-2xl shadow-primary/50 bg-zinc-100 rounded-xl w-96">
        <h2 className="pt-10 text-2xl font-bold text-center text-primary">
          Anime Please
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative h-auto mx-auto mb-5 mt-14 w-72"
        >
          <div className="relative">
            <input
              id="username"
              type="text"
              placeholder="username"
              className="block placeholder-transparent transition-all bg-transparent border-b-2 rounded outline-none border-primary/50 -h-9 w-72 focus:duration-250 border-text-slate-600 peer focus:border-b-2 focus:border-primary"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-xs text-rose-600">
                {errors.username.message}
              </p>
            )}
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-500 transition-all -top-6 peer-placeholder-shown:top-0 peer-focus:duration-100 peer-focus:text-gray-800 peer-focus:-top-6 peer-placeholder-shown:text-base peer-focus:text-sm"
            >
              Username
            </label>
          </div>
          <div className="relative my-14">
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
          <div className="relative my-14">
            <input
              id="confirmPassword"
              type={isVisible ? "text" : "password"}
              placeholder="confirmPassword"
              className="block placeholder-transparent transition-all bg-transparent border-b-2 rounded outline-none border-primary/50 -h-9 w-72 focus:duration-250 border-text-slate-600 peer focus:border-b-2 focus:border-primary"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-rose-600">
                {errors.confirmPassword.message}
              </p>
            )}
            <label
              htmlFor="confirmPassword"
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

          <button className="w-full h-[50px] bg-primary text-zinc-50 rounded-md mb-2">
            SIGNUP
          </button>
        </form>
        <p className="pb-3 text-center">
          already have account{" "}
          <a href={"/signin"} className="font-semibold text-primary">
            sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
