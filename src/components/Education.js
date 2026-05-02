import React from "react";

const Details = ({ type, time, place, info }) => {
  return (
    <li className="my-3 first:mt-0 last:mb-0 flex flex-col items-center text-center">
      <div>
        <h3 className="capitalize font-bold text-sm">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-sm">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-4 w-full text-center md:text-2xl xs:text-xl">
        Education
      </h2>
      <ul className="w-full flex flex-col items-center">
        <Details
          type="Bachelor of Computer Science"
          place="University of British Columbia"
          time="Sep 2020 - May 2023"
        />
        <Details
          type="Bachelor of Science - Biology"
          place="University of British Columbia"
          time="Sep 2015 - May 2020"
        />
      </ul>
    </div>
  );
};

export default Education;
