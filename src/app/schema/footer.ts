import { z } from 'zod';

export const FooterLink = z.object({
  url: z.string().refine(
    (val) => {
      try {
        return val.startsWith('mailto:') || new URL(val);
      } catch {
        return false;
      }
    },
    { message: 'Invalid URL or mailto link' },
  ),
  title: z.string().min(1),
});

export type FooterLink = z.output<typeof FooterLink>;

export const FooterLinks = z.array(FooterLink);

export type FooterLinks = z.output<typeof FooterLinks>;
