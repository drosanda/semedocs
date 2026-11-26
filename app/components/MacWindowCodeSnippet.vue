<template>
  <div class="macwindow">
    <div class="titlebar">
      <div class="buttons">
        <div class="close">
          <a class="closebutton" href="#"><span><strong>x</strong></span></a>
        </div>
        <div class="minimize">
          <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
        </div>
        <div class="zoom">
          <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
        </div>
      </div>
    </div>
    <div class="maccontent">
      <highlight-code :lang="lang">
        <slot />
      </highlight-code>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'html'
    }
  }
}
</script>
