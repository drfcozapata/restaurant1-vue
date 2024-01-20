<script lang="ts" setup>
	import { computed } from 'vue';

	const reviews = [
		{
			id: 1,
			name: 'John Doe',
			review:
				'Nulla id finibus diam. Maecenas pulvinar metus id hendrerit feugiat. Pellentesque rutrum nisl ac pretium ornare. Sed quis blandit libero, in pellentesque neque. Nunc vitae laoreet augue, quis fringilla nisi.',
			img: 'images/pic-1.png',
		},
		{
			id: 2,
			name: 'Jannet Cool',
			review:
				'Aliquam suscipit ipsum ut urna pulvinar euismod. Quisque ornare pulvinar magna, ut sodales lectus pretium vel. Duis ornare et nibh non faucibus. Pellentesque sodales quam ipsum, et tempor nisi ultricies.',
			img: 'images/pic-2.png',
		},
		{
			id: 3,
			name: 'J. P. Thomas',
			review:
				'Curabitur vestibulum eleifend erat, et euismod felis. Mauris posuere sodales faucibus. Etiam rutrum lectus sit amet risus vulputate egestas. Nam non mauris sit amet arcu bibendum bibendum a quis dui.',
			img: 'images/pic-3.png',
		},
		{
			id: 4,
			name: 'Diana Britt',
			review:
				'Mauris elementum efficitur dolor et rhoncus. Vestibulum eget tellus sed elit vehicula pellentesque. Sed gravida in leo eu placerat. Curabitur convallis, diam vitae rutrum dictum, massa ex interdum est, ut.',
			img: 'images/pic-4.png',
		},
	];

	const reviewByScreens = computed(() => {
		if (screen.width < 768) {
			return 1;
		} else if (screen.width >= 768 && screen.width < 1280) {
			return 2;
		} else {
			return 3;
		}
	});
</script>

<template>
	<section id="review" class="py-4 md:py-6 xl:py-8 container">
		<h3
			class="text-[1.4rem] leading-3 3xl:text-2xl text-green-600 text-center font-bold mb-2"
		>
			Customer's Review
		</h3>
		<h2
			class="text-[2.1rem] 3xl:text-4xl text-[#192a56] text-center font-bold uppercase mb-8"
		>
			WHAT THEY SAY
		</h2>

		<swiper-container
			:slides-per-view="reviewByScreens"
			:centered-slides="false"
			:pagination="false"
			:breakpoints="{
				768: {
					slidesPerView: 1,
				},
				1024: {
					slidesPerView: 2,
				},
				1366: {
					slidesPerView: 3,
				},
			}"
			:loop="true"
			:autoplay="{
				delay: 15000,
			}"
		>
			<swiper-slide
				class="flex flex-col 3xl:flex-row xl:gap-10 xl:items-center xl:justify-between"
				v-for="review in reviews"
				:key="review.id"
			>
				<div
					class="w-[90%] lg:w-[85%] xl:w-[88%] 2xl:w-[84%] 3xl:w-[77%] 4xl:w-[80%] px-4 3xl:px-8 py-6 3xl:py-6 border-2 rounded-lg shadow-lg relative"
				>
					<div class="flex justify-between">
						<div class="flex gap-3 3xl:gap-2 4xl:gap-4 items-center">
							<img
								:src="review.img"
								:alt="review.name"
								class="w-[78px] 2xl:w-[82px] 3xl:w-[84px] 4xl:w-[88px] h-[78px] 2xl:h-[82px] 3xl:h-[84px] 4xl:h-[88px] rounded-full"
							/>
							<div class="flex flex-col">
								<h3
									class="text-[#192a56] text-[1.3rem] 2xl:text-[1.2rem] 3xl:text-[1.25rem] 4xl:text-[1.6rem] font-bold"
								>
									{{ review.name }}
								</h3>
								<div
									class="flex gap-[2px] 3xl:gap-1 text-green-600 text-base 3xl:text-sm 4xl:text-lg"
								>
									<font-awesome-icon :icon="['fas', 'star']" />
									<font-awesome-icon :icon="['fas', 'star']" />
									<font-awesome-icon :icon="['fas', 'star']" />
									<font-awesome-icon :icon="['fas', 'star']" />
									<font-awesome-icon :icon="['fas', 'star-half-stroke']" />
								</div>
							</div>
						</div>
						<font-awesome-icon
							:icon="['fas', 'quote-right']"
							class="text-[90px] 2xl:text-[85px] 4xl:text-[110px] text-gray-300"
						/>
					</div>
					<p class="mt-5 text-gray-500 text-base 3xl:text-xl leading-6 3xl:leading-9">
						{{ review.review }}
					</p>
				</div>
			</swiper-slide>
		</swiper-container>
	</section>
</template>
