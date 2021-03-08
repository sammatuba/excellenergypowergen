<template>
  <div class="inline-flex items-center FadeInLogo">
    <svg 
      class="w-8 text-deep-purple-accent-400"
      viewBox="0 0 24 24"
      stroke-linejoin="round"
      stroke-width="2"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke="currentColor"
      fill="none"
    >
      <rect x="3" y="1" width="7" height="12"></rect>
      <rect x="3" y="17" width="7" height="6"></rect>
      <rect x="14" y="1" width="7" height="6"></rect>
      <rect x="14" y="11" width="7" height="12"></rect>
    </svg>
    <span
      class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
      >Excell Energy</span
    >
  </div>
</template>

<style>
.FadeInLogo {
  animation: 0.2s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
