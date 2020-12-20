import { RouteTypes, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';

const defaultPostRenderers = ['seoHrefOptimise', MinifyHtml];

setPluginConfig('md', { enableSyntaxHighlighting: true });

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
