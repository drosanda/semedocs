// Compatibility layer for the Nuxt 2 era page options used across the docs:
//   head()   - vue-meta style head, with `hid` instead of `key`
//   jsonld() - from nuxt-jsonld, rendered as <script type="application/ld+json">
// Both are translated to `useHead()` so the pages do not have to be rewritten.
import { computed } from 'vue'
import { useHead } from '#imports'

const withKeys = (list: any) =>
  Array.isArray(list)
    ? list.map(({ hid, ...rest }: any) => (hid ? { key: hid, ...rest } : rest))
    : list

const normalize = (head: any = {}) => {
  const { meta, link, script, ...rest } = head
  return {
    ...rest,
    ...(meta ? { meta: withKeys(meta) } : {}),
    ...(link ? { link: withKeys(link) } : {}),
    ...(script ? { script: withKeys(script) } : {})
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    created(this: any) {
      const { head, jsonld } = this.$options
      if (typeof head === 'function') {
        useHead(computed(() => normalize(head.call(this))))
      }
      if (typeof jsonld === 'function') {
        const data = jsonld.call(this)
        if (data) {
          useHead({
            script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(data) }]
          })
        }
      }
    }
  })
})
