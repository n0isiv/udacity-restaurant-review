self.addEventListener("install", function(ev) {
  // store resources in cache when service worker is installed
  ev.waitUntil(
    caches.open("restaurant-review-static-01").then(function(cache) {
      return cache.addAll([
        "/css/styles.css",
        "/css/styles-up-645.css",
        "/css/styles-up-1000.css",
        "/css/styles-up-2560.css",
        "/css/styles-between-645-1000.css",
        "/data/restaurants.json",
        "/js/dbhelper.js",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/sw.js",
        "/",
        "/restaurant.html?id=1",
        "/restaurant.html?id=2",
        "/restaurant.html?id=3",
        "/restaurant.html?id=4",
        "/restaurant.html?id=5",
        "/restaurant.html?id=6",
        "/restaurant.html?id=7",
        "/restaurant.html?id=8",
        "/restaurant.html?id=9",
        "/restaurant.html?id=10",
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", function(ev) {
  // return response from cache or fetch the response from the server if the request was not cached
  ev.respondWith(
    caches.match(ev.request).then(function(response) {
      return response || fetch(ev.request);
    })
  );
});
