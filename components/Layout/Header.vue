<template>
  <div class="w-full bg-white fixed top-0 z-50 opacity-75">
    <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"> 
      <LayoutNavBar :MainPages="MainPages"/>
    </div>
  </div>
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
      ]
    };
  }
}
</script>