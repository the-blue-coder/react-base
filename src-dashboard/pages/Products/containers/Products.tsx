import { Grid, Typography } from "@mui/material";
import SectionTitle from "shared/components/texts/SectionTitle";

const Products: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <SectionTitle>Products</SectionTitle>
            </Grid>
        </Grid>
    );
};

export default Products;
