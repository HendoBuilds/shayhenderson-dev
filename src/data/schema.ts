import { identity } from './profile';

const person = {
  '@type': 'Person',
  name: identity.name,
  url: identity.site,
  image: `${identity.site}/og.png`,
  jobTitle: identity.role,
  email: `mailto:${identity.email}`,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Scotland',
    addressCountry: 'GB',
  },
  sameAs: [identity.github, identity.linkedin],
};

export const personSchema = {
  '@context': 'https://schema.org',
  ...person,
};

export const cvProfilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${identity.site}/cv/`,
  mainEntity: person,
};
