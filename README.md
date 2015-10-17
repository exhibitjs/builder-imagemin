# imagemin

> **Exhibit.js builder plugin**
>
> Compresses images with [imagemin](https://github.com/imagemin/imagemin).
> 
> ```sh
> $ npm install -D exhibit-builder-imagemin
> ```
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]

## Usage

```js
  .use('imagemin', options)
```

Affects JPEG, PNG, GIF and SVG files. (Other filetypes just pass straight through.)

Comes bundled with the following **lossless** optimizers:

- [gifsicle](https://github.com/kevva/imagemin-gifsicle) — *Compress GIF images*
- [jpegtran](https://github.com/kevva/imagemin-jpegtran) — *Compress JPEG images*
- [optipng](https://github.com/kevva/imagemin-optipng) — *Compress PNG images*
- [svgo](https://github.com/kevva/imagemin-svgo) — *Compress SVG images*


## Options

Options are automatically applied to the correct files.

##### optimizationLevel *(png)*

Type: `number`  
Default: `3`

Select an optimization level between `0` and `7`.

> The optimization level 0 enables a set of optimization operations that require minimal effort. There will be no changes to image attributes like bit depth or color type, and no recompression of existing IDAT datastreams. The optimization level 1 enables a single IDAT compression trial. The trial chosen is what. OptiPNG thinks it’s probably the most effective. The optimization levels 2 and higher enable multiple IDAT compression trials; the higher the level, the more trials.

Level and trials:

1. 1 trial
2. 8 trials
3. 16 trials
4. 24 trials
5. 48 trials
6. 120 trials
7. 240 trials

##### progressive *(jpg)*

Type: `boolean`  
Default: `false`

Lossless conversion to progressive.

##### interlaced *(gif)*

Type: `boolean`  
Default: `false`

Interlace gif for progressive rendering.

##### multipass *(svg)*

Type: `boolean`  
Default: `false`

Optimize svg multiple times until it's fully optimized.

##### svgoPlugins *(svg)*

Type: `array`  
Default: `[]`

Customize which SVGO plugins to use. [More here](https://github.com/sindresorhus/grunt-svgmin#available-optionsplugins).

##### use

Type: `array`  
Default: `null`

Additional [plugins](https://www.npmjs.com/browse/keyword/imageminplugin) to use with imagemin.

---

## License

MIT

<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-imagemin
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-imagemin.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-imagemin
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-imagemin.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-imagemin
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-imagemin.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-imagemin#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-imagemin.svg?style=flat-square

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-imagemin#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-imagemin.svg?style=flat-square
