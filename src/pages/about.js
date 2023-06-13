import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/vlad-pic.jpg";
import Image from "next/image";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title> Vlad Lungu | About Page</title>
        <meta name="description" content="quick information about vlad lungu" />
      </Head>
      <main className="flex w-full flex-col items-center dark:text-light justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Learning and Growing Daily!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi my name is Vlad Lungu and I am a recent Bachelor&apos;s of
                Computer Science graduate from The University of British
                Columbia. This is my second bachelor&apos;s earned from UBC,
                with my first being in biology. Now I&apos;m on a quest to get
                hired and begin my journey as a professional software developer.
              </p>

              <p className="font-medium my-4">
                I believe that excellent code is about more than just getting
                the job done efficiently. My experience both in school and work
                is that coding like almost all other ventures is a collaborative
                effort. Beautiful code is not just effective code, but also
                maintainable and easy to understand code.
              </p>

              <p className="font-medium">
                I am constantly amazed by the things people can accomplish when
                they work together and rely on one another for support and
                success. I hope to spend the rest of my professional career
                working with others that believe in me and can help me grow,
                there is so much to learn in this life and I want to see it all!
              </p>

              <p className="font-medium">
                Outside of coding i have a wide array of interests and hobbies.
                My biggest passion right now is dance; I am an avid latin dancer
                and love dancing both bachata and salsa (though I&apos;m a bit
                rusty). Going to the gym has also become a big part of my daily
                life, and for the first time in my life I&apos;ve really
                dedicated myself to my health in both the gym and the kitchen.
                Currently I&apos;m trying to improve my artistic side by
                learning how to draw and hopefully pretty soon picking up
                painting. Finally I love watching movies, tv shows, anime, and
                reading books in my spare time. There are so many amazing
                stories out there.
              </p>
            </div>
            <div className="col-span-2 md:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Vlad Lungu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-widght: 768px) 100vw, (max-width: 1200px) 50vh, 33vw"
              />
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
