import parseFooter from '../utils/parseFooter';
import FooterLink from './FooterLink';

export default function Footer() {
  const footerLinks = parseFooter();
  return (
    <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
      {footerLinks.map(({ title, url }, index) => (
        <FooterLink key={`${title}-${index}`} url={url} title={title} />
      ))}
    </footer>
  );
}
