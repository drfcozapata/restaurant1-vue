import HomePage from '@/views/home/HomePage.vue';
<script lang="ts" setup>
	//
</script>

<template>
	<footer class="xl:px-5 container">
		<div class="py-4 md:py-6 xl:py-10 md:flex md:justify-between">
			<div class="flex flex-col gap-1 xl:gap-3 items-center md:items-start mb-3 xl:mb-0">
				<h3
					class="text-[1.8rem] md:text-[1.6rem] xl:text-[2.1rem] 3xl:text-4xl text-[#192a56] font-bold"
				>
					Locations
				</h3>
				<p><a href="#">Venezuela</a></p>
				<p><a href="#">USA</a></p>
				<p><a href="#">Mexico</a></p>
				<p><a href="#">Italy</a></p>
				<p><a href="#">Spain</a></p>
			</div>
			<div class="flex flex-col gap-1 xl:gap-3 items-center md:items-start mb-3 xl:mb-0">
				<h3
					class="text-[1.8rem] md:text-[1.6rem] xl:text-[2.1rem] 3xl:text-4xl text-[#192a56] font-bold"
				>
					Quick Links
				</h3>
				<p><a href="#home">Home</a></p>
				<p><a href="#dishes">Our Dishes</a></p>
				<p><a href="#about">About Us</a></p>
				<p><a href="#menu">Our Menu</a></p>
				<p><a href="#review">Costumer Reviews</a></p>
				<p><a href="#order">Order Now</a></p>
			</div>
			<div class="flex flex-col gap-1 xl:gap-3 items-center md:items-start mb-3 xl:mb-0">
				<h3
					class="text-[1.8rem] md:text-[1.6rem] xl:text-[2.1rem] 3xl:text-4xl text-[#192a56] font-bold"
				>
					Contact Info
				</h3>
				<p><a href="tel:+12-345-6789012">+12-345-6789012</a></p>
				<p><a href="https://wa.me/584120918548">+58-412-0918548</a></p>
				<p><a href="mailto:info@doulos-dev.net">info@doulos-dev.net</a></p>
				<p><a href="mailto:drfcozapata@gmail.com">drfcozapata@gmail.com</a></p>
				<p>Puerto Ordaz, Venezuela</p>
			</div>
			<div class="flex flex-col gap-1 xl:gap-3 items-center md:items-start">
				<h3
					class="text-[1.8rem] md:text-[1.6rem] xl:text-[2.1rem] 3xl:text-4xl text-[#192a56] font-bold"
				>
					Follow Us
				</h3>
				<p><a href="#">Facebook</a></p>
				<p><a href="https://twitter.com/drfcozapata">Twitter</a></p>
				<p><a href="#">Instagram</a></p>
				<p><a href="https://linkedin.com/in/drfcozapata">LinkedIn</a></p>
			</div>
		</div>

		<hr />

		<div class="py-3 text-center xl:flex xl:justify-between">
			<p>Designed by <span class="text-green-600">Mr. Web Designer</span></p>
			<p>
				All right reserved @ 2024 by
				<span class="text-green-600"
					>Francisco Zapata <a href="https://doulos-dev.net">(Doulos Dev)</a></span
				>
			</p>
		</div>
	</footer>
</template>

<style scoped>
	footer p,
	footer p a {
		font-size: 1.25rem;
		color: rgb(156 163 175);
	}
	footer p a:hover {
		text-decoration: underline;
		color: rgb(22 163 74);
	}
	@media (max-width: 1280px) {
		footer p,
		footer p a {
			font-size: 1rem;
		}
	}
</style>
