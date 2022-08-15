import { useState } from 'react';
import { AddForm } from './AddForm';
import QRCode from 'qrcode.react';
import { motion } from "framer-motion";

export const QrGeneratorPage = () => {

  const [userInformationJson, setUserInformationJson] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const addUserInformation = userInput => {
    setUserInformationJson(userInput);
    setIsSubmited(true);
  }

  const downloadQrCode = () => {
    const canvas = document.getElementById("qr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <motion.div
      className='flex flex-wrap'
    >
      <div className={`flex-auto flex justify-center items-center h-full transition-transform duration-700 ${isSubmited ? '' : 'translate-x-1/3'}`}>
        <motion.div
          initial={{ scale: 0}}
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
        >
          <AddForm onSubmit={addUserInformation} />
        </motion.div>
      </div>
      <div className='flex-auto flex justify-top items-center flex-col'>
        {isSubmited &&
          <div>
            <motion.div
              id="form-block"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag={true}
              dragConstraints={{ top: 1, bottom: .1, left: .1, right: .1 }}
              whileHover={{ cursor: "pointer" }}
            >
              <QRCode
                id="qr"
                value={userInformationJson}
                renderAs="canvas"
                size="200"
                className='bg-white shadow-md rounded px-8 pt-6 pb-8'
              />
              <div className='text-center shadow-md bg-white flex justify-center pb-6 rounded'>
                <motion.button
                  className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                  onClick={downloadQrCode}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  drag={true}
                  dragConstraints={{ top: .1, bottom: .1, left: .1, right: .1 }}>
                  Download
                </motion.button>
              </div>
            </motion.div>
          </div>
        }
      </div>
    </motion.div>
  );
}