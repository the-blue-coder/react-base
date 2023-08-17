import Homepage from "pages/Homepage/containers/Homepage";

/**
 * The react-router-dom implementation is done inside shared\components\routes\AppRouter.tsx
 */
export const routes = {
    homepage: {
        path: "/",
        container: <Homepage />,
    },
};
