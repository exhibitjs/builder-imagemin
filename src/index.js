import Imagemin from 'imagemin';

const defaults = {
  include: '**/*.{gif,jpg,jpeg,png,svg}',
};

export default function (options) {
  options = Object.assign({}, defaults, options);

  return function exhibitImagemin({matches, contents, util}) {
    if (!matches(options.include)) return contents;

    const imagemin = new Imagemin()
      .src(contents)
      .use(Imagemin.gifsicle({interlaced: options.interlaced}))
      .use(Imagemin.jpegtran({progressive: options.progressive}))
      .use(Imagemin.optipng({optimizationLevel: options.optimizationLevel}))
      .use(Imagemin.svgo({
        plugins: options.svgoPlugins || [],
        multipass: options.multipass,
      }));

    if (options.use) options.use.forEach(imagemin.use.bind(imagemin));

    return util.Promise.promisify(imagemin.run)
      .call(imagemin)
      .then(([file]) => file.contents);
  };
}
