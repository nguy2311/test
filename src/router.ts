import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue";

const routes =[
    {
        path: "/", component: DefaultLayout
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
