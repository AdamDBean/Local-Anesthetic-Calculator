// Change this version string every time you push a major update
// This forces the browser to treat it as a new file and clear the cache
const CACHE_NAME = 'last-calc-v4'; 

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
];

// Install event: cache all essential files
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Forces the waiting service worker to become active immediately
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim(); // Immediately take control of all open pages
});

// Fetch event: serve from cache, fall back to network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
