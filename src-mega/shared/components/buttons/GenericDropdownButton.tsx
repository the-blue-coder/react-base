import { Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import GenericButton from "./GenericButton";
import { GenericDropdownButtonProps } from "shared/types/Buttons.type";
import { GenericOptionType } from "shared/types/Forms.type";

const GenericDropdownButton: React.FC<GenericDropdownButtonProps> = ({ label, options, onSelect }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseDropdown = () => {
        setAnchorEl(null);
    };

    const handleSelectOption = (option: GenericOptionType) => {
        onSelect(option);
        handleCloseDropdown();
    };

    return (
        <>
            <GenericButton aria-controls="generic-dropdown-button" aria-haspopup="true" onClick={handleClickButton}>
                {label}
            </GenericButton>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseDropdown}>
                {options.map((option) => (
                    <MenuItem key={option.id} onClick={() => handleSelectOption(option)}>
                        {option.value}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default GenericDropdownButton;
