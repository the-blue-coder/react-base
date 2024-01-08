import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import useOverviewDetailsStyles from "../styles/useOverviewDetailsStyles";

const OverviewDetails: React.FC = () => {
    const styles = useOverviewDetailsStyles();

    return (
        <TableContainer sx={styles.overviewDetails}>
            <Table className="table" aria-label="overview table">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography>
                                <strong>Groups joined</strong>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>5</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Typography>
                                <strong>Total posts</strong>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>5</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Typography>
                                <strong>Posts shared in groups</strong>
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>5</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OverviewDetails;
