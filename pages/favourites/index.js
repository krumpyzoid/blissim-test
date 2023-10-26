import { Container, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

import DefaultLayaout from '../../components/DefaultLayout'
import ProductsList from '../../components/boutique/ProductsList'
import useGlobalContext from '../../hooks/useGlobalContext';

const useStyles = theme => ({
    root: {marginBottom: theme.spacing(3)},
    h1: {
        margin: theme.spacing(5, 0)
    },
    filterTitle: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.primary.main
    },
    filterListItem: {
        paddingLeft: 0,
    }
});

const Boutique = props => {
  const {classes} = props
  const context = useGlobalContext();
  return (
      <DefaultLayaout>
        <Container maxWidth="lg" className={classes.root}>

            <Grid container justifyContent={'center'}>
                <Grid item>
                    <Typography variant="h3" component="h1" className={classes.h1}>Favoris</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" className={classes.filterTitle}>Catégories</Typography>
                    <div className={classes.filterListContainer}>
                        <List>
                            <ListItem className={classes.filterListItem}>
                                <ListItemText
                                    primary="Maquillage"
                                />
                            </ListItem>
                            <ListItem className={classes.filterListItem}>
                                <ListItemText
                                    primary="Soins visage"
                                />
                            </ListItem>
                            <ListItem className={classes.filterListItem}>
                                <ListItemText
                                    primary="Parfums"
                                />
                            </ListItem>
                        </List>
                    </div>
                </Grid>

                <Grid item xs={12} md={9} className={classes.productsListContainer}>
                    {context.wishlist.length > 0 ? (
                        <ProductsList products={context.wishlist} />
                    ) : (
                        <Typography variant="h6" component="h2">Aucun produit dans vos favoris</Typography>
                    )}
                </Grid>

            </Grid>

        </Container>
    </DefaultLayaout> 
  );
}
export default withStyles(useStyles)(Boutique)