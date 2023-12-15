export type PropertyType = {
    id: number;
    platformId: number;
    name: string;
    intro: string;
    type: string;
};

export type PropertyOptionType = PropertyType & {
    value: string;
};

export type PropertySwitcherFormDataType = {
    selectedPropertyId: number | null;
};

export type usePropertySwitcherFormSchemaProps = {
    propertiesOptions: PropertyOptionType[] | null;
};

export type usePropertySwitcherActionsProps = {
    properties: PropertyType[] | null;
};
