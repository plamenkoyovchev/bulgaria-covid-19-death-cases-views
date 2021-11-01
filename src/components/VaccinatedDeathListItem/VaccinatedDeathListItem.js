import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const VaccinatedDeathListItem = ({ label, data }) => {

    const entries = Object.entries(data).filter(([key,]) => key !== 'total');

    return (
        <Card sx={{ maxWidth: 345 }} className="DeathListItem">
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Възраст: {label}г.
                </Typography>
                {entries.length > 0 && entries.map(([key, value]) => (
                    <Typography key={key} variant="body2" color="text.secondary">
                        {`${key}: ${value.count}`}
                    </Typography>
                ))}
                <Typography variant="body2" color="text.secondary">
                    <strong>Total: {data.total}</strong>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VaccinatedDeathListItem;
