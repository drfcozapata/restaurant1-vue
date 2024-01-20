<script setup lang="ts">
	defineProps(['dish']);
</script>

<template>
	<div
		class="w-[350px] lg:w-[32%] 4xl:w-[490px] h-[350px] 4xl:h-[490px] p-4 3xl:p-8 bg-white shadow-lg flex flex-col items-center rounded-lg relative box"
	>
		<a
			href="#"
			class="text-[#192a56] hover:text-white text-center absolute top-8 w-[52px] 3xl:w-14 h-[52px] 3xl:h-14 rounded-full bg-gray-100 hover:bg-green-600 eye"
		>
			<font-awesome-icon
				:icon="['fas', 'eye']"
				class="mt-4 3xl:mt-[17px] text-[1.2rem] 3xl:text-[1.4rem]"
			/>
		</a>
		<a
			href="#"
			class="text-[#192a56] hover:text-white text-center absolute top-8 w-[52px] 3xl:w-14 h-[52px] 3xl:h-14 rounded-full bg-gray-100 hover:bg-green-600 heart"
		>
			<font-awesome-icon
				:icon="['fas', 'heart']"
				class="mt-4 3xl:mt-[17px] text-[1.2rem] 3xl:text-[1.4rem]"
			/>
		</a>
		<img
			:src="dish.img"
			:alt="dish.name"
			class="mt-6 3xl:mt-3 4xl:mt-6 h-[140px] 4xl:h-[220px] w-auto"
		/>
		<h3
			class="text-[#192a56] text-[1.6rem] 4xl:text-[1.9rem] font-bold mt-3 4xl:mt-6 mb-1 4xl:mb-2"
		>
			{{ dish.name }}
		</h3>
		<div
			class="flex gap-[2px] 4xl:gap-1 justify-center text-green-600 text-lg 4xl:text-2xl"
		>
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star']" />
			<font-awesome-icon :icon="['fas', 'star-half-stroke']" />
		</div>
		<div
			class="flex gap-10 3xl:gap-8 4xl:gap-16 justify-between mt-6 4xl:mt-8 items-center"
		>
			<h3 class="text-green-600 text-[1.6rem] 4xl:text-[1.9rem] font-bold">
				${{ dish.price }}
			</h3>
			<button
				class="bg-[#192a56] hover:bg-green-600 py-2 px-6 text-white text-[1.25rem] 4xl:text-[1.4rem] font-semibold rounded-md"
			>
				Add to Cart
			</button>
		</div>
	</div>
</template>

<style scoped>
	.box .eye {
		left: -2rem;
		opacity: 0;
	}
	.box .heart {
		right: -2rem;
		opacity: 0;
	}
	.box:hover .eye {
		left: 2rem;
		opacity: 1;
	}
	.box:hover .heart {
		right: 2rem;
		opacity: 1;
	}
	@media (max-width: 1280px) {
		.box .eye {
			left: 2rem;
			opacity: 1;
		}
		.box .heart {
			right: 2rem;
			opacity: 1;
		}
	}
</style>
