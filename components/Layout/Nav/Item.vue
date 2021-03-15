<template>
  <li 
    @click="closeNavMenu"
    class="px-4 cursor-pointer fade-in font-bold tracking-wide text-center text-base text-green"
    :class="[
      {'nav-std': !page.isCTA && !isNavMenu},
      {'nav-cta': page.isCTA && !isNavMenu},
      {'menu-std': !page.isCTA && isNavMenu },
      {'menu-cta': page.isCTA && isNavMenu}
    ]">
      <NuxtLink
        :to="page.link"
        :aria-label="page.name"
        :title="page.name"
      >
        <slot></slot>
      </NuxtLink>
  </li>
</template>

<script>

export default {

  props: {
    isNavMenu: {
      type: Boolean,
      required: true,
    },
    page: {
      type: Object,
      required: true,
    }
  },

  methods: {
    closeNavMenu () {
      this.$store.commit('closeNavMenu')
    }
  }
}
</script>

<style scoped>

  .nav-std {
    @apply transition-colors duration-200 hover:text-green-lime
  }

  .nav-cta {
    @apply py-2 inline-flex items-center text-gray-50 bg-green duration-200 rounded shadow-md transition-colors hover:bg-green-lime hover:text-gray-50
  }

  .menu-std {
    @apply text-green transition-colors duration-200 hover:text-green-lime
  }

  .menu-cta {
    @apply text-green hover:text-green-lime
  }

  .fade-in {
    animation: 0.2s appear;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }

  .nav-std .exact-active-link {
    @apply text-green-lime
  }

  .nav-cta:active {
    @apply bg-green-lime
  }
  
</style>