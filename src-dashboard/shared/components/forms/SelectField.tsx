import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material";
import { WidgetProps } from "@rjsf/utils";
import useSelectFieldStyles from "shared/styles/components/forms/useSelectFieldStyles";
import { SelectOptionsType } from "shared/types/Forms.type";

const SelectField: React.FC<WidgetProps> = ({ value, schema, uiSchema, onChange }) => {
    const styles = useSelectFieldStyles();

    const uiOptions = uiSchema?.["ui:options"];

    const id = String(uiOptions?.id);
    const label = schema.title;
    const variant = (uiOptions?.variant as SelectProps["variant"]) ?? "standard";
    const options = uiOptions?.options as SelectOptionsType[] | undefined;

    const handleChange = (e: SelectChangeEvent) => {
        onChange(e.target.value);
    };

    return (
        <Box sx={styles.selectField}>
            {options && (
                <FormControl variant="standard" id={id} className="select-form-control">
                    <InputLabel id={`${id}-label`}>{label}</InputLabel>
                    <Select variant={variant} labelId={`${id}-label`} id={id} value={value ?? ""} onChange={handleChange} label={label}>
                        {options?.map((option: Record<string, string | number>) => {
                            return (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.value}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            )}
        </Box>
    );
};

export default SelectField;