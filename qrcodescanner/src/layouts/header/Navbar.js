import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Navbar() {

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
      className="navbar mx-auto w-screen bg-white shadow-md"
      initial={{width: "20%", opacity:0}}
      animate={{width: "100%", opacity:1}}
      transition={{duration:.8}}
      >
        <nav className="flex justify-center space-x-20 p-4 w-full">
          <motion.div
            initial={{ x: 100}}
            animate={{ x: 0}}
            whileHover={{ scale: 1.05 }}
            transition={{ease: "easeInOut"}}>
            <Link to="/" class="font-me px-3 py-2 text-black font-bold rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white uppercase" >Generate Qr code</Link>
          </motion.div>
          <motion.div
            initial={{ x: -100}}
            animate={{ x: 0}}
            whileHover={{ scale: 1.05 }}
            transition={{ease: "easeInOut"}}>
            <Link to="/scan" class="font-me px-3 py-2 text-black font-bold rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white uppercase" >Scan Qr code</Link>
          </motion.div>
        </nav>
      </motion.div>
    </motion.div >
  );

}