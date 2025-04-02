type FooterLinkProps = {
  title: string;
  url: string;
};

export default function FooterLink({ title, url }: FooterLinkProps) {
  if (!title || !url) {
    return null;
  }

  return (
    <a
      className='flex items-center gap-2 hover:underline hover:underline-offset-4'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a>
  );
}
