// Self-destroying service worker.
// The site used to ship a PWA service worker (@nuxtjs/pwa). That was removed, so
// this file stays at /sw.js to unregister the old worker in returning visitors' browsers.
// https://github.com/NekR/self-destroying-sw

self.addEventListener('install', function () {
  self.skipWaiting()
})

self.addEventListener('activate', function () {
  self.registration.unregister()
    .then(function () {
      return self.clients.matchAll()
    })
    .then(function (clients) {
      clients.forEach(function (client) { client.navigate(client.url) })
    })
})
