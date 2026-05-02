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
        <title>Vlad Lungu | Software Developer</title>
        <meta name="description" content="Personal website of Vlad Lungu, a software developer based in Canada specialising in full-stack development, Apache Kafka, and Python." />
        <meta property="og:title" content="Vlad Lungu | Software Developer" />
        <meta property="og:description" content="Personal website of Vlad Lungu, a software developer based in Canada specialising in full-stack development, Apache Kafka, and Python." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://v-lungu.github.io/" />
        <meta property="og:image" content="https://v-lungu.github.io/images/profile/vlad-pic.jpg" />
      </Head>

      <main className="flex items-center text-dark dark:text-light w-full h-[calc(100vh-5.5rem)]">
        <Layout className="pt-0 pb-0 md:pt-16 sm:pt-8 h-full">
          <div className="flex items-center justify-between w-full h-full">
            <div className="w-1/2 md:w-full flex items-center">
              <Image
                src={profilePic}
                alt="VladLungu"
                className="w-full h-auto max-h-[80vh] object-contain lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vh, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:flex-col lg:text-center">
              <AnimatedText
                text="Welcome to my website everything I'm interested in goes here."
                className="!text-6xl !text-justify !leading-[1.2] xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Hello! I'm up and coming software developer passionate about improving lives through code, music, open collaboration. I hope you enjoy your stay and reach out to me if you spot anything that piques your interest.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:v_lungu@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
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
