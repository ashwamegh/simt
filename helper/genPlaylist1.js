const _0x42c01e = (function () {
  let _0x3fd992 = true
  return function (_0x81e6ce, _0x1600b6) {
    const _0x2559ae = _0x3fd992
      ? function () {
          if (_0x1600b6) {
            const _0xadff9e = _0x1600b6.apply(_0x81e6ce, arguments)
            return (_0x1600b6 = null), _0xadff9e
          }
        }
      : function () {}
    return (_0x3fd992 = false), _0x2559ae
  }
})()
const _0x199dc8 = _0x42c01e(this, function () {
  return _0x199dc8
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x199dc8)
    .search('(((.+)+)+)+$')
})
_0x199dc8()
const _0x2c7d89 = (function () {
  let _0x4bba03 = true
  return function (_0x48daf7, _0x42e815) {
    const _0x15d981 = _0x4bba03
      ? function () {
          if (_0x42e815) {
            const _0x374b0e = _0x42e815.apply(_0x48daf7, arguments)
            return (_0x42e815 = null), _0x374b0e
          }
        }
      : function () {}
    return (_0x4bba03 = false), _0x15d981
  }
})()
;(function () {
  _0x2c7d89(this, function () {
    const _0xcf6516 = new RegExp('function *\\( *\\)'),
      _0xf61fa7 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x59de1a = _0x31a376('init')
    if (
      !_0xcf6516.test(_0x59de1a + 'chain') ||
      !_0xf61fa7.test(_0x59de1a + 'input')
    ) {
      _0x59de1a('0')
    } else {
      _0x31a376()
    }
  })()
})()
;(function () {
  const _0x277cd4 = function () {
    let _0x2f652a
    try {
      _0x2f652a = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x52c692) {
      _0x2f652a = window
    }
    return _0x2f652a
  }
  const _0x2ad9d5 = _0x277cd4()
  _0x2ad9d5.setInterval(_0x31a376, 4000)
})()
const fetch = require('node-fetch'),
  fs = require('fs')
async function genPlaylist(_0x186c4a) {
  try {
    const _0x31a3cb = {
      method: 'GET',
      headers: {},
    }
    _0x31a3cb.headers.Accept = '*/*'
    _0x31a3cb.headers['User-Agent'] =
      'plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7'
    var _0x501513 = _0x31a3cb
    let _0x22cb43 =
      '#EXTM3U  x-tvg-url="https://github.com/mitthu786/tvepg/raw/main/epg.xml.gz"\n'
    const _0x27929f = {}
    _0x27929f['8'] = 'Sports'
    _0x27929f['5'] = 'Entertainment'
    _0x27929f['6'] = 'Movies'
    _0x27929f['12'] = 'News'
    _0x27929f['13'] = 'Music'
    _0x27929f['7'] = 'Kids'
    _0x27929f['9'] = 'Lifestyle'
    _0x27929f['10'] = 'Infotainment'
    _0x27929f['15'] = 'Devotional'
    _0x27929f['16'] = 'Business'
    _0x27929f['17'] = 'Educational'
    _0x27929f['18'] = 'Shopping'
    _0x27929f['19'] = 'JioDarshan'
    const _0x18976e = _0x27929f
    let _0x56305d
    if (fs.existsSync('channels.jiotv')) {
      _0x56305d = JSON.parse(
        fs.readFileSync('channels.jiotv', {
          encoding: 'utf8',
          flag: 'r',
        })
      )
    } else {
      let _0x5ade2e = await fetch(
        'https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone',
        _0x501513
      )
      _0x56305d = JSON.parse(await _0x5ade2e.text())
      fs.writeFileSync('./channels.jiotv', JSON.stringify(_0x56305d))
    }
    const _0x39966d = 'http://' + _0x186c4a
    for (let _0x3caed4 of _0x56305d.result) {
      const _0x167372 = _0x3caed4.channel_name,
        _0x1c0570 =
          'https://jiotv.catchup.cdn.jio.com/dare_images/images/' +
          _0x3caed4.logoUrl,
        _0x157882 = _0x18976e[_0x3caed4.channelCategoryId],
        _0x3b324d = _0x3caed4.logoUrl.split('.')[0]
      _0x22cb43 +=
        '#EXTINF:1 tvg-logo="' +
        _0x1c0570 +
        '" group-title="' +
        _0x157882 +
        '",' +
        _0x167372 +
        ' \n'
      _0x22cb43 +=
        _0x39966d + '/getm3u8/' + _0x3caed4.channel_id + '/master.m3u8' + '\n'
    }
    return _0x22cb43
  } catch (_0x12c12a) {
    return console.error(_0x12c12a), ''
  }
}
module.exports = genPlaylist
function _0x31a376(_0x4373ea) {
  function _0x69ef01(_0x564447) {
    if (typeof _0x564447 === 'string') {
      return function (_0x2cf0cd) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x564447 / _0x564447).length !== 1 || _0x564447 % 20 === 0) {
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
    _0x69ef01(++_0x564447)
  }
  try {
    if (_0x4373ea) {
      return _0x69ef01
    } else {
      _0x69ef01(0)
    }
  } catch (_0x28ca23) {}
}
