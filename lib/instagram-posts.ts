export type PostCategory = "Office" | "Residential" | "Retail" | "Exterior";
export type PostType = "Video" | "Image" | "Carousel";

export type InstagramPost = {
  /** Instagram shortcode (also used as React key) */
  id: string;
  url: string;
  title: string;
  category: PostCategory;
  type: PostType;
  /** Human-readable date */
  date: string;
  /** ISO date for sorting */
  sortDate: string;
  location?: string;
  style?: string;
  /** Collaboration / design partner, if any */
  collab?: string;
  /** Short social-proof string */
  stats?: string;
};

/*
 * The 12 unique Haraworks Instagram posts.
 * (The source list of "16" repeats several URLs across categories — those
 * are tagged via `collab` instead of being embedded multiple times.)
 */
export const POSTS: InstagramPost[] = [
  {
    id: "CsrAPd5PbwO",
    url: "https://www.instagram.com/p/CsrAPd5PbwO/",
    title: "IT Office — Week 1 Progress",
    category: "Office",
    type: "Video",
    date: "May 25, 2023",
    sortDate: "2023-05-25",
    location: "Tamarind Square, Cyberjaya",
    stats: "287 views · 10 likes",
  },
  {
    id: "CtDnWaaAszn",
    url: "https://www.instagram.com/p/CtDnWaaAszn/",
    title: "IT Office — Week 3 Progress",
    category: "Office",
    type: "Video",
    date: "June 4, 2023",
    sortDate: "2023-06-04",
    location: "Tamarind Square, Cyberjaya",
    stats: "164 views · 3 likes",
  },
  {
    id: "CuY5zFkAT7k",
    url: "https://www.instagram.com/p/CuY5zFkAT7k/",
    title: "IT Office — Week 8 Progress",
    category: "Office",
    type: "Video",
    date: "July 7, 2023",
    sortDate: "2023-07-07",
    location: "Tamarind Square, Cyberjaya",
    stats: "247 views · 7 likes",
  },
  {
    id: "CzYritjRWde",
    url: "https://www.instagram.com/p/CzYritjRWde/",
    title: "Office Consultation & Quotation",
    category: "Office",
    type: "Video",
    date: "Nov 8, 2023",
    sortDate: "2023-11-08",
    stats: "116+ views · 7 likes",
  },
  {
    id: "C3I8ZSxSRuP",
    url: "https://www.instagram.com/p/C3I8ZSxSRuP/",
    title: "Awning Installation — 3TD Solutions",
    category: "Exterior",
    type: "Video",
    date: "Feb 9, 2024",
    sortDate: "2024-02-09",
    location: "Tamarind Square, Cyberjaya",
    stats: "212+ views · 7 likes",
  },
  {
    id: "C44elt0PF-5",
    url: "https://www.instagram.com/p/C44elt0PF-5/",
    title: "Fathiya Hijab Flagship Store",
    category: "Retail",
    type: "Video",
    date: "March 24, 2024",
    sortDate: "2024-03-24",
    location: "Tamarind Square, Cyberjaya",
    style: "Industrial-Vintage Fusion",
    collab: "Creativ5",
    stats: "1,144+ views · 33 likes",
  },
  {
    id: "C60mZN7Pzj3",
    url: "https://www.instagram.com/p/C60mZN7Pzj3/",
    title: "Fathiya Hijab Store — Gallery",
    category: "Retail",
    type: "Carousel",
    date: "May 11, 2024",
    sortDate: "2024-05-11",
    location: "Tamarind Square, Cyberjaya",
    style: "Industrial-Vintage Fusion",
  },
  {
    id: "DI8LC4oPXNm",
    url: "https://www.instagram.com/p/DI8LC4oPXNm/",
    title: "Korean Minimalist Kitchen",
    category: "Residential",
    type: "Image",
    date: "April 27, 2025",
    sortDate: "2025-04-27",
    location: "Brickfields, Kuala Lumpur",
    style: "Korean Minimalist",
  },
  {
    id: "DI8K6nYvfok",
    url: "https://www.instagram.com/p/DI8K6nYvfok/",
    title: "Korean Minimalist Kitchen — Detail",
    category: "Residential",
    type: "Image",
    date: "April 27, 2025",
    sortDate: "2025-04-27",
    location: "Brickfields, Kuala Lumpur",
    style: "Korean Minimalist",
    collab: "Creativ5",
  },
  {
    id: "DOKxIdkD3py",
    url: "https://www.instagram.com/p/DOKxIdkD3py/",
    title: "Contemporary Sahara Interior",
    category: "Residential",
    type: "Video",
    date: "Sept 4, 2025",
    sortDate: "2025-09-04",
    location: "Taman Bukit Maluri, Kepong",
    style: "Contemporary Sahara",
    collab: "Creativ5",
    stats: "169+ views · 9 likes",
  },
  {
    id: "DP_O0MsAUex",
    url: "https://www.instagram.com/p/DP_O0MsAUex/",
    title: "English Grace Modern",
    category: "Residential",
    type: "Carousel",
    date: "Oct 19, 2025",
    sortDate: "2025-10-19",
    location: "Vista Kirana, Malacca",
    style: "Classic-Modern Fusion",
    collab: "Nadim Design",
  },
  {
    id: "DRQxG1bgapM",
    url: "https://www.instagram.com/p/DRQxG1bgapM/",
    title: "Timeless Design — Vista Kirana",
    category: "Residential",
    type: "Carousel",
    date: "Nov 20, 2025",
    sortDate: "2025-11-20",
    location: "Vista Kirana, Malacca",
    style: "Classic-Modern Fusion",
    collab: "Nadim Design",
  },
];

/** Helpers */
export const byId = (id: string) => POSTS.find((p) => p.id === id);

export const IT_OFFICE_TIMELINE = ["CsrAPd5PbwO", "CtDnWaaAszn", "CuY5zFkAT7k"]
  .map(byId)
  .filter((p): p is InstagramPost => Boolean(p));

export const FILTER_CATEGORIES = [
  "All",
  "Office",
  "Residential",
  "Retail",
  "Exterior",
  "Collaborations",
] as const;

export type FilterCategory = (typeof FILTER_CATEGORIES)[number];
