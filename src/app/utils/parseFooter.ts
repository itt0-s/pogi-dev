import { FooterLink, FooterLinks } from '../schema/footer';

/**
 * parseFooter - parses footer links from env variables
 * @returns {FooterLinks} an array of title-url objects
 */
const parseFooter = (): FooterLinks => {
  const rawData = process.env.FOOTER_DATA || '[]';

  let footerLinks: FooterLinks = [];
  try {
    const parsedData = JSON.parse(rawData);
    if (!Array.isArray(parsedData)) {
      console.warn('Invalid FOOTER_DATA env value');
      return footerLinks;
    }
    footerLinks = parsedData.filter((d) => FooterLink.safeParse(d).success);
  } catch (e) {
    console.error(e);
  }

  return footerLinks;
};

export default parseFooter;
