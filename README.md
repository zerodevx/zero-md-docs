# zero-md-docs

> Instantly publish markdown from Github docs folder

Inspired by [docsify](https://docsify.js.org).

## Usage

Your `docs/` folder should look like so:

```text
.
└── docs/
    ├── readme.md               # TOC (navigation menu)
    ├── index.html
    ├── home.md                 # Site pages
    ├── getting-started.md
    └── config.md
    ...
```

### Copy `index.html`

Copy and paste the following code into `docs/index.html`:

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Import module and stylesheet -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md-docs@1"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zero-md-docs@1/dist/default.css" />
  </head>
  <body>
    <!-- Declare `app` entry point -->
    <div id="app"></div>
  </body>
</html>
```

### Add `readme.md`

Create `docs/readme.md` containing a table of contents (or site links).

```text
<!-- readme.md -->
- [Home](home.md)
- [Getting Started](getting-started.md)
- [Configuration](config.md)
...
- [External Link](https://example.com/)
```

> [!NOTE]  
> The first link is always the home page.

### Publish with Github Pages

From your Github repo page, go to `Setting > Pages > Source > Deploy from a branch`, then select
`/docs` folder.

Save!

Your site is now available at `https://<username>.github.io/<repo>/`.

## License

ISC
