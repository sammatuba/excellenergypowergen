<template>
  <body>
    <NavigationBar />
    <main>
      <section class="">
        <figure>
          <img class="max-w-max lg:max-w-3/4" src="~/assets/stock photos/unsplash-science-in-hd.jpg">
        </figure>
      </section>

      <section class="container mx-auto px-6 p-10">
        <header>
          <h1>Solutions</h1>
        </header>
        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-2 lg:-mx-2 xl:-mx-2">
          <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <h2>Solution 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>

      <section class="container mx-auto px-6 p-10">
        <header>
          <h1>About Us</h1>
        </header>
      </section>

      <section class="container mx-auto px-6 p-10">
        <header>
          <h1>Our Projects</h1>
        </header>
      </section>

      <section class="container mx-auto px-6 p-10">
        <header>
          <h1>Our Partners</h1>
        </header>
      </section>
    <!--
      <h2>Posts</h2>
      <div v-for="post in posts" :key="post.id" class="post">
        <h3>
          <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
        </h3>
        <div v-html="post.excerpt.rendered" />
        <a :href="`blog/${post.slug}`" class="readmore">Read more ⟶</a>
      </div>
      -->
    </main>
    <Footer />
  </body>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>
