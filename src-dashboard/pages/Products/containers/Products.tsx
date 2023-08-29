import { Grid, Typography } from "@mui/material";

const Products: React.FC = () => {
    return (
        <Grid container padding={2}>
            <Grid item xs={12}>
                <Typography component="h1">Products</Typography>
            </Grid>
        </Grid>
    );
};

export default Products;
