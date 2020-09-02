import Home from "../pages/home/home";
import Dashboard from "../pages/dashboard/dashboard";

export const urlList = [
    {
        path: '/',
        component: Home,
        exact: true,
        authenticate: false
    }, {
        path: '/',
        component: Dashboard,
        exact: true,
        authenticate: true
    }
];