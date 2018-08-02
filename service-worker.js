/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts(
  "./precache-manifest.843157aa84f85714d8d02629cab80d54.js"
);

workbox.core.setCacheNameDetails({prefix: "ibm-camera-pwa"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "de10c9170017bb09f31a3de5994ff7aa"
  },
  {
    "url": "precache-manifest.227affe45b13339767ed35568899d27d.js",
    "revision": "227affe45b13339767ed35568899d27d"
  },
  {
    "url": "precache-manifest.251e893d92e40a4be5afe09c1f2f9349.js",
    "revision": "251e893d92e40a4be5afe09c1f2f9349"
  },
  {
    "url": "precache-manifest.43378e4344bb37c56be885b71f71d480.js",
    "revision": "43378e4344bb37c56be885b71f71d480"
  },
  {
    "url": "precache-manifest.493603f682d5ffe4fea5faa2be3bea8e.js",
    "revision": "493603f682d5ffe4fea5faa2be3bea8e"
  },
  {
    "url": "precache-manifest.6032ec6816832e5ae1ff34659d9fc87c.js",
    "revision": "6032ec6816832e5ae1ff34659d9fc87c"
  },
  {
    "url": "precache-manifest.6f5ff278f05855d9f3208167b34f7f42.js",
    "revision": "6f5ff278f05855d9f3208167b34f7f42"
  },
  {
    "url": "precache-manifest.7a562c1f80f6bb0a9e31f51b3dd7d356.js",
    "revision": "7a562c1f80f6bb0a9e31f51b3dd7d356"
  },
  {
    "url": "precache-manifest.85cfb57c1dcd964391e6a52043a87c16.js",
    "revision": "85cfb57c1dcd964391e6a52043a87c16"
  },
  {
    "url": "precache-manifest.8bae9e82292e297c63d6de30ba881dff.js",
    "revision": "8bae9e82292e297c63d6de30ba881dff"
  },
  {
    "url": "precache-manifest.a20130eebbdeaead507b164eb49f9018.js",
    "revision": "a20130eebbdeaead507b164eb49f9018"
  },
  {
    "url": "precache-manifest.b7d4fe40b22464586600e5a5deb36c78.js",
    "revision": "b7d4fe40b22464586600e5a5deb36c78"
  },
  {
    "url": "precache-manifest.c38732ee4c908431cd0131c300051957.js",
    "revision": "c38732ee4c908431cd0131c300051957"
  },
  {
    "url": "precache-manifest.db5bace7632effda349f537e48303213.js",
    "revision": "db5bace7632effda349f537e48303213"
  },
  {
    "url": "precache-manifest.f02930b198f33cfce37269970cec633c.js",
    "revision": "f02930b198f33cfce37269970cec633c"
  },
  {
    "url": "service-worker.js",
    "revision": "67b4e90612ace31cada61125882a2af8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
