self.addEventListener('install', function(event) {
  console.log('✅ Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
  // Nada por ahora, se puede usar para cachear recursos
});
