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
    "url": "404.html",
    "revision": "4ec42ab25435d52e9fad08b0244c4ab0"
  },
  {
    "url": "assets/css/0.styles.d7daf976.css",
    "revision": "4d2f3958fd505cec8a0475448d71295e"
  },
  {
    "url": "assets/js/10.0.0.1.1609039178414.min.js",
    "revision": "6480fb8ba7c0899dd9373fd2b9092165"
  },
  {
    "url": "assets/js/11.0.0.1.1609039178414.min.js",
    "revision": "7544453b409a634713c496e739cabc90"
  },
  {
    "url": "assets/js/12.0.0.1.1609039178414.min.js",
    "revision": "0630141f18649dd607d66d6e082adde0"
  },
  {
    "url": "assets/js/13.0.0.1.1609039178414.min.js",
    "revision": "0b2ab436b1cf0859cf59fc31520d9c5f"
  },
  {
    "url": "assets/js/14.0.0.1.1609039178414.min.js",
    "revision": "d4baa86611527c798e6af32280b8b761"
  },
  {
    "url": "assets/js/15.0.0.1.1609039178414.min.js",
    "revision": "637c1b0f960b954950ad690275ebb4fb"
  },
  {
    "url": "assets/js/16.0.0.1.1609039178414.min.js",
    "revision": "4ad972cb92e5fb876553589f66876330"
  },
  {
    "url": "assets/js/17.0.0.1.1609039178414.min.js",
    "revision": "c2dae57807298bd3c4965de09006a1af"
  },
  {
    "url": "assets/js/18.0.0.1.1609039178414.min.js",
    "revision": "f982ebdf3fb69337285c8278157f024f"
  },
  {
    "url": "assets/js/19.0.0.1.1609039178414.min.js",
    "revision": "1b72b3b567072624f8721b71b54f8786"
  },
  {
    "url": "assets/js/2.0.0.1.1609039178414.min.js",
    "revision": "007530cde18edecf4ee6cb623dc90eeb"
  },
  {
    "url": "assets/js/20.0.0.1.1609039178414.min.js",
    "revision": "4f7404b34ee97ca05be0c878bad9161f"
  },
  {
    "url": "assets/js/21.0.0.1.1609039178414.min.js",
    "revision": "97255e2d5e8dcfd6cf6b34e22c6e9eef"
  },
  {
    "url": "assets/js/22.0.0.1.1609039178414.min.js",
    "revision": "df110f9f532b65544426db2cbe8d87c6"
  },
  {
    "url": "assets/js/23.0.0.1.1609039178414.min.js",
    "revision": "225ff31ad86a867d3607a251882f7115"
  },
  {
    "url": "assets/js/24.0.0.1.1609039178414.min.js",
    "revision": "d158c7afe1cf5f4e2e19526425f61c28"
  },
  {
    "url": "assets/js/25.0.0.1.1609039178414.min.js",
    "revision": "62380bf4260caac3be8c4a0c338c7a8d"
  },
  {
    "url": "assets/js/26.0.0.1.1609039178414.min.js",
    "revision": "e180ad864d7a9b348f4a42b835fbec84"
  },
  {
    "url": "assets/js/27.0.0.1.1609039178414.min.js",
    "revision": "91eb4e0ccd79fa3e5b3b5119a5e1806a"
  },
  {
    "url": "assets/js/28.0.0.1.1609039178414.min.js",
    "revision": "af6c0fc224dc32448a0100699b4d1cae"
  },
  {
    "url": "assets/js/29.0.0.1.1609039178414.min.js",
    "revision": "c1e561c0ff4cbeccfa274001cb18f053"
  },
  {
    "url": "assets/js/3.0.0.1.1609039178414.min.js",
    "revision": "842df18a2abf97d15b67383a76c82720"
  },
  {
    "url": "assets/js/30.0.0.1.1609039178414.min.js",
    "revision": "8dd94341cc0d8df5c92fe86407c6aa75"
  },
  {
    "url": "assets/js/31.0.0.1.1609039178414.min.js",
    "revision": "748b85a39427b6a2fc42f6c84e1f58e1"
  },
  {
    "url": "assets/js/32.0.0.1.1609039178414.min.js",
    "revision": "2091fb9efae797f19422e659402aaec1"
  },
  {
    "url": "assets/js/33.0.0.1.1609039178414.min.js",
    "revision": "ee820216b65db6d0596cdadac98c6fb5"
  },
  {
    "url": "assets/js/34.0.0.1.1609039178414.min.js",
    "revision": "63322d1ffd3565e8a81f8a69a3b45dba"
  },
  {
    "url": "assets/js/35.0.0.1.1609039178414.min.js",
    "revision": "b9179f307a32ec9477111103ee34abc6"
  },
  {
    "url": "assets/js/36.0.0.1.1609039178414.min.js",
    "revision": "bde39e70ab14dc927f064195d14fc214"
  },
  {
    "url": "assets/js/4.0.0.1.1609039178414.min.js",
    "revision": "6cd6f62869bf77c939fb4b3b3b1fcdd6"
  },
  {
    "url": "assets/js/5.0.0.1.1609039178414.min.js",
    "revision": "2cfb9ef4ea8fc2df4023dab4d1c82105"
  },
  {
    "url": "assets/js/6.0.0.1.1609039178414.min.js",
    "revision": "3a7c36064a71d6baf7f6f5133113059b"
  },
  {
    "url": "assets/js/7.0.0.1.1609039178414.min.js",
    "revision": "803aa8ab914bdb7c17ab4dec49cfb640"
  },
  {
    "url": "assets/js/8.0.0.1.1609039178414.min.js",
    "revision": "4e4f3ab420a4625105c2169a57a4b877"
  },
  {
    "url": "assets/js/9.0.0.1.1609039178414.min.js",
    "revision": "78a705748bf8688cf38af66f04362c09"
  },
  {
    "url": "assets/js/app.0.0.1.1609039178414.min.js",
    "revision": "29818bb73d3a38f03c2c94209c556839"
  },
  {
    "url": "assets/js/styles.0.0.1.1609039178414.min.js",
    "revision": "22f22b49cc901aa95826401f7ce0930c"
  },
  {
    "url": "github.html",
    "revision": "55f3f8e253338b0045a00999919e0603"
  },
  {
    "url": "image/avatar/husky_stuck-out_tongue.jpg",
    "revision": "0ca0534177db513818bb9ae788f53a85"
  },
  {
    "url": "image/icon/logo.png",
    "revision": "80f20220a76e28bbb0e5d0f84438eb26"
  },
  {
    "url": "image/icon/national_emblem.png",
    "revision": "43785e9bb267769dd175950f32cab57f"
  },
  {
    "url": "image/icon/theme_max.png",
    "revision": "9e46eaf62038a96e7e4e4c5d0a159aaa"
  },
  {
    "url": "image/icon/theme_min.png",
    "revision": "3b2778717967946c346bbc0b12027ada"
  },
  {
    "url": "index.html",
    "revision": "cd7b7795902bf2b0e146f30816c06462"
  },
  {
    "url": "post/1970/01/01/coding/index.html",
    "revision": "eedca742eccade079c99792bc85d11d6"
  },
  {
    "url": "post/2020/12/08/dark-mode/index.html",
    "revision": "422cdeb1f7d44c3c8e71a9c2ce7058e3"
  },
  {
    "url": "post/2020/12/08/deploy-blog-on-server/index.html",
    "revision": "561b6eb87de01e6e3abc697327b77714"
  },
  {
    "url": "post/2020/12/10/is-not-a-valid-identifier/index.html",
    "revision": "45e1b7538e69894f0da2ea9801f01400"
  },
  {
    "url": "post/2020/12/11/start-nginx-when-boot/index.html",
    "revision": "b02d81110f43260b236a5cc8280d6490"
  },
  {
    "url": "post/2020/12/15/gp-database-exam/index.html",
    "revision": "058cba885d350e6ff996e1d9b918fd3e"
  },
  {
    "url": "post/2020/12/15/mysql-database-exam/index.html",
    "revision": "dcc102a976453b453916dfa279aedd17"
  },
  {
    "url": "post/2020/12/15/oracle-database-exam/index.html",
    "revision": "ec2a6549b74c70c3ee197183414cab06"
  },
  {
    "url": "post/2020/12/25/global-loading-in-vuepress/index.html",
    "revision": "53cc8f6d0fb6383fdbc626610abf5771"
  },
  {
    "url": "post/index.html",
    "revision": "36b77ff3ffd46493a20a70f6b69c4089"
  },
  {
    "url": "post/NaN/NaN/NaN/_17-enable-gzip-on-nginx/index.html",
    "revision": "b837e4cdb238a4c4eac01cf6cf00843f"
  },
  {
    "url": "tag/index.html",
    "revision": "3e37692da486a491739dc4c0a92b6a40"
  },
  {
    "url": "tag/java/index.html",
    "revision": "8d5bcbe04893e7e840f1b8b100638cbb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0604f675f5c66859d5c0b457d3f90fee"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "53433dff56cd41382dc99346835da253"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "c12c99443a33763c4ef8195ed7ff0f80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
