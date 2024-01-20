<script setup lang="ts">
	defineProps(['menu']);
</script>

<template>
	<div
		class="w-[350px] lg:w-[32%] 4xl:w-[490px] h-[450px] 3xl:h-[550px] 4xl:h-[590px] p-3 3xl:p-5 bg-white shadow-lg flex flex-col rounded-lg relative"
	>
		<a
			href="#"
			class="text-[#192a56] hover:text-white text-center absolute top-8 right-8 w-[52px] 3xl:w-14 h-[52px] 3xl:h-14 rounded-full bg-white hover:bg-green-600"
		>
			<font-awesome-icon
				:icon="['fas', 'heart']"
				class="mt-4 3xl:mt-[17px] text-[1.2rem] 3xl:text-[1.4rem]"
			/>
		</a>
		<img :src="menu.img" :alt="menu.name" class="w-full rounded-md" />
		<div
			class="flex gap-[2px] 3xl:gap-1 mt-5 items-start text-green-600 text-lg 3xl:text-2xl"
		>
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star-half-stroke']" />
		</div>
		<h3
			class="text-[#192a56] text-[1.6rem] 3xl:text-[1.7rem] 4xl:text-[1.9rem] font-bold mt-2 3xl:mt-4 mb-1 3xl:mb-2"
		>
			{{ menu.name }}
		</h3>
		<p class="text-gray-400 text-base 3xl:text-xl">{{ menu.description }}</p>

		<div class="flex gap-5 3xl:gap-10 justify-start mt-4 3xl:mt-6 items-center">
			<button
				class="bg-[#192a56] hover:bg-green-600 py-2 px-6 text-white text-[1.15rem] 3xl:text-[1.4rem] font-semibold rounded-md"
			>
				Add to Cart
			</button>
			<h3
				class="text-green-600 text-[1.6rem] 3xl:text-[1.7rem] 4xl:text-[1.9rem] font-bold"
			>
				${{ menu.price }}
			</h3>
		</div>
	</div>
</template>
