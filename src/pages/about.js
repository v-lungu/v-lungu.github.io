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
        <title>Vlad Lungu | About</title>
        <meta name="description" content="Learn about Vlad Lungu — software developer, CS and Biology graduate from UBC, with experience in full-stack development, Kafka, and QA automation." />
        <meta property="og:title" content="Vlad Lungu | About" />
        <meta property="og:description" content="Learn about Vlad Lungu — software developer, CS and Biology graduate from UBC, with experience in full-stack development, Kafka, and QA automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://v-lungu.github.io/about" />
        <meta property="og:image" content="https://v-lungu.github.io/images/profile/vlad-pic.jpg" />
      </Head>
      <main className="flex w-full flex-col dark:text-light">

        <section className="h-[calc(100vh-5.5rem)]">
          <Layout className="pt-8 pb-0 h-full flex flex-col">
            <AnimatedText
              text="What's Going on Here?!"
              className="!text-6xl mb-6 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-4"
            />
            <div className="flex w-full gap-6 flex-1 items-start md:flex-col">
              <div className="w-3/5 md:w-full flex flex-col">
                <p className="font-medium text-sm text-justify">
                  Hi my name is Vlad Lungu and I am a Bachelor&apos;s of
                  Computer Science graduate from The University of British
                  Columbia. This is my second bachelor&apos;s earned from UBC,
                  with my first being in biology! I am fascinated by the overlap
                  between these two fields and the emergent qualities of complex 
                  systems.
                </p>
                <p className="font-medium text-sm my-2 text-justify">
                  I believe that good code is about more than just getting
                  the job done efficiently. My experience both in school and work
                  is that coding like almost all other ventures is a collaborative
                  effort. Beautiful code is not just effective code, but also
                  maintainable and easy to understand code. Now more than ever with 
                  the rise of incredibly powerful AI tools, I believe in the 
                  developer&apos;s responsibilty to manage effective code.
                </p>
                <p className="font-medium text-sm text-justify">
                  I am constantly amazed by the things people can accomplish when
                  they work together and rely on one another for support and
                  success. I hope to spend the rest of my professional career
                  working with others that believe in me and help me grow, and I hope 
                  to continue maturing as a developer so I can serve others in the 
                  same way. There is so much to learn and explore!
                </p>
                <p className="font-medium text-sm mt-2 text-justify">
                  Outside of coding i have a wide array of interests and hobbies; I am very passionate about music, both playing and listening. I DJ with friends in my spare time and am getting back to the grind of learning piano. Currently I&apos;m exploring the rich history of classical piano, but my goal and passion is to become an effective Jazz pianist. I have also played the saxophone for many years, and love the rich sound it provides. I am also an avid chef! I love to explore the cuisines of the world, and try to make all of the foods I love at home, finding balance between creativity and authenticity. Finally I love watching movies, tv shows, anime, and
                  reading books in my spare time.
                </p>
                <button
                  onClick={() => document.getElementById("experience-education").scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-dark dark:text-light border-2 border-solid border-dark dark:border-light rounded-lg px-4 py-2 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors"
                >
                  Experience &amp; Education
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="w-2/5 md:w-full flex items-start justify-center py-0">
                <div className="relative">
                  <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-shadowAccent" />
                  <div className="relative rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-shadowAccent p-6">
                    <Image
                      src={profilePic}
                      alt="Vlad Lungu"
                      className="w-full h-auto max-h-[60vh] object-contain rounded-2xl"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </section>

        <div id="experience-education" className="min-h-screen">
        <Layout className="pt-8 pb-16">
          <div className="flex w-full gap-12 md:flex-col">
            <div className="w-1/2 md:w-full">
              <Experience />
            </div>
            <div className="w-1/2 md:w-full">
              <Education />
            </div>
          </div>
        </Layout>
        </div>

      </main>
    </>
  );
};

export default about;
