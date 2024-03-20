<script>
const baseUrl = location.origin + location.pathname
const paramName = 'a'
let links = []
let title = ''
let src = ''
let ready = false

function load() {
  const file = new URLSearchParams(location.search).get(paramName) || links[0][1]
  ;[title, src] = links.find((i) => i[1] === file) || ['404', '']
  const active = 'font-bold'
  for (const link of links) {
    link[1] === file ? link[2].classList.add(active) : link[2].classList.remove(active)
  }
}

function clicked(e) {
  const a = e.composedPath()[0].closest('a')
  if (a && a.href.startsWith(baseUrl) && a.href.endsWith('.md')) {
    e.preventDefault()
    const url = new URL(location.href)
    const file = a.href.split(baseUrl)[1]
    file === links[0][1]
      ? url.searchParams.delete(paramName)
      : url.searchParams.set(paramName, file)
    history.pushState({}, '', url.toString())
    load()
    scrollTo(0, 0)
  }
}

async function init(e) {
  links = Array.from(e.target.querySelectorAll('a')).map((a) => [
    a.text,
    a.href.split(baseUrl)[1],
    a
  ])
  load()
  ready = true
}
</script>

<svelte:window on:popstate={load} on:click={clicked} />

<svelte:head>
  <title>{title}</title>
  <script type="module" src="https://cdn.jsdelivr.net/npm/zero-md@next"></script>
</svelte:head>

<div class="zmdocs-container">
  <div class="zmdocs-menu">
    <zero-md src="readme.md" no-shadow on:zero-md-rendered={init}>
      <template />
    </zero-md>
  </div>
  <div class="zmdocs-content">
    {#if ready}
      <zero-md {src}>
        <template data-append>
          <!-- prettier-ignore -->
          <style>
.markdown-body{box-sizing:border-box;padding:45px;}@media(max-width:767px){.markdown-body{padding:15px;}}
          </style>
        </template>
        <!-- prettier-ignore -->
        <script type="text/markdown">
Page not found!
        </script>
      </zero-md>
    {/if}
  </div>
</div>
