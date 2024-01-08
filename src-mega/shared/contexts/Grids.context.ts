import { createContext, useContext } from "react";
import { GridFilterContextType } from "shared/types/Grids.type";

export const GridFilterContext = createContext<GridFilterContextType | null>(null);

export const useGridFilterContext = () => {
    const context = useContext(GridFilterContext);

    if (!context) {
        throw new Error("useFilterContext must be used within a FilterContextProvider");
    }

    return context;
};
