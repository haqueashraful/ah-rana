"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollingText = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden w-full bg-transparent">
      <motion.div
        className="whitespace-nowrap text-6xl font-bold text-gray-700 dark:text-white"
        animate={{ x: -scrollY * 1 }}
        transition={{ ease: "linear", duration: 0.1 }}
      >
        <p className="py-5">
          Web Developer {`{/}`}&nbsp; Web Developer {`{/}`}&nbsp; Web Developer {`{/}`}&nbsp;Web Developer {`{/}`}&nbsp; Web Developer {`{/}`}&nbsp; Web Developer {`{/}`}&nbsp;
        </p>
      </motion.div>
    </div>
  );
};

export default ScrollingText;
