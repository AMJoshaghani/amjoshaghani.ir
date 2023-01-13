<template>
  <a :href="href">
    <i :class="icon"></i>
  </a>
</template>

<script>
export default {
name: "iconI",
  props: {
    href: String,
    icon: String
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
