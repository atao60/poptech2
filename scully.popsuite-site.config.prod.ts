import { RouteTypes, ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'popsuite-site',
    outDir: './dist/static',
    routes: {
      '/blog/:slug': {
        type: RouteTypes.contentFolder,
        slug: {
          folder: './blog'
        }
      }
    }
  };
