// GROQ queries for Sanity CMS

export const INSIGHTS_QUERY = `
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    tag,
    teaser,
    readTime,
    publishedAt,
    featured,
    contentType,
    "pdfUrl": pdf.asset->url,
    externalUrl
  }
`;

export const INSIGHTS_BY_TAG_QUERY = (tag: string) => `
  *[_type == "insight" && tag == "${tag}"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    tag,
    teaser,
    readTime,
    publishedAt,
    featured,
    contentType,
    "pdfUrl": pdf.asset->url,
    externalUrl
  }
`;

export const EVENTS_QUERY = `
  *[_type == "event"] | order(sortKey asc) {
    _id,
    title,
    type,
    location,
    date,
    sortKey,
    description,
    link
  }
`;
