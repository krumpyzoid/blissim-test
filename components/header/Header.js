import { AppBar, Toolbar, Typography, IconButton, Container, Icon } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link'

import useGlobalContext from '../../hooks/useGlobalContext';

import Interstitial from '../Interstitial'
import { useStyles } from './styles';

const Header = props => {
    const {classes} = props
    const context = useGlobalContext();

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        context.pushObject('open_interstitial', true);
    };

    return <>
    <header className={classes.root}>
        <AppBar position="static" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Link href="/" passHref>
                        <a>
                            <Typography variant="h4" className={classes.title}>
                                SuperShop
                            </Typography>
                        </a>
                    </Link>
                    <div className={classes.rightNav}>
                        <Link href="/favourites" passHref>
                            <a>
                                <Icon size="large">
                                    <FavoriteIcon className={classes.cartIcon}/>
                                </Icon>
                            </a>
                        </Link>
                        <IconButton onClick={toggleDrawer(!context.open_interstitial)} size="large">
                            <ShoppingBasketIcon className={classes.cartIcon}/>
                        </IconButton>
                    </div>
                    
                </Toolbar>
            </Container>
        </AppBar>
    </header>
    <Interstitial/>
        </>;
}

export default withStyles(useStyles)(Header)