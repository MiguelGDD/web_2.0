import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      className="nav-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.link || '#'} >
        <div 
          className="flex select-none w-full text-white font-medium text-2xl justify-end rounded-[10px] pr-5 py-2 mr-5 bg-blur-background">
            {i.title}
        </div>
        
      </Link>
    </motion.li>
  );
};
