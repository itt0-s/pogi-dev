const contactEmailLink = process.env.CONTACT_EMAIL
  ? `mailto:${process.env.CONTACT_EMAIL}`
  : undefined;
const socialsGHLink = process.env.SOCIALS_GITHUB
  ? `https://github.com/${process.env.SOCIALS_GITHUB}`
  : undefined;
const socialsLILink = process.env.SOCIALS_LINKEDIN
  ? `https://linkedin.com/in/${process.env.SOCIALS_LINKEDIN}`
  : undefined;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-extrabold">Hello World!</h1>
        <p>
          Page under construction. Come back in a few seconds, maybe something
          has changed (or not).
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {contactEmailLink && (
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={contactEmailLink}
          >
            Contact
          </a>
        )}
        {socialsGHLink && (
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={socialsGHLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {socialsLILink && (
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={socialsLILink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
      </footer>
    </div>
  );
}
