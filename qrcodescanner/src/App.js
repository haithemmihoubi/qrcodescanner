import './App.css';
import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, Button} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import {QrScanner} from "react-qrcode-scanner";

function App() {

    const classes = useStyles();
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const qrRef = useRef(null);

    const handleScan = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }


    const handleErrorFile = (error) => {
        console.log(error);
    }
    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    }
    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }


    return (
        <div className="App">
            <Container className={classes.container}>
                <Card>
                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
                            <QrReader
                                ref={qrRef}
                                delay={300}
                                style={{width: '100%'}}
                                onError={handleErrorFile}
                                onScan={handleScanFile}
                                legacyMode
                            />
                            <h3>Scanned Code: {scanResultFile}</h3>
                        </Grid>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <h3>Qr Code Scan by Web Cam</h3>
                            <QrReader
                                onError={handleErrorWebCam}
                                onScan={handleScanWebCam}
                            />
                            <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 10
    },
    btn : {
        marginTop: 10,
        marginBottom: 20
    }
}));

export default App;