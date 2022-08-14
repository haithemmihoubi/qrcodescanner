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
      <div className="navbar mx-auto w-screen bg-white shadow-md">
        <nav className="flex justify-center space-x-20 p-3" >
          <Link to="/" class="font-me px-3 py-2 text-black font-bold rounded-lg hover:bg-slate-100 hover:text-slate-900 uppercase" >Generate Qr code</Link>
          <Link to="/scan" class="font-me px-3 py-2 text-black font-bold rounded-lg hover:bg-slate-100 hover:text-slate-900 uppercase" >Scan Qr code</Link>
        </nav>
      </div>
    </motion.div >
  );

}