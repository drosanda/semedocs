<template>
  <div class="doc-layout">
    <div class="main-content columns is-fullheight">
      <aside id="sidebar1" :class="{ 'is-open': open }" :aria-hidden="!open">
        <img :src="logo" width="240" height="40" alt="Seme Framework Logo">
        <div v-if="config.badge" class="badges">
          <img width="90" height="20" :src="'https://img.shields.io/badge/version-' + config.badge.version + '-ed6f75'" alt="version">
          <img width="90" height="20" src='https://travis-ci.com/drosanda/seme-framework.svg?branch=master' alt="build status">
          <img width="90" height="20" :src="'https://img.shields.io/badge/lang-' + config.badge.lang + '-e9bd2e'" alt="language">
        </div>
        <div v-if="config.search" class="search-box">
          <form method="GET" class="search-form" action="https://www.google.com/cse" target="_top">
            <div class="search-form-inner">
              <input name="cx" type="hidden" value="d6d5426aa8bd01883" />
              <input name="ie" type="hidden" value="UTF-8" />
              <input type="search" placeholder="Search..." name="q" class="form-control" required>
              <button type="submit" class="search-button"><i class="fa fa-search"></i></button>
            </div>
          </form>
        </div>
        <DocNav :items="config.nav" />
        <br>
        <br>
        <br>
      </aside>
      <div v-if="open" class="sidebar-mask" @click="open = false"></div>
      <button class="hamburger" aria-label="Toggle sidebar" :aria-expanded="open" @click="open = !open">
        <div class="hamburger"></div>
      </button>
      <div class="container column is-9">
        <slot />
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="">{{ config.footer.copyright }}</p>
          <p v-if="config.footer.links"><small>{{ config.footer.updated }} | <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> | <NuxtLink to="/term-condition">Term &amp; Condition</NuxtLink></small></p>
          <p v-else><small>{{ config.footer.updated }}</small></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import layouts from '~/data/layouts'

// Shared shell for every documentation layout. Layout files in /layouts only
// pick which entry of data/layouts.js to use.
const props = defineProps({
  name: { type: String, required: true }
})

const route = useRoute()
const config = computed(() => layouts[props.name])
const logo = '/logo.png'
const open = ref(false)

// Close the sidebar after navigating.
watch(() => route.fullPath, () => { open.value = false })

useHead(() => {
  const c = config.value
  return {
    title: c.suffix ? c.title + ' - ' + c.suffix : c.title,
    meta: [
      { key: 'description', name: 'description', content: c.description },
      { key: 'og:title', name: 'og:title', content: c.title },
      { key: 'og:description', name: 'og:description', content: c.description },
      {
        key: 'og:url',
        name: 'og:url',
        content: (process.env.BASE_URL || 'http://localhost:3001') + route.path.replace(/\/+$/, '') + '/'
      }
    ]
  }
})
</script>
