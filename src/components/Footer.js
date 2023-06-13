import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-l sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built by &nbsp;
          <Link href="/">Vlad Lungu</Link>
        </div>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
