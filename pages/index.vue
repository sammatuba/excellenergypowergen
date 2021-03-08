<template>
  <main class="">
    <section class="js-show-on-scroll">
      <LazyPageHomeHero />
    </section>
    <section class="js-show-on-scroll">
      <LazyPageHomeOurSolutions />                   
    </section>
    <section class="js-show-on-scroll">
      <LazyPageHomeOurProjects />                   
    </section>
    <section class="js-show-on-scroll">
      <LazyPageHomeAboutUs />                   
    </section>
    <section class="js-show-on-scroll">
      <LazyPageHomeOurPartners />                   
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
</template>

<script>
export default {
}
</script>
