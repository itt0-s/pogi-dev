import { NavLink, NavLinks } from '@/app/schema/navlinks';

const parseNavEnv = (key: string): NavLinks => {
  const rawData = process.env[key] || '[]';

  let navLinks: NavLinks = [];
  try {
    const parsedData = JSON.parse(rawData);
    if (!Array.isArray(parsedData)) {
      console.warn('Invalid FOOTER_DATA env value');
      return navLinks;
    }
    navLinks = parsedData.filter((d) => NavLink.safeParse(d).success);
  } catch (e) {
    console.error(e);
  }

  return navLinks;
};

/**
 * parseFooter - parses footer links from env variables
 * @returns {NavLinks} an array of title-url objects
 */
export const parseFooter = (): NavLinks => {
  return parseNavEnv('FOOTER_DATA');
};

/**
 * parseHeader - parses header links from env variables
 * @returns {NavLinks} an array of title-url objects
 */
export const parseHeader = (): NavLinks => {
  return parseNavEnv('HEADER_DATA');
};
