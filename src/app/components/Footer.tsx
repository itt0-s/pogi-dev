import { parseFooter } from '@/app/utils/parseNav';
import NavigationLink from '@/app/components/NavigationLink';

export default function Footer() {
  const footerLinks = parseFooter();
  return (
    <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
      {footerLinks.map(({ title, url }, index) => (
        <NavigationLink
          key={`${title}-${index}`}
          url={url}
          title={title}
          newTab
        />
      ))}
    </footer>
  );
}
