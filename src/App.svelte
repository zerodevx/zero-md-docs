<script>
const searchKey = 'a'
let links = []
let title = ''
let src = ''
let ready = false

function load() {
  const browser = new URL(location.href)
  const file = browser.searchParams.get(searchKey) || links[0].src
  ;({ title = '404', src = '' } = links.find((i) => i.src === file) || {})
  const active = 'font-bold'
  for (const link of links) {
    link.src === file ? link.a.classList.add(active) : link.a.classList.remove(active)
  }
}

function clicked(e) {
  const a = e.composedPath()[0].closest('a')
  if (a) {
    const target = new URL(a.href)
    if (target.pathname.startsWith(location.pathname) && target.pathname.endsWith('.md')) {
      e.preventDefault()
      const browser = new URL(location.href)
      const file = target.pathname.split(browser.pathname).pop()
      file === links[0].src
        ? browser.searchParams.delete(searchKey)
        : browser.searchParams.set(searchKey, file)
      browser.hash = target.hash
      history.pushState({}, '', browser.toString())
      load()
      scrollTo(0, 0)
    }
  }
}

function init(e) {
  links = Array.from(e.target.querySelectorAll('a')).map((a) => ({
    title: a.text,
    src: new URL(a.href).pathname.split(location.pathname).pop(),
    a
  }))
  load()
  ready = true
}
</script>

<svelte:window on:popstate={load} on:click={clicked} />

<svelte:head>
  <title>{title}</title>
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
