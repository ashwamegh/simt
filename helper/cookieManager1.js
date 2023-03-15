const _0x46dcf1 = (function () {
    let _0x48dda6 = true
    return function (_0x3d7b09, _0x134940) {
      const _0x4371d8 = _0x48dda6
        ? function () {
            if (_0x134940) {
              const _0x575685 = _0x134940.apply(_0x3d7b09, arguments)
              return (_0x134940 = null), _0x575685
            }
          }
        : function () {}
      return (_0x48dda6 = false), _0x4371d8
    }
  })(),
  _0x2ae63b = _0x46dcf1(this, function () {
    return _0x2ae63b
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2ae63b)
      .search('(((.+)+)+)+$')
  })
_0x2ae63b()
const _0x246123 = (function () {
  let _0xb8b51a = true
  return function (_0x43d978, _0x546e71) {
    const _0x49d639 = _0xb8b51a
      ? function () {
          if (_0x546e71) {
            const _0x3bdf52 = _0x546e71.apply(_0x43d978, arguments)
            return (_0x546e71 = null), _0x3bdf52
          }
        }
      : function () {}
    return (_0xb8b51a = false), _0x49d639
  }
})()
;(function () {
  _0x246123(this, function () {
    const _0x11fe28 = new RegExp('function *\\( *\\)'),
      _0x10db14 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x49fafa = _0x337471('init')
    if (
      !_0x11fe28.test(_0x49fafa + 'chain') ||
      !_0x10db14.test(_0x49fafa + 'input')
    ) {
      _0x49fafa('0')
    } else {
      _0x337471()
    }
  })()
})()
const fs = require('fs')
function getCookie(_0x4bd923) {
  let _0x4c3002 = JSON.parse(
    fs.readFileSync('./CookeyData.jiotv', {
      encoding: 'utf8',
      flag: 'r',
    })
  )
  if (_0x4c3002[_0x4bd923] !== undefined) {
    const _0x140f57 = {
      success: true,
      cookie: _0x4c3002[_0x4bd923].cookie,
    }
    let _0x49086c = _0x140f57
    return _0x49086c
  } else {
    const _0x475fed = {
      success: false,
      message: 'cookie not found',
    }
    let _0x2476b0 = _0x475fed
    return _0x2476b0
  }
}
function setCookie(_0x298699, _0x168d96, _0x4f5de5) {
  let _0x536b59 = JSON.parse(
    fs.readFileSync('./CookeyData.jiotv', {
      encoding: 'utf8',
      flag: 'r',
    })
  )
  _0x536b59[_0x298699] = {}
  _0x168d96 = _0x168d96.split('?')
  return (
    (_0x536b59[_0x298699].url = _0x168d96[0]),
    (_0x536b59[_0x298699].slug = _0x168d96[1]),
    (_0x536b59[_0x298699].cookie = _0x4f5de5),
    fs.writeFileSync('./CookeyData.jiotv', JSON.stringify(_0x536b59)),
    _0x536b59[_0x298699]
  )
}
function resetCookie(_0x5d93e0) {
  let _0x585ad3 = JSON.parse(
    fs.readFileSync('./CookeyData.jiotv', {
      encoding: 'utf8',
      flag: 'r',
    })
  )
  _0x585ad3[_0x5d93e0] = {}
  fs.writeFileSync('./CookeyData.jiotv', JSON.stringify(_0x585ad3))
  const _0x3a82e9 = {
    success: true,
    message: 'reset seccesfully',
  }
  let _0x293352 = _0x3a82e9
  return _0x293352
}
;(function () {
  let _0x633423
  try {
    const _0x4c0140 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x633423 = _0x4c0140()
  } catch (_0x1b9352) {
    _0x633423 = window
  }
  _0x633423.setInterval(_0x337471, 4000)
})()
function getChannel(_0x1d2357) {
  let _0x5c0534 = JSON.parse(
    fs.readFileSync('./CookeyData.jiotv', {
      encoding: 'utf8',
      flag: 'r',
    })
  )
  if (_0x5c0534[_0x1d2357] !== undefined) {
    let _0x2686ae = _0x5c0534[_0x1d2357].url.split('/')
    _0x2686ae = _0x2686ae[_0x2686ae.length - 2]
    _0x2686ae = _0x2686ae.replace('.m3u8', '')
    const _0x2248f4 = {
      success: true,
      channel: _0x2686ae,
    }
    let _0x52c7c3 = _0x2248f4
    return _0x52c7c3
  } else {
    const _0x3247ac = {
      success: false,
      message: 'channel not found',
    }
    let _0x3b177c = _0x3247ac
    return _0x3b177c
  }
}
const _0x3fdbc7 = {}
_0x3fdbc7.resetCookie = resetCookie
_0x3fdbc7.setCookie = setCookie
_0x3fdbc7.getCookie = getCookie
_0x3fdbc7.getChannel = getChannel
module.exports = _0x3fdbc7
function _0x337471(_0x484a24) {
  function _0x56b70b(_0xc029fa) {
    if (typeof _0xc029fa === 'string') {
      return function (_0x24c00c) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0xc029fa / _0xc029fa).length !== 1 || _0xc029fa % 20 === 0) {
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
    _0x56b70b(++_0xc029fa)
  }
  try {
    if (_0x484a24) {
      return _0x56b70b
    } else {
      _0x56b70b(0)
    }
  } catch (_0x2e5deb) {}
}
