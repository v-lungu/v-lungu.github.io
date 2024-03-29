import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/home-page-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vlad&apos;s Homepage</title>
        <meta
          name="Vlad Lungu Personal Website"
          content="created by Vlad Lungu"
        />
      </Head>

      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="VladLungu"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-widght: 768px) 100vw, (max-width: 1200px) 50vh, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:flex-col lg:text-center">
              <AnimatedText
                text="Welcome to Vlad's website, everything I'm interested in goes here."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I am an up and coming software developer intent on writing
                beautiful code for meaningful projects. I hope you enjoy your
                stay and reach out to me if you&apos;ve got anything at all to
                say.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:v_lungu@outlook.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
