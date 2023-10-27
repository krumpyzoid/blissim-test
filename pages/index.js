import { Button, Container, Grid, Typography } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import Link from 'next/link'

import DefaultLayaout from '../components/DefaultLayout'
import Marketing from '../components/home/Marketing';

export async function getStaticProps() {
    // TO-DO: le texte est codé en dur pour simuler une réponse d'api, cependant il n'y a pas de support pour du texte riche
    const marketing = [
        {
            id: 1,
            title: "Un accompagnement sur-mesure",
            content: "Blissim c'est une box mensuelle sans engagement, mais aussi des offres exclusives et un e-shop généreux. Profitez de nos conseils personnalisés et de nos vidéos accessibles gratuitement"
        },
        {
            id: 2,
            title: "10 ans d'expertise beauté",
            content: "N1 de l'abonnement beauté en Europe, Blissim c'est déjà plus de 250 000 clients déjà conquis. Label trustpilot"
        },
        {
            id: 3,
            title: "Nos engagements",
            content: "Nous travaillons avec des partenaires beauté et des experts toujours plus engagéa, pour vous proposer une sélection personnalisée de soins de qualité et le plus naturels possibles."
        },
    ];

    return {
        props: { 
            marketing
        }
    }
}

const useStyles = theme => ({
    container: {marginTop: theme.spacing(5)}
});

const Home = props => {
    const {classes, marketing} = props
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    SuperShop
                </Typography>
                <Marketing content={marketing} />
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Link href="/boutique" passhref>
                                <Button variant="contained" component="a">
                                    La Boutique
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </DefaultLayaout>
    );
}
export default withStyles(useStyles)(Home)