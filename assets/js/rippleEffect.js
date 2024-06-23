// assets/js/rippleEffect.js
export function createRippleEffect(canvas) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width = canvas.clientWidth;
  const height = canvas.height = canvas.clientHeight;

  const half_width = width >> 1;
  const half_height = height >> 1;
  const size = width * (height + 2) * 2;

  const delay = 30;
  let oldind = width;
  let newind = width * (height + 3);

  const riprad = 3;
  const ripplemap = [];
  const last_map = [];
  let ripple;
  let texture;

  for (let i = 0; i < size; i++) {
    last_map[i] = ripplemap[i] = 0;
  }

  function disturb(dx, dy) {
    dx <<= 0;
    dy <<= 0;

    for (let j = dy - riprad; j < dy + riprad; j++) {
      for (let k = dx - riprad; k < dx + riprad; k++) {
        ripplemap[oldind + (j * width) + k] += 128;
      }
    }
  }

  function newframe() {
    let a, b, data, cur_pixel, new_pixel, old_data;

    const t = oldind; oldind = newind; newind = t;
    let i = 0;

    const _width = width;
    const _height = height;
    const _ripplemap = ripplemap;
    const _last_map = last_map;
    const _rd = ripple.data;
    const _td = texture.data;
    const _half_width = half_width;
    const _half_height = half_height;

    for (let y = 0; y < _height; y++) {
      for (let x = 0; x < _width; x++) {
        const _newind = newind + i, _mapind = oldind + i;
        data = (
          _ripplemap[_mapind - _width] + 
          _ripplemap[_mapind + _width] + 
          _ripplemap[_mapind - 1] + 
          _ripplemap[_mapind + 1]) >> 1;

        data -= _ripplemap[_newind];
        data -= data >> 5;

        _ripplemap[_newind] = data;

        data = 1024 - data;

        old_data = _last_map[i];
        _last_map[i] = data;

        if (old_data != data) {
          a = (((x - _half_width) * data / 1024) << 0) + _half_width;
          b = (((y - _half_height) * data / 1024) << 0) + _half_height;

          if (a >= _width) a = _width - 1;
          if (a < 0) a = 0;
          if (b >= _height) b = _height - 1;
          if (b < 0) b = 0;

          new_pixel = (a + (b * _width)) * 4;
          cur_pixel = i * 4;

          _rd[cur_pixel] = _td[new_pixel];
          _rd[cur_pixel + 1] = _td[new_pixel + 1];
          _rd[cur_pixel + 2] = _td[new_pixel + 2];
        }

        ++i;
      }
    }
  }

  function run() {
    newframe();
    ctx.putImageData(ripple, 0, 0);
  }

  canvas.onmousemove = function(evt) {
    disturb(evt.offsetX || evt.layerX, evt.offsetY || evt.layerY);
  };

  setInterval(run, delay);

  const rnd = Math.random;
  setInterval(() => {
    disturb(rnd() * width, rnd() * height);
  }, 700);

  // Initial canvas setup
  ctx.fillStyle = '#a2ddf8';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#07b';
  ctx.save();
  ctx.rotate(-0.785);
  for (let i = 0; i < height / 20; i++) {
    ctx.fillRect(-width, i * 40, width * 3, 20);
  }
  ctx.restore();

  texture = ctx.getImageData(0, 0, width, height);
  ripple = ctx.getImageData(0, 0, width, height);
}
