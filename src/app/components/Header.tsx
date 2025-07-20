import { parseHeader } from '@/app/utils/parseNav';
import NavigationLink from '@/app/components/NavigationLink';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const footerLinks = parseHeader();
  return (
    <header className='row-start-1 flex gap-[24px] flex-wrap items-center justify-start w-full'>
      <Link href='/' title='Home'>
        <Image
          src='/pogi-dev.svg'
          width={80}
          height={32}
          alt='pogi.dev Logo'
          className='mr-8'
        />
      </Link>
      {footerLinks.map(({ title, url }, index) => (
        <NavigationLink key={`${title}-${index}`} url={url} title={title} />
      ))}
    </header>
  );
}
