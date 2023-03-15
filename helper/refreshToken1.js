const _0x48d982 = (function () {
    let _0x3c7984 = true
    return function (_0x5a2d1a, _0x491993) {
      const _0x38cb23 = _0x3c7984
        ? function () {
            if (_0x491993) {
              const _0x5862fe = _0x491993.apply(_0x5a2d1a, arguments)
              return (_0x491993 = null), _0x5862fe
            }
          }
        : function () {}
      return (_0x3c7984 = false), _0x38cb23
    }
  })(),
  _0x3f167b = _0x48d982(this, function () {
    return _0x3f167b
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3f167b)
      .search('(((.+)+)+)+$')
  })
_0x3f167b()
const _0x506680 = (function () {
  let _0x4b685c = true
  return function (_0x4b942e, _0x241722) {
    const _0x1494f0 = _0x4b685c
      ? function () {
          if (_0x241722) {
            const _0x21cead = _0x241722.apply(_0x4b942e, arguments)
            return (_0x241722 = null), _0x21cead
          }
        }
      : function () {}
    return (_0x4b685c = false), _0x1494f0
  }
})()
;(function () {
  _0x506680(this, function () {
    const _0x413932 = new RegExp('function *\\( *\\)'),
      _0x36ed9d = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x53a298 = _0x5d7614('init')
    if (
      !_0x413932.test(_0x53a298 + 'chain') ||
      !_0x36ed9d.test(_0x53a298 + 'input')
    ) {
      _0x53a298('0')
    } else {
      _0x5d7614()
    }
  })()
})()
;(function () {
  let _0x8eb36c
  try {
    const _0x4776ff = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x8eb36c = _0x4776ff()
  } catch (_0x438de8) {
    _0x8eb36c = window
  }
  _0x8eb36c.setInterval(_0x5d7614, 4000)
})()
const fetch = require('node-fetch'),
  fs = require('fs'),
  _0x2ce446 = {}
_0x2ce446.devicetype = 'phone'
_0x2ce446.versionCode = '290'
_0x2ce446.os = 'android'
_0x2ce446.Connection = 'close'
_0x2ce446['Content-Type'] = 'application/json; charset=utf-8'
_0x2ce446['Content-Length'] = '108'
_0x2ce446.Host = 'auth.media.jio.com'
_0x2ce446['Accept-Encoding'] = 'gzip'
_0x2ce446['User-Agent'] = 'okhttp/4.2.2'
const _0xf0225a = {}
_0xf0225a.method = 'POST'
_0xf0225a.headers = _0x2ce446
var options = _0xf0225a
async function genNewAccessToken() {
  try {
    let _0x4ec8ba = JSON.parse(
      fs.readFileSync('tokenData.jiotv', {
        encoding: 'utf8',
        flag: 'r',
      })
    )
    options.body = JSON.stringify({
      appName: 'RJIL_JioTV',
      deviceId: '3c6d6b5702fa09bd',
      refreshToken: _0x4ec8ba.refreshToken,
    })
    let _0x1fa49f = await fetch(
        'https://auth.media.jio.com/tokenservice/apis/v1/refreshtoken?langId=6',
        options
      ),
      _0x11cf71 = JSON.parse(await _0x1fa49f.text())
    if (_0x11cf71.authToken) {
      _0x4ec8ba.authToken = _0x11cf71.authToken
      fs.writeFileSync('./tokenData.jiotv', JSON.stringify(_0x4ec8ba))
    } else {
      const _0x93c5d3 = {}
      return (
        (_0x93c5d3.success = true),
        (_0x93c5d3.message = 'Token expire login again.'),
        _0x93c5d3
      )
    }
    const _0x298d0b = {}
    return (
      (_0x298d0b.success = true),
      (_0x298d0b.message = 'AuthToken Genrated'),
      _0x298d0b
    )
  } catch (_0x3e101d) {
    const _0x1828a0 = {}
    return (
      (_0x1828a0.success = false),
      (_0x1828a0.message = _0x3e101d.message),
      _0x1828a0
    )
  }
}
module.exports = genNewAccessToken
function _0x5d7614(_0x318f0f) {
  function _0x3fbcec(_0x251d18) {
    if (typeof _0x251d18 === 'string') {
      return function (_0x42cf40) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x251d18 / _0x251d18).length !== 1 || _0x251d18 % 20 === 0) {
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
    _0x3fbcec(++_0x251d18)
  }
  try {
    if (_0x318f0f) {
      return _0x3fbcec
    } else {
      _0x3fbcec(0)
    }
  } catch (_0x3742fd) {}
}
