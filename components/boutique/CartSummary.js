import { Typography } from "@mui/material";
import withStyles from '@mui/styles/withStyles';

import useGlobalContext from '../../hooks/useGlobalContext';

const useStyles = theme => ({
    title: {
        marginBottom: theme.spacing(2),
        fontSize: '22px'
    }

});

const CartSummary = (props) => {
    const {classes} = props
    const context = useGlobalContext();
    
    return (
        <Typography className={classes.title}>Products in cart : {context.cart.length}</Typography>
    )
}

export default withStyles(useStyles)(CartSummary);