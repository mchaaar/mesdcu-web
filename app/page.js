"use client";

import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { loggedIn } = useContext(AuthContext);
  const [shapeOpacity] = useState(0.3);

  return (
    <div className="relative isolate bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            opacity: shapeOpacity,
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
                     -translate-x-1/2 rotate-[30deg]
                     bg-gradient-to-tr from-[#7116CB] to-[#7116CB]
                     sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            opacity: shapeOpacity,
          }}
          className="relative w-[20rem] h-[20rem]
                     bg-gradient-to-tr from-[#7116CB] to-[#7116CB]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[-5rem] left-[-5rem] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            opacity: shapeOpacity,
          }}
          className="relative w-[15rem] h-[15rem]
                     bg-gradient-to-tr from-[#7116CB] to-[#7116CB]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            opacity: shapeOpacity,
          }}
          className="relative w-[20rem] h-[20rem]
                     bg-gradient-to-tr from-[#7116CB] to-[#7116CB]"
        />
      </div>

      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                {loggedIn
                  ? "Welcome Back!"
                  : <>
                      Welcome to Cyna
                    </>}
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-500 sm:text-xl">
                {loggedIn
                  ? "You are logged in. Visit your dashboard to manage your content."
                  : "Please login or register to access your dashboard."}
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                {loggedIn ? (
                  <Link
                    href="/dashboard"
                    className="rounded-md bg-[#8000FF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6F00E6] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#8000FF]"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="rounded-md bg-[#8000FF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6F00E6] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#8000FF]"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="text-sm font-semibold text-gray-900"
                    >
                      Register <span aria-hidden="true">→</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            opacity: shapeOpacity,
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]
                     -translate-x-1/2 bg-gradient-to-tr from-[#7116CB] to-[#7116CB]
                     sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
