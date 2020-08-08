<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul class="breadcrumbs">
        <li class=""><nuxt-link to="/">Home</nuxt-link></li>
        <li class=""><nuxt-link to="/configuration">Configuration</nuxt-link></li>
        <li class="unavailable">Session</li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column">
        <div class="content">
          <h1 class="">Configuration: Session</h1>
          <p>Session configuration define the Session key is used by framework. If you installed 2 framework on same server with same login method and same session key, so if you logged in one of web you can automatically logged in in another web. Off course, this is can be trouble. You have to change this manually if you wont collide between your app.</p>
          <p>The session configuration located at <code>app/config/session.php</code> please change it.</p>
        </div>
      </div>

    </div>
  </div>
</template>
