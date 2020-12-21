import { RouteTypes, setPluginConfig, ScullyConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = [baseHrefRewrite];

setPluginConfig(baseHrefRewrite, { href: 'https://atao60.github.io/poptech2/' });

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'popsuite-site',
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog'
      }
    }
  }
};
