import { Alert, AlertTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { covidSpread } from "../../data/covid-spread-data";
import "./CovidSpreadTableByAge.css";

const CovidSpreadTableByAge = () => {
    const [headerCols, dataCols] = covidSpread;
    const totalCount = dataCols.slice(1, dataCols.length).reduce((prevCount, currentValue) => prevCount + (+currentValue), 0);
    return (
        <>
            <Alert severity="warning">
                <AlertTitle>Разпространение на COVID-19 към {dataCols[0]} и по възрастови групи</AlertTitle>
            </Alert>
            <TableContainer component={Paper} sx={{ maxWidth: 1200 }} className="CovidSpreadTableByAge">
                <Table aria-label="caption simple table">
                    <caption><strong>Общо: {totalCount}</strong></caption>
                    <TableHead>
                        <TableRow>
                            {headerCols && headerCols.map((h, i) => (
                                <TableCell key={i}>{h}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={"whatever"}>
                            {dataCols && dataCols.map((d, i) => (
                                <TableCell key={i}>{d}</TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CovidSpreadTableByAge;
