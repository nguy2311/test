import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router";
import PhotoComponent from "./components/PhotoComponent.vue";
import IllustrationsComponent from "./components/IllustrationsComponent.vue";

const routes =[
    {
        path: "/", 
        component: PhotoComponent,
        name: "photo",
        props: (route: RouteLocationNormalized) =>({searchQuery: route.query.searchQuery || ''})
    },
    {
        path: "/illustration", 
        component: IllustrationsComponent,
        name: "illustrations",
        props: (route: RouteLocationNormalized) =>({searchQuery: route.query.searchQuery || ''})
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
