import { Clear } from "@mui/icons-material";
import { Box } from "@mui/material";
import { GridToolbarContainer, GridToolbarFilterButton, GridToolbarQuickFilter, useGridApiContext } from "@mui/x-data-grid";
import { useGridFilterContext } from "shared/contexts/Grids.context";
import useCustomGridFilterToolbarStyles from "shared/hooks/useCustomGridFilterToolbarStyles";
import useUtils from "shared/hooks/useUtils";

const CustomGridFilterToolbar: React.FC = () => {
    const apiRef = useGridApiContext();

    const { currentFilterModel, filterSelectsOptions } = useGridFilterContext();

    const filterItem = currentFilterModel?.items?.[0];

    const { camelCaseToWords, snakeCaseToWords } = useUtils();

    const styles = useCustomGridFilterToolbarStyles();

    const handleFilterReset = () => {
        apiRef.current.setFilterModel({ items: [] });
    };

    return (
        <Box sx={styles.customGridFilterToolbar}>
            <GridToolbarContainer>
                <GridToolbarFilterButton />

                {((filterItem?.operator !== "is_empty" && filterItem?.value && filterItem.value.length > 0) ||
                    filterItem?.operator === "is_empty") && (
                    <Box>
                        Active filter: {camelCaseToWords(filterItem?.field)} column which {snakeCaseToWords(filterItem?.operator, false)}{" "}
                        {Array.isArray(filterItem?.value)
                            ? filterItem?.value
                                  .map(
                                      (filterElement: number) =>
                                          filterSelectsOptions?.[filterItem.field]?.find(
                                              (selectOption) => selectOption.id === filterElement
                                          )?.value || null
                                  )
                                  .join(" or ")
                            : filterItem?.value}
                        <Clear className="clear-icon" onClick={handleFilterReset} />
                    </Box>
                )}

                <GridToolbarQuickFilter className="search-bar" />
            </GridToolbarContainer>
        </Box>
    );
};

export default CustomGridFilterToolbar;
