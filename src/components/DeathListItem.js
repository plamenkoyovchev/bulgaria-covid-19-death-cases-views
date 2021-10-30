import React from 'react';
import "./DeathListItem.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DeathListItem = ({ label, count, allDeathsCount }) => {
    const percent = ((count / allDeathsCount) * 100).toFixed(2);
    return (
        <Card sx={{ maxWidth: 345 }} className="DeathListItem">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Възраст: {label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Броят на починалите е <strong>{count}</strong>, което представлява <strong>{percent}%</strong> от починалите.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default DeathListItem;
