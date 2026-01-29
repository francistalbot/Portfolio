// lib/technologies.ts
export type Technology = {
  name: string; // affichage
  icon?: (keyof typeof import("@/components/ui/icons").Icons );
  url?: string ;
};

export const getTechnology = (technology: string): Technology | null => {
  if (!(technology in techMapping)) return null;
  const tech = techMapping[technology as keyof typeof techMapping];
  return {
    name: tech.name,
    icon: 'icon' in tech ? tech.icon : undefined,
    url: 'url' in tech ? tech.url : undefined,
  };
}

export const techMapping = {
  html:        { name: "HTML5", icon: "Html" },
  css:         { name: "CSS3", icon: "CSS" },
  javascript:  { name: "JavaScript", icon: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  typescript:  { name: "TypeScript", icon: "TypeScript", url: "https://www.typescriptlang.org" },
  react:       { name: "React", icon: "React", url: "https://react.dev" },
  nextjs:      { name: "Next.js", icon: "NextJS", url: "https://nextjs.org" },
  reactnative: { name: "React Native", icon: "ReactNative", url: "https://reactnative.dev" },
  tailwindcss: { name: "Tailwind CSS", icon: "TailwindCSS", url: "https://tailwindcss.com" },
  figma:       { name: "Figma", icon: "Figma", url: "https://www.figma.com" },
  node:        { name: "Node.js", icon: "Node", url: "https://nodejs.org" },
  express:     { name: "Express.js", icon: "Express", url: "https://expressjs.com" },
  laravel:     { name: "Laravel", icon: "Laravel", url: "https://laravel.com" },
  php:         { name: "PHP", icon: "PHP", url: "https://www.php.net" },
  mongodb:     { name: "MongoDB", icon: "MongoDb", url: "https://www.mongodb.com" },
  firebase:    { name: "Firebase", icon: "Firebase", url: "https://firebase.google.com" },
  firebasefirestore: { name: "Firebase Firestore", url: "https://firebase.google.com/docs/firestore" },
  firebaseauth: { name: "Firebase Auth", url: "https://firebase.google.com/docs/auth" },
  mysql:       { name: "MySQL", icon: "MySQL", url: "https://www.mysql.com" },
  git:         { name: "Git", icon: "Git", url: "https://git-scm.com" },
  github:      { name: "GitHub", icon: "GitHub", url: "https://github.com" },
  docker:      { name: "Docker", icon: "Docker", url: "https://www.docker.com" },
  dockercompose: { name: "Docker Compose", url: "https://docs.docker.com/compose/" },
  securitytesting: { name: "Security Testing", url: "https://owasp.org/www-project-top-ten/" },
  owasp:       { name: "OWASP", url: "https://owasp.org" },
  htmlsanitisation: { name: "HTML Sanitisation", url: "https://owasp.org/www-community/attacks/xss/" },
  csp:        { name: "Content Security Policy", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" },
  vscode:      { name: "VS Code", icon: "VSCode", url: "https://code.visualstudio.com" },
  postman:     { name: "Postman", icon: "Postman", url: "https://www.postman.com" },
  vercel:      { name: "Vercel", icon: "Vercel", url: "https://vercel.com" },
  cypress:     { name: "Cypress", icon: "Cypress", url: "https://www.cypress.io" },
  jwt:         { name: "Jwt Authentication", icon: "Jwt", url: "https://jwt.io" },
  restfulapis: { name: "RESTful APIs", url: "https://restfulapi.net" },
  zod:         { name: "Zod", icon: "Zod", url: "https://zod.dev" },
  paypalapi:      { name: "PayPal API", icon: "Paypal", url: "https://developer.paypal.com/docs/api/overview/" },
  stripeapi:     { name: "Stripe API", icon: "Stripe", url: "https://stripe.com/docs/api" },
  blade:         { name: "Blade", url: "https://laravel.com/docs/10.x/blade", },
  bootstrap:     { name: "Bootstrap", icon: "Bootstrap", url: "https://getbootstrap.com" },
  expo:          { name: "Expo", icon: "Expo", url: "https://expo.dev" },
  exporouter:   { name: "Expo Router", url: "https://expo.github.io/router/docs" },
  expolocation: { name: "Expo Location", url: "https://docs.expo.dev/versions/latest/sdk/location/" },
  mapview:      { name: "MapView", url: "https://docs.expo.dev/versions/latest/sdk/map-view/" },
  zustand:      { name: "Zustand", url: "https://zustand-demo.pmnd.rs" },
  sqlite:       { name: "SQLite", url: "https://www.sqlite.org" },
  vitest:       { name: "Vitest", url: "https://vitest.dev" },
  cypresscomponenttesting: { name: "Cypress Component Testing", url: "https://docs.cypress.io/guides/component-testing/introduction" },
  githubactions: { name: "GitHub Actions", url: "https://github.com/features/actions" },
  socratesdev:   { name: "Sokrates.dev", url: "https://sokrates.dev" },
  lighthouse:    { name: "Lighthouse", url: "https://developers.google.com/web/tools/lighthouse" },
  cicd:         { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
  performanceoptimization: { name: "Performance Optimization", url: "https://web.dev/performance/" },
} as const;
