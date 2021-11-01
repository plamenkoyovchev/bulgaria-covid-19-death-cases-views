import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const vaccineNamesMap = {
    "AZ": "Астра Зенека",
    "COM": "Файзер",
    "JANSS": "Янсен",
    "MOD": "Модерна"
};

const countIndex = 1;

const VaccinatedDeathListItem = ({ label, data }) => {
    const entries = Object.entries(data)
        .filter(([key,]) => key !== 'total')
        .sort((a, b) => b[countIndex].count - a[countIndex].count);

    return (
        <Card sx={{ maxWidth: 345 }} className="DeathListItem">
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Възраст: {label}г.
                </Typography>
                {entries.length > 0 && entries.map(([key, value]) => (
                    <Typography key={key} variant="body2" color="text.secondary">
                        {`${vaccineNamesMap[key]}: ${value.count}`}
                    </Typography>
                ))}
                <Typography variant="body2" color="text.secondary">
                    <strong>Тотал: {data.total}</strong>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VaccinatedDeathListItem;
