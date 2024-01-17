<script setup lang="ts">
	import Navbar from '@/components/header/Navbar.vue';
	import IconsBar from '@/components/header/IconsBar.vue';
	import { ref } from 'vue';

	const isVisible = ref(false);

	const toggleMenu = () => {
		isVisible.value = !isVisible.value;
	};
</script>

<template>
	<div
		class="flex justify-between items-center fixed top-0 left-0 right-0 bg-white py-4 px-[7%] z-50 shadow-md"
	>
		<h1 class="text-2xl 2xl:text-3xl 3xl:text-4xl font-extrabold text-[#192a56]">
			<font-awesome-icon :icon="['fas', 'utensils']" class="text-green-600" />
			Doulos Resto.
		</h1>
		<Navbar class="navbar lg:block" :class="isVisible ? '' : 'hidden'" />
		<IconsBar @showMenu="toggleMenu" />
	</div>
</template>

<style scoped>
	@media (max-width: 1024px) {
		.navbar {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background-color: #fff;
			border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
			border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
			padding: 1rem;
			z-index: 10;
			/* clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); */
		}
		/* .navbar.active {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		} */
	}
</style>
