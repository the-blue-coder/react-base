How to create a complete CRUD screen from CRUD screen template:

ENTITY STRUCTURE:

-   First, define the structure of your entity (ex: firstname:string, name:string, age: number, etc...)

---

BACK END:

-   Create the entity and do migration. Do not forget to use TimestampableEntityTrait inside the entity
-   Create the controller methods based on AffTrack > SqueezePageController
-   Create the service methods based on AffTrack > SqueezePageService
-   Update the logics in the controller and the service's methods as needed

---

FRONT END:

-   Copy the entire PageExample folder to src/pages and rename it to your desired new page name

-   Do the following bulk renaming in files (MAKE SURE TO ACTIVATE Match Case [Aa] on the VSCode's search input option):

    -   Page example -> Page name
    -   page example -> page name
    -   PageExample -> PageName
    -   pageExample -> pageName
    -   page-examples- -> page-names-
    -   page*example* -> page*name*
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
        app_api_page_example_index: "/page-example-",
        app_api_page_example_show: "/page-example-/{id}",
        app_api_page_example_new: "/page-example-/new",
        app_api_page_example_edit: "/page-example-/{id}/edit",
        app_api_page_example_delete: "/page-example-/{id}",
        app_api_page_example_summary: "/page-example-/summary",
        app_api_page_example_options: "/page-example-/option",

-   Update PageExampleType and SinglePageExampleFormDataType's properties in types/SinglePageExample.type

-   Update hooks/useSinglePageExampleFormSchema.ts

-   Update components/UpdateSinglePageExampleDialog.tsx

-   Update the message in components/DeleteSinglePageExampleConfirmationDialog.tsx

-   Update styles/useSinglePageExampleDialogStyles.ts

-   Update enums/PageExamplesGrid.enum.ts

-   Update hooks/usePageExamplesGridContent.tsx
