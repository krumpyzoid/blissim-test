import { Grid } from "@mui/material";

import useGlobalContext from '../../hooks/useGlobalContext';

import ProductCard from './ProductCard'


const ProductList = (props) => {
    const {products} = props
    const context = useGlobalContext();
    const wishListIds = context.wishlist.map(p => p.id);
    return (
            <Grid container spacing={2}>
                {products?.map((product, index) => (
                    <Grid item xs={6} md={4} key={index}>
                        <ProductCard 
                            product={product}
                            isFavorite={wishListIds.includes(product.id)}
                        />
                    </Grid>
                ))}
            </Grid>
    )
}

export default ProductList;
