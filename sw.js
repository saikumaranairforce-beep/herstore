const cacheName = 'women-marketplace-v1';

const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './products.json',
  './services.json',
  './events.json',
  './training.json'
];

// INSTALL
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// FETCH
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});