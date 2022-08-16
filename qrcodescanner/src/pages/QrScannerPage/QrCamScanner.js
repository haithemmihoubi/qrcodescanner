import React from 'react'
import { useState } from "react"
import {Card, Container, Grid, makeStyles} from "@material-ui/core";
import QrReader from "react-qr-reader";

function QrCamScanner() {

    const classes = useStyles();
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
            console.log(result);
        }
    }

    return (
        <Container className={classes.container}>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <h3>Scan by your camera</h3>
                        <QrReader
                            onError={handleErrorWebCam}
                            onScan={handleScanWebCam}
                        />
                        <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}
const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 2,
        width: '50%',
        height: '70%',
        alignContent: 'center',
        alignItems: 'center',
    },
    btn : {
        marginTop: 10,
        marginBottom: 20
    }
}));

export default  QrCamScanner;
