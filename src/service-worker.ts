// import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst } from "workbox-strategies";

// clientsClaim();

precacheAndRoute([]);

registerRoute("/", new NetworkFirst({ cacheName: "workbox:html" }));

registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  new CacheFirst({ cacheName: "workbox:images" })
);

// self.addEventListener("install", function (event) {
//   // Perform install steps
//   console.log("e", event);
// });
