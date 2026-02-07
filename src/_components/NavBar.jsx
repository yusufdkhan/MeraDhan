"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 px-16">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/Group.png"
            alt="MeraDhan Logo"
            width={160}
            height={120}
          />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <li>
            <Link href="#">How it Works</Link>
          </li>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Tools</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Yusuf</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-800 font-medium">
            Login
          </Link>
          <Link
            href="#"
            className="bg-[#002D62] text-white px-6 py-2 rounded-lg font-medium"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
