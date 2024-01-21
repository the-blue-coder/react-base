How to create a complete CRUD screen from CRUD screen template:

ENTITY STRUCTURE:

-   First, define the structure of your entity (ex: firstname:string, name:string, age: number, etc...)

---

BACK END:

-   Create the entity and do migration
-   Run symfony console make:crud
-   Create the service
-   Fill the logics in the controller and the service's methods

---

FRONT END:

-   Copy the entire PageExample folder to src/pages

-   Do the following bulk renaming in files (MAKE SURE TO ACTIVATE Match Case [Aa] on the VSCode's search input option):

    -   Page example -> Page name
    -   page example -> page name
    -   PageExample -> PageName
    -   pageExample -> pageName
    -   page-examples- -> page-names-
    -   PAGE_EXAMPLE -> PAGE_NAME

-   Rename the files

-   Create the routes and api routes in routes.tsx

    -   In const routes, add
        pageExamples: {
        title: "Page examples",
        path: "/page-examples",
        container: <PageExamples />,
        },

    -   In const apiRoutes, add
        pageExample: "/page-example",
        pageExamplesSummary: "/page-example/summary",

-   Update PageExampleType and SinglePageExampleFormDataType in types/SinglePageExample.type (change PageExample to the actual name of your screen)

-   Update hooks/useSinglePageExampleFormSchema.ts

-   Update components/UpdateSinglePageExampleDialog.tsx

-   update the message in components/DeleteSinglePageExampleConfirmationDialog.tsx

-   Update styles/useSinglePageExampleDialogStyles.ts

-   Update enums/PageExamplesGrid.enum.ts

-   Update hooks/usePageExamplesGridContent.tsx
