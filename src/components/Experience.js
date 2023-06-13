import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col item-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;&nbsp;-&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] lg:w-[90%] md:w-full mx-auto relative xs:ml-2"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer Internship"
            company="Hypatia Systems"
            companyLink="https://hypatiasys.com/"
            time="May 2022 - August 2022"
            work="Designed and implemented ability to ask graphing questions on a grid using the Fabric JavaScript library to render and
            manipulate points and vectors on a graph as well as server/database requests to save and load previously designed
            questions and track student responses to these questions. Integrated search functionality into several aspects of the web application, performing database queries for
            textbook-specific searches as well as general math homework question searches and presenting them in a custom table. Resolved several bugs in relation to the formation of graphs and charts depicting student progress and number of
            attempts on math questions."
          />
          <Details
            position="Quality Assurance Automation Engineer"
            company="TTT Studios"
            companyLink="https://ttt.studio/"
            time="Sep 2021 - Mar 2022"
            work="Executed test plans designed in TestRails using automated scripts written in Cypress and Appium to test functionality of
            logging in, navigation, and insertion/deletion of information for a variety of client projects. Updated company QA documentation in Notion to describe the QA process from start to finish as well as to introduce
            the practice of load testing into the QA pipeline using Apache JMeter.
            "
          />
          <Details
            position="Research Associate"
            company="BC Children's Hospital, Dr. Horvath Lab"
            companyLink="https://www.bcchr.ca/ghorvath"
            time="May 2019 - May 2020"
            work="Lab based research focused on investigating relationship between calcium concentrations in neurons and genetic
            epilepsy with the ultimate goal of identifying medications to stabilize severe epileptic conditions. Developed Python 
            scripts for the purpose of extracting, organizing, and visualizing data from fluorescent microscopy
            to track changes in neuron activity indicated by fluorescent light intensity using the pandas and numpy libraries in
            Python.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
