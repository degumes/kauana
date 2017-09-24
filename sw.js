this.addEventListener("install", e=>{
    e.waitUntil(caches.open("23september2017").then(c=>{
        return c.addAll([
            "/",
            "/stl.css",
            "/run.js"
        ])
    }))
})
this.addEventListener('fetch', function(event) {
    console.log(event.request)
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
    const lastCache = "23september2017"
    e.waitUntil(
        caches.keys().then(keys=>{
            return Promise.all(keys.map(k=>{
                if(k !== lastCache){
                    return caches.delete(k)
                }
            }))
    }))
})
