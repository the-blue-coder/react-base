import { Grid, Typography } from "@mui/material";

const Dashboard: React.FC = () => {
	return (
		<Grid container alignItems="center">
			<Grid item xs={12} display="flex" justifyContent="center" mb={2}>
				<Typography>Dashboard</Typography>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
