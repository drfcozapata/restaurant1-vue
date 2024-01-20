<script lang="ts" setup>
	const handleSubmit = (e: { preventDefault: () => void }) => {
		console.log('Submit');
	};
</script>

<template>
	<form class="w-full bg-white rounded-md shadow-lg p-5" @submit="handleSubmit">
		<div class="lg:flex lg:gap-5 mb-5">
			<div class="flex flex-col gap-5 flex-1 mb-5 xl:mb-0">
				<div class="flex flex-col">
					<label for="name" class="mb-1 text-sm text-gray-500">Your Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						class="bg-gray-200 rounded-md h-12 px-5 text-[#192a56] xl:text-lg"
					/>
				</div>
				<div class="flex flex-col">
					<label for="order" class="mb-1 text-sm text-gray-500">Your order</label>
					<input
						type="text"
						name="order"
						id="order"
						placeholder="Enter food name"
						class="bg-gray-200 rounded-md h-12 px-5 text-[#192a56] xl:text-lg"
					/>
				</div>
				<div class="flex flex-col">
					<label for="how-much" class="mb-1 text-sm text-gray-500">How much?</label>
					<input
						type="text"
						name="how-much"
						id="how-much"
						placeholder="How many orders?"
						class="bg-gray-200 rounded-md h-12 px-5 text-[#192a56] xl:text-lg"
					/>
				</div>
				<div class="flex flex-col">
					<label for="address" class="mb-1 text-sm text-gray-500">Your Address</label>
					<textarea
						name="address"
						id="address"
						placeholder="Enter your address"
						cols="30"
						rows="8"
						class="bg-gray-200 rounded-md p-5"
					></textarea>
				</div>
			</div>
			<div class="flex flex-col gap-5 flex-1">
				<div class="flex flex-col">
					<label for="name" class="mb-1 text-sm text-gray-500">Your Phone</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your phone number"
						class="bg-gray-200 rounded-md h-12 px-5 text-[#192a56] xl:text-lg"
					/>
				</div>
				<div class="flex flex-col">
					<label for="order" class="mb-1 text-sm text-gray-500">Additional Food</label>
					<input
						type="text"
						name="order"
						id="order"
						placeholder="Enter extra with food"
						class="bg-gray-200 rounded-md h-12 px-5 text-[#192a56] xl:text-lg"
					/>
				</div>
				<div class="flex flex-col">
					<label for="how-much" class="mb-1 text-sm text-gray-500">Date and Time</label>
					<input
						type="datetime-local"
						name="how-much"
						id="how-much"
						placeholder="How many orders?"
						class="bg-gray-200 rounded-md h-12 px-5 text-[#192a56] xl:text-lg"
					/>
				</div>
				<div class="flex flex-col">
					<label for="address" class="mb-1 text-sm text-gray-500">Your Message</label>
					<textarea
						name="address"
						id="address"
						placeholder="Enter your message"
						cols="30"
						rows="8"
						class="bg-gray-200 rounded-md p-5"
					></textarea>
				</div>
			</div>
		</div>
		<input
			type="submit"
			value="Order Now"
			class="bg-[#192a56] hover:bg-green-600 py-2 px-10 text-white text-[1.25rem] 4xl:text-[1.4rem] font-semibold rounded-md"
		/>
	</form>
</template>

<style scoped>
	/* */
</style>
