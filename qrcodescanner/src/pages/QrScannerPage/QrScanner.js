import QrCamScanner from "./QrCamScanner";
import QrFileScanner from "./QrFileScanner";
import AnimatedPage from '../AnimatedPage';

function QrScanner() {

    return(
        <AnimatedPage>
            <QrFileScanner />
            <QrCamScanner />
        </AnimatedPage>
    );
}

export default QrScanner;