const _0x3c85ef = (function () {
    let _0x1bc998 = true
    return function (_0x47cc87, _0x44bd6a) {
      const _0x383aed = _0x1bc998
        ? function () {
            if (_0x44bd6a) {
              const _0x55ee39 = _0x44bd6a.apply(_0x47cc87, arguments)
              return (_0x44bd6a = null), _0x55ee39
            }
          }
        : function () {}
      return (_0x1bc998 = false), _0x383aed
    }
  })(),
  _0x7b8c38 = _0x3c85ef(this, function () {
    return _0x7b8c38
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x7b8c38)
      .search('(((.+)+)+)+$')
  })
_0x7b8c38()
;(function () {
  let _0x17cdd1
  try {
    const _0x26ec96 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x17cdd1 = _0x26ec96()
  } catch (_0x1796b4) {
    _0x17cdd1 = window
  }
  _0x17cdd1.setInterval(_0x53841c, 4000)
})()
const _0x1a6001 = (function () {
  let _0x594797 = true
  return function (_0x205e7a, _0x2cc647) {
    const _0x58c1db = _0x594797
      ? function () {
          if (_0x2cc647) {
            const _0x3c98c9 = _0x2cc647.apply(_0x205e7a, arguments)
            return (_0x2cc647 = null), _0x3c98c9
          }
        }
      : function () {}
    return (_0x594797 = false), _0x58c1db
  }
})()
;(function () {
  _0x1a6001(this, function () {
    const _0x456581 = new RegExp('function *\\( *\\)'),
      _0x1fd68a = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x327536 = _0x53841c('init')
    !_0x456581.test(_0x327536 + 'chain') || !_0x1fd68a.test(_0x327536 + 'input')
      ? _0x327536('0')
      : _0x53841c()
  })()
})()
const express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  { sendOtp, login } = require('../helper/login')
router.post('/login', async (_0x141645, _0x48ed7b) => {
  const { mobile: _0x10c630, otp: _0x19d3ed } = _0x141645.body
  console.log(_0x141645.body)
  if (_0x10c630 != '' && _0x19d3ed == '') {
    let _0x5a6f5d = await sendOtp(_0x10c630)
    if (_0x5a6f5d.success) {
      return _0x48ed7b.redirect('login.html?otpsent=' + _0x10c630)
    }
    console.log(_0x5a6f5d.message)
    _0x48ed7b.redirect('login.html?error=fail to send otp')
  } else {
    if (_0x10c630 != '' && _0x19d3ed != '') {
      let _0x580054 = await login(_0x10c630, _0x19d3ed)
      if (_0x580054.success) {
        return _0x48ed7b.redirect('login.html?success=true')
      }
      console.log(_0x580054.message)
      _0x48ed7b.redirect('login.html?error=' + _0x580054.message)
    } else {
      _0x48ed7b.redirect('login.html')
    }
  }
})
router.get('/login', (_0x442b4c, _0x3d08b6) => {
  _0x3d08b6.redirect('login.html')
})
router.get('/isLogin', (_0x25e4c7, _0x5d2be6) => {
  const _0x1e0418 = {
    success: true,
    result: true,
  }
  const _0x1d9666 = {
    success: true,
    result: false,
  }
  fs.existsSync('tokenData.jiotv')
    ? _0x5d2be6.status(200).send(_0x1e0418)
    : _0x5d2be6.status(200).send(_0x1d9666)
})
module.exports = router
function _0x53841c(_0x5c4247) {
  function _0x5e3159(_0x5140fd) {
    if (typeof _0x5140fd === 'string') {
      return function (_0x40d96d) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x5140fd / _0x5140fd).length !== 1 || _0x5140fd % 20 === 0) {
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
    _0x5e3159(++_0x5140fd)
  }
  try {
    if (_0x5c4247) {
      return _0x5e3159
    } else {
      _0x5e3159(0)
    }
  } catch (_0x37aa54) {}
}
