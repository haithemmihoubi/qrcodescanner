import QrCamScanner from "./QrCamScanner";
import QrFileScanner from "./QrFileScanner";
import AnimatedPage from '../AnimatedPage';

function QrScanner() {

    return(
        <AnimatedPage>

            <div className="grid">
                <div className="row-span-1 ..."><QrFileScanner /></div>
                <div className="row-span-1 ...">  <QrCamScanner /></div>
            </div>
        </AnimatedPage>
    );
}

export default QrScanner;