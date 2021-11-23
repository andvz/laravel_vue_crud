require('./bootstrap');
require('alpinejs');
// import Alpine from 'alpinejs';
//
// window.Alpine = Alpine;
//
// Alpine.start();

import { createApp } from 'vue';
import router from './router'

import UsersIndex from './components/user/UsersIndex.vue';

createApp({
    components: {
        UsersIndex
    }
}).use(router).mount('#app')
