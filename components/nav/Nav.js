import React, { useRef } from 'react'
import useDimensions from '../../hooks/useDimensions'
import { motion, useCycle } from "framer-motion";
import { Navigation } from './Navigation';
import { MenuToggle } from './MenuToggle';
import sidebar from '../../data/styleVariants/nav/sidebar';

const Nav = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
  
    return (
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={'z-50 cursor-pointer top-0 bottom-0 left-0 fixed md:hidden'}>
            <motion.div variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    );
}

export default Nav