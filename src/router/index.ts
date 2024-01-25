import type {RouteRecordRaw} from 'vue-router'
import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/index.vue')
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => import('@/views/auth.vue')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('@/views/profile.vue')
        }
    ]
})

export default router