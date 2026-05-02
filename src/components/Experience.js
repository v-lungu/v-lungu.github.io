import React from "react";

const Details = ({ position, company, companyLink, time, stack, work }) => {
  return (
    <li className="my-3 first:mt-0 last:mb-0 flex flex-col">
      <div>
        <h3 className="capitalize font-bold text-sm">
          {position}&nbsp;&nbsp;-&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize text-primary dark:text-primaryDark"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm">
          {time}
        </span>
        {stack && (
          <p className="italic text-sm text-dark/60 dark:text-light/60">{stack}</p>
        )}
        <p className="font-medium w-full text-sm mt-1 text-justify">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-4 w-full text-center md:text-2xl xs:text-xl">
        Experience
      </h2>
      <ul className="w-full flex flex-col">
        <Details
          position="Software Developer"
          company="TD Bank"
          companyLink="https://www.td.com/"
          time="Oct 2025 - Present"
          stack="Java Spring Boot, Apache Kafka, Python"
          work="Advising 50+ clients onboarding to Apache Kafka, migrating data pipelines from legacy databases to event streaming architecture. Building self-serve tools for topic creation and authorization to reduce onboarding friction. Implementing a REST proxy to allow internal clients to interface with TD's Kafka servers."
        />
        <Details
          position="Developer Advocate (consultant through FDM Group)"
          company="FDM Group"
          companyLink="https://www.fdmgroup.com/"
          time="Mar 2024 - Sep 2025"
          stack="Java Spring Boot, Apache Kafka, Python"
          work="Developed and implemented an automated role-based access policy solution for Kafka client topics on Confluent Cloud, integrating workflow automation, onboarding, and permissions APIs. Built a Python test connection app for clients to validate Kafka produce/consume/stream functionality locally, on VMs, or Azure. Conducted code reviews, change requests, deployments, and client troubleshooting."
        />
        <Details
          position="Accounts Payable Associate"
          company="Nexans Canada"
          companyLink="https://www.nexans.ca/"
          time="Oct 2023 - Feb 2024"
          stack="Python, SAP"
          work="Managed and organized 200+ invoices per month across four locations, posting in SAP and validating against purchase orders. Automated invoice file naming and weekly approval file routing using Python, reducing manual processing time by approximately 3 hours per week."
        />
        <Details
          position="Full Stack Developer Intern"
          company="Hypatia Systems"
          companyLink="https://hypatiasys.com/"
          time="May 2022 - Sep 2022"
          stack="PostgreSQL, Node, Express, JavaScript, PUG"
          work="Implemented graphing capabilities using Fabric.js with Express, enabling teachers to create math problems with points, lines, and polygons on a coordinate plane. Integrated full-text search across textbook and question datasets using SQL queries, improving content discoverability for 10,000+ indexed items."
        />
        <Details
          position="QA Automation Engineer Intern"
          company="TTT Studios"
          companyLink="https://ttt.studio/"
          time="Sep 2021 - Dec 2021"
          stack="Cypress, Appium"
          work="Served as sole QA developer on two concurrent projects, executing test plans in TestRails using automated scripts written in Cypress and Appium to validate web and mobile application functionality."
        />
      </ul>
    </div>
  );
};

export default Experience;
