const CACHE_NAME = 'handshake-v1'
const RUNTIME_CACHE = 'handshake-runtime'
const ASSET_URLS = [
  '/',
  '/dashboard',
  '/offline.html',
]

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSET_URLS).catch(() => {
        // Gracefully handle missing offline.html
      })
    }).then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // HTML pages - network first
  if (event.request.destination === 'document' || event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseClone = response.clone()
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // Fallback to cache
          return caches.match(event.request).then((response) => {
            return response || caches.match('/offline.html')
          })
        })
    )
    return
  }

  // Assets - cache first, fallback to network
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response
        }

        const responseClone = response.clone()
        caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(event.request, responseClone)
        })

        return response
      })
    })
  )
})

// Push notification event
self.addEventListener('push', (event) => {
  if (!event.data) {
    return
  }

  const data = event.data.json()
  const options = {
    body: data.body,
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    tag: data.tag || 'notification',
    requireInteraction: data.requireInteraction || false,
    actions: data.actions || [],
    data: data.data || {},
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'Handshake', options)
  )
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if there's already a window open
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i]
        if (client.url === '/' && 'focus' in client) {
          return client.focus()
        }
      }

      // Open new window if none exists
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url || '/')
      }
    })
  )
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(
      // Sync pending messages when connection restored
      clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'SYNC_MESSAGES',
          })
        })
      })
    )
  }
})
