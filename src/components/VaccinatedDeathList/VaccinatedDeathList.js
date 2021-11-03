import { Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { vaccinated } from "../../data/vaccinated-data";
import { vaccinatedHospitalized } from "../../data/vaccinated-hospitalized";
import { ageRanges } from "../../utils/constants";
import { groupByVaccine } from "../../utils/functions";
import VaccinatedDeathListItem from '../VaccinatedDeathListItem/VaccinatedDeathListItem';
import "./VaccinatedDeathList.css";

const VaccinatedDeathList = () => {
    const [info, setInfo] = useState({
        allDeathsCount: 0,
        deathRecords: [],
        allHospitalizedCount: 0,
        hospitalizedRecords: []
    });

    useEffect(() => {
        const processData = () => {
            const data = ageRanges
                .map(ageRange => ({
                    label: ageRange,
                    data: groupByVaccine(ageRange, vaccinated)
                }))
                .filter(rec => rec.data.total !== 0)
                .sort((a, b) => b.data.total - a.data.total);

            const hospData = ageRanges
                .map(ageRange => ({
                    label: ageRange,
                    data: groupByVaccine(ageRange, vaccinatedHospitalized)
                }))
                .filter(rec => rec.data.total !== 0 && rec.label !== undefined)
                .sort((a, b) => b.data.total - a.data.total);

            setInfo({
                deathRecords: [...data],
                allDeathsCount: data.reduce((prevCount, currentRecord) => prevCount + currentRecord.data.total, 0),
                hospitalizedRecords: [...hospData],
                allHospitalizedCount: hospData.reduce((prevCount, currentRecord) => prevCount + currentRecord.data.total, 0)
            });
        };

        processData();
    }, []);

    const { deathRecords: deaths, allDeathsCount, hospitalizedRecords: hospitalized, allHospitalizedCount } = info;

    return (
        <>
            <Alert severity="warning">
                <AlertTitle>Брой ваксинирани хоспитализирани от началото на пандемията към 03.11.2021г. - <strong>{allHospitalizedCount}</strong></AlertTitle>
            </Alert>
            <div className="VaccinatedDeathList">
                {hospitalized.length === 0 && (<h3>Loading...</h3>)}
                {hospitalized.length > 0 && hospitalized.map((h, i) => (<VaccinatedDeathListItem key={i} {...h} />))}
            </div>
            <Alert severity="warning">
                <AlertTitle>Брой ваксинирани починали от началото на пандемията към 03.11.2021г. - <strong>{allDeathsCount}</strong></AlertTitle>
            </Alert>
            <div className="VaccinatedDeathList">
                {deaths.length === 0 && (<h3>Loading...</h3>)}
                {deaths.length > 0 && deaths.map((d, i) => (<VaccinatedDeathListItem key={i} {...d} />))}
            </div>
        </>
    );
};

export default VaccinatedDeathList;
