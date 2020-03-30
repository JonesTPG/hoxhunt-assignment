export const imports = {
  'src/app/components/HeroCard/HeroCard.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-app-components-hero-card-hero-card" */ 'src/app/components/HeroCard/HeroCard.mdx'),
  'src/app/components/Typography/Typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-app-components-typography-typography" */ 'src/app/components/Typography/Typography.mdx'),
}
