this.addEventListener("install", e=>{
   e.waitUntil(caches.open("14november2017"))
})
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('23september2017').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
this.addEventListener("activate", e=>{
    const lastCache = "14november2017"
    e.waitUntil(
        caches.keys().then(keys=>{
            return Promise.all(keys.map(k=>{
                if(k !== lastCache){
                    return caches.delete(k)
                }
            }))
    }))
})
