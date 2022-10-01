const linkResolver = (doc) => {
    if (doc.type === 'blog') return `/blog/${doc.uid}`
    if (doc.type === 'homepage') return `/${doc.lang}`
    return '/'
}

export default linkResolver;