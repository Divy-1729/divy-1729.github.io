// Central post metadata for the site
// Exposes POSTS and sets window.postMeta so individual post pages can read title, description, and slug.

// Define posts here. Use the filename (without extension) as the slug.
export const POSTS = [
  {
    slug: "music_post",
    title: "My favorite music to listen to",
    description: "I've spent some time curating my music taste. I spend a lot of time listening to music, so here are some recommendations."
  }
];

// Convenience export for single-post pages
export const DEFAULT_POST = POSTS[0];

function getCurrentSlugFromPath() {
  if (typeof window === "undefined") return null;
  // Get the last segment of the path and strip any extension
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (!parts.length) return null;
  let last = parts[parts.length - 1];
  last = last.replace(/\.[^/.]+$/, ''); // remove extension like .html
  return last || null;
}

function buildPostMeta() {
  const slug = getCurrentSlugFromPath();
  const post = POSTS.find(p => p.slug === slug) || DEFAULT_POST;
  return {
    title: post.title,
    description: post.description,
    slug: post.slug,
    posts: POSTS
  };
}

// Attach metadata to window.postMeta so post pages and templates can read it
if (typeof window !== "undefined") {
  window.postMeta = buildPostMeta();
}

export default {
  POSTS,
  DEFAULT_POST,
  buildPostMeta
};
