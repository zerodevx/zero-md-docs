# zero-md-docs

> Instantly publish markdown from Github docs folder

Elegantly leverage your Github `docs/` folder to host a Github Pages static site using just markdown
files. This gives a clean experience for your users: users can view nicely formatted docs from both
the Github UI, and from your public-facing static site, synchronised. Edits are published
immediately without a rebuild, and you avoid polluting your git history with tons of commits.

Features:

- [x] Install once, use forever
- [x] Single page app
- [x] Zero-config

Inspired by [docsify](https://docsify.js.org)!

## Usage

### Structure your docs

Setup `docs/` folder like so:

```
.
└── docs/
    ├── readme.md               # Homepage (always named `readme.md`)
    ├── index.html              # Copy from template
    ├── getting-started.md      # Another page
    └── configuration.md        # Yet another page
```

### Create `index.html` and define site links

Copy and paste the following `index.html` into `docs/` folder:

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Define site links -->
    <script>
      window.ZeroMdDocsConfig = {
        links: [
          ['Home', 'readme.md'],
          ['Getting Started', 'getting-started.md'],
          ['Configuration', 'configuration.md'],
          ['External Link Example', 'https://example.com']
        ]
      }
    </script>

    <!-- Import `zero-md` -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md@3"></script>

    <!-- Import `zero-md-docs` -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md-docs@1"></script>

    <!-- Import default stylesheet -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zero-md-docs@1/dist/default.css" />
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### Publish with Github Pages

From your Github repo page, go to `Setting > Pages > Source > Deploy from a branch`, then select
`/docs` folder.Save! Your site is now available at `https://<username>.github.io/<repo>/`.

## License

ISC
