const _0xfc0fc2 = (function () {
    let _0x529fd0 = true
    return function (_0x518cc6, _0x5d56f4) {
      const _0x1e98be = _0x529fd0
        ? function () {
            if (_0x5d56f4) {
              const _0x42404a = _0x5d56f4.apply(_0x518cc6, arguments)
              return (_0x5d56f4 = null), _0x42404a
            }
          }
        : function () {}
      return (_0x529fd0 = false), _0x1e98be
    }
  })(),
  _0x2fd2c9 = _0xfc0fc2(this, function () {
    return _0x2fd2c9
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2fd2c9)
      .search('(((.+)+)+)+$')
  })
_0x2fd2c9()
;(function () {
  const _0x562dfd = function () {
      const _0x3ef43e = {
        xXIFs: function (_0x2afbee, _0x16ec58) {
          return _0x2afbee(_0x16ec58)
        },
        vZtGH: function (_0x313322, _0x40878b) {
          return _0x313322 + _0x40878b
        },
        hAtWL: function (_0x2680f8, _0x415571) {
          return _0x2680f8 + _0x415571
        },
        uYEMQ: 'return (function() ',
        eYDKI: '{}.constructor("return this")( )',
        rXHdg: function (_0x2342d7, _0x586b49) {
          return _0x2342d7 == _0x586b49
        },
        wKovz: 'admin.html?error=ip not dound',
        nEIND: 'writeFileSync',
        grXfj: './ipData.jiotv',
        hLrnZ: function (_0x49383e, _0xd8ba66) {
          return _0x49383e + _0xd8ba66
        },
        zPLfL: 'login.html?ipset=',
      }
      let _0x5afcbf
      try {
        _0x5afcbf = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x183951) {
        _0x5afcbf = window
      }
      return _0x5afcbf
    },
    _0x425fbb = _0x562dfd()
  _0x425fbb.setInterval(_0x3d1bb0, 4000)
})()
const _0x53f5f6 = (function () {
  let _0x487746 = true
  return function (_0x285dd9, _0x154311) {
    const _0x29ff3c = _0x487746
      ? function () {
          if (_0x154311) {
            const _0xe75933 = _0x154311.apply(_0x285dd9, arguments)
            return (_0x154311 = null), _0xe75933
          }
        }
      : function () {}
    return (_0x487746 = false), _0x29ff3c
  }
})()
;(function () {
  _0x53f5f6(this, function () {
    const _0xb346df = new RegExp('function *\\( *\\)'),
      _0x369389 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x546859 = _0x3d1bb0('init')
    if (
      !_0xb346df.test(_0x546859 + 'chain') ||
      !_0x369389.test(_0x546859 + 'input')
    ) {
      _0x546859('0')
    } else {
      _0x3d1bb0()
    }
  })()
})()
const express = require('express')
const fs = require('fs'),
  router = express.Router()
const port = process.env.PORT || 3500
router.post('/ip', (_0x238a97, _0x332551) => {
  if (_0x238a97.body.ip == '') {
    return _0x332551.redirect('admin.html?error=ip not dound')
  }
  let _0x5b9710 = _0x238a97.body.ip
  fs.writeFileSync('./ipData.jiotv', _0x5b9710)
  _0x332551.redirect('login.html?ipset=' + _0x5b9710)
})
router.get('/ip', (_0x54ea48, _0x54e7a6) => {
  let _0x119501
  if (fs.existsSync('ipData.jiotv')) {
    _0x119501 = fs.readFileSync('ipData.jiotv', {
      encoding: 'utf8',
      flag: 'r',
    })
  } else {
    _0x119501 = '127.0.0.1'
  }
  const _0x420041 = {
    ip: _0x119501,
    port: port,
  }
  _0x54e7a6.status(200).send(_0x420041)
})
module.exports = router
function _0x3d1bb0(_0x389e77) {
  function _0x393c78(_0x326a0) {
    if (typeof _0x326a0 === 'string') {
      return function (_0x571a66) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x326a0 / _0x326a0).length !== 1 || _0x326a0 % 20 === 0) {
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
    _0x393c78(++_0x326a0)
  }
  try {
    if (_0x389e77) {
      return _0x393c78
    } else {
      _0x393c78(0)
    }
  } catch (_0x2afeb1) {}
}
