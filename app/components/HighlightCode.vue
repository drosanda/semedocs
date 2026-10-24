<template>
  <pre><code :class="['hljs', language]" v-html="html"></code></pre>
</template>

<script setup>
// Drop-in replacement for vue-highlight.js's <highlight-code>.
// Takes the slot text, strips common indentation, trims it and highlights it.
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import plaintext from 'highlight.js/lib/languages/plaintext'
import phpTemplate from 'highlight.js/lib/languages/php-template'
import php from 'highlight.js/lib/languages/php'
import scss from 'highlight.js/lib/languages/scss'
import json from 'highlight.js/lib/languages/json'
import shell from 'highlight.js/lib/languages/shell'
import sql from 'highlight.js/lib/languages/sql'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('phpt', phpTemplate)
hljs.registerLanguage('php', php)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('json', json)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('sql', sql)

const props = defineProps({
  lang: { type: String, default: 'html' }
})
const slots = useSlots()

const language = computed(() => props.lang)

function slotText(nodes) {
  if (!nodes) return ''
  return [].concat(nodes).map((node) => {
    if (typeof node === 'string') return node
    if (typeof node.children === 'string') return node.children
    if (Array.isArray(node.children)) return slotText(node.children)
    return ''
  }).join('')
}

function dedent(code) {
  const lines = code.replace(/\t/g, '  ').split('\n')
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length)
  const min = indents.length ? Math.min(...indents) : 0
  return lines.map((l) => l.slice(min)).join('\n').trim()
}

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const html = computed(() => {
  const code = dedent(slotText(slots.default && slots.default()))
  if (!hljs.getLanguage(props.lang)) return escapeHtml(code)
  return hljs.highlight(code, { language: props.lang, ignoreIllegals: true }).value
})
</script>
