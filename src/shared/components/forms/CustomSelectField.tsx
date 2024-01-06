import { Clear } from "@mui/icons-material";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material";
import { WidgetProps } from "@rjsf/utils";
import useCustomSelectFieldStyles from "shared/styles/components/forms/useCustomSelectFieldStyles";
import { SelectOptionType } from "shared/types/Forms.type";

const CustomSelectField: React.FC<WidgetProps> = ({ value, schema, uiSchema, onChange }) => {
    const styles = useCustomSelectFieldStyles();

    const uiOptions = uiSchema?.["ui:options"];

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
                    <InputLabel id={`${id}-label`}>{label}</InputLabel>
                    <Select
                        variant={variant}
                        labelId={`${id}-label`}
                        id={id}
                        value={options.length > 0 && value ? value : defaultValue}
                        onChange={handleChange}
                        label={label}
                        multiple={isMultiple}
                    >
                        {options?.map((option: Record<string, string | number>) => {
                            return (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.value}
                                </MenuItem>
                            );
                        })}
                    </Select>

                    {hasClearBtn && hasValue && <Clear onClick={handleClear} />}
                </FormControl>
            )}
        </Box>
    );
};

export default CustomSelectField;
