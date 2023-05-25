import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    // Сообщите webpack, в каких каталогах следует искать при разрешении модулей.
    modules: [options.paths.src, 'node_modules'],
    // Как должны называться индексные файлы
    mainFiles: ['index'],
    // Указание алиасов путей
    alias: {},
  };
}
