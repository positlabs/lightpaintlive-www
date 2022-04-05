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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "b0da681f70647ad6c4333aaf15f38897"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-0a1abdf9.entry.js"
  },
  {
    "url": "build/p-0f454813.entry.js"
  },
  {
    "url": "build/p-0f75f1af.entry.js"
  },
  {
    "url": "build/p-3d5ee632.entry.js"
  },
  {
    "url": "build/p-5730c8b8.entry.js"
  },
  {
    "url": "build/p-6bd916fe.entry.js"
  },
  {
    "url": "build/p-8849cbcb.js"
  },
  {
    "url": "build/p-8d7a8cc5.entry.js"
  },
  {
    "url": "build/p-900e966b.js"
  },
  {
    "url": "build/p-9b6a9315.js"
  },
  {
    "url": "build/p-b4553450.entry.js"
  },
  {
    "url": "build/p-beec283c.css"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
