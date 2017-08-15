<template lang="html">
  <div  class="col">
    <div v-for="article in articles">
      <h2>{{ article.title }}</h2>
      <small>posted by: fajar</small>
      <p class="pt-2">ini contentnya</p>
      <p class="text-right"><small>in categories</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleSummary',
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style lang="css">
</style>
