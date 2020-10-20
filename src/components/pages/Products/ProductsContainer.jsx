import React from 'react';
import ProductCards from './ProductCards';
import { Grid } from '@material-ui/core/'
import ProductList from './ProductList';

function ProductsContainer() {
    const getProductList = (ProductListObj) => {
        return (
            <Grid item xs={12} sm={6} md ={4}>
                <ProductCards {...ProductListObj} />
            </Grid>
        );
    }
    return (
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8} >
                {/* <ProductsContainer /> */}
                <Grid container spacing={4}>
                    {ProductList.map(ProductListObj => getProductList(ProductListObj))}
                </Grid>
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    );
}

export default ProductsContainer;
