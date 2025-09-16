import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-2 border-amber-100 flex justify-between">
      <div className="text-4xl">Logo</div>
      <ul className="flex justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/course">Course</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
