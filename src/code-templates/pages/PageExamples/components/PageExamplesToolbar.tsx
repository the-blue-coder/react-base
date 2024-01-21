import { Box } from "@mui/material";
import GenericButton from "shared/components/buttons/GenericButton";
import StickyOnScroll from "shared/components/stickies/StickyOnScroll";
import { PageExamplesToolbarProps } from "../types/PageExamplesToolbar.type";

const PageExamplesToolbar: React.FC<PageExamplesToolbarProps> = ({ onToggleAddPageExampleDialog }) => {
    return (
        <StickyOnScroll offsetTopStickyStart={97}>
            <Box className="toolbar-container">
                <Box className="action-btns-container">
                    <GenericButton onClick={onToggleAddPageExampleDialog}>
                        <strong>New page example</strong>
                    </GenericButton>
                </Box>
            </Box>
        </StickyOnScroll>
    );
};

export default PageExamplesToolbar;
