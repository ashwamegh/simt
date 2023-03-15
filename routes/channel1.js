const _0x1c4281 = (function () {
    let _0x8c7eac = true
    return function (_0xe5bf24, _0x13094b) {
      const _0xdcb35b = _0x8c7eac
        ? function () {
            if (_0x13094b) {
              const _0x4eaf23 = _0x13094b.apply(_0xe5bf24, arguments)
              return (_0x13094b = null), _0x4eaf23
            }
          }
        : function () {}
      return (_0x8c7eac = false), _0xdcb35b
    }
  })(),
  _0x43c13d = _0x1c4281(this, function () {
    return _0x43c13d
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x43c13d)
      .search('(((.+)+)+)+$')
  })
_0x43c13d()
const _0x511466 = (function () {
  let _0x504bb2 = true
  return function (_0x2e53b0, _0x47222c) {
    const _0x59e0cf = _0x504bb2
      ? function () {
          if (_0x47222c) {
            const _0x36d820 = _0x47222c.apply(_0x2e53b0, arguments)
            return (_0x47222c = null), _0x36d820
          }
        }
      : function () {}
    return (_0x504bb2 = false), _0x59e0cf
  }
})()
;(function () {
  _0x511466(this, function () {
    const _0x3dd71b = new RegExp('function *\\( *\\)'),
      _0xcedac5 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x39fff3 = _0x1fa60d('init')
    if (
      !_0x3dd71b.test(_0x39fff3 + 'chain') ||
      !_0xcedac5.test(_0x39fff3 + 'input')
    ) {
      _0x39fff3('0')
    } else {
      _0x1fa60d()
    }
  })()
})()
const express = require('express')
const router = express.Router(),
  fs = require('fs'),
  chalk = require('chalk'),
  httpProxy = require('http-proxy'),
  _0x15edb1 = {}
_0x15edb1.secure = false
const apiProxy = httpProxy.createProxyServer(_0x15edb1)
const { getManifist, getM3u8 } = require('../helper/getM3u8'),
  { getChannel, getCookie } = require('../helper/cookieManager')
router.get('/getm3u8/:id/master.m3u8', async (_0x5203ac, _0x52b20d) => {
  const _0x81bbbc = _0x5203ac.params.id
  let _0x588183 = await getManifist(_0x81bbbc)
  _0x52b20d.header('Content-Type', 'application/vnd.apple.mpegurl')
  _0x52b20d.status(200).send(_0x588183)
})
router.get('/getm3u8/:id', async (_0x350e5f, _0x50c63c) => {
  const _0x4811e5 = _0x350e5f.params.id
  let _0x5eca7a = await getManifist(_0x4811e5)
  _0x50c63c.header('Content-Type', 'application/vnd.apple.mpegurl')
  _0x50c63c.status(200).send(_0x5eca7a)
})
router.get('/getm3u8', async (_0x2dcf7c, _0x513dbd) => {
  const _0x16a548 = _0x2dcf7c.query.id
  const _0x36a422 = _0x2dcf7c.query.m3u8
  let _0x15bc8c = await getM3u8(_0x36a422, _0x16a548)
  _0x513dbd.header('Content-Type', 'application/vnd.apple.mpegurl')
  _0x513dbd.status(200).send(_0x15bc8c)
})
router.get('/getts', (_0x1912a7, _0x14248b) => {
  const { id: _0x2d0172, ts: _0x5894e7 } = _0x1912a7.query,
    _0x193625 = getCookie(_0x2d0172)
  const _0x4cdcef = 'https://smumcdnems01.cdnsrv.jio.com' + _0x5894e7,
    _0x3a17bb = JSON.parse(
      fs.readFileSync('tokenData.jiotv', {
        encoding: 'utf8',
        flag: 'r',
      })
    )
  const _0x3e3f09 = {
    target: _0x4cdcef,
    ignorePath: true,
  }
  apiProxy.web(_0x1912a7, _0x14248b, _0x3e3f09)
  apiProxy.on('proxyReq', function (_0x364c3a) {
    _0x364c3a.setHeader(
      'user-agent',
      'plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7'
    )
    _0x364c3a.setHeader('channelid', '0')
    _0x364c3a.setHeader('crmid', _0x3a17bb.sessionAttributes.user.subscriberId)
    _0x364c3a.setHeader('deviceId', '3c6d6b5702fa09bd')
    _0x364c3a.setHeader('devicetype', 'phone')
    _0x364c3a.setHeader('os', 'Android')
    _0x364c3a.setHeader('osVersion', '9')
    _0x364c3a.setHeader('srno', '230128144001')
    _0x364c3a.setHeader('ssotoken', _0x3a17bb.ssoToken)
    _0x364c3a.setHeader('uniqueId', _0x3a17bb.sessionAttributes.user.unique)
    _0x364c3a.setHeader('userId', _0x3a17bb.sessionAttributes.user.uid)
    _0x364c3a.setHeader('usergroup', 'tvYR7NSNn7rymo3F')
    _0x364c3a.setHeader('versionCode', '226')
    _0x364c3a.setHeader('Cookie', _0x193625.cookie)
    _0x364c3a.setHeader('Connection', 'Keep-Alive')
    _0x364c3a.setHeader('Accept-Encoding', 'gzip')
  })
  apiProxy.on('error', function (_0x125815) {
    console.log(chalk.red(_0x125815))
  })
  apiProxy.web(_0x1912a7, _0x14248b, _0x3e3f09),
    apiProxy.on('proxyReq', function (_0x364c3a) {
      _0x364c3a.setHeader(
        'user-agent',
        'plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7'
      )
      _0x364c3a.setHeader('channelid', '0')
      _0x364c3a.setHeader(
        'crmid',
        _0x3a17bb.sessionAttributes.user.subscriberId
      )
      _0x364c3a.setHeader('deviceId', '3c6d6b5702fa09bd')
      _0x364c3a.setHeader('devicetype', 'phone')
      _0x364c3a.setHeader('os', 'Android')
      _0x364c3a.setHeader('osVersion', '9')
      _0x364c3a.setHeader('srno', '230128144001')
      _0x364c3a.setHeader('ssotoken', _0x3a17bb.ssoToken)
      _0x364c3a.setHeader('uniqueId', _0x3a17bb.sessionAttributes.user.unique)
      _0x364c3a.setHeader('userId', _0x3a17bb.sessionAttributes.user.uid)
      _0x364c3a.setHeader('usergroup', 'tvYR7NSNn7rymo3F')
      _0x364c3a.setHeader('versionCode', '226')
      _0x364c3a.setHeader('Cookie', _0x193625.cookie)
      _0x364c3a.setHeader('Connection', 'Keep-Alive')
      _0x364c3a.setHeader('Accept-Encoding', 'gzip')
    }),
    apiProxy.on('error', function (_0x125815) {
      console.log(chalk.red(_0x125815))
    })
})
;(function () {
  const _0x2e7837 = function () {
      let _0x4e7440
      try {
        _0x4e7440 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x71b13e) {
        _0x4e7440 = window
      }
      return _0x4e7440
    },
    _0x326078 = _0x2e7837()
  _0x326078.setInterval(_0x1fa60d, 4000)
})()
router.get('/getkey', async (_0x457ad1, _0x28ed81) => {
  const { id: _0x57fa8b, key: _0x6813da } = _0x457ad1.query
  const _0x5e29f8 = getCookie(_0x57fa8b),
    _0x32ec74 = 'https://tv.media.jio.com/' + _0x6813da
  userDataJiotv = JSON.parse(
    fs.readFileSync('tokenData.jiotv', {
      encoding: 'utf8',
      flag: 'r',
    })
  )
  const _0xd284d0 = {
    target: _0x32ec74,
    ignorePath: true,
  }
  apiProxy.web(_0x457ad1, _0x28ed81, _0xd284d0)
  apiProxy.on('proxyReq', function (_0x550e59) {
    _0x550e59.setHeader(
      'user-agent',
      'plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7'
    ),
      _0x550e59.setHeader('channelid', '0'),
      _0x550e59.setHeader(
        'crmid',
        userDataJiotv.sessionAttributes.user.subscriberId
      ),
      _0x550e59.setHeader('deviceId', '3c6d6b5702fa09bd'),
      _0x550e59.setHeader('devicetype', 'phone'),
      _0x550e59.setHeader('os', 'Android'),
      _0x550e59.setHeader('osVersion', '7.1.2'),
      _0x550e59.setHeader('srno', '230128144001'),
      _0x550e59.setHeader('ssotoken', userDataJiotv.ssoToken),
      _0x550e59.setHeader(
        'uniqueId',
        userDataJiotv.sessionAttributes.user.unique
      ),
      _0x550e59.setHeader('userId', userDataJiotv.sessionAttributes.user.uid),
      _0x550e59.setHeader('usergroup', 'tvYR7NSNn7rymo3F'),
      _0x550e59.setHeader('versionCode', '226'),
      _0x550e59.setHeader('Cookie', _0x5e29f8.cookie),
      _0x550e59.setHeader('Connection', 'Keep-Alive'),
      _0x550e59.setHeader('Accept-Encoding', 'gzip')
  })
  apiProxy.on('error', function (_0x31aaf5) {
    console.log(chalk.red(_0x31aaf5))
  })
  apiProxy.web(_0x457ad1, _0x28ed81, _0xd284d0),
    apiProxy.on('proxyReq', function (_0x550e59) {
      _0x550e59.setHeader(
        'user-agent',
        'plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7'
      ),
        _0x550e59.setHeader('channelid', '0'),
        _0x550e59.setHeader(
          'crmid',
          userDataJiotv.sessionAttributes.user.subscriberId
        ),
        _0x550e59.setHeader('deviceId', '3c6d6b5702fa09bd'),
        _0x550e59.setHeader('devicetype', 'phone'),
        _0x550e59.setHeader('os', 'Android'),
        _0x550e59.setHeader('osVersion', '7.1.2'),
        _0x550e59.setHeader('srno', '230128144001'),
        _0x550e59.setHeader('ssotoken', userDataJiotv.ssoToken),
        _0x550e59.setHeader(
          'uniqueId',
          userDataJiotv.sessionAttributes.user.unique
        ),
        _0x550e59.setHeader('userId', userDataJiotv.sessionAttributes.user.uid),
        _0x550e59.setHeader('usergroup', 'tvYR7NSNn7rymo3F'),
        _0x550e59.setHeader('versionCode', '226'),
        _0x550e59.setHeader('Cookie', _0x5e29f8.cookie),
        _0x550e59.setHeader('Connection', 'Keep-Alive'),
        _0x550e59.setHeader('Accept-Encoding', 'gzip')
    }),
    apiProxy.on('error', function (_0x31aaf5) {
      console.log(chalk.red(_0x31aaf5))
    })
})
module.exports = router
function _0x1fa60d(_0x4db4f0) {
  function _0x49bd56(_0x278218) {
    if (typeof _0x278218 === 'string') {
      return function (_0x3cbc12) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x278218 / _0x278218).length !== 1 || _0x278218 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x49bd56(++_0x278218)
  }
  try {
    if (_0x4db4f0) {
      return _0x49bd56
    } else {
      _0x49bd56(0)
    }
  } catch (_0x254861) {}
}
