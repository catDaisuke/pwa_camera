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
  "/precache-manifest.7a562c1f80f6bb0a9e31f51b3dd7d356.js"
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
    "revision": "e9d12b86acbb39ff24131f992a441263"
  },
  {
    "url": "precache-manifest.6f5ff278f05855d9f3208167b34f7f42.js",
    "revision": "6f5ff278f05855d9f3208167b34f7f42"
  },
  {
    "url": "service-worker.js",
    "revision": "ad053036a0d3b8b5f98ccc314a232fab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
