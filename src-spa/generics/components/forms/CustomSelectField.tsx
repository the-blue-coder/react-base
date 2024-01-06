import { Clear } from "@mui/icons-material";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material";
import { WidgetProps } from "@rjsf/utils";
import useCustomSelectFieldStyles from "generics/styles/components/forms/useCustomSelectFieldStyles";
import { SelectOptionType } from "generics/types/Forms.type";

const CustomSelectField: React.FC<WidgetProps> = ({ value, schema, uiSchema, required, onChange }) => {
    const styles = useCustomSelectFieldStyles();

    const uiOptions = uiSchema?.["ui:options"];
    const uiDisabled = uiSchema?.["ui:disabled"];

    const id = String(uiOptions?.id || "custom-select-field");
    const label = schema.title;
    const variant = (uiOptions?.variant as SelectProps["variant"]) ?? "standard";
    const options = uiOptions?.options as SelectOptionType[] | undefined;
    const isMultiple = Boolean(uiOptions?.isMultiple ?? false);
    const defaultValue = isMultiple ? [] : "";
    const hasClearBtn = uiOptions?.hasClearBtn ?? true;
    const hasValue = isMultiple ? value && value.length > 0 : value;

    const handleChange = (e: SelectChangeEvent) => {
        onChange(e.target.value);
    };

    const handleClear = () => {
        onChange(isMultiple ? [] : "");
    };

    return (
        <Box sx={styles.customSelectField}>
            {options && (
                <FormControl variant={variant} id={id} className="select-form-control">
                    <InputLabel id={`${id}-label`}>{`${label}${required ? " *" : ""}`}</InputLabel>
                    <Select
                        variant={variant}
                        labelId={`${id}-label`}
                        id={id}
                        value={options.length > 0 && value ? value : defaultValue}
                        onChange={handleChange}
                        label={label}
                        multiple={isMultiple}
                        disabled={uiDisabled}
                    >
                        {options?.map((option: Record<string, string | number>) => {
                            return (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.value}
                                </MenuItem>
                            );
                        })}
                    </Select>

                    {hasClearBtn && hasValue && !uiDisabled && <Clear onClick={handleClear} />}
                </FormControl>
            )}
        </Box>
    );
};

export default CustomSelectField;
