![version](https://img.shields.io/npm/v/zero-md-docs)
![license](https://img.shields.io/npm/l/zero-md-docs)
![jsdelivr](https://data.jsdelivr.com/v1/package/npm/zero-md-docs/badge)

# zero-md-docs

> Instantly publish markdown from Github `docs/` folder

Elegantly leverage on your Github `docs/` folder as a public-facing documentation website. Zero
build, zero config, zero effort - just drop markdown in `docs/`, get a site for free.

Demo: https://zerodevx.github.io/zero-md/

## Usage

Structure your Github `docs/` folder like so:

```text
docs/
├── index.html          # copy from template below
├── readme.md           # nav menu (table of contents)
├── home.md             # site pages...
├── getting-started.md
├── config.md
├── submenu.md
└── any-other-page.md
```

### Step 1: Add `index.html`

<!-- prettier-ignore -->
```html
<!-- docs/index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Import from CDN -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md@3?register"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md-docs@2/dist/index.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zero-md-docs@2/dist/styles.css" />
  </head>
  <body>
    <!-- Declare `app` entry point -->
    <div id="app"></div>
  </body>
</html>
```

### Step 2: Add `readme.md`

This is your site navigation - a plain markdown list of links.

```markdown
<!-- docs/readme.md -->

- [Home](home.md)
- [Getting Started](getting-started.md)
- [Configuration](config.md)
  - [Sub Menu](submenu.md)
- [External Link](https://example.com/)
```

> [!NOTE]  
> The first link in the list is always treated as the home page.

### Step 3: Publish with Github Pages

In your repo, go to **Settings -> Pages**, set **Source** to `Deploy from a branch`, and set
**Branch** to `/docs`.

```text
░██████╗░█████╗░██╗░░░██╗███████╗██╗
██╔════╝██╔══██╗██║░░░██║██╔════╝██║
╚█████╗░███████║╚██╗░██╔╝█████╗░░██║
░╚═══██╗██╔══██║░╚████╔╝░██╔══╝░░╚═╝
██████╔╝██║░░██║░░╚██╔╝░░███████╗██╗
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝
```

...and voila - your site is now live at `https://<user>.github.io/<repo>/`.

## Development

### Setup

Clone the repository and install dependencies.

```text
git clone https://github.com/zerodevx/zero-md-docs.git
cd zero-md-docs
npm install
```

Run the dev server.

```text
npm run dev
```

Build locally into `dist/`.

```text
npm run build
```

### Under the hood

Built with [Svelte](https://svelte.dev/) and [zero-md](https://github.com/zerodevx/zero-md), with
[Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for styling.

### Theming

Project is looking for theme contributions. If you'd like to help, open an issue and let's discuss.

## Contributing

### Bugs and feature requests

Open a new issue or discussion - I'd be stoked to hear from you!

### Raise a PR

Standard Github
[contribution workflow](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
applies.

## License

ISC
