How to create a complete CRUD screen from CRUD screen template:

ENTITY STRUCTURE:

-   First, define the structure of your entity (ex: firstname:string, name:string, age: number, etc...)

---

BACK END:

-   Create the entity and do migration. Do not forget to use TimestampableEntityTrait inside the entity, and add #[ORM\HasLifecycleCallbacks] just before the entity class
-   Create the FormType class base on the entity.
-   Remove created_at and updated_t in the FormType (the timestamps are managed by TimestampableEntityTrait).
-   Use snake_case for all the fields in the form type class.
-   Copy code-templates/backend/Controller/PageExampleController.php to backend > app/Controller/, rename file and update variables and methods names as needed
-   Copy code-templates/backend/Service/AbstractService.php to backend > app/Service/
-   Copy code-templates/backend/Service/PageService.php to backend app/Service/, rename file and update variables and methods names as needed
-   Update PageService->buildSingleForTheFrontend()
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
    -   page-example- -> page-name-
    -   page_example_ -> page_name_
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
        app_api_page_example_summary: "/page-example/summary",
        app_api_page_example_index: "/page-example",
        app_api_page_example_show: "/page-example/{id}",
        app_api_page_example_new: "/page-example/new",
        app_api_page_example_edit: "/page-example/{id}/edit",
        app_api_page_example_delete: "/page-example/{id}",
        app_api_page_example_options: "/page-example/option",

-   Update PageExampleType and SinglePageExampleFormDataType's properties in types/PageExample.type

-   Update hooks/useSinglePageExampleFormSchema.ts

-   Update components/UpdateSinglePageExampleDialog.tsx

-   Update the message in components/DeleteSinglePageExampleConfirmationDialog.tsx

-   Update styles/useSinglePageExampleDialogStyles.ts (add the order number of custom options fields inside the array parameter of getPaddingTopsFixStyle())

-   Update enums/PageExamplesGrid.enum.ts

-   Update hooks/usePageExamplesGridContent.tsx

-   Update offsetTopStickyStart in components/PageExamplesToolbar.tsx
