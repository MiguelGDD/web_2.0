import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import variants from "../../data/styleVariants/nav/variants";

export const Navigation = ({isOpen}) => (
  <motion.ul className={`nav-ul ${!isOpen && 'invisible' }`} variants={variants}>
    {itemIds.map((item, index) => (
      <MenuItem i={item} key={index} />
    ))}
  </motion.ul>
);

const itemIds = [{title: 'Home', link: '/'}, {title: 'About me', link: '/#about'}, {title: 'Works', link: '/#projects'}, {title: 'Contacto', link: '/#contacto'}];
