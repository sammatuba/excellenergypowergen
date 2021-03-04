<template>
  <nav class="container flex items-center justify-between">
    <div class="">
      <UiLogoTitle />
    </div>
    <div class="hidden md:flex md:space-x-4 lg:space-x-8">
      <LayoutNavItem v-for="(page, idx) in nonCtaPages" :key="idx" :page="page" :CTA="page.isCTA">{{ page.name }}</LayoutNavItem>
    </div>
    <div class="hidden md:flex">
      <LayoutNavItem :page="CtaPage" :CTA="true">{{ CtaPage.name }}</LayoutNavItem>
    </div>
    <div class="flex md:hidden z-50">
      <LayoutNavButton v-if="!isMenuOpen" @click="isMenuOpen = !isMenuOpen" :isMenuOpen="isMenuOpen"/>
      <LayoutNavButtonClose v-if="isMenuOpen" @click="isMenuOpen = !isMenuOpen" :isMenuOpen="isMenuOpen"/>
      <div v-if="isMenuOpen" class="">
        <div class="block items-center justify-between mb-4">
          <LayoutNavButtonClose @click="isMenuOpen = !isMenuOpen" :isMenuOpen="isMenuOpen"/>
        </div>
        <nav>
          <div class="space-y-4">
            <LayoutNavItem class="block" v-for="(page, idx) in MainPages" :key="idx" :page="page" :CTA="false">{{ page.name }}</LayoutNavItem>
          </div>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
data() {
    return {
      MainPages: [
        {link: '/', name: 'Home', isCTA: false},
        {link: '/solutions', name: 'Solutions', isCTA: false},
        {link: '/about', name: 'About', isCTA: false},
        {link: '/faq', name: 'FAQ', isCTA: false},
        {link: '/get-free-quote', name: 'Get Free Quote', isCTA: true},
      ],
      isMenuOpen: false
    };
  },

  computed: {
    nonCtaPages: function() {
      return this.MainPages.filter(page => page.isCTA === false)
    },
    CtaPage: function() {
      return this.MainPages.filter(page => page.isCTA === true)[0]
    },
  }
}
</script>

<style>

</style>