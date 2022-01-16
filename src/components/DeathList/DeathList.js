import { Alert, AlertTitle } from '@mui/material';
import "./DeathList.css";
import React, { useEffect, useState } from 'react';
import { data } from '../../data/data';
import { findDeathsCountByAgeRange } from "../../utils/functions";
import DeathListItem from '../DeathListItem/DeathListItem';
import { ageRanges } from "../../utils/constants";

const DeathList = () => {
    const [info, setInfo] = useState({
        allDeathsCount: 0,
        records: []
    });

    useEffect(() => {
        const processData = () => {
            const deaths = ageRanges
                .map(ageRange => findDeathsCountByAgeRange(ageRange, data))
                .sort((a, b) => b.count - a.count);

            setInfo({
                records: [...deaths],
                allDeathsCount: deaths.reduce((prevCount, currentRecord) => prevCount + currentRecord.count, 0)
            });
        };

        processData();
    }, []);

    const { records: deaths, allDeathsCount } = info;

    return (
        <>
            <Alert severity="warning">
                <AlertTitle>Брой починали от началото на пандемията към 15.01.2022г. - <strong>{allDeathsCount}</strong></AlertTitle>
            </Alert>
            <div className="DeathList-container">
                {deaths.length === 0 && (<h3>Loading...</h3>)}
                {deaths.length > 0 && deaths.map((d, i) => (<DeathListItem key={i} {...d} allDeathsCount={allDeathsCount} />))}
            </div>
        </>
    );
};

export default DeathList;
