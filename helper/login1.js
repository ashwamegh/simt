const _0x4597b2 = (function () {
  let _0x460d1b = true
  return function (_0x556a9c, _0xa9787f) {
    const _0x298101 = _0x460d1b
      ? function () {
          if (_0xa9787f) {
            const _0x5f412c = _0xa9787f.apply(_0x556a9c, arguments)
            return (_0xa9787f = null), _0x5f412c
          }
        }
      : function () {}
    return (_0x460d1b = false), _0x298101
  }
})()
const _0x59ac66 = _0x4597b2(this, function () {
  return _0x59ac66
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x59ac66)
    .search('(((.+)+)+)+$')
})
_0x59ac66()
const _0x597121 = (function () {
  let _0x1b98cc = true
  return function (_0x45a90e, _0x30ae5f) {
    const _0x4c63ff = _0x1b98cc
      ? function () {
          if (_0x30ae5f) {
            const _0x367308 = _0x30ae5f.apply(_0x45a90e, arguments)
            return (_0x30ae5f = null), _0x367308
          }
        }
      : function () {}
    return (_0x1b98cc = false), _0x4c63ff
  }
})()
;(function () {
  _0x597121(this, function () {
    const _0x1c99f6 = new RegExp('function *\\( *\\)'),
      _0x3391b4 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x3437d1 = _0x1c0751('init')
    if (
      !_0x1c99f6.test(_0x3437d1 + 'chain') ||
      !_0x3391b4.test(_0x3437d1 + 'input')
    ) {
      _0x3437d1('0')
    } else {
      _0x1c0751()
    }
  })()
})()
const fetch = require('node-fetch'),
  fs = require('fs'),
  _0x2b87bb = {}
_0x2b87bb.devicetype = 'phone'
_0x2b87bb.appname = 'RJIL_JioTV'
_0x2b87bb.os = 'android'
_0x2b87bb['Content-Type'] = 'application/json'
_0x2b87bb.Host = 'jiotvapi.media.jio.com'
_0x2b87bb.Connection = 'Keep-Alive'
_0x2b87bb['Accept-Encoding'] = 'gzip'
_0x2b87bb['User-Agent'] = 'okhttp/4.2.2'
const _0x5726b2 = {}
_0x5726b2.method = 'POST'
_0x5726b2.headers = _0x2b87bb
let options = _0x5726b2
;(function () {
  let _0x87e4d
  try {
    const _0x3c7daf = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x87e4d = _0x3c7daf()
  } catch (_0x5cf51c) {
    _0x87e4d = window
  }
  _0x87e4d.setInterval(_0x1c0751, 4000)
})()
async function sendOtp(_0x469417) {
  try {
    let _0x3f6cf2 = Buffer.from('+91' + _0x469417).toString('base64')
    const _0x461cef = { number: _0x3f6cf2 }
    options.body = JSON.stringify(_0x461cef)
    await fetch(
      'https://jiotvapi.media.jio.com/userservice/apis/v1/loginotp/send',
      options
    )
    const _0x1eedec = {}
    return (
      (_0x1eedec.success = true), (_0x1eedec.message = 'otp send'), _0x1eedec
    )
  } catch (_0x2d7f92) {
    const _0x5bfae6 = {}
    return (
      (_0x5bfae6.success = false),
      (_0x5bfae6.message = _0x2d7f92.message),
      _0x5bfae6
    )
  }
}
async function login(_0x1beb2d, _0x1bec4f) {
  try {
    let _0x286210 = Buffer.from('+91' + _0x1beb2d).toString('base64')
    options.body = JSON.stringify({
      deviceInfo: {
        consumptionDeviceName: 'SM-G935FD',
        info: {
          platform: { name: 'SM-G935FD' },
          androidId: '3c6d6b5702fa09bd',
          type: 'android',
        },
      },
      otp: _0x1bec4f,
      number: _0x286210,
    })
    let _0x597225 = await fetch(
        'https://jiotvapi.media.jio.com/userservice/apis/v1/loginotp/verify',
        options
      ),
      _0x28484e = JSON.parse(await _0x597225.text())
    if (_0x597225.status == 400) {
      const _0xd85f26 = {}
      return (
        (_0xd85f26.success = false),
        (_0xd85f26.message = _0x28484e.message),
        _0xd85f26
      )
    }
    fs.writeFileSync('./tokenData.jiotv', JSON.stringify(_0x28484e))
    const _0x429ac0 = {}
    return (
      (_0x429ac0.success = true),
      (_0x429ac0.message = 'login success'),
      _0x429ac0
    )
  } catch (_0xbf41b8) {
    const _0x57867a = {}
    return (
      (_0x57867a.success = false),
      (_0x57867a.message = _0xbf41b8.message),
      _0x57867a
    )
  }
}
const _0x320d96 = {}
_0x320d96.sendOtp = sendOtp
_0x320d96.login = login
module.exports = _0x320d96
function _0x1c0751(_0x323091) {
  function _0x176165(_0x1816c6) {
    if (typeof _0x1816c6 === 'string') {
      return function (_0x3a9526) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x1816c6 / _0x1816c6).length !== 1 || _0x1816c6 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x176165(++_0x1816c6)
  }
  try {
    if (_0x323091) {
      return _0x176165
    } else {
      _0x176165(0)
    }
  } catch (_0x42ab11) {}
}
