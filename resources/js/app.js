/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Vue from 'vue';
import Errors from './components/core/Errors';
import Form from './components/core/Form';
import PortalVue from 'portal-vue';
import axios from 'axios';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import VCurrencyField from 'v-currency-field';


import ThePdfExport from './components/pdfexports/PdfExport.vue';

window.Vue = Vue;
window.axios = axios;
window.Form = Form;
Vue.use(Vuetify);
Vue.use(PortalVue);
Vue.use(VCurrencyField, {
    locale: 'en',
    defaultValue: null,
    prefix: '$'
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
        },
    }),
    components: { ThePdfExport }
});
