//ハンバーガーメニュー設定込みのヘッダー
//https://wp.kazu-dev.com/programming/hamburger-tailwind/
//https://zenn.dev/miyatom/articles/08cd1803916a0c

"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-yellow-50 border-b border-gray-200 py-0.5 md:py-3 shadow">
      <nav className="flex justify-between items-center mx-auto container">
        <div className="text-lg md:text-3xl font-bold text-cyan-500 px-4">HIROTA</div>

        {/* ハンバーガーメニューアイコン　*/}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cyan-500 text-2xl md:text-3xl focus:outline-none"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>

        {/* ナビゲーションメニュー */}
        <ul
          className={`${
            open ? "block" : "hidden"
          } absolute top-9 md:top-13 left-0 w-full lg:static lg:flex lg:w-auto lg:space-x-6 lg:bg-yellow-50`}
        >
          <li className="bg-white lg:bg-transparent">
            <Link
              href="/"
              className="block font-notsans text-cyan-500 px-4 py-2 rounded-sm hover:bg-black/10 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="bg-yellow-50 lg:bg-transparent">
            <Link
              href="/works"
              className="block font-notsans text-cyan-500 px-4 py-2 rounded-sm hover:bg-black/10 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              WORKS
            </Link>
          </li>
          <li className="bg-white lg:bg-transparent">
            <Link
              href="/contact"
              className="block font-notsans text-cyan-500 px-4 py-2 rounded-sm hover:bg-black/10 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}