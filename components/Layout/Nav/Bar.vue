  <template>
  <div class="container">
    <div class="flex flex-nowrap items-center justify-between">
      <!-- show Logo Title at all screens -->
      <NuxtLink
        @click.native="closeNavMenu"
        :to="homePage.link"
        :aria-label="homePage.name"
        :title="homePage.name"
      > 
        <UiLogoTitle/>
      </NuxtLink>
      
      <!-- show Nav Bar in large screens -->
      <nav class="hidden md:flex flex-initial items-center md:space-x-4 lg:space-x-8">
        <LayoutNavItem v-for="(page, idx) in MainPages" :key="idx" :page="page">
          {{ page.name }}
        </LayoutNavItem>
      </nav>
      <UiButton class="flex-initial md:hidden" v-show="!isNavMenuActive" @click="toggleNavMenu"/>
      <UiButtonClose class="flex-initial md:hidden" v-show="isNavMenuActive" @click="toggleNavMenu"/>
    </div>
    <!-- show Nav Menu in small screens -->
    <transition
      enter-active-class="duration-500 ease-out"
      enter-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-75"
      leave-active-class="duration-500 ease-in"
      leave-class="translate-x-0 opacity-75"
      leave-to-class="translate-x-full opacity-0"
      mode="out-in"
    >
      <nav class="flex-col md:hidden py-4 space-y-4" v-show="isNavMenuActive">
        <LayoutNavItem :isNavMenu="true" class="block text-center" v-for="(page, idx) in MainPages" :key="idx" :page="page" :CTA="false">
          {{ page.name }}
        </LayoutNavItem>
      </nav>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    MainPages: Array
  },

  computed: {
    ...mapGetters({
      isNavMenuActive: 'isNavMenuActive'
    }),

    homePage: function() {
      return this.MainPages.filter(page => page.name === 'Home')[0]
    }
  },

  methods: {
    toggleNavMenu () {
      this.$store.commit('toggleNavMenu')
    },
    closeNavMenu () {
      this.$store.commit('closeNavMenu')
    }
  }
}
</script>

<style>
</style>