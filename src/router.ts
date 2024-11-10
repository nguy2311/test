import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router";
import PhotoComponent from "./components/PhotoComponent.vue";


const routes =[
    {
        path: "/", 
        component: PhotoComponent,
        name: "photo",
        props: (route: RouteLocationNormalized) =>({searchQuery: route.query.searchQuery || ''})
    },
    {
        path: "/illustration", 
        component: PhotoComponent,
        name: "illustrations",
        props: (route: RouteLocationNormalized) =>({searchQuery: route.query.searchQuery || ''})
    },
    {
        path: "/topic", 
        component: PhotoComponent,
        name: "topic",
        props: (route: RouteLocationNormalized) =>({
            searchQuery: route.query.searchQuery || '',
            topic: route.params.type
        })
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
