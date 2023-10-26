import { Typography } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

import { useStyles } from './styles';

const Footer = props => {
    const {classes} = props;

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}SuperSite{new Date().getFullYear()}{'.'}
            </Typography>
        </footer>
    )
};

export default withStyles(useStyles)(Footer)