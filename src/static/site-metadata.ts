interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://being23.github.io',
  logo: 'https://avatars.githubusercontent.com/u/6114607?v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://being23.github.io',
    },
    {
      name: 'About',
      url: 'https://being23.github.io/about',
    },
  ],
};

export default data;
