import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { WidgetProps } from "@rjsf/utils";
import { ChangeEvent } from "react";
import useCustomRadiosFieldStyles from "shared/styles/components/forms/useCustomRadiosFieldStyles";
import { RadioOptionType } from "shared/types/Forms.type";

const CustomRadiosField: React.FC<WidgetProps> = ({ value, schema, uiSchema, onChange }) => {
    const uiOptions = uiSchema?.["ui:options"];

    const label = schema.title;
    const options = uiOptions?.options as RadioOptionType[] | undefined;
    const isInline = uiOptions?.inline || false;

    const styles = useCustomRadiosFieldStyles({ isInline });

    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
    };

    return (
        <Box sx={styles.customRadiosField}>
            <FormControl variant="standard">
                <FormLabel>{label}</FormLabel>
                <RadioGroup
                    aria-labelledby={label}
                    name="custom_radios_field"
                    value={value || ""}
                    onChange={handleRadioChange}
                    className="radio-group"
                >
                    {options?.map((option: Record<string, string | number>) => {
                        return <FormControlLabel key={option.id} value={option.id} control={<Radio size="small" />} label={option.value} />;
                    })}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export default CustomRadiosField;
