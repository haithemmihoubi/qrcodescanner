import QrCamScanner from "./QrCamScanner";
import QrFileScanner from "./QrFileScanner";

function QrScanner() {

    return(
        <>
            <QrFileScanner />
            <QrCamScanner />
        </>
    );
}

export default QrScanner;