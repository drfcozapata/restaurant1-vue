import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faBars,
	faDollarSign,
	faEye,
	faHeadset,
	faHeart,
	faQuoteRight,
	faSearch,
	faShoppingCart,
	faStar,
	faStarHalfStroke,
	faTimes,
	faTruckFast,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faBars,
	faDollarSign,
	faEye,
	faHeadset,
	faHeart,
	faQuoteRight,
	faSearch,
	faShoppingCart,
	faStar,
	faStarHalfStroke,
	faTimes,
	faTruckFast,
	faUtensils
);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
