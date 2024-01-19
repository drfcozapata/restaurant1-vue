<script setup lang="ts">
	defineProps(['isVisible']);
	defineEmits(['showMenu', 'showModal']);
</script>

<template>
	<div class="flex">
		<button
			class="icon cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 lg:hidden pt-[2px]"
			@click="$emit('showMenu')"
		>
			<font-awesome-icon
				class="text-[20px]"
				:icon="['fas', 'bars']"
				v-if="isVisible === false"
			/>
			<font-awesome-icon class="text-[20px]" :icon="['fas', 'times']" v-else />
		</button>
		<button
			class="icon cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 hidden lg:block pt-[2px]"
			@click="$emit('showModal')"
		>
			<font-awesome-icon :icon="['fas', 'search']" />
		</button>
		<div
			class="icon cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 hidden lg:block"
		>
			<font-awesome-icon :icon="['fas', 'heart']" />
		</div>
		<div
			class="icon cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 hidden lg:block"
		>
			<a href="">
				<font-awesome-icon :icon="['fas', 'shopping-cart']" />
			</a>
		</div>
	</div>
</template>
