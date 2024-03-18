<script>
let src = ''
let links = []
let basePath = getBasePath()
let ready = false

function getBasePath() {
  const { origin, pathname } = location
  return (origin + pathname).split('/').slice(0, -1).join('/')
}

function setSrc() {
  const url = new URL(location.href)
  const md = url.searchParams.get('p') || 'readme.md'
  const entry = links.find((i) => i[1] === md)
  if (entry) {
    const [title, md, altTitle] = entry
    document.title = altTitle || title
    src = md
  } else {
    document.title = '404'
    src = ''
  }
}

function clicked(e) {
  const a = e.composedPath()[0].closest('a')
  if (a && a.href.startsWith(basePath) && a.href.endsWith('.md')) {
    e.preventDefault()
    const url = new URL(location.href)
    const md = a.href.split('/').pop()
    md === 'readme.md' ? url.searchParams.delete('p') : url.searchParams.set('p', md)
    const title = e.target.getAttribute('data-title') || e.target.text
    document.title = title
    history.pushState({ title }, '', url.toString())
    src = md
    scrollTo(0, 0)
  }
}

fetch('links.json')
  .then((r) => r.json())
  .then((json) => {
    links = json
    setSrc()
    ready = true
  })
</script>

<svelte:window on:popstate={setSrc} on:click={clicked} />

<div class="relative mx-auto max-w-screen-xl px-2 pb-12 pt-2">
  <ul
    class="mb-2 w-full rounded border border-gray-200 bg-white md:float-right lg:sticky lg:top-0 lg:w-[256px] dark:border-gray-800 dark:bg-black dark:text-white"
  >
    {#each links as [title, href, altTitle]}
      <li class="h-10">
        <a
          class="flex h-full w-full items-center justify-center px-4 text-sm hover:bg-blue-100 lg:justify-start dark:hover:bg-blue-800"
          class:font-bold={href.split('/').pop() === src}
          data-title={altTitle}
          {href}>{title}</a
        >
      </li>
    {/each}
  </ul>
  <div class="w-full lg:pr-[264px]">
    {#if ready}
      <zero-md class="w-full rounded border border-gray-200 dark:border-gray-800" {src}>
        <template data-append>
          <style>
          .markdown-body {
            box-sizing: border-box;
            padding: 45px;
          }
          @media (max-width: 767px) {
            .markdown-body {
              padding: 15px;
            }
          }
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
