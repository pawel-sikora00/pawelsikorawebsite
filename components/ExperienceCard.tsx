import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[600px] md:w-[400px] snap-center p-5 cursor-pointer transition-opacity duration-200 overflow-hidden text-black">
      <div className="pt-10">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-40 h-40 object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />
      </div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light min-h-[4rem]">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology) => (
            <img
              alt=""
              key={technology._id}
              className="h-10 w-10"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-lg h-96 overflow-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]"></ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
