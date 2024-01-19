<script setup lang="ts">
	import { reactive } from 'vue';

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

	const spaceBetween = 250;
</script>

<template>
	<section id="home" class="pt-24 md:pt-28 xl:pt-32 pb-4 md:pb-6 xl:pb-8 container">
		<swiper-container
			:slides-per-view="1"
			:space-between="spaceBetween"
			:centered-slides="true"
			:pagination="true"
			:breakpoints="{
				768: {
					slidesPerView: 1,
				},
			}"
			:loop="true"
			:autoplay="{
				delay: 4000,
			}"
		>
			<swiper-slide
				class="xl:flex xl:gap-10 xl:items-center xl:justify-between"
				v-for="dish in dishes"
				:key="dish.id"
			>
				<div class="xl:w-[45%] mb-10 xl:mb-0">
					<span
						class="text-[1.3rem] md:text-[1.45rem] xl:text-[1.65rem] text-green-600 font-semibold"
						>{{ dish.title }}</span
					>
					<h3
						class="text-[2.7rem] md:text-[3.7rem] xl:text-[4.5rem] text-[#192a56] font-bold"
					>
						{{ dish.name }}
					</h3>
					<p
						class="text-[1.2rem] md:text-[1.35rem] xl:text-[1.5rem] text-gray-500 leading-8 mb-6"
					>
						{{ dish.description }}
					</p>
					<a
						href="#"
						class="bg-[#192a56] hover:bg-green-600 py-2 px-6 text-white text-[1.25rem] font-semibold rounded-md"
						>Order Now</a
					>
				</div>
				<div class="xl:w-[55%] mb-5 xl:mb-0">
					<img
						:src="dish.image"
						:alt="dish.name"
						class="w-full md:w-[80%] mx-auto xl:w-full"
					/>
				</div>
			</swiper-slide>
		</swiper-container>
	</section>
</template>

<style scoped>
	swiper-container::part(bullet-active) {
		background-color: #16a34a;
	}
</style>
