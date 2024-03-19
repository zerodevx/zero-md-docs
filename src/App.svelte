<script>
ZeroMdDocsConfig = ZeroMdDocsConfig || { links: [['Home', 'readme.md']] }
const { links } = ZeroMdDocsConfig
const baseUrl = location.origin + location.pathname

function setSrc() {
  const url = new URL(location.href)
  const file = url.searchParams.get('p') || 'readme.md'
  const entry = links.find((i) => i[1] === file)
  if (entry) {
    const [tit, file, alt] = entry
    title = alt || tit || 'Home'
    src = file
  } else {
    title = '404'
    src = ''
  }
}

function clicked(e) {
  const a = e.composedPath()[0].closest('a')
  if (a && a.href.startsWith(baseUrl) && a.href.endsWith('.md')) {
    e.preventDefault()
    const url = new URL(location.href)
    const file = a.href.split('/').pop()
    file === 'readme.md' ? url.searchParams.delete('p') : url.searchParams.set('p', file)
    title = e.target.getAttribute('data-title') || e.target.text
    history.pushState({ title }, '', url.toString())
    scrollTo(0, 0)
    src = file
  }
}

let title = ''
let src = ''
setSrc()
</script>

<svelte:window on:popstate={setSrc} on:click={clicked} />

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="zmdocs-container">
  <ul class="zmdocs-menu">
    {#each links as [title, href, alt]}
      <li>
        <a
          class="zmdocs-link"
          class:font-bold={href.split('/').pop() === src}
          data-title={alt}
          {href}>{title}</a
        >
      </li>
    {/each}
  </ul>
  <div class="zmdocs-content">
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
  </div>
</div>
