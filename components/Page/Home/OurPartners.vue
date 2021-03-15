<template>
  <section class="page-section">
    <div class="section-heading">
      <PageSectionHeading>
        Our Partners
      </PageSectionHeading>
      <PageSectionSubHeading>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </PageSectionSubHeading>
    </div>
    <div class="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
      <div class="text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">World</h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Sport</h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Weather</h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Projects</h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Fitness</h6>
      </div>
      <div class="text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <svg class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">News</h6>
      </div>
    </div>
    <div class="float-right">
      <NuxtLink
        :to="'/about#our-partners'"
        :aria-label="'Our Partners'"
        :title="'Our Partners'"
      >
        <UiButtonMore>
          See all
        </UiButtonMore>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'section'
}
</script>