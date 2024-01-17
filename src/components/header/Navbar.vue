<script setup lang="ts">
	//
</script>

<template>
	<nav>
		<ul class="lg:flex lg:justify-center 3xl:text-lg navbar">
			<li>
				<a
					class="py-2 px-4 3xl:px-6 text-[#777] active:text-white active:bg-green-600 hover:text-white hover:bg-green-600 rounded-lg"
					href="#home"
					>Home</a
				>
			</li>
			<li>
				<a
					class="py-2 px-4 3xl:px-6 text-[#777] active:text-white active:bg-green-600 hover:text-white hover:bg-green-600 rounded-lg"
					href="#dishes"
					>Dishes</a
				>
			</li>
			<li>
				<a
					class="py-2 px-4 3xl:px-6 text-[#777] active:text-white active:bg-green-600 hover:text-white hover:bg-green-600 rounded-lg"
					href="#about"
					>About</a
				>
			</li>
			<li>
				<a
					class="py-2 px-4 3xl:px-6 text-[#777] active:text-white active:bg-green-600 hover:text-white hover:bg-green-600 rounded-lg"
					href="#menu"
					>Menu</a
				>
			</li>
			<li>
				<a
					class="py-2 px-4 3xl:px-6 text-[#777] active:text-white active:bg-green-600 hover:text-white hover:bg-green-600 rounded-lg"
					href="#review"
					>Review</a
				>
			</li>
			<li>
				<a
					class="py-2 px-4 3xl:px-6 text-[#777] active:text-white active:bg-green-600 hover:text-white hover:bg-green-600 rounded-lg"
					href="#order"
					>Order</a
				>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
	@media (max-width: 1024px) {
		.navbar li {
			display: block;
			padding: 1rem;
			margin: 0.5rem;
			font-size: 1.5rem;
			background-color: #eee;
			text-align: center;
			border-radius: 0.5rem;
		}
		.navbar li:hover {
			background-color: rgb(22, 163, 74);
		}
		.navbar li:hover a {
			color: white;
		}
	}
</style>
