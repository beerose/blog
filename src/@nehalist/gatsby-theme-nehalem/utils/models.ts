export interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      topics: string[];
      menu: MenuItem[];
      footerMenu: MenuItem[];
      search: boolean;
      author: {
        name: string;
        description: string;
        social: SocialChannels;
      };
      twitterHandle: string;
    };
  };
}

export interface Tag {
  name: string;
  color: string;
  icon: any;
  featured: boolean;
}

export interface SocialChannels {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  twitch?: string;
}

export interface MenuItem {
  name: string;
  path: string;
}

export interface Post {
  timeToRead: number;
  frontmatter: {
    title: string;
    path: string;
    tags: string[];
    excerpt: string;
    created: string;
    createdPretty: string;
    updated: string;
    updatedPretty: string;
    featuredImage?: any;
  };
  html: string;
  headings: Array<{ depth: number }>;
}

export interface Page {
  frontmatter: {
    title: string;
    path: string;
    excerpt: string;
  };
  html: string;
}
