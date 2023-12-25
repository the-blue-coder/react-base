/* eslint-disable react-hooks/exhaustive-deps */
import SnackbarList from "shared/components/snackbar/SnackbarList";
import AppRouter from "shared/components/routes/AppRouter";
import FullPageLoader from "shared/components/loading/FullPageLoader";
import { Box, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import useProperties from "shared/hooks/useProperties";
import { PropertyType } from "shared/types/PropertySwitcher.type";
import useDisplayAlert from "shared/hooks/useDisplayAlert";
import useJoinStatuses from "shared/hooks/useJoinStatuses";
import useGroupSharedPostStatuses from "shared/hooks/useGroupSharedPostStatuses";

const App: React.FC = () => {
    const { isFetchingProperties, propertiesRawData, fetchProperties, setProperties, setPropertiesOptions } = useProperties();

    const { isFetchingJoinStatuses, joinStatusesRawData, fetchJoinStatuses, setJoinStatusesOptions } = useJoinStatuses();

    const {
        isFetchingGroupSharedPostStatuses,
        groupSharedPostStatusesRawData,
        fetchGroupSharedPostStatuses,
        setGroupSharedPostStatusesOptions,
    } = useGroupSharedPostStatuses();

    const { displayFailureAlert } = useDisplayAlert();

    useEffect(() => {
        fetchProperties({})
            .then((response) => {
                const propertiesOptions = response.data.properties.map((property: PropertyType) => ({
                    ...property,
                    value: property.name,
                }));
                setProperties(response.data.properties);
                setPropertiesOptions(propertiesOptions);
            })
            .catch(() => {
                displayFailureAlert("Error occured while fetching properties, please try again");
            });
    }, []);

    useEffect(() => {
        fetchJoinStatuses({})
            .then((response) => {
                setJoinStatusesOptions(response?.data?.joinStatuses);
            })
            .catch(() => {
                displayFailureAlert("Error occured while fetching join statuses, please try again");
            });
    }, []);

    useEffect(() => {
        fetchGroupSharedPostStatuses({})
            .then((response) => {
                setGroupSharedPostStatusesOptions(response?.data?.groupSharedPostStatuses);
            })
            .catch(() => {
                displayFailureAlert("Error occured while fetching group shared post statuses, please try again");
            });
    }, []);

    return (
        <Box>
            {(isFetchingProperties ||
                isFetchingJoinStatuses ||
                isFetchingGroupSharedPostStatuses ||
                !propertiesRawData ||
                !joinStatusesRawData ||
                !groupSharedPostStatusesRawData) && <FullPageLoader />}
            <CssBaseline />
            <SnackbarList />
            <AppRouter />
        </Box>
    );
};

export default App;
