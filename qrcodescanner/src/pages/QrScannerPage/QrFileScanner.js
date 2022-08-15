import React, {useState, useRef} from 'react';
import {Container, Card, makeStyles, Grid, Button} from '@material-ui/core';
import QrReader from 'react-qr-reader';

function QrFileScanner()  {
    const [scanResultFile, setScanResultFile] = useState('');
    const classes = useStyles();
    const qrRef = useRef(null);

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

    return (
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
                </Grid>
            </Card>
        </Container>
    )
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

export default  QrFileScanner;



