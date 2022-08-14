import './App.css';
import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid} from '@material-ui/core';
import {QrScanner} from "react-qrcode-scanner";

function App() {

    const classes = useStyles();
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleScan = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }

    const handleError = (error) => {
        console.log({error})
    }

    return (
        <div className="App">
            <Container className={classes.container}>
                <Card>
                    <CardContent className='qr-scan'>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <h3 className='title'>Qr Code Scanner</h3>
                                    <QrScanner
                                        onScan={handleScan}
                                        onError={handleError}
                                    />
                            <p>Scanned Code: {scanResultWebCam}</p>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 10
    }
}));

export default App;