<template>
  <ul>
    <li v-for="item in items" :key="item.to || item.href + item.text">
      <nuxt-link v-if="item.to" :to="item.to">{{ item.text }}</nuxt-link>
      <a v-else :href="item.href">{{ item.text }}</a>
      <DocNav v-if="item.children" :items="item.children" />
    </li>
  </ul>
</template>

<script>
// Renders a nested sidebar list from [{ to | href, text, children? }].
export default {
  name: 'DocNav',
  props: {
    items: { type: Array, required: true }
  }
}
</script>
