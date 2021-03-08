<template>
  <div 
    @click="closeNavMenu"
    class="px-2 cursor-pointer fade-in"
    :class="[
      {'nav-std': !isNavMenu},
      {'nav-cta': page.isCTA && !isNavMenu},
      {'menu-std': isNavMenu},
      {'menu-cta': page.isCTA && isNavMenu}
    ]">
      <NuxtLink
        :to="page.link"
        :aria-label="page.name"
        :title="page.name"
      >
        <slot></slot>
      </NuxtLink>
  </div>
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
    @apply text-center font-medium tracking-wide text-green-900 transition-colors duration-200 hover:text-green-700
  }

  .nav-cta {
    @apply inline-flex font-bold text-green-700 h-10 px-2 items-center transition duration-200 rounded shadow-md hover:bg-green-500 hover:text-gray-100
  }

  .menu-std {
    @apply text-xl text-center font-medium tracking-wide text-green-900 transition-colors duration-200 hover:text-green-700
  }

  .menu-cta {
    @apply text-green-800 font-bold hover:text-green-700
  }

  .fade-in {
    animation: 0.2s appear;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
</style>