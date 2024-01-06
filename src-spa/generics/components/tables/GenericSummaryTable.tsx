import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import useUtils from "generics/hooks/useUtils";
import useGenericSummaryTableStyles from "generics/styles/components/tables/useGenericSummaryTableStyles";
import { GenericSummaryTableProps } from "generics/types/Tables.type";

const GenericSummaryTable: React.FC<GenericSummaryTableProps> = ({ summaryData, className }) => {
    const styles = useGenericSummaryTableStyles();
    const { formatNumber } = useUtils();

    return (
        <TableContainer sx={styles.genericSummaryTable} className={className}>
            <Table className="table">
                <TableBody>
                    {summaryData?.map((summaryItem) => (
                        <TableRow key={summaryItem.slug}>
                            <TableCell>
                                <Typography>
                                    <strong>{summaryItem.label}</strong>
                                </Typography>
                            </TableCell>

                            <TableCell>
                                <Typography>
                                    {typeof summaryItem.value === "number" ? formatNumber(Number(summaryItem.value)) : summaryItem.value}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default GenericSummaryTable;
