import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="w-16 h-16 bg-dark text-light ring-4 ring-transparent dark:ring-light flex items-center justify-center rounded-full text-2xl font-black transform"
      >
        VL
      </Link>
    </div>
  );
};

export default Logo;
