# zero-md-docs

> Instantly publish markdown from your Github docs folder

Elegantly leverage your Github `docs/` directory to host a Github Pages website. This project builds
and places `index.html` files into `docs/**` folders, turning them into a progressive web app that
dynamically loads and displays each `readme.md` file when accessed.

This gives a clean experience for your users: users can view nicely formatted `readme.md` markdown
from both Github UI and from your public-facing site; changes to markdown is reflected immediately
without a rebuild; and you avoid polluting your git history with tons of build commits.

Features:

- [x] Build once, run forever
- [x] Progressive web app
- [x] Zero-config (almost)

Todos:

- [ ] Definitely improve docs
- [ ] Document theming and contributing
- [ ] Improve developer tooling
- [ ] Perhaps make `tailwindcss` first-class
- [ ] Add more templates
- [ ] Add CLI `init`, `build` and `preview` commands

## Usage

### Install

```
$ npm i -g zero-md-docs
```

### Structure your docs

Write `readme.md` files into your `docs/` directory like so:

```
.
└── docs/
    ├── foo/
    │   └── readme.md
    ├── bar/
    │   └── readme.md
    ├── menu-item/
    │   └── readme.md
    └── readme.md
```

### Create a config file

Initialise a `zmdocs.config.cjs` file in project root with configs like so:

```js
module.exports = {
  head: '',               // HTML string added into start of `<head>`
  header: '',             // HTML string added to start of `<body>`
  footer: '',             // HTML string added to end of `<body>`
  links: [
    { title: 'Overview', href: '/repo/', dir: 'docs' } // Array of navigation links
    { title: 'Foo', href: '/repo/foo/', dir: 'docs/foo' }
    { title: 'Bar', href: '/repo/bar/', dir: 'docs/bar' }
    { title: 'Menu Item', href: '/repo/menu-item/', dir: 'docs/menu-item' }
  ],
  _template: 'default',   // Use the `default` template
  _title: ''              // Dummy placeholder (required)
}
```

### Build the docs

```
$ zero-md-docs
```

### Publish with Github Pages

From your Github repo page, go to Setting -> Pages -> Source -> Select `/docs`, then Save. That's
it! Your site is now available at `https://<username>.github.io/<repo>/`.

## Recommendations

### Generate sitemap

Install [`static-sitemap-cli`](https://github.com/zerodevx/static-sitemap-cli).

```
$ npm i -g static-sitemap-cli
```

Then generate the sitemaps with:

```
$ sscli -b https://<username>.github.io/<repo> -r docs --slash
```

### Add a favicon

Just copy your `favicon.ico` file into the `/docs` folder.

### Add analytics

Most modern analytics platforms support Single-Page Apps by automatically hooking into the `History`
API and listening for changes - in which case a `pageview` event is sent.

Add the HTML snippet into `<head>` like so:

`zmdocs.config.cjs`

```js
module.exports = {
  head: `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`,
  header: '',
  footer: '',
  ...
}
```

## Contributing

Development docs are a WIP but looking for theme contributions.

## License

ISC
