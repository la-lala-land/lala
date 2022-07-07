export const capitalize = (s = "s", titlecase = false): string =>
  s.charAt(0).toUpperCase() +
  `${titlecase ? s.slice(1).toLowerCase() : s.slice(1)}`;
