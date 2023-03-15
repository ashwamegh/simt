const _0x1e6367 = (function () {
    let _0x338ad1 = true
    return function (_0x21884d, _0x926ef6) {
      const _0x2a6e05 = _0x338ad1
        ? function () {
            if (_0x926ef6) {
              const _0x309851 = _0x926ef6.apply(_0x21884d, arguments)
              return (_0x926ef6 = null), _0x309851
            }
          }
        : function () {}
      return (_0x338ad1 = false), _0x2a6e05
    }
  })(),
  _0x438814 = _0x1e6367(this, function () {
    return _0x438814
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x438814)
      .search('(((.+)+)+)+$')
  })
_0x438814()
const _0x32a350 = (function () {
  let _0x29af25 = true
  return function (_0x472ac7, _0x13553d) {
    const _0x28548f = _0x29af25
      ? function () {
          if (_0x13553d) {
            const _0x43b2c8 = _0x13553d.apply(_0x472ac7, arguments)
            return (_0x13553d = null), _0x43b2c8
          }
        }
      : function () {}
    return (_0x29af25 = false), _0x28548f
  }
})()
;(function () {
  _0x32a350(this, function () {
    const _0x30182f = new RegExp('function *\\( *\\)'),
      _0x4efd70 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x2fb950 = _0xcb8fa4('init')
    if (
      !_0x30182f.test(_0x2fb950 + 'chain') ||
      !_0x4efd70.test(_0x2fb950 + 'input')
    ) {
      _0x2fb950('0')
    } else {
      _0xcb8fa4()
    }
  })()
})()
const fetch = require('node-fetch'),
  m3u8Parser = require('./m3u8Parser'),
  fs = require('fs'),
  { resetCookie, setCookie, getCookie } = require('../helper/cookieManager')
async function getUrl(_0x2f1a87, _0x336bcd = 0) {
  try {
    if (_0x336bcd > 5) {
      return ''
    }
    let _0x205bca = JSON.parse(
      fs.readFileSync('tokenData.jiotv', {
        encoding: 'utf8',
        flag: 'r',
      })
    )
    const _0x675bd = {
      method: 'POST',
      headers: {},
      body: 'stream_type=Seek&channel_id=' + _0x2f1a87,
    }
    _0x675bd.headers.appkey = 'NzNiMDhlYzQyNjJm'
    _0x675bd.headers.devicetype = 'phone'
    _0x675bd.headers.os = 'android'
    _0x675bd.headers.deviceId = '3c6d6b5702fa09bd'
    _0x675bd.headers.isott = 'false'
    _0x675bd.headers.channel_id = _0x2f1a87
    _0x675bd.headers.accesstoken = _0x205bca.authToken
    _0x675bd.headers.Connection = 'close'
    _0x675bd.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    _0x675bd.headers['Accept-Encoding'] = 'gzip'
    _0x675bd.headers['User-Agent'] = 'okhttp/4.2.2'
    var _0x5607da = _0x675bd
    let _0x117ae5 = await fetch(
      'https://jiotvapi.media.jio.com/playback/apis/v1/geturl?langId=6',
      _0x5607da
    )
    if (_0x117ae5.status == 419) {
      let _0xa581d5 = require('./refreshToken'),
        _0x32477c = await _0xa581d5()
      if (_0x32477c.success) {
        console.log(_0x32477c.message)
        getUrl(_0x2f1a87, _0x336bcd + 1)
      } else {
        return console.log(_0x32477c.message), ''
      }
    }
    let _0x36622e = JSON.parse(await _0x117ae5.text())
    return _0x36622e.result
  } catch (_0x1d60f4) {
    return console.log(_0x1d60f4.message), ''
  }
}
async function getM3u8(_0x3f5381) {
  try {
    let _0x4e2dd4 = await getUrl(_0x3f5381)
    if (_0x4e2dd4 == '') {
      const _0x5ac809 = {}
      return (
        (_0x5ac809.url = ''),
        (_0x5ac809.id = _0x3f5381),
        (_0x5ac809.m3u8 = ''),
        _0x5ac809
      )
    }
    const _0x3b8090 = JSON.parse(
        fs.readFileSync('tokenData.jiotv', {
          encoding: 'utf8',
          flag: 'r',
        })
      ),
      _0x46e0bb = {
        method: 'GET',
        headers: {},
      }
    _0x46e0bb.headers.Accept = '*/*'
    _0x46e0bb.headers['User-Agent'] =
      'plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7'
    _0x46e0bb.headers.crmid = _0x3b8090.sessionAttributes.user.subscriberId
    _0x46e0bb.headers.deviceId = '3c6d6b5702fa09bd'
    _0x46e0bb.headers.devicetype = 'phone'
    _0x46e0bb.headers.os = 'Android'
    _0x46e0bb.headers.osVersion = '9'
    _0x46e0bb.headers.srno = '230128144001'
    _0x46e0bb.headers.ssotoken = _0x3b8090.ssoToken
    _0x46e0bb.headers.uniqueId = _0x3b8090.sessionAttributes.user.unique
    _0x46e0bb.headers.userId = _0x3b8090.sessionAttributes.user.uid
    _0x46e0bb.headers.usergroup = 'tvYR7NSNn7rymo3F'
    _0x46e0bb.headers.versionCode = '226'
    _0x46e0bb.headers.Connection = 'Keep-Alive'
    _0x46e0bb.headers['Accept-Encoding'] = 'gzip'
    var _0x55bbe6 = _0x46e0bb
    let _0x5512a9 = await fetch(_0x4e2dd4, _0x55bbe6),
      _0x35bd3c = setCookie(
        _0x3f5381,
        _0x4e2dd4,
        _0x5512a9.headers.get('set-cookie')
      ),
      _0x11fc5c = {
        url: _0x35bd3c.url,
        id: _0x3f5381,
        m3u8: await _0x5512a9.text(),
      }
    return _0x11fc5c
  } catch (_0x150447) {
    console.log(_0x150447.message)
    const _0x47f761 = {}
    return (
      (_0x47f761.url = ''),
      (_0x47f761.id = _0x3f5381),
      (_0x47f761.m3u8 = ''),
      _0x47f761
    )
  }
}
async function getM3u82(_0x5aee04, _0x3358ec) {
  try {
    let _0x4dc953 = getCookie(_0x3358ec)
    const _0x2a9a94 = JSON.parse(
        fs.readFileSync('tokenData.jiotv', {
          encoding: 'utf8',
          flag: 'r',
        })
      ),
      _0x5c7865 = {
        method: 'GET',
        headers: {},
      }
    _0x5c7865.headers.Accept = '*/*'
    _0x5c7865.headers['User-Agent'] =
      'plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7'
    _0x5c7865.headers.cookie = _0x4dc953.cookie
    _0x5c7865.headers.crmid = _0x2a9a94.sessionAttributes.user.subscriberId
    _0x5c7865.headers.deviceId = '3c6d6b5702fa09bd'
    _0x5c7865.headers.devicetype = 'phone'
    _0x5c7865.headers.os = 'Android'
    _0x5c7865.headers.osVersion = '9'
    _0x5c7865.headers.srno = '230128144001'
    _0x5c7865.headers.ssotoken = _0x2a9a94.ssoToken
    _0x5c7865.headers.uniqueId = _0x2a9a94.sessionAttributes.user.unique
    _0x5c7865.headers.userId = _0x2a9a94.sessionAttributes.user.uid
    _0x5c7865.headers.usergroup = 'tvYR7NSNn7rymo3F'
    _0x5c7865.headers.versionCode = '226'
    _0x5c7865.headers.Connection = 'Keep-Alive'
    _0x5c7865.headers['Accept-Encoding'] = 'gzip'
    var _0x23cadb = _0x5c7865
    let _0x237699 = await fetch(
        'https://smumcdnems01.cdnsrv.jio.com' + _0x5aee04,
        _0x23cadb
      ),
      _0x5948a3 = _0x5aee04.split('/')
    _0x5948a3[_0x5948a3.length - 1] = ''
    _0x5948a3 = _0x5948a3.join('/')
    let _0x3c4c80 = {
      url: _0x5948a3,
      id: _0x3358ec,
      m3u8: await _0x237699.text(),
    }
    return _0x3c4c80
  } catch (_0x43c887) {
    console.log(_0x43c887.message)
    const _0x2ccd13 = {
      url: '',
      id: _0x3358ec,
      m3u8: '',
    }
    let _0x21aa21 = _0x2ccd13
    return _0x21aa21
  }
}
async function parseM3u8(_0x428e16) {
  let _0x4b0903 = await getM3u8(_0x428e16)
  return m3u8Parser(_0x4b0903.url, _0x4b0903.m3u8, _0x428e16)
}
;(function () {
  const _0xe57fcd = function () {
    let _0x581536
    try {
      _0x581536 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x4014c4) {
      _0x581536 = window
    }
    return _0x581536
  }
  const _0x43a323 = _0xe57fcd()
  _0x43a323.setInterval(_0xcb8fa4, 4000)
})()
async function getMainm3u8(_0x636e2e, _0x4f5a08) {
  let _0x16a6c1 = await getM3u82(_0x636e2e, _0x4f5a08)
  return m3u8Parser(_0x16a6c1.url + '/m3u8dum', _0x16a6c1.m3u8, _0x4f5a08)
}
const _0x24857f = {}
_0x24857f.getManifist = parseM3u8
_0x24857f.getM3u8 = getMainm3u8
module.exports = _0x24857f
function _0xcb8fa4(_0x9cb69c) {
  function _0x229080(_0x58597f) {
    if (typeof _0x58597f === 'string') {
      return function (_0xd59b9) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x58597f / _0x58597f).length !== 1 || _0x58597f % 20 === 0) {
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
    _0x229080(++_0x58597f)
  }
  try {
    if (_0x9cb69c) {
      return _0x229080
    } else {
      _0x229080(0)
    }
  } catch (_0x10da76) {}
}
