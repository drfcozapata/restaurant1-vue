<script setup lang="ts">
	import OrderForm from '@/components/order/OrderForm.vue';
</script>

<template>
	<section id="order" class="w-[100vw] bg-gray-200">
		<div class="py-4 md:py-6 xl:py-8 container">
			<h3
				class="text-[1.4rem] leading-3 3xl:text-2xl text-green-600 text-center font-bold mb-2"
			>
				Order Now
			</h3>
			<h2
				class="text-[2.1rem] 3xl:text-4xl text-[#192a56] text-center font-bold uppercase"
			>
				Free and Fast
			</h2>
			<div class="mt-10 xl:px-10 2xl:px-15 3xl:px-20 4xl:px-32">
				<OrderForm />
			</div>
		</div>
	</section>
</template>
