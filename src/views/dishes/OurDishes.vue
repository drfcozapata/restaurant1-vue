<script setup lang="ts">
	import DishCard from '@/components/dishes/DishCard.vue';

	const popularDishes = [
		{ id: 1, name: 'Doulos Tasty', price: 15.99, img: './images/dish-1.png' },
		{ id: 2, name: 'Mr. Nuggets', price: 7.85, img: './images/dish-2.png' },
		{ id: 3, name: 'Pollito Chicken', price: 18.55, img: './images/dish-3.png' },
		{ id: 4, name: 'Delicious Pizza', price: '12.50', img: './images/dish-4.png' },
		{ id: 5, name: 'Brownie Gelato', price: '5.40', img: './images/dish-5.png' },
		{ id: 6, name: 'Little Chicken', price: 6.75, img: './images/dish-6.png' },
	];
</script>

<template>
	<section id="dishes" class="w-[100vw] bg-gray-200">
		<div class="py-4 md:py-6 xl:py-8 container">
			<h3
				class="text-[1.4rem] leading-3 3xl:text-2xl text-green-600 text-center font-bold mb-2"
			>
				Our Dishes
			</h3>
			<h2
				class="text-[2.1rem] 3xl:text-4xl text-[#192a56] text-center font-bold uppercase"
			>
				Popular Dishes
			</h2>
			<div class="mt-10 flex flex-wrap gap-5 4xl:gap-7 justify-between">
				<DishCard v-for="dish in popularDishes" :key="dish.id" :dish="dish" />
			</div>
		</div>
	</section>
</template>
