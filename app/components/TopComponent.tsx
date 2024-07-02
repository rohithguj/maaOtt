import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppStore } from "../useAppStore";

function TopComponent() {
  const [isLoggedIn] = useAppStore((s) => [s.loggedIn]);

  return (
    <div className="flex items-center justify-between w-full py-8 px-4 md:px-0">
      <div className="flex items-center space-x-4">
        <div className="w-32 h-16 rounded-md flex items-center justify-center overflow-hidden">
          <Link href={"./"}>
            <Image
              src="/logo.png"
              alt="Maaott Logo"
              width={156}
              height={128}
              layout="responsive"
              objectFit="contain"
              className="rounded-md"
              priority
            />
          </Link>
        </div>
      </div>
      {!isLoggedIn && (
        <div className="flex space-x-4">
          <Link href="/signup">
            <span className="btn-primary cursor-pointer">Sign Up</span>
          </Link>
          <Link href="/login">
            <span className="btn-secondary cursor-pointer">Log In</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TopComponent;
