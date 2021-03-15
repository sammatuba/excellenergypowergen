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
      <nav class="hidden md:flex md:space-x-4 lg:space-x-8">
        <ul class="flex items-center justify-between space-x-4">
          <LayoutNavItem :isNavMenu="false" v-for="(page, idx) in MainPages" :key="idx" :page="page">
            {{ page.name }}
          </LayoutNavItem>
        </ul>
      </nav>
      <UiButtonHamburger class="flex-initial md:hidden" v-show="!isNavMenuActive" @click="toggleNavMenu"/>
      <UiButtonClose class="flex-initial md:hidden" v-show="isNavMenuActive" @click="toggleNavMenu"/>
    </div>
    <!-- show Nav Menu in small screens -->
    <transition name="navmenu">
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
  .navmenu-enter-active, .navmenu-leave-active { transition: opacity .5s; }
  .navmenu-enter, .navmenu-leave-active { opacity: 0; }
</style>