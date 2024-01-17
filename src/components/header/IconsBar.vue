<script setup lang="ts">
	defineEmits(['showMenu']);
</script>

<template>
	<div class="flex">
		<button
			class="cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 lg:hidden"
			@click="$event => $emit('showMenu')"
		>
			<font-awesome-icon :icon="['fas', 'bars']" />
		</button>
		<div
			class="cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 hidden lg:block"
		>
			<font-awesome-icon :icon="['fas', 'search']" />
		</div>
		<div
			class="cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 hidden lg:block"
		>
			<font-awesome-icon :icon="['fas', 'heart']" />
		</div>
		<div
			class="cursor-pointer h-[3rem] 3xl:h-[3.5rem] w-[3rem] 3xl:w-[3.5rem] ml-2 rounded-full leading-[3rem] 3xl:leading-[3.5rem] 3xl:text-lg text-center bg-gray-100 text-[#192a56] hover:text-white hover:bg-green-600 hidden lg:block"
		>
			<font-awesome-icon :icon="['fas', 'shopping-cart']" />
		</div>
	</div>
</template>
