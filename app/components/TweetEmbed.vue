<template>
  <div ref="el" class="tweet-embed">
    <a :href="`https://twitter.com/i/status/${tweetId}`" target="_blank" rel="noopener">View this post</a>
  </div>
</template>

<script setup>
// Replaces <amp-twitter>. Loads Twitter's widgets.js once and renders the post client-side.
const props = defineProps({ tweetId: { type: String, required: true } })
const el = ref(null)

function loadWidgets() {
  if (window.twttr && window.twttr.widgets) return Promise.resolve(window.twttr)
  if (!window.__twttrLoading) {
    window.__twttrLoading = new Promise((resolve) => {
      const s = document.createElement('script')
      s.src = 'https://platform.twitter.com/widgets.js'
      s.async = true
      s.onload = () => resolve(window.twttr)
      document.head.appendChild(s)
    })
  }
  return window.__twttrLoading
}

onMounted(async () => {
  const twttr = await loadWidgets()
  const node = await twttr.widgets.createTweet(props.tweetId, el.value, { width: 300 })
  if (node) el.value.querySelector('a')?.remove()
})
</script>
