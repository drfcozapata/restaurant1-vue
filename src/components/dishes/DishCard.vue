<script setup lang="ts">
	defineProps(['dish']);
</script>

<template>
	<div
		class="w-[450px] h-[450px] p-8 bg-white shadow-lg flex flex-col items-center relative"
	>
	<a
	href="#"
	class="text-[#192a56] hover:text-white text-center absolute top-8 left-8 w-14 h-14 rounded-full bg-gray-100 hover:bg-green-600"
	>
	<font-awesome-icon :icon="['fas', 'eye']" class="mt-[17px] text-[1.4rem]" />
</a>
<a
	href="#"
	class="text-[#192a56] hover:text-white text-center absolute top-8 right-8 w-14 h-14 rounded-full bg-gray-100 hover:bg-green-600"
>
	<font-awesome-icon :icon="['fas', 'heart']" class="mt-[17px] text-[1.4rem]" />
</a>
		<img :src="dish.img" :alt="dish.name" class="mt-10 w-[70%]" />
		<h3 class="text-[#192a56] text-[1.7rem] font-bold mt-4 mb-2">{{ dish.name }}</h3>
		<div class="flex gap-1 justify-center text-green-600 text-xl">
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star-half-stroke']" />
		</div>
		<div class="flex gap-10 justify-between mt-8 items-center">
			<h3 class="text-green-600 text-[1.7rem] font-bold">${{ dish.price }}</h3>
			<button
				href="#"
				class="bg-[#192a56] hover:bg-green-600 py-2 px-6 text-white text-[1.25rem] font-semibold rounded-md"
			>
				Add to Cart
			</button>
		</div>
	</div>
</template>
