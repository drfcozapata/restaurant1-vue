import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faBars,
	faEye,
	faHeart,
	faSearch,
	faShoppingCart,
	faStar,
	faStarHalfStroke,
	faTimes,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faBars,
	faEye,
	faHeart,
	faSearch,
	faShoppingCart,
	faStar,
	faStarHalfStroke,
	faTimes,
	faUtensils
);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
