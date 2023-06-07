import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = buildBabelLoader(isDev);
  const cssLoader = buildCssLoader(isDev);
  const typescriptLoader = buildTypescriptLoader();
  const fileLoader = buildFileLoader();

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
