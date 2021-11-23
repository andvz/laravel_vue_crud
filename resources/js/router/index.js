import { createRouter, createWebHistory } from 'vue-router'

import UsersIndex from '../components/user/UsersIndex.vue'
import UsersCreate from '../components/user/UsersCreate.vue'
import UsersEdit from '../components/user/UsersEdit'
import UsersPayments from '../components/user/UsersPayments'
import UsersPaymentsCreate from '../components/user/UsersPaymentsCreate'

const routes = [
    {
        path: '/dashboard',
        name: 'users.index',
        component: UsersIndex
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: UsersCreate
    },
    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: UsersEdit,
        props: true
    },
    {
        path: '/users/:id/payments',
        name: 'users.payments.index',
        component: UsersPayments,
        props: true
    },
    {
        path: '/users/:id/payments/create',
        name: 'users.payments.create',
        component: UsersPaymentsCreate,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})
