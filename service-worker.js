// Install event
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

// Fetch event (network first)
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() => {})
  );
});
