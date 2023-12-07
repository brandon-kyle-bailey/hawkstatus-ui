"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
    setEmail("");
    setPassword("");
  };

  const handleEmailValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordValueChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <main className="flex flex-row h-screen w-screen justify-evenly text-white text-2xl">
      <div className="flex-1 bg-gradient-to-br from-sky-500 to-emerald-500 h-screen w-full flex justify-center items-center"></div>
      <div className="flex-1 bg-stone-900 h-screen flex justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="w-full flex justify-center items-center">
            <h2 className="font-bold mb-10">Create an account!</h2>
          </div>
          <p className="text-lg mb-6">Please create your account</p>
          <form
            className="text-white flex flex-col space-y-8"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="font-thin bg-stone-900 border border-neutral-700 h-14 rounded-md p-4"
              name="email"
              type="email"
              aria-label="email address"
              placeholder="Email address"
              onChange={(e) => handleEmailValueChange(e)}
            />
            <input
              className="font-thin bg-stone-900 border border-neutral-700 h-14 rounded-md p-4"
              name="password"
              type="password"
              aria-label="password"
              placeholder="Password"
              onChange={(e) => handlePasswordValueChange(e)}
            />
            <input
              className="font-thin bg-stone-900 border border-neutral-700 h-14 rounded-md p-4"
              name="confirm-password"
              type="password"
              aria-label="confirm password"
              placeholder="Confirm Password"
              onChange={(e) => handleConfirmPasswordValueChange(e)}
            />
            <button
              className="bg-gradient-to-br from-sky-500 to-emerald-500 h-14 rounded-md hover:animate-pulse focus:animate-pulse"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="text-lg mt-6 w-full flex justify-between items-center">
            <a
              className="text-base hover:text-emerald-500"
              href="/auth/sign-in"
            >
              <p>Already have an account? Click here</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
