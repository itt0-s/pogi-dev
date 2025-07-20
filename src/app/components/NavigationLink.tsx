import { NavLink } from '@/app/schema/navlinks';
import Link from 'next/link';

type NavigationLinkProps = NavLink & {
  newTab?: boolean;
};

export default function NavigationLink({
  title,
  url,
  newTab,
}: NavigationLinkProps) {
  if (!title || !url) {
    return null;
  }

  return newTab ? (
    <a
      className='flex items-center gap-2 hover:underline hover:underline-offset-4'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  ) : (
    <Link
      className='flex items-center gap-2 hover:underline hover:underline-offset-4'
      href={url}
    >
      {title}
    </Link>
  );
}
