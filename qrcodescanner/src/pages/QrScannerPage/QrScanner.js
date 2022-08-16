import QrCamScanner from "./QrCamScanner";
import QrFileScanner from "./QrFileScanner";
import React from 'react'
import { motion } from "framer-motion";

function QrScanner() {

  return (
    <motion.div className="flex flex-row w-full mx-auto gap-4 justify-evenly flex-wrap py-10">
      <div className="flex shadow-md px-10 py-1 bg-white space-y-4 flex-col items-center justify-between text-left"><QrFileScanner /></div>
      <div className="flex shadow-md px-10 py-1 bg-white space-y-4 flex-col items-center justify-between text-left"><QrCamScanner /></div>
    </motion.div>
  );
}

export default QrScanner;