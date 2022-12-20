// Twitter blue
(function(a,c,d,e){if(!a[c]){var b=a[c]={};b[d]=[];b[e]=function(a){b[d].push(a)}}})(window,'Scroll','_q','do');
Scroll.config = {detected:document.cookie.indexOf("scroll0=")>-1};
s = document.createElement("script");
s.src = '//static.scroll.com/js/scroll.js';
s.async = 'async';
document.getElementsByTagName('Head')[0].appendChild(s);

function removeAds() {
  var twitterBlueCookie = document.cookie.match(`(^|;) ?${"scroll0"}=([^;]*)(;|$)`)

  if (twitterBlueCookie && twitterBlueCookie.length > 1) {
    var ads = document.querySelectorAll(".ad--desktop, .ad--mobile, #slug_fixedBottom, .grey-bg")
    ads.forEach(ad => ad.style.display = "none")
    window.wpAdFusion = {}
  }
}

window.onload = removeAds;
setTimeout(removeAds, 5000)

// One Trust update
window.dQ = window.dQ || {}
window.dQ.hold = window.dQ.hold || []
var otCookie = document.cookie.match('wp_ak_ot=(1)[^;]*(;|$)') ? RegExp.$1 : ''
window.dQ.participants = ['paywall', 'regwall', 'iab_banner', 'softwall']
// removed iab_banner to support gradual rollout.  Will remove upon completion
if (
  otCookie !== '1' &&
  window &&
  window.location.href.indexOf('gtml=true') <= 0
) {
  window.dQ.participants.splice(2, 1)
}
// define placeholder function early.  Will be replaced by Tetro client
if (typeof window.registerDisplay !== 'function') {
  window.registerDisplay = (...args) => {
    dQ.hold.push(args[0])
  }
}

var OneTrustTCFStub
var otCookie = document.cookie.match('wp_ak_ot=(1)[^;]*(;|$)') ? RegExp.$1 : ''
var geoCookie = document.cookie.match('(^|;) ?wp_geo=([^;]*)(;|$)')
  ? RegExp.$2
  : ''
if (otCookie === '1' && geoCookie.indexOf('|EEA') >= 0) {
  OneTrustTCFStub = (function (e) {
    'use strict'
    var t = function () {
        var o = this
        ;(this.LOCATOR_NAME = '__tcfapiLocator'),
          (this.win = window),
          (this.init = function () {
            for (; o.win; ) {
              try {
                if (o.win.frames[o.LOCATOR_NAME]) {
                  o.cmpFrame = o.win
                  break
                }
              } catch (e) {}
              if (o.win === window.top) break
              o.win = o.win.parent
            }
            o.cmpFrame ||
              (o.addFrame(),
              (o.win.__tcfapi = o.executeTcfApi),
              (o.win.receiveOTMessage = o.receiveIabMessage),
              (o.win.attachEvent || o.win.addEventListener)(
                'message',
                o.win.receiveOTMessage,
                !1
              ))
          }),
          (this.addFrame = function () {
            var e = o.win.document,
              t = !!o.win.frames[o.LOCATOR_NAME]
            if (!t)
              if (e.body) {
                var i = e.createElement('iframe')
                ;(i.style.cssText = 'display:none'),
                  (i.name = o.LOCATOR_NAME),
                  i.setAttribute('title', 'TCF Locator'),
                  e.body.appendChild(i)
              } else setTimeout(o.addFrame, 5)
            return !t
          }),
          (this.receiveIabMessage = function (a) {
            var n = 'string' == typeof a.data,
              e = {}
            try {
              e = n ? JSON.parse(a.data) : a.data
            } catch (e) {}
            if (e && e.__tcfapiCall) {
              var t = e.__tcfapiCall,
                r = t.callId,
                i = t.command,
                s = t.parameter,
                c = t.version
              o.executeTcfApi(
                i,
                s,
                function (e, t) {
                  var i = {
                    __tcfapiReturn: {
                      returnValue: e,
                      success: t,
                      callId: r,
                    },
                  }
                  a &&
                    a.source &&
                    a.source.postMessage &&
                    a.source.postMessage(n ? JSON.stringify(i) : i, '*')
                },
                c
              )
            }
          }),
          (this.executeTcfApi = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t]
            if (!e.length) return o.win.__tcfapi.a || []
            if ('setGdprApplies' === e[0])
              3 < e.length &&
                2 === parseInt(e[1], 10) &&
                'boolean' == typeof e[3] &&
                ((o.gdprApplies = e[3]),
                'function' == typeof e[2] && e[2]('set', !0))
            else {
              var i = e[0],
                a = e[1],
                n = e[2],
                r = e[3]
              'function' == typeof n &&
                i &&
                ('ping' === i
                  ? o.getPingReq(n, o.gdprApplies)
                  : o.addToQ(i, a, n, r))
            }
          }),
          (this.addToQ = function (e, t, i, a) {
            var n = o.win.__tcfapi
            ;(n.a = n.a || []), n.a.push([e, t, i, a])
          }),
          (this.getPingReq = function (e, t) {
            void 0 === t && (t = void 0),
              e({
                gdprApplies: t,
                cmpLoaded: !1,
                cmpStatus: 'stub',
                apiVersion: '2.0',
              })
          }),
          this.init()
      },
      i = new t()
    return (e.TCF = t), (e.tcfStub = i), e
  })({})
} else {
  // do nothing
}
