# SuperHeader

## Getting Started

### Dependencies
Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	- `gulp` manually compiles files.
	- `gulp watch` automatically compiles files and applies changes using [LiveReload](http://livereload.com/).



## File Structure

Add your files to the appropriate `src` subdirectories. Gulp will process and and compile them into `dist`.

- Content in subdirectories under the `js` folder will be concatenated. For example, files in `js/detects` will compile into `detects.js`. Files directly under `js` will compile individually.
- Files in the `img` directory will be copied as-is into the `dist/img` directory.
- SVG files placed in the `src/svg` directory will be optimized and compiled into the `dist/svg` directory. SVG files placed in a subdirectory of `src/svg` will be compiled into a single SVG sprite named after the subdirectory.
- Files placed in the `static` directory will be copied as-in into the `dist` directory.

```
gulp-boilerplate/
|—— dist/
|   |—— css/
|   |   |—— myplugin.css
|   |   |—— myplugin.min.css
|   |—— img/
|   |   |—— # image files
|   |—— js/
|   |   |—— classList.js
|   |   |—— classList.min.js
|   |   |—— myplugin.js
|   |   |—— myplugin.min.js
|   |—— svg/
|   |   |—— icons.svg
|   |—— # static assets
|—— docs/
|   |—— assets/
|   |—— dist/
|   |—— index.html
|   |—— # other docs
|—— src/
|   |—— docs/
|   |   |—— _templates/
|   |   |   |—— _header.html
|   |   |   |—— _footer.html
|   |   |—— assets/
|   |   |   |—— # doc-specific assets
|   |   |—— index.html
|   |   |—— # other docs
|   |—— img/
|   |   |—— # image files
|   |—— js/
|   |   |—— classList.js
|   |   |—— myplugin.js
|   |—— sass/
|   |   |—— _config.scss
|   |   |—— _mixins.scss
|   |   |—— components/
|   |   |   |—— myplugin.scss
|   |—— img/
|   |   |—— # static files and folders
|   |—— static/
|   |   |—— # static files
|   |—— svg/
|   |   |—— # svgs
|—— .travis.yml
|—— gulfile.js
|—— package.json
|—— README.md
```
