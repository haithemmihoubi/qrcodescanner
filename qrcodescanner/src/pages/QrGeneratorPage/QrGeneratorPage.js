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
    <div className='flex flex-wrap '>
      <div className={`flex-auto flex justify-center items-center h-full transition-transform duration-700 ${isSubmited ? '' : 'translate-x-1/3'}`}>
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
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
              transition={{ duration: 0.5 }}>
              <QRCode
                id="qr"
                value={userInformationJson}
                renderAs="canvas"
                size="200"
                className='bg-white shadow-md rounded px-8 pt-6 pb-8'
              />
              <div className='text-center shadow-md bg-white flex justify-center pb-6 rounded'>
                <button
                  className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                  onClick={downloadQrCode}>
                  Download
                </button>
              </div>
            </motion.div>
          </div>
        }
      </div>
    </div>
  );
}