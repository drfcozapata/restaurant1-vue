<script setup lang="ts">
	import { Teleport, ref } from 'vue';
	import IconsBar from '@/components/header/IconsBar.vue';
	import LogoNavbarVue from '@/components/header/LogoNavbar.vue';
	import Navbar from '@/components/header/Navbar.vue';
	import SearchModal from '@/components/header/SearchModal.vue';

	const isVisible = ref(false);
	const isOpen = ref(false);

	const toggleMenu = () => {
		isVisible.value = !isVisible.value;
	};
	const showModal = () => {
		isOpen.value = true;
	};
	const closeModal = () => {
		isOpen.value = false;
	};
</script>

<template>
	<div
		class="flex justify-between items-center fixed top-0 left-0 right-0 bg-white py-4 px-[7%] z-50 shadow-md"
	>
		<LogoNavbarVue />

		<Navbar class="navbar lg:block" :class="isVisible ? '' : 'hidden'" />

		<IconsBar @showMenu="toggleMenu" @showModal="showModal" :isVisible="isVisible" />

		<Teleport to="body">
			<SearchModal :isOpen="isOpen" @closeModal="closeModal" v-if="isOpen" />
		</Teleport>
	</div>
</template>

<style scoped>
	@media (max-width: 1024px) {
		.navbar {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background-color: rgba(255, 255, 255, 0.95);
			border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
			border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
			padding: 1rem;
			z-index: 10;
		}
	}
</style>
