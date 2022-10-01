import linkResolver from './linkResolver'
import escape from 'escape-html'

export default {
  heading1: ({ children }) => `<h1 class="
          text-4xl
          md:text-5xl
          font-extrabold
          pt-5
          text-[#271A17]
        ">${children}</h1>`,
  heading2: ({ children }) => `<h2 class="
          text-3xl
          md:text-4xl
          font-semibold
          pt-12
          pb-2
          text-[#271A17]">${children}</h2>`,
  heading4: ({ children }) => `<h4 class="
          text-2xl
          md:text-3xl
          font-semibold
          pt-6
          text-[#271A17]">${children}</h4>`,
  paragraph: ({ children }) => `<p class="text-lg leading-relaxed font-light text-gray-600 pt-4">${children}</p>`,
  preformatted: ({ node }) => `<div class="pt-5"><pre><code>${escape(node.text)}</code></pre></div>`,
  strong: ({ children }) => `<strong>${children}</strong>`,
  em: ({ children }) => `<em>${children}</em>`,
  listItem: ({ children }) => `<li class="text-lg leading-relaxed font-light text-gray-600">${children}</li>`,
  oListItem: ({ children }) => `<li class="text-lg leading-relaxed font-light text-gray-600">${children}</li>`,
  list: ({ children }) => `<ul class="list-disc list-inside" role="list">${children}</ul>`,
  oList: ({ children }) => `<ol class="list-decimal list-inside" role="list">${children}</ol>`,
  image: ({ node }) => {
    const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
    const linkTarget =
      node.linkTo && node.linkTo.target
        ? `target="${node.linkTo.target}" rel="noopener"`
        : ''
    const wrapperClassList = [node.label || '', 'block-img', 'py-6']
    const img = `<img class="rounded-md drop-shadow-md" src="${node.url}" alt="${node.alt ? node.alt : ''
      }" copyright="${node.copyright ? node.copyright : ''}" />`

    return `
      <p class="${wrapperClassList.join(' ')}">
        ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
      </p>
    `
  },
  embed: ({ node }) => `
        <div class="w-full rounded-md aspect-video py-4" data-oembed="${node.oembed.embed_url}"
          data-oembed-type="${node.oembed.type}"
          data-oembed-provider="${node.oembed.provider_name}"
          >
          ${node.oembed.html.replace('width="200"', '').replace('height="113"', 'class="rounded-md w-full h-full"')}
        </div>
      `,
  hyperlink: ({ node, children }) => {
    const target = node.data.target
      ? `target="${node.data.target}" rel="noopener"`
      : ''
    const url = linkResolver(node.data)
    return `<a ${target} class="text-indigo-600 hover:underline" href="${url}">${children}</a>`
  },
  label: ({ node, children }) => {
    return `<span class="${node.data.label}">${children}</span>`
  },
  span: ({ text }) => (text ? text : ''),
}