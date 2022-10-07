// Convert HTML to plain text
const htmlToPlainText = (html) => {
    return html.replace(/<[^>]+>/g, "")
        .replace(/\n/g, " ");
};

// Compute read time based on html content
const computeReadTime = (html) => {
    const wordsPerMinute = 200;
    const text = htmlToPlainText(html);
    const words = text.split(/\s/g).length;
    const minutes = words / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
}

const formatStrapiBlogs = (response) => {
    return response.data.map((doc) => {
        const thumbnail = doc.attributes.thumbnail.data.attributes;
        const categories = doc.attributes.categories.data;
        return {
            id: doc.id,
            uid: doc.attributes.slug,
            title: doc.attributes.title,
            preview: htmlToPlainText(doc.attributes.body.substring(0, 250)),
            tags: categories.map((category) => {
                return {
                    name: category.attributes.name,
                    slug: category.attributes.slug,
                };
            }),
            image: thumbnail.formats.medium.url,
            imageAlt: thumbnail.alternativeText,
            date: doc.attributes.releaseDate || doc.attributes.publishedAt,
            readTime: computeReadTime(doc.attributes.body),
        };
    });
};

const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
};

// Export functions

export {
    htmlToPlainText,
    computeReadTime,
    formatStrapiBlogs,
    formatDate
}