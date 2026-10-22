const CACHE_NAME = 'wproute-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './rutas.json',
  './iconwp.png'
];

// Instalación
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Interceptar solicitudes y servir desde caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
