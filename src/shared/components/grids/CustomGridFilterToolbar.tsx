import { GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";

const CustomGridFilterToolbar: React.FC = () => {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton />
        </GridToolbarContainer>
    );
};

export default CustomGridFilterToolbar;
