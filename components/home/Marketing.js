import withStyles from '@mui/styles/withStyles';
import { Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';

import marketingImage from '../../public/static/images/homepage-box-image.jpg';
import marketingIcon from '../../public/static/images/icon.svg';

const useStyles = theme => ({
    grid: {
        borderRadius: '10px 10px 20px 20px',
        border: '1px solid #ECEFF2',
        overflow: 'hidden',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            borderRadius: '10px 20px 20px 10px',
        },
    },
    marketingList: {
        padding: theme.spacing(4),
        gap: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    marketingItem: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(3),
    },
    marketingImage: {
        width: '100%',
        height: 'clamp(150px, 20vh, 400px)',
        objectFit: 'cover',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
    },
    marketingIcon: {
        flexShrink: 0,
    }
});

const Marketing = (props) => {
    const { classes, content } = props
    return (
        <Grid container className={classes.grid}>
        <Grid item xs={12} md={5} lg={6}>
            <img src={marketingImage.src} className={classes.marketingImage} />
        </Grid>
        <Grid item xs={12} md={7} lg={6} className={classes.marketingList}>
            {content?.map((item) => (
                <Box key={item.id} className={classes.marketingItem}>
                    <Box className={classes.marketingIcon}>
                        <Image src={marketingIcon}/>
                    </Box>
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {item.content}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Grid>
        </Grid>
    );
}

export default withStyles(useStyles)(Marketing);