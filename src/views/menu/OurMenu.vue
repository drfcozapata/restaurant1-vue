<script setup lang="ts">
	import MenuCard from '@/components/menu/MenuCard.vue';

	const menues = [
		{
			id: 1,
			name: 'Pizza Doulos',
			price: '14.50',
			img: './images/menu1.jpg',
			description:
				'Etiam bibendum pulvinar dui, in faucibus ex ultrices ut. Etiam vel pretium.',
		},
		{
			id: 2,
			name: 'Doulos Burger',
			price: 11.35,
			img: './images/menu2.jpg',
			description:
				'Aliquam et fermentum sem, sit amet vehicula dui. Ut convallis bibendum purus.',
		},
		{
			id: 3,
			name: 'Mexican Fajitas',
			price: '10.60',
			img: './images/menu3.jpg',
			description: 'Donec vestibulum non quam sit amet porta. Maecenas id massa in est.',
		},
		{
			id: 4,
			name: 'Waffle Vanilla Gelato',
			price: '6.50',
			img: './images/menu4.jpg',
			description:
				'Aliquam non egestas felis, eu malesuada eros. Nunc tincidunt laoreet odio, vitae.',
		},
		{
			id: 5,
			name: 'All Berries & Cherries Pie',
			price: 9.65,
			img: './images/menu5.jpg',
			description:
				'Quisque quis sem elementum, ultricies augue eget, semper metus. Donec gravida, ligula.',
		},
		{
			id: 6,
			name: 'Special Cup Cakes',
			price: 2.75,
			img: './images/menu6.jpg',
			description:
				'Mauris quis nibh ut neque euismod euismod. Suspendisse pellentesque, erat quis mattis.',
		},
		{
			id: 7,
			name: 'Mojitos Mixes',
			price: 3.25,
			img: './images/menu7.jpg',
			description:
				'Mauris quis nibh ut neque euismod euismod. Suspendisse pellentesque, erat quis mattis.',
		},
		{
			id: 8,
			name: 'Doulos Fitness',
			price: '5.20',
			img: './images/menu8.jpg',
			description:
				'Mauris quis nibh ut neque euismod euismod. Suspendisse pellentesque, erat quis mattis.',
		},
		{
			id: 9,
			name: 'Special Oranges Juice',
			price: '2.20',
			img: './images/menu9.jpg',
			description:
				'Mauris quis nibh ut neque euismod euismod. Suspendisse pellentesque, erat quis mattis.',
		},
	];
</script>

<template>
	<section id="menu" class="w-[100vw] bg-gray-200">
		<div class="py-4 md:py-6 xl:py-8 container">
			<h3
				class="text-[1.4rem] leading-3 3xl:text-2xl text-green-600 text-center font-bold mb-2"
			>
				Our Menu
			</h3>
			<h2
				class="text-[2.1rem] 3xl:text-4xl text-[#192a56] text-center font-bold uppercase"
			>
				Today's Speciality
			</h2>
			<div class="mt-10 flex flex-wrap gap-5 4xl:gap-7 justify-between">
				<MenuCard v-for="menu in menues" :key="menu.id" :menu="menu" />
			</div>
		</div>
	</section>
</template>
