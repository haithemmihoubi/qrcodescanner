import QrCamScanner from "./QrCamScanner";
import QrFileScanner from "./QrFileScanner";
import React from 'react'
import { motion } from "framer-motion";

function QrScanner() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-row w-full mx-auto gap-4 justify-evenly flex-wrap py-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: .35,
            duration: 1
          }}
          drag={true}
          dragConstraints={{ top: 1, bottom: 1, left: 1, right: 1 }}
          whileHover={{ cursor: "pointer" }}
          className="flex shadow-md px-10 py-1 bg-white space-y-4 flex-col items-center justify-between text-left">
          <QrFileScanner />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: .35,
            duration: 1
          }}
          drag={true}
          dragConstraints={{ top: 1, bottom: 1, left: 1, right: 1 }}
          whileHover={{ cursor: "pointer" }}
          className="flex shadow-md px-10 py-1 bg-white space-y-4 flex-col items-center justify-between text-left">
          <QrCamScanner />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default QrScanner;