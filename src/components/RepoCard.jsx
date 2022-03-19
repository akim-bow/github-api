import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Avatar from "@mui/material/Avatar";

function StarContainer({stars}) {
    return (
        <Box sx={{position: "absolute", top: 4, right: 4}}>
            <StarBorderIcon/>
            <Typography component="span" fontSize={14} sx={{verticalAlign: "middle", fontWeight: "bold"}}>{stars}</Typography>
        </Box>
    );
}

function AuthorContainer({name, avatar}) {
    return (
        <Box sx={{position: "absolute", top: 4, left: 4}}>
            <Avatar alt="Remy Sharp" src={avatar} />
            <Typography component="span" fontSize={14} sx={{verticalAlign: "middle", fontWeight: "bold"}}>{name}</Typography>
        </Box>
    )
}

function RepoCard({name, description, url, stars, lastRelease, author, avatar}) {
    return (
        <Card sx={{ width: 250, position: "relative" }}>
            <CardContent sx={{pt: 3}}>
                <StarContainer stars={stars}/>
                <Avatar alt="Remy Sharp" src={avatar} sx={{mx: "auto"}}/>
                <Typography fontSize={14} sx={{verticalAlign: "middle", fontWeight: "bold"}}>{author}</Typography>
                <Link variant="h5" color="text.primary" href={url}>
                    {name}
                </Link>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {description}
                </Typography>
                <Typography variant="body2">
                    Last released: {lastRelease}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default RepoCard;
