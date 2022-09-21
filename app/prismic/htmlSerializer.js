export default {
    heading1: ({ children }) => `<h1 class="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extrabold
          pt-5
          text-[#271A17]
        ">${children}</h1>`,
    heading2: ({ children }) => `<h2 class="text-xl
          sm:text-2xl
          md:text-3xl
          font-semibold
          pt-5
          text-[#271A17]">${children}</h2>`,
    heading4: ({ children }) => `<h4 class="text-lg
          sm:text-xl
          md:text-2xl
          font-semi-bold
          pt-5
          text-[#271A17]">${children}</h4>`,
    paragraph: ({ children }) => `<p class="text-base text-gray-600 pt-5">${children}</p>`,
    preformatted: ({ node }) => `<pre></pre>`,
    strong: ({ children }) => `<strong>${children}</strong>`,
    em: ({ children }) => `<em>${children}</em>`,
    listItem: ({ children }) => `<li>${children}</li>`,
    oListItem: ({ children }) => `<li>${children}</li>`,
    list: ({ children }) => `<ul>${children}</ul>`,
    oList: ({ children }) => `<ol>${children}</ol>`,
    // image: ({ node }) => {
    //     const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null
    //     const linkTarget =
    //         node.linkTo && node.linkTo.target
    //             ? `target="${node.linkTo.target}" rel="noopener"`
    //             : ''
    //     const wrapperClassList = [node.label || '', 'block-img']
    //     const img = `<img src="${node.url}" alt="${node.alt ? node.alt : ''
    //         }" copyright="${node.copyright ? node.copyright : ''}" />`

    //     return `
    //     <p class="${wrapperClassList.join(' ')}">
    //       ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
    //     </p>
    //   `
    // },
    embed: ({ node }) => `
        <div data-oembed="${node.oembed.embed_url}"
          data-oembed-type="${node.oembed.type}"
          data-oembed-provider="${node.oembed.provider_name}"
          ${label(node)}>
          ${node.oembed.html}
        </div>
      `,
    // hyperlink: ({ node, children }) => {
    //     const target = node.data.target
    //         ? `target="${node.data.target}" rel="noopener"`
    //         : ''
    //     const url = linkResolver(node.data)
    //     return `<a ${target} href="${url}">${children}</a>`
    // },
    label: ({ node, children }) => {
        return `<span class="${node.data.label}">${children}</span>`
    },
    span: ({ text }) => (text ? text : ''),
}