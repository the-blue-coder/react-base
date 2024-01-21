import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import { useState } from "react";
import { PAGE_EXAMPLES_GRID_COLUMN_NAMES } from "../enums/PageExamplesGrid.enum";
import { PageExampleType } from "../types/SinglePageExample.type";
import { Box } from "@mui/material";
import GenericButton from "shared/components/buttons/GenericButton";
import { usePageExamplesGridContentProps } from "../types/PageExamplesGrid.type";

const usePageExamplesGridContent = ({ onEditSinglePageExampleClick, onDeleteSinglePageExampleClick }: usePageExamplesGridContentProps) => {
    const [rows, setRows] = useState<GridValidRowModel[]>([]);

    const columns: GridColDef[] = [
        {
            field: "firstname",
            headerName: PAGE_EXAMPLES_GRID_COLUMN_NAMES["firstname"],
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "name",
            headerName: PAGE_EXAMPLES_GRID_COLUMN_NAMES["name"],
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "age",
            headerName: PAGE_EXAMPLES_GRID_COLUMN_NAMES["age"],
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "gender",
            headerName: PAGE_EXAMPLES_GRID_COLUMN_NAMES["gender"],
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "email",
            headerName: PAGE_EXAMPLES_GRID_COLUMN_NAMES["email"],
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            sortable: false,
            filterable: false,
            headerAlign: "center",
            align: "center",
            cellClassName: "no-outline",
            renderCell: ({ row }) => {
                return (
                    <Box>
                        <GenericButton variant="text" onClick={() => onEditSinglePageExampleClick(row)}>
                            Edit
                        </GenericButton>
                        <GenericButton variant="text" onClick={() => onDeleteSinglePageExampleClick(row)}>
                            Delete
                        </GenericButton>
                    </Box>
                );
            },
        },
    ];

    const setPageExamplesGridRows = (pageExamples: PageExampleType[]) => {
        const updatedRows = Array.isArray(pageExamples)
            ? pageExamples?.map((pageExample) => ({
                  id: pageExample.id,
                  firstname: pageExample.firstname,
                  name: pageExample.name,
                  age: pageExample.age,
                  genderId: pageExample.genderId,
                  gender: pageExample.gender,
                  email: pageExample.email,
              }))
            : [];

        setRows(updatedRows);
    };

    return { columns, rows, setPageExamplesGridRows };
};

export default usePageExamplesGridContent;
