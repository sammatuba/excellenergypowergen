<template>
  <NuxtLink
    :to="page.link"
    :aria-label="page.name"
    :title="page.name"
    class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
    :class="{'inline-flex items-center justify-center h-12 px-4 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none': CTA}"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    CTA: {
      type: Boolean,
      required: true,
    },
    page: {
      type: Object,
      required: true,
    }
  }
}
</script>