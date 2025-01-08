import React from 'react';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-indigo-400 to-cyan-400 w-full flex justify-center py-4">
      <div className="max-w-6xl w-full flex justify-between items-center px-4">
        {/* logo */}
        <Link href="/" className=" text-white text-2xl font-bold group cursor-pointer">
          <span>
            Auth App
          </span>
        </Link>
        <nav>
          <ul className="flex gap-4 text-lg tes">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
