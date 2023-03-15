const _0x424178 = (function () {
    let _0x54e5de = true
    return function (_0x5702a6, _0x274be6) {
      const _0x475eb4 = _0x54e5de
        ? function () {
            if (_0x274be6) {
              const _0x5ac809 = _0x274be6.apply(_0x5702a6, arguments)
              return (_0x274be6 = null), _0x5ac809
            }
          }
        : function () {}
      return (_0x54e5de = false), _0x475eb4
    }
  })(),
  _0x43d9e5 = _0x424178(this, function () {
    return _0x43d9e5
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x43d9e5)
      .search('(((.+)+)+)+$')
  })
_0x43d9e5()
const _0x212adc = (function () {
  let _0x21d05a = true
  return function (_0x42074a, _0x2fc092) {
    const _0x10682c = _0x21d05a
      ? function () {
          if (_0x2fc092) {
            const _0x35436e = _0x2fc092.apply(_0x42074a, arguments)
            return (_0x2fc092 = null), _0x35436e
          }
        }
      : function () {}
    return (_0x21d05a = false), _0x10682c
  }
})()
;(function () {
  _0x212adc(this, function () {
    const _0x1a8c40 = new RegExp('function *\\( *\\)'),
      _0xef9b10 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x42ae77 = _0x405996('init')
    if (
      !_0x1a8c40.test(_0x42ae77 + 'chain') ||
      !_0xef9b10.test(_0x42ae77 + 'input')
    ) {
      _0x42ae77('0')
    } else {
      _0x405996()
    }
  })()
})()
const m3u8 = require('m3u8-parser')
function parseM3u8(_0x28b3b8, _0x51fd9e, _0x3416f4) {
  let _0x5d9eb9 = _0x28b3b8.split('?')
  _0x5d9eb9 = _0x5d9eb9[0]
  _0x5d9eb9 = _0x28b3b8.split('/')
  _0x5d9eb9.pop()
  _0x5d9eb9 = _0x5d9eb9.join('/')
  _0x5d9eb9 = _0x5d9eb9.replace(
    'https://jiotvmblive.cdn.jio.com',
    '/jiotvmblive.cdn.jio.com'
  )
  const _0x5bf519 = new m3u8.Parser()
  _0x5bf519.push(_0x51fd9e)
  _0x5bf519.end()
  let _0x3ef53b = _0x51fd9e
  if (_0x5bf519.manifest.mediaGroups !== undefined) {
    let _0xbc0c29 = _0x5bf519.manifest.mediaGroups.AUDIO
    for (let _0x251db0 in _0xbc0c29) {
      for (let _0x10f423 in _0xbc0c29[_0x251db0]) {
        _0x3ef53b = _0x3ef53b.replace(
          _0xbc0c29[_0x251db0][_0x10f423].uri,
          '/getm3u8?id=' +
            _0x3416f4 +
            '&m3u8=' +
            _0x5d9eb9 +
            '/' +
            _0xbc0c29[_0x251db0][_0x10f423].uri
        )
      }
    }
    _0x5bf519.manifest.playlists.forEach((_0x1d131a) => {
      let _0x593195 = _0x1d131a.uri.replace('.m3u8', '')
      _0x593195 += '-iframes.m3u8'
      _0x3ef53b = _0x3ef53b.replace(
        _0x1d131a.uri,
        '/getm3u8?id=' + _0x3416f4 + '&m3u8=' + _0x5d9eb9 + '/' + _0x1d131a.uri
      )
      _0x3ef53b = _0x3ef53b.replace(
        _0x593195,
        '/getm3u8?id=' + _0x3416f4 + '&m3u8=' + _0x5d9eb9 + '/' + _0x593195
      )
    })
  }
  return (
    _0x5bf519.manifest.segments.forEach((_0x5156cf) => {
      _0x3ef53b = _0x3ef53b.replace(
        _0x5156cf.uri,
        '/getts?id=' + _0x3416f4 + '&ts=' + _0x5d9eb9 + _0x5156cf.uri
      )
      const _0x3bd336 = _0x5156cf.key.uri.replace(
        'https://tv.media.jio.com',
        ''
      )
      _0x3ef53b = _0x3ef53b.replace(
        _0x5156cf.key.uri,
        '/getkey?id=' + _0x3416f4 + '&key=' + _0x3bd336
      )
    }),
    _0x3ef53b
  )
}
;(function () {
  let _0x3648d7
  try {
    const _0x51ead8 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x3648d7 = _0x51ead8()
  } catch (_0x24c846) {
    _0x3648d7 = window
  }
  _0x3648d7.setInterval(_0x405996, 4000)
})()
module.exports = parseM3u8
function _0x405996(_0x5324d8) {
  function _0x4781fb(_0x4a8914) {
    if (typeof _0x4a8914 === 'string') {
      return function (_0x20fcd4) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x4a8914 / _0x4a8914).length !== 1 || _0x4a8914 % 20 === 0) {
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
    _0x4781fb(++_0x4a8914)
  }
  try {
    if (_0x5324d8) {
      return _0x4781fb
    } else {
      _0x4781fb(0)
    }
  } catch (_0x4bfc01) {}
}
