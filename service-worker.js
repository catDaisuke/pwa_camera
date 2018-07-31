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
  "./precache-manifest.a20130eebbdeaead507b164eb49f9018.js"
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
    "revision": "274bfb0cc4247ef19f209146f195d367"
  },
  {
    "url": "precache-manifest.251e893d92e40a4be5afe09c1f2f9349.js",
    "revision": "251e893d92e40a4be5afe09c1f2f9349"
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
    "url": "precache-manifest.c38732ee4c908431cd0131c300051957.js",
    "revision": "c38732ee4c908431cd0131c300051957"
  },
  {
    "url": "service-worker.js",
    "revision": "44e4fb885f4b34397bdc76af99a3e3da"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
