const CACHE_NAME = 'jacqueline15-cache-v1';
const urlsToCache = [
  '.',
  './index.html',
  './manifest.json',
  // Aquí añade iconos, CSS externos si tienes
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
