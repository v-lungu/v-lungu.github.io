import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/spellcheck.jpg";

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light 
      dark:bg-dark shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-widght: 768px) 100vw, (max-width: 1200px) 50vh, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={link} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid 
    border-dark bg-light dark:bg-dark dark:border-light p-6 relative lg:flex-col xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[102%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:-text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Vlad Lungu | Projects Page</title>
        <meta name="description" content="projects completed by Vlad lungu" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Growing Through Practice!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          ></AnimatedText>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:ga-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Bayes Spell Checker"
                summary="A spell checker that uses Bayes to predict single and double letter errors in mispelled words based on probability"
                img={project1}
                link="https://github.com/v-lungu/SpellChecker"
                type="Featured Project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Bayes Spell Checker"
                summary="A spell checker that uses Bayes to predict single and double letter errors in mispelled words based on probability"
                img={project1}
                link="https://github.com/v-lungu/SpellChecker"
                type="C++"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
