<script setup lang="ts">
	defineProps(['isOpen']);
	defineEmits(['closeModal']);
</script>

<template>
	<div class="modal">
		<button>
			<font-awesome-icon
				:icon="['fas', 'xmark']"
				class="close hover:text-green-600"
				@click="$emit('closeModal')"
			/>
		</button>
		<form class="flex gap-5 items-center justify-center w-[90%] mx-auto">
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search..."
				class="w-[94%] md:w-[50%] 3xl:w-[40%] text-3xl 2xl:text-4xl 3xl:text-[3rem]"
			/>
			<button>
				<font-awesome-icon
					:icon="['fas', 'search']"
					class="text-2xl hover:text-green-600"
				/>
			</button>
		</form>
	</div>
</template>

<style scoped>
	.modal {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.83);
		color: white;
		z-index: 1000;
	}
	.modal input {
		background-color: rgba(0, 0, 0, 0.005);
		padding: 1rem 2rem;
		border-bottom: 0.1rem solid #fff;
	}
	.modal input:focus {
		outline: none;
	}
	.modal input:active {
		background-color: none;
	}
	.close {
		position: absolute;
		top: 3rem;
		right: 3rem;
		font-size: 2rem;
	}
</style>
