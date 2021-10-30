import { Alert, AlertTitle } from '@mui/material';
import "./DeathList.css";
import React from 'react';
import { data } from '../data';
import { findDeathsCountByAgeRange } from "../utils/functions";
import DeathListItem from './DeathListItem';

const ageRanges = ["0 - 9", "10 - 19", "20 - 29", "30 - 39", "40 - 49", "50 - 59", "60 - 69", "70 - 79", "80 - 89", "90 - 99", "100 - 109"];
const deaths = [];

for (const ageRange of ageRanges) {
    deaths.push(findDeathsCountByAgeRange(ageRange, data));
}

const allDeathsCount = deaths.reduce((prevCount, currentRecord) => prevCount + currentRecord.count, 0);

const DeathsList = () => {
    return (
        <>
            <Alert severity="warning">
                <AlertTitle>Брой починали от началото на пандемията към 30.10.2021г. - <strong>{allDeathsCount}</strong></AlertTitle>
            </Alert>
            <div className="DeathList-container">
                {deaths && deaths.map((d, i) => (<DeathListItem key={i} {...d} allDeathsCount={allDeathsCount} />))}
            </div>
        </>
    );
};

export default DeathsList;
