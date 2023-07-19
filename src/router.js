import { createRouter, createWebHistory } from 'vue-router';

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppSingleProject from "./pages/AppSingleProject.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            name: "home",
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: AppProjects,
        },
        {
            path: "/projects/:id",
            name: "show-project",
            component: AppSingleProject,
        },
        {
            path: '/error/:code',
            name: 'error',
            component: ErrorPage
        }
    ]
})

export default router;