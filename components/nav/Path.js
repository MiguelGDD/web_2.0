import { motion } from "framer-motion";

const Path = props => (
    <motion.path
      fill="#fff"
      strokeWidth="3"
      stroke="#fff"
      strokeLinecap="round"
      {...props}
    />
  );

export default Path