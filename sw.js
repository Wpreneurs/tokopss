self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("simpeltoko-v1").then(cache => {
      return cache.addAll([
        "/",
        "/?m=1",  // versi mobile
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZtVhgWU13tcGw_6TEZz84sKawnOBSlTG2-67RIvOccEWpgmnRD9xbBFjICmdwwFtQAzC8ZHDmVa3rJFJa0g7tqOAdIG0r_7_RO8mluwC3R1hpeZgOHQTqAclqilJIZAeWGy7l_SuLxMnW88Qnv1TB7ziV849hp7vZLTITZVCLWMTDG5GUPv4NKDHOaUM/s300/WhatsApp%20Image%202025-10-27%20at%2018.05.06%20(1).jpeg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});


