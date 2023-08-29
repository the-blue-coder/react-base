import Groups from "./pages/Groups/containers/Groups";
import Overview from "./pages/Overview/containers/Overview";
import Posts from "./pages/Posts/containers/Posts";
import Products from "./pages/Products/containers/Products";
import Tasks from "./pages/Tasks/containers/Tasks";

export const routes = {
    overview: {
        title: "Overview",
        path: "/",
        container: <Overview />,
    },
    groups: {
        title: "Groups",
        path: "/groups",
        container: <Groups />,
    },
    posts: {
        title: "Posts",
        path: "/posts",
        container: <Posts />,
    },
    products: {
        title: "Products",
        path: "/products",
        container: <Products />,
    },
    tasks: {
        title: "Tasks",
        path: "/tasks",
        container: <Tasks />,
    },
};
