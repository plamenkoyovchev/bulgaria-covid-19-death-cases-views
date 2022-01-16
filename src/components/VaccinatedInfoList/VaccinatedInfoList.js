import { Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { vaccinated } from "../../data/vaccinated-data";
import { vaccinatedHospitalized } from "../../data/vaccinated-hospitalized";
import { vaccinatedIntesiveCare } from "../../data/vaccinated-hospitalized-intesive-cares";
import { vaccinatedInfected } from "../../data/vaccinated-infected";
import { ageRanges } from "../../utils/constants";
import { groupByVaccine } from "../../utils/functions";
import VaccinatedInfoListItem from '../VaccinatedInfoListItem/VaccinatedInfoListItem';
import "./VaccinatedInfoList.css";

const VaccinatedInfoList = () => {
    const [info, setInfo] = useState({
        allDeathsCount: 0,
        deathRecords: [],
        allHospitalizedCount: 0,
        hospitalizedRecords: [],
        allIntesiveCareCount: 0,
        withIntesiveCare: [],
        allInfectedCount: 0,
        allInfected: []
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
                .filter(rec => rec.data.total !== 0)
                .sort((a, b) => b.data.total - a.data.total);

            const intensive = ageRanges
                .map(ageRange => ({
                    label: ageRange,
                    data: groupByVaccine(ageRange, vaccinatedIntesiveCare)
                }))
                .filter(rec => rec.data.total !== 0)
                .sort((a, b) => b.data.total - a.data.total);

            const infected = ageRanges
                .map(ageRange => ({
                    label: ageRange,
                    data: groupByVaccine(ageRange, vaccinatedInfected)
                }))
                .filter(rec => rec.data.total !== 0)
                .sort((a, b) => b.data.total - a.data.total);

            setInfo({
                deathRecords: [...data],
                allDeathsCount: data.reduce((prevCount, currentRecord) => prevCount + currentRecord.data.total, 0),
                hospitalizedRecords: [...hospData],
                allHospitalizedCount: hospData.reduce((prevCount, currentRecord) => prevCount + currentRecord.data.total, 0),
                withIntesiveCare: [...intensive],
                allIntesiveCareCount: intensive.reduce((prevCount, currentRecord) => prevCount + currentRecord.data.total, 0),
                allInfected: [...infected],
                allInfectedCount: infected.reduce((prevCount, currentRecord) => prevCount + currentRecord.data.total, 0)
            });
        };

        processData();
    }, []);

    const {
        deathRecords: deaths,
        allDeathsCount,
        hospitalizedRecords: hospitalized,
        allHospitalizedCount,
        allIntesiveCareCount,
        withIntesiveCare,
        allInfectedCount,
        allInfected
    } = info;

    const tillDate = "15.01.2022г.";

    return (
        <>
            <Alert severity="warning">
                <AlertTitle>Брой заразени ваксинирани от началото на пандемията към {tillDate} - <strong>{allInfectedCount}</strong></AlertTitle>
            </Alert>
            <div className="VaccinatedInfoList">
                {allInfected.length === 0 && (<h3>Loading...</h3>)}
                {allInfected.length > 0 && allInfected.map((h, i) => (<VaccinatedInfoListItem key={i} {...h} />))}
            </div>
            <Alert severity="warning">
                <AlertTitle>Брой ваксинирани хоспитализирани от началото на пандемията към {tillDate} - <strong>{allHospitalizedCount}</strong></AlertTitle>
            </Alert>
            <div className="VaccinatedInfoList">
                {hospitalized.length === 0 && (<h3>Loading...</h3>)}
                {hospitalized.length > 0 && hospitalized.map((h, i) => (<VaccinatedInfoListItem key={i} {...h} />))}
            </div>
            <Alert severity="warning">
                <AlertTitle>Брой ваксинирани хоспитализирани в интензивно отделение от началото на пандемията към {tillDate} - <strong>{allIntesiveCareCount}</strong></AlertTitle>
            </Alert>
            <div className="VaccinatedInfoList">
                {withIntesiveCare.length === 0 && (<h3>Loading...</h3>)}
                {withIntesiveCare.length > 0 && withIntesiveCare.map((h, i) => (<VaccinatedInfoListItem key={i} {...h} />))}
            </div>
            <Alert severity="warning">
                <AlertTitle>Брой ваксинирани починали от началото на пандемията към {tillDate} - <strong>{allDeathsCount}</strong></AlertTitle>
            </Alert>
            <div className="VaccinatedInfoList">
                {deaths.length === 0 && (<h3>Loading...</h3>)}
                {deaths.length > 0 && deaths.map((d, i) => (<VaccinatedInfoListItem key={i} {...d} />))}
            </div>
        </>
    );
};

export default VaccinatedInfoList;
