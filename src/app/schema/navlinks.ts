import { z } from 'zod';

export const NavLink = z.object({
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

export type NavLink = z.output<typeof NavLink>;

export const NavLinks = z.array(NavLink);

export type NavLinks = z.output<typeof NavLinks>;
