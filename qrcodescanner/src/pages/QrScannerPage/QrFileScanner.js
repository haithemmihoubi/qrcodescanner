import React, {useState, useRef} from 'react';
import {Container, Card, makeStyles, Grid, Button, Table} from '@material-ui/core';
import QrReader from 'react-qr-reader';

function QrFileScanner(key) {
    const [scanResultFile, setScanResultFile] = useState('');
    const classes = useStyles();
    const qrRef = useRef(null);

    const handleErrorFile = (error) => {
        console.log(error);
    }
    const handleScanFile = (result) => {
        let res = localStorage.getItem(result);
        if (res) {
            setScanResultFile(res);
        }else {
            setScanResultFile("qr code not found in our database");
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
                        <b>Scan using image from file System</b>
                        <br/>
                        <br/>
                        <QrReader
                            ref={qrRef}
                            delay={300}
                            style={{width: '100%',paddingLeft:'60px'}}
                            onError={handleErrorFile}
                            onScan={handleScanFile}
                            legacyMode
                        />
                        <br/>
                      <div>
                            <Button variant="contained" color="primary" onClick={onScanFile}>
                                Scan QR Code
                            </Button>
                        </div>
                        <div>
                            <h3>{ scanResultFile }</h3>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '50px',
        marginTop: 2,
        width: '50%',
        height: '70%',
        alignContent: 'center',
        alignItems: 'center',
    },
    btn: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20


    }
}));

export default QrFileScanner;



