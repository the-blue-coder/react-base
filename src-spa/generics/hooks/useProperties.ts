import { facebookApiRoutes } from "modules/Facebook/facebook.routes";
import useGenericMutation from "./useGenericMutation";
import { useRecoilState } from "recoil";
import { PropertiesOptionsState, PropertiesState } from "generics/states/PropertySwitcher.state";

const useProperties = () => {
    const [properties, setProperties] = useRecoilState(PropertiesState);
    const [propertiesOptions, setPropertiesOptions] = useRecoilState(PropertiesOptionsState);

    const {
        mutateAsync: fetchProperties,
        data: propertiesRawData,
        isLoading: isFetchingProperties,
    } = useGenericMutation({
        method: "GET",
        endpointPath: facebookApiRoutes.properties,
    });

    return {
        isFetchingProperties,
        propertiesRawData,
        properties,
        propertiesOptions,
        fetchProperties,
        setProperties,
        setPropertiesOptions,
    };
};

export default useProperties;
