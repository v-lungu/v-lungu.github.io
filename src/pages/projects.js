import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";

const Project = ({ type, title, summary, link }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 -right-3 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-shadowAccent" />
      <article className="relative w-full h-full flex flex-col rounded-2xl border border-solid border-dark bg-light dark:bg-panelDark dark:border-shadowAccent p-8 sm:p-6 xs:p-4">
        <span className="text-primary dark:text-primaryDark font-medium text-sm">
          {type}
        </span>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-xl xs:text-lg">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-sm text-justify flex-1">
          {summary}
        </p>
        <div className="mt-4 flex items-center">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </article>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Vlad Lungu | Projects</title>
        <meta name="description" content="Projects and scripts built by Vlad Lungu, including a Spotify Artist Tracker, Beaver Scouts Manager, and more." />
        <meta property="og:title" content="Vlad Lungu | Projects" />
        <meta property="og:description" content="Projects and scripts built by Vlad Lungu, including a Spotify Artist Tracker, Beaver Scouts Manager, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://v-lungu.github.io/projects" />
        <meta property="og:image" content="https://v-lungu.github.io/images/profile/vlad-pic.jpg" />
      </Head>
      <main className="w-full flex flex-col items-center dark:text-light min-h-[calc(100vh-5.5rem)]">
        <Layout className="pt-8 pb-8">
          <AnimatedText
            text="Practice Makes Perfect!"
            className="!text-6xl mb-6 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-4"
          />
          <h2 className="font-bold text-3xl mb-4 md:text-2xl xs:text-xl">Projects</h2>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-1 md:gap-8 sm:gap-6">
            <Project
              title="Spotify Artist Tracker"
              summary="Full-stack web app using the Spotify API to auto-generate playlists from a user-defined artist watchlist, with filters for genre, release date, and artist. Implements OAuth 2.0 authentication and a REST API backend in Python for Spotify token management."
              link="https://github.com/v-lungu/spotify-artist-tracker"
              type="Python, Next.js"
            />
            <Project
              title="Beaver Scouts Manager"
              summary="Manager for a Beaver Scouts colony. Features both a back and front end for management of members, their guardians, and activities."
              link="https://github.com/v-lungu/beavers-manager"
              type="Node, Next.js"
            />
          </div>

          <h2 className="font-bold text-3xl mt-8 mb-4 md:text-2xl xs:text-xl">Scripts</h2>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-1 md:gap-8 sm:gap-6">
            <Project
              title="Rekordbox Filename Sync"
              summary="Python script for synchronizing and standardizing music file names for use with Rekordbox DJ software."
              link="https://github.com/v-lungu/rekordbox-filename-sync"
              type="Python"
            />
            <Project
              title="Bayes Spell Checker"
              summary="A spell checker that uses Bayes to predict single and double letter errors in misspelled words based on probability."
              link="https://github.com/v-lungu/SpellChecker"
              type="Python"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
