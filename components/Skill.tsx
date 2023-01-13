import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        whileInView={{ scale: [1.0, 2.0, 1.0] }}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
        src={urlFor(skill?.image).url()}
        className="w-14 h-14 md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"
        alt=""
      />
    </div>
  );
};

export default Skill;
