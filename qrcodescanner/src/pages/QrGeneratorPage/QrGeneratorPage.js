import { useState } from 'react';
import { AddForm } from './AddForm';
import QRCode from 'qrcode.react';

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
    <div className='flex flex-wrap pt-52'>
      <div className='flex-auto flex justify-center items-center h-full'>
        <AddForm onSubmit={addUserInformation} />
      </div>
      { isSubmited &&
        <div className='flex-auto flex justify-center items-center flex-col'>
          <QRCode 
            id="qr"
            value={userInformationJson} 
            renderAs="canvas" 
            size="200" 
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
          />
          <div>
            <button 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={downloadQrCode}>
              Download
            </button>
          </div>
        </div>
      }
    </div>
  );
}