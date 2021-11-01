import { Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { vaccinated } from "../../data/vaccinated-data";
import { ageRanges } from "../../utils/constants";
import { groupDeathsByVaccine } from "../../utils/functions";
import VaccinatedDeathListItem from '../VaccinatedDeathListItem/VaccinatedDeathListItem';
import "./VaccinatedDeathList.css";

const VaccinatedDeathList = () => {
    const [info, setInfo] = useState({
        allDeathsCount: 0,
        records: []
    });

    useEffect(() => {
        const processData = () => {
            const data = ageRanges
                .map(ageRange => ({
                    label: ageRange,
                    data: groupDeathsByVaccine(ageRange, vaccinated)
                }))
                .filter(rec => rec.data.total !== 0)
                .sort((a, b) => b.data.total - a.data.total);

            setInfo({
                records: [...data],
                allDeathsCount: data.reduce((prevCount, currentRecord) => prevCount + currentRecord.data.total, 0)
            });
        };

        processData();
    }, []);

    const { records: deaths, allDeathsCount } = info;

    return (
        <>
            <Alert severity="warning">
                <AlertTitle>Брой ваксинирани починали от началото на пандемията към 31.10.2021г. - <strong>{allDeathsCount}</strong></AlertTitle>
            </Alert>
            <div className="VaccinatedDeathList">
                {deaths.length === 0 && (<h3>Loading...</h3>)}
                {deaths.length > 0 && deaths.map((d, i) => (<VaccinatedDeathListItem key={i} {...d} />))}
            </div>
        </>
    );
};

export default VaccinatedDeathList;
