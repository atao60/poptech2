import { RouteTypes, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

import { env } from 'process';

const BASE_DIR = env.BASE_DIR || './dist/static/';
const BASE_HREF = env.BASE_HREF || '/';

const defaultPostRenderers = [baseHrefRewrite, 'seoHrefOptimise', MinifyHtml];

function getBaseHref () {
  const baseHrefParts = [BASE_HREF];
  if (!BASE_HREF.startsWith('/')) baseHrefParts.unshift('/');
  if (!BASE_HREF.endsWith('/')) baseHrefParts.push('/');
  const baseHref = baseHrefParts.join('');
  console.log("Scully config with base href: ", baseHref);
  return baseHref;
}

setPluginConfig('md', { enableSyntaxHighlighting: true });

setPluginConfig(baseHrefRewrite, { href: getBaseHref () });

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'popsuite-site',
  outDir: BASE_DIR,
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
