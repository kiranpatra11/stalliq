"use client";

import Image from "next/image";
import Navbar from "./components/navbar"; // 👈 import your Navbar

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-indigo-600">Stalliq</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Your AI-powered platform to scale smarter, faster, and cheaper.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Stalliq. All rights reserved.
      </footer>
    </div>
  );
}
