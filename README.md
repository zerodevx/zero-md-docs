# zero-md-docs

> Instantly publish markdown from Github docs folder

Elegantly leverage on your Github docs folder as a public-facing documentation website. Super easy
to use, barely an inconvenience. Inspired by [`docsify`](https://docsify.js.org).

## Usage

Structure your `docs/` folder like so:

```text
.
└── docs/
    ├── readme.md               # TOC (navigation menu)
    ├── index.html              # Copy from template
    ├── home.md                 # ...Site pages
    ├── getting-started.md
    └── config.md
    ...
    └── any-other-page.md
```

### Copy `index.html`

Copy and paste the following code into `docs/index.html`:

<!-- prettier-ignore -->
```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Import modules and stylesheet -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md@3?register"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md-docs@1"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zero-md-docs@1/dist/default.min.css" />
  </head>
  <body>
    <!-- Declare `app` entry point -->
    <div id="app"></div>
  </body>
</html>
```

### Add `readme.md`

Create `docs/readme.md` containing a table of contents (or site links). This acts as the site
navigation menu.

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

From your Github repo page, go to `Settings -> Pages`, set `Source` to `Deploy from a branch`, and
set `Branch` to `/docs`...

```
░██████╗░█████╗░██╗░░░██╗███████╗██╗
██╔════╝██╔══██╗██║░░░██║██╔════╝██║
╚█████╗░███████║╚██╗░██╔╝█████╗░░██║
░╚═══██╗██╔══██║░╚████╔╝░██╔══╝░░╚═╝
██████╔╝██║░░██║░░╚██╔╝░░███████╗██╗
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝
```

...and voila - your site is now available at `https://<user>.github.io/<repo>/`.

## License

ISC
