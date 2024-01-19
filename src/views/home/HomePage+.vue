<script setup lang="ts">
	import { reactive } from 'vue';
	import 'vue3-carousel/dist/carousel.css';
	import { Carousel, Slide, Pagination } from 'vue3-carousel';
	import 'vue3-carousel/dist/carousel.css';

	const dishes = reactive([
		{
			id: 1,
			title: 'Our Special Dish 1',
			name: 'Spicy Noodles',
			description:
				'Integer fringilla eget nisi eget mollis. Interdum et malesuada fames ac ante.',
			image: 'images/home-img-1.png',
		},
		{
			id: 2,
			title: 'Our Special Dish 2',
			name: 'Fried Chicken',
			description:
				'Suspendisse in lectus eget purus vehicula dignissim. Aenean volutpat elit sit amet.',
			image: 'images/home-img-2.png',
		},
		{
			id: 3,
			title: 'Our Special Dish 3',
			name: 'Hot Pizza',
			description:
				'Proin sed aliquam neque, quis sagittis neque. Curabitur ut consequat nisi, vehicula.',
			image: 'images/home-img-3.png',
		},
	]);
</script>

<template>
	<section id="home" class="py-24">
		<Carousel :items-to-show="1" :autoplay="4000" :wrap-around="true" :transition="300">
			<Slide
				class="xl:flex xl:gap-10 xl:items-center xl:justify-between"
				v-for="dish in dishes"
				:key="dish.id"
			>
				<div class="xl:w-[45%] carousel__item flex flex-col items-start">
					<span class="text-[1.65rem] text-green-600 font-semibold">{{
						dish.title
					}}</span>
					<h3 class="text-[4.5rem] text-[#192a56] font-bold">{{ dish.name }}</h3>
					<p class="text-[1.5rem] text-gray-500 leading-8 mb-6 text-left">
						{{ dish.description }}
					</p>
					<a
						href="#"
						class="bg-[#192a56] hover:bg-green-600 py-2 px-6 text-white text-[1.25rem] font-semibold rounded-md"
						>Order Now</a
					>
				</div>
				<div class="xl:w-[55%] carousel__item">
					<img :src="dish.image" :alt="dish.name" class="w-full" />
				</div>
			</Slide>
			<template #addons>
				<pagination />
			</template>
		</Carousel>
	</section>
</template>
