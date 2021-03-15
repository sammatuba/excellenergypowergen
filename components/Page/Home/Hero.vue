<template>
    <section class="w-full z-50 bg-hero-photo-sunset bg-cover">
    <!-- Hero Image -->
    <!-- Hero Text -->
    <div class="px-4 pt-20 pb-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="section-heading">
        <p class="text-green font-semibold text-xl tracking-wider text-center">
          Welcome to Excell Energy & Powergen Corporation
        </p>
        <PageSectionHeading>
          Your Innovative Energy Solutions Provider
        </PageSectionHeading>
      </div>
    </div>
    <div class="py-3 flex items-center justify-center">
      <UiIconChevronDoubleDownArrow />
    </div>
    <!-- Hero Cards -->
    <div class="relative pb-4 px-4 sm:px-0">
      <!-- <div class="absolute inset-0 bg-gray-100 h-1/2"></div> -->
      <div class="relative grid items-center justify-center content-center mx-auto overflow-hidden divide-y rounded sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
        <!-- Hero Card 1 -->
        <div class="content-center w-4/5 md:w-full inline-block p-8 text-center bg-green-yellow opacity-100 shadow-lg hover:shadow hover:opacity-100 transition-opacity duration-200">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full text-green-dark opacity-100">
            <UiIconSaveMoney />
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            Save on your electricity bills.
          </p>
        </div>
        <!-- Hero Card 2 -->
        <div class="content-center w-4/5 md:w-full inline-block p-8 text-center bg-green-lime opacity-100 hover:shadow hover:opacity-100 transition-opacity duration-200">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full text-green-dark opacity-100">
            <UiIconCarbon />
          </div>
          <p class="font-bold tracking-wide text-gray-800">
            Reduce your carbon footprint.
          </p>
        </div>
        <!-- Hero Card 3 -->
        <div class="content-center w-4/5 md:w-full inline-block p-8 text-center bg-green opacity-100 hover:shadow hover:opacity-100 transition-opacity duration-200">
          <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full text-green-dark opacity-100">
            <UiIconRenewableEnergy />
          </div>
          <p class="font-bold tracking-wide text-green-dark">
            Join the renewable energy revolution.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'section'
}
</script>